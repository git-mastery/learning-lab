export function createPath(base: string, path: string) {
  return base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
}

export function createLocalPath(path: string) {
  try {
    // If this passes, it's a proper URL
    new URL(path);
    return path;
  } catch {
    // Must be relative path
    if (path === ".") {
      return import.meta.env.BASE_URL;
    }
    return createPath(import.meta.env.BASE_URL, path);
  }
}

export function attachHeading(path: string, heading: string) {
  return path.replace(/#$/, "") + "#" + heading.replace(/^#/, "");
}
