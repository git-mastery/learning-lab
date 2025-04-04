import type { getCollection } from "astro:content";

export interface Lesson {
  // We get the return type of getCollection (Promise<Entry[]>), then get the type inside the Promise (Entry[]), and then the value of the array (Entry)
  entry: Awaited<ReturnType<typeof getCollection<"tours">>>[number];
  structure: string[];
}
