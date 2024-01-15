import { Table } from "@/components/Table";
import { LIST_OF_PROJECTS } from "../../utils/constants";

type ProjectProps = {
  name: string;
};

export default function Project({ name }: ProjectProps) {
  const projectIndex = LIST_OF_PROJECTS.findIndex(
    ({ title }) => title === name
  );

  const { title, filePath } = LIST_OF_PROJECTS[projectIndex];
  return <Table name={title} filePath={filePath} />;
}
