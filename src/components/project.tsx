import { ArrowUpRight } from "lucide-react";

import { ProjectProps } from "../constants/projects";
import TextLink from "./text-link";

export default function Project({
  id,
  name,
  description,
  stack,
  preview,
  wip,
  repository,
}: ProjectProps) {
  return (
    <div className="mt-20 w-full flex">
      <div className="flex flex-col gap-6 pr-32">
        <h1 className="font-semibold text-lg">
          {id} / {name}
        </h1>
        <p className="font-medium ">{description}</p>
        <p className="text-justify pr-20 text-zinc-500 flex-1">{stack}</p>
        <TextLink
          text={wip ? "Project WIP" : "More about this project"}
          icon={!wip ? <ArrowUpRight className="size-5" /> : <></>}
          link={repository}
          wip={wip}
        />
      </div>
      <img
        src={preview}
        alt={`project ${name} preview`}
        className="w-[500px] h-[325px] ml-auto aspect-video"
        loading="lazy"
      />
    </div>
  );
}
