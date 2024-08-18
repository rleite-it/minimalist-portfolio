import { ArrowDown } from "lucide-react";
import { WORK_DESCRIPTION, WORK_TITLE } from "../constants/work-info";

interface WorkIntroductionProps {
  onScrollToTarget: () => void;
}

export default function WorkIntroduction({
  onScrollToTarget,
}: WorkIntroductionProps) {
  return (
    <div className="flex flex-col gap-20 mr-20">
      <div className="flex justify-between">
        <h1 className="max-w-[300px] font-medium text-5xl">{WORK_TITLE}</h1>
        <span className="pt-12 w-[550px] text-lg text-zinc-500">
          {WORK_DESCRIPTION}
        </span>
      </div>
      <ArrowDown onClick={onScrollToTarget} className="size-9 cursor-pointer" />
    </div>
  );
}
