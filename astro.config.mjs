import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import { transformerCopyButton } from "@rehype-pretty/transformers/copy-button";
import rehypePrettyCode from "rehype-pretty-code";
import remarkDirective from "remark-directive";
import rehypeTabs from "./src/plugins/rehype-tabs";
import remarkCallout from "./src/plugins/remark-callout";
import remarkSteps from "./src/plugins/remark-steps";
import remarkTabs from "./src/plugins/remark-tabs";
import remarkExercises from "./src/plugins/remark-exercises";

export default defineConfig({
  site: "https://git-mastery.github.io",
  base: "/learning-lab",
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkDirective,
      remarkCallout,
      remarkTabs,
      remarkSteps,
      remarkExercises,
    ],
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeTabs,
      [
        rehypePrettyCode,
        {
          theme: "dracula",
          transformers: [
            transformerCopyButton({
              visibility: "hover",
              feedbackDuration: 3_000,
            }),
          ],
        },
      ],
    ],
    gfm: true,
  },
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
