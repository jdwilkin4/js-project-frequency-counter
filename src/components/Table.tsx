import getProjectConcepts from "../../utils/get-project-concepts";
import { HomeLink } from "./HomeLink";

type TableProps = {
  name: string;
  filePath?: string;
};

export const Table = ({ name, filePath }: TableProps) => {
  if (!filePath) {
    return (
      <>
        <p className="text-xl text-center">No concepts found</p>
        <HomeLink />
      </>
    );
  }

  let map = getProjectConcepts({ filePath: filePath || "" });

  // filter out concepts with 0 frequency count in map
  for (const [key, value] of map.entries()) {
    if (value === 0) {
      map.delete(key);
    }
  }

  // sort concepts in alphabetical order
  let projectConcepts = [...map.entries()].sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return (
    <>
      <h1 className="text-3xl text-center my-8">{name}</h1>
      <HomeLink />
      <table className="table-auto border-collapse border border-slate-400 border-separate border-spacing-2 mx-auto">
        <thead>
          <tr className="text-2xl">
            <th className="border border-slate-300 p-4">Concept</th>
            <th className="border border-slate-300 p-4">Frequency Count</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {projectConcepts.map((project) => {
            const [concept, currentCount] = project;

            return (
              <tr key={concept}>
                <td className="border border-slate-300 p-4">
                  {concept.toLowerCase()}
                </td>
                <td className="border border-slate-300 p-4">{currentCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <HomeLink />
    </>
  );
};
