import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const lessons = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./lessons" }),
});

export const collections = { lessons };
