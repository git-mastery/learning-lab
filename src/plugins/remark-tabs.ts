import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { mdElement } from "../utils/md";

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
        const wrapper = mdElement(
          "div",
          {
            className: "tabs",
            "data-tabs-key": node.attributes?.["key"] ?? "",
            "data-tabs": JSON.stringify(
              tabs.map((tab: Tab) => tab.attributes.key),
            ),
          },
          mdElement(
            "div",
            {
              className: "selector",
            },
            ...tabs.map((tab: Tab) =>
              mdElement(
                "div",
                {
                  "data-tab-selector-key": tab.attributes.key,
                  "data-tabs-key": node.attributes?.["key"] ?? "",
                },
                {
                  type: "text",
                  value: tab.attributes.header,
                },
              ),
            ),
          ),
          mdElement(
            "div",
            {
              className: "tabs-content",
            },
            ...tabs,
          ),
        );
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
