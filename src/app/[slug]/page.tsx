import { Table } from "@/components/Table";
import { LIST_OF_PROJECTS } from "../../../utils/constants";
import { HomeLink } from "@/components/HomeLink";

export default function Page({ params }: { params: { slug: string } }) {
  const projectIndex = LIST_OF_PROJECTS.findIndex(
    ({ route }) => route === params.slug
  );

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
