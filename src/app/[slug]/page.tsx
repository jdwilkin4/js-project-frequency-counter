import { Table } from "@/components/Table";
import { LIST_OF_PROJECTS } from "../../../utils/constants";
import { HomeLink } from "@/components/HomeLink";

export const dynamicParams = true;

export default function Page({ params }: { params: { slug: string } }) {
  const projectRoutes = LIST_OF_PROJECTS.map(({ route }) => route);
  const projectIndex = projectRoutes.indexOf(`${params.slug}`);

  if (projectIndex === -1) {
    return (
      <>
        <p>Project not found</p>
        <HomeLink />
      </>
    );
  } else {
    const { title, filePath } = LIST_OF_PROJECTS[projectIndex];
    return <Table name={title} filePath={filePath} />;
  }
}
