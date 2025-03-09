import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import remarkDirective from "remark-directive";
import remarkDirectiveToHtml from "./src/plugins/remark-to-directive-to-html";
// import remarkHint from "remark-hint";

export default defineConfig({
  markdown: {
    // syntaxHighlight: "prism",
    remarkPlugins: [remarkDirective, remarkDirectiveToHtml],
    // gfm: true,
  },
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
