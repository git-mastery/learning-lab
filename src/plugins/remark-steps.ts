import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { mdEditElement, mdElement, mdParagraph } from "../utils/md";

export type Step = {
  type: string;
  name: string;
  attributes: {
    title?: string | null;
  };
};

const remarkSteps: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any, index: number, parent: any) => {
      if (node.type === "containerDirective" && node.name === "steps") {
        const steps = node.children.filter(
          (child: { type: string; name: string }) =>
            child.type === "containerDirective" && child.name === "step",
        );
        const wrapper = mdElement(
          "div",
          {
            className: "steps",
          },
          mdElement(
            "div",
            {
              className: "steps-content",
            },
            ...steps.map((step: Step, i: number) =>
              mdElement(
                "div",
                {
                  className: "step",
                  "data-index": i,
                },
                mdParagraph(i + 1, {
                  className: "step-number",
                }),
                mdElement("div", {
                  className: "divider",
                }),
                mdElement(
                  "div",
                  {
                    className: "step-data",
                  },
                  step.attributes.title == null
                    ? {}
                    : mdParagraph(step.attributes.title, {
                        className: "step-title",
                      }),
                  mdEditElement(step, {
                    className: "step-data-content",
                  }),
                ),
              ),
            ),
          ),
        );
        parent.children[index] = wrapper;
      }
    });
  };
};

export default remarkSteps;
