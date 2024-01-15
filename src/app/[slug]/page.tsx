import { Table } from "@/components/Table";
import { LIST_OF_PROJECTS } from "../../../utils/constants";
import { HomeLink } from "@/components/HomeLink";
import { useRouter } from "next/router";

export const dynamicParams = true;

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    // Handle case where slug is not provided
    return (
      <>
        <p>Project not found</p>
        <HomeLink />
      </>
    );
  }

  const project = LIST_OF_PROJECTS.find((project) => project.route === slug);

  if (!project) {
    // Handle case where project with the given slug is not found
    return (
      <>
        <p>Project not found</p>
        <HomeLink />
      </>
    );
  }

  const { title, filePath } = project;

  return <Table name={title} filePath={filePath} />;
}
