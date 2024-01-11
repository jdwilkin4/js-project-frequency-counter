import Link from "next/link";

export const HomeLink = () => (
  <div className=" flex items-center justify-center my-4">
    <Link href="/" className="text-xl text-slate-200 hover:underline">
      Return Home
    </Link>
  </div>
);
