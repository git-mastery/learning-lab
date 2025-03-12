/**
 * Utility function for constructing mdast quickly.
 */

export function mdElement(
  name: string,
  properties: { [key: string]: string },
  ...children: any
) {
  return {
    type: "element",
    data: {
      hName: name,
      hProperties: properties,
    },
    children,
  };
}

export function mdText(text: string) {
  return {
    type: "text",
    value: text,
  };
}
