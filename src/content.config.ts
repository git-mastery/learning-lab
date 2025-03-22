import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const tours = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./tours" }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional(),
    categories: z.array(z.string()).optional().default([]),
    order: z.number().optional(),
    next: z
      .object({
        path: z.string(),
        name: z.string().optional(),
      })
      .optional(),
    prev: z
      .object({
        path: z.string(),
        name: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { tours };
