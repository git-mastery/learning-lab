import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import { shield } from "@kindspells/astro-shield";
import { transformerCopyButton } from "@rehype-pretty/transformers/copy-button";
import rehypePrettyCode from "rehype-pretty-code";
import remarkDirective from "remark-directive";
import rehypeTabs from "./src/plugins/rehype-tabs";
import remarkCallout from "./src/plugins/remark-callout";
import remarkDetour from "./src/plugins/remark-detour";
import remarkExercises from "./src/plugins/remark-exercises";
import remarkHandsOn from "./src/plugins/remark-hands-on";
import remarkSteps from "./src/plugins/remark-steps";
import remarkTabs from "./src/plugins/remark-tabs";

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
      remarkHandsOn,
      remarkDetour,
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
  integrations: [react(), mdx(), shield({})],

  vite: {
    plugins: [tailwindcss()],
  },
});
