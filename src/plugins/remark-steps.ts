import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

export type Step = {
  type: string;
  name: string;
  attributes: {
    key: string;
    header: string;
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
        console.log(steps);
        // We need to construct the necessary UI components for the tabs
        const wrapper = {
          type: "element",
          data: {
            hName: "div",
            hProperties: {
              className: "steps",
            },
          },
          children: [
            {
              type: "element",
              data: {
                hName: "div",
                hProperties: {
                  className: "steps-content",
                },
              },
              children: [
                ...steps.map((step: Step, i: number) => ({
                  type: "element",
                  data: {
                    hName: "div",
                    hProperties: {
                      className: "step",
                      "data-index": i,
                    },
                  },
                  children: [
                    {
                      type: "paragraph",
                      data: {
                        hProperties: {
                          className: "step-number",
                        },
                      },
                      children: [
                        {
                          type: "text",
                          value: i + 1,
                        },
                      ],
                    },
                    {
                      type: "element",
                      data: {
                        hProperties: {
                          className: "divider",
                        },
                      },
                    },
                    {
                      data: {
                        hProperties: {
                          className: "step-data",
                        },
                      },
                      ...step,
                    },
                  ],
                })),
              ],
            },
          ],
        };
        parent.children[index] = wrapper;
      }
    });
  };
};

export default remarkSteps;
