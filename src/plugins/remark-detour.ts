import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { mdElement, mdLink, mdParagraph, mdText } from "../utils/md";

const remarkDetour: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any, index: number, parent: any) => {
      if (node.type === "containerDirective" && node.name === "detour") {
        const attributes = node.attributes;
        const hasWip = attributes["class"]?.includes("wip") ?? false;
        const link = attributes["link"] ?? null;
        const title = attributes["title"] ?? null;
        const wrapper = mdElement(
          "div",
          {
            className: "detour",
          },
          mdElement(
            "div",
            {
              className: "detour-bar",
            },
            mdParagraph(`🛣️ Detour${title != null ? `: ${title}` : ""}`, {
              className: "detour-title",
            }),
          ),
          mdElement(
            "div",
            {
              className: "detour-content",
            },
            ...node.children,
            hasWip
              ? mdParagraph(
                  "🚧 This detour is still a work in progress! Come back later! 🚧",
                  {
                    className: "detour-wip",
                  },
                )
              : link != null
                ? mdLink("Go to detour →", link, {
                    className: "detour-link",
                  })
                : mdParagraph("Oh dear, something happened that shouldn't 🤯", {
                    className: "detour-wip",
                  }),
          ),
        );
        parent.children[index] = wrapper;
      }
    });
  };
};

export default remarkDetour;
