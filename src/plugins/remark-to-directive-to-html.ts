import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

/**
 * Handles all types of remark directives.
 */
const remarkDirectiveToHtml: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any) => {
      if (node.type === "containerDirective" && node.name === "callout") {
        const className = node.name;
        const hintClassNames = (node.attributes || {}).class || "";

        node.data = {
          hName: "div",
          hProperties: {
            className: `${className} ${hintClassNames}`,
          },
        };
      }
    });
  };
};

export default remarkDirectiveToHtml;
