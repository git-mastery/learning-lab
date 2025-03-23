import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import {
  mdCode,
  mdEditElement,
  mdElement,
  mdInlineCode,
  mdLink,
  mdParagraph,
} from "../utils/md";

export type Exercise = {
  type: string;
  name: string;
  children: any[];
  attributes: {
    name: string;
    recommendation?: string | null;
  };
};

const remarkExercises: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: any, index: number, parent: any) => {
      if (node.type === "containerDirective" && node.name === "exercises") {
        const exercises = node.children.filter(
          (child: { type: string; name: string }) =>
            child.type === "containerDirective" && child.name === "exercise",
        );

        const wrapper = mdElement(
          "div",
          {
            className: "exercises",
          },
          mdElement(
            "div",
            {
              className: "exercise-bar",
            },
            mdParagraph(`✏️ Problem set${exercises.length > 1 ? "s" : ""}`, {
              className: "exercise-title",
            }),
          ),
          ...exercises.map((exercise: Exercise) =>
            mdElement(
              "div",
              {
                className: "exercise",
                "data-exercise-name": exercise.attributes.name ?? "",
                "data-recommendation": exercise.attributes.recommendation ?? "",
              },
              mdElement(
                "div",
                { className: "exercise-metadata" },
                mdInlineCode(exercise.attributes.name ?? "", {
                  className: "exercise-name",
                }),
                exercise.attributes?.recommendation != null
                  ? mdParagraph(exercise.attributes.recommendation ?? "", {
                      className: "exercise-recommendation",
                    })
                  : {},
              ),
              mdElement(
                "div",
                { className: "exercise-content" },
                mdCode(
                  `bash download.sh ${exercise.attributes.name ?? ""}`,
                  "bash",
                ),
                mdLink(
                  "More details about exercise",
                  `https://github.com/git-mastery/${exercise.attributes.name ?? ""}`,
                ),
                exercise.children.length > 0
                  ? mdEditElement(exercise, {
                      className: "exercise-description",
                    })
                  : {},
              ),
            ),
          ),
        );
        parent.children[index] = wrapper;
      }
    });
  };
};

export default remarkExercises;
