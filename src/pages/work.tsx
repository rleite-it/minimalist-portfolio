import { useRef } from "react";
import Projects from "../components/projects";
import WorkIntroduction from "../components/work-introduction";

interface ProjectRefProps {
  scrollToTarget: () => void;
}

export default function Work() {
  const projectsRef = useRef<ProjectRefProps | null>(null);

  const handleScroll = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollToTarget();
    }
  };

  return (
    <div className="w-[1024px] mt-32 flex flex-col flex-1">
      <WorkIntroduction onScrollToTarget={handleScroll} />
      <Projects ref={projectsRef} />
    </div>
  );
}
