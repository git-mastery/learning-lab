export interface Tour {
  path: string;
  title: string;
  description: string;
  goal?: string | null;
}

export const tours: Tour[] = [
  {
    path: "my-folder-my-repo",
    title: "My Folder, My Repo",
    description: "Starting from an empty folder, how do we start using Git?",
    goal: "Understand the fundamental of initializing a Git repository, and saving snapshots of the repository.",
  },
  {
    path: "detours",
    title: "Detours",
    description:
      "A collection of one-off lessons designed to enrich your understanding of various Git concepts!",
  },
];
