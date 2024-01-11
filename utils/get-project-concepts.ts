import fs from "fs";
import { LIST_OF_CONCEPTS_TAUGHT } from "./constants";

type ProjectConceptProps = {
  filePath: string;
};

function getProjectConcepts({ filePath }: ProjectConceptProps) {
  if (!fs.existsSync(filePath)) {
    throw new Error("Project not found");
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const map = new Map<string, number>();

  for (let key of Object.keys(LIST_OF_CONCEPTS_TAUGHT)) {
    const concept = LIST_OF_CONCEPTS_TAUGHT[key];

    if (typeof concept === "string") {
      if (fileContent.includes(concept)) {
        const regex = new RegExp(concept, "g");
        const count = (fileContent.match(regex) || []).length;
        map.set(key, count);
      }
    } else if (concept instanceof RegExp) {
      const count = (fileContent.match(concept) || []).length;
      map.set(key, count);
    }
  }

  return map;
}

export default getProjectConcepts;
