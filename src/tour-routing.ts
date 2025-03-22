export interface Tour {
  path: string;
  title: string;
  description: string;
  goal: string;
}

export const tours: Tour[] = [
  {
    path: "introduction",
    title: "Introduction",
    description:
      "Introduction to the history and fundamental concepts of the Git version control system.",
    goal: "Understand and articulate the origins of Git.",
  },
  {
    path: "my-folder-my-repo",
    title: "My Folder, My Repo",
    description: "Starting from an empty folder, how do we start using Git?",
    goal: "Understand the fundamental of initializing a Git repository, and saving snapshots of the repository.",
  },
];
