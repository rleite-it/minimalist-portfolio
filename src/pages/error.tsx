import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import TextLink from "../components/text-link";

export default function Error() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-20">
      <div className="h-[150px] flex items-center gap-10">
        <h1 className="text-8xl font-bold">404</h1>
        <div className="h-full w-0.5 bg-zinc-950 py-10" />
        <p className="font-medium text-4xl">PAGE NOT FOUND</p>
      </div>
      <Link to="/">
        <TextLink
          text="GO BACK"
          className="font-semibold text-xl flex items-center"
          icon={<ArrowUpRight />}
        />
      </Link>
    </div>
  );
}
