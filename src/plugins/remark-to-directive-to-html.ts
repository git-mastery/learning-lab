import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root, Data } from "mdast";

interface DirectiveNode extends Data {
  name: string;
  attributes?: Record<string, string>;
}

const remarkDirectiveToHtml: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any) => {
      if (node.type === "containerDirective") {
        const className = node.name; // Converts :::note to class="note"

        node.data = {
          hName: "div",
          hProperties: {
            className,
            ...(node.attributes || {}),
          },
        };
      }
    });
  };
};

export default remarkDirectiveToHtml;
