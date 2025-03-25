import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { mdElement, mdParagraph } from "../utils/md";

const remarkHandsOn: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any, index: number, parent: any) => {
      if (node.type === "containerDirective" && node.name === "handsOn") {
        const wrapper = mdElement(
          "div",
          {
            className: "hands-on",
          },
          mdElement(
            "div",
            {
              className: "hands-on-bar",
            },
            mdParagraph(`🧤 Hands-on`, {
              className: "hands-on-title",
            }),
          ),
          mdElement(
            "div",
            {
              className: "hands-on-content",
            },
            ...node.children,
          ),
        );
        parent.children[index] = wrapper;
      }
    });
  };
};

export default remarkHandsOn;
