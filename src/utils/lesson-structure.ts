import { remark } from "remark";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";

export function getLessonStructure(body: string): string[] {
  const tree = remark().use(remarkDirective).parse(body);
  const matchingNodes = [];
  const validNodes = new Set(["handsOn", "exercises", "detour"]);
  visit(tree, (node) => {
    if (node.type === "containerDirective" && validNodes.has(node.name)) {
      matchingNodes.push(node);
    }
  });

  const structure = [];
  for (const node of matchingNodes) {
    switch (node.name) {
      case "handsOn": {
        const title = node.attributes["title"] ?? null;
        structure.push(`🧤 Hands-on${title != null ? `: ${title}` : ""}`);
        break;
      }
      case "exercises": {
        for (const child of node.children) {
          structure.push(`✏️ Problem set: ${child.attributes?.name}`);
        }
        break;
      }
      case "detour": {
        const title = node.attributes["title"] ?? null;
        structure.push(`🛣️ Detour${title != null ? `: ${title}` : ""}`);
        break;
      }
    }
  }

  return structure;
}
