import { LIST_OF_PROJECTS } from "../../utils/constants";
import { Card } from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl text-center my-8">
        JS Curriculum Frequency Counter
      </h1>

      <div className="flex flex-wrap justify-center align-center gap-8">
        {LIST_OF_PROJECTS.map(({ title, tags, route }) => (
          <Link href={route || "/"} key={title}>
            <Card key={title} title={title} tags={tags || []} />
          </Link>
        ))}
      </div>
    </main>
  );
}
