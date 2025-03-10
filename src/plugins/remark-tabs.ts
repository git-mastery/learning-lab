import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

export type Tab = {
  type: string;
  name: string;
  attributes: {
    key: string;
    header: string;
  };
};

const remarkTabs: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any, index: number, parent: any) => {
      if (node.type === "containerDirective" && node.name === "tabs") {
        const tabs = node.children.filter(
          (child: { type: string; name: string }) =>
            child.type === "containerDirective" && child.name === "tab",
        );
        // We need to construct the necessary UI components for the tabs
        const wrapper = {
          type: "element",
          data: {
            hName: "div",
            hProperties: {
              className: "tabs",
              "data-tabs-key": node.attributes?.["key"] ?? "",
              "data-tabs": JSON.stringify(
                tabs.map((tab: Tab) => tab.attributes.key),
              ),
            },
          },
          children: [
            {
              type: "element",
              data: {
                hName: "div",
                hProperties: {
                  className: "selector",
                },
              },
              children: tabs.map((tab: Tab) => ({
                type: "element",
                data: {
                  hName: "div",
                  hProperties: {
                    "data-tab-selector-key": tab.attributes.key,
                    "data-tabs-key": node.attributes?.["key"] ?? "",
                  },
                },
                children: [
                  {
                    type: "text",
                    value: tab.attributes.header,
                  },
                ],
              })),
            },
            {
              type: "element",
              data: {
                hName: "div",
                hProperties: {
                  className: "tabs-content",
                },
              },
              children: [...tabs],
            },
          ],
        };
        parent.children[index] = wrapper;
      } else if (node.type === "containerDirective" && node.name === "tab") {
        // We need to attach some properties to the tab containers
        node.data = {
          hProperties: {
            className: "tab",
            "data-tab-key": node.attributes.key,
          },
        };
      }
    });
  };
};

export default remarkTabs;
