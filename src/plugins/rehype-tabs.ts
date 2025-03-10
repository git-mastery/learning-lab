import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

const rehypeTabs: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any) => {
      if (node.type === "element" && node.tagName === "div") {
        const classNames = node.properties?.className?.split(" ") ?? [];
        if (classNames.includes("tabs")) {
          const tabsKey = node.properties["data-tabs-key"];
          const availableKeys = JSON.parse(node.properties["data-tabs"]);
          const firstKey = availableKeys[0];
          const localStorageTabsKey = `tabs-${tabsKey}`;
          tree.children.push({
            // @ts-ignore
            type: "element",
            tagName: "script",
            properties: {},
            children: [
              {
                type: "text",
                value: `
                (() => {
                  if (localStorage.getItem("${localStorageTabsKey}") == null) {
                    localStorage.setItem("${localStorageTabsKey}", ${JSON.stringify(firstKey)})
                  }
                })()
                `,
              },
            ],
          });
        } else if (classNames.includes("tab")) {
          const tabKey = node.properties["data-tab-key"];
        } else if ("data-tab-selector-key" in node.properties) {
          // This is the tab selector
          const tabKey = node.properties["data-tab-selector-key"];
          const tabsKey = node.properties["data-tabs-key"];
          const localStorageTabsKey = `tabs-${tabsKey}`;
          tree.children.push({
            // @ts-ignore
            type: "element",
            tagName: "script",
            properties: {},
            children: [
              {
                type: "text",
                value: `
                (() => {
                    const selectorTabsAcross = document.querySelectorAll("div.tabs[data-tabs-key='${tabsKey}'] div.selector div[data-tab-selector-key='${tabKey}']");
                    const tabs = document.querySelectorAll("div.tabs[data-tabs-key='${tabsKey}'] div.tabs-content div.tab");
                    const selectorTabs = document.querySelectorAll("div.tabs[data-tabs-key='${tabsKey}'] div.selector div[data-tab-selector-key]");

                    const value = localStorage.getItem("${localStorageTabsKey}")
                    select(value)

                    function select(key) {
                        for (const tab of tabs) {
                            if (tab.attributes["data-tab-key"].nodeValue !== key) {
                                tab.classList.remove("active")
                            } else {
                                tab.classList.add("active")
                            }
                        }

                        for (const selectorTab of selectorTabs) {
                            if (selectorTab.attributes["data-tab-selector-key"].nodeValue !== key) {
                                selectorTab.classList.remove("active-selector")
                            } else {
                                selectorTab.classList.add("active-selector")
                            }
                        }
                    }

                    for (const t of selectorTabsAcross) {
                        t.addEventListener("click", function() {
                            select("${tabKey}")
                            localStorage.setItem("${localStorageTabsKey}", ${JSON.stringify(tabKey)})
                        })
                    }
                })()
                `,
              },
            ],
          });
        }
      }
    });
  };
};

export default rehypeTabs;
