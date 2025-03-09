import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkDirective from "remark-directive";
import remarkDirectiveToHtml from "./src/plugins/remark-to-directive-to-html";
import { transformerCopyButton } from "@rehype-pretty/transformers/copy-button";
import remarkRehype from "remark-rehype";

export default defineConfig({
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkDirective, remarkDirectiveToHtml],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          transformers: [
            transformerCopyButton({
              visibility: "hover",
              feedbackDuration: 3_000,
            }),
          ],
        },
      ],
    ],
    // gfm: true,
  },
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
