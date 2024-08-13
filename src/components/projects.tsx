import Project from "./project";

import { PROJECTS } from "../constants/projects";

export default function Projects() {
    return (
        <div className="w-full flex flex-col pt-8">
            {PROJECTS.map((project, i) => (
                <>
                    <Project key={`project-${project.id}`} id={project.id} name={project.name} description={project.description} stack={project.stack} preview={project.preview} wip={project.wip} />
                    <div className="mt-20 h-[.25px] bg-[#181717]" />
                </>
            ))}
        </div >
    )
}
