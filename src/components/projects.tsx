import { forwardRef, useImperativeHandle, useRef } from "react";

import Project from "./project";
import { PROJECTS } from "../constants/projects";

const Projects = forwardRef((_props, ref) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    // Expose scrollToTarget method to parent
    useImperativeHandle(ref, () => ({
        scrollToTarget: () => {
            if (targetRef.current) {
                const element = targetRef.current;
                const top = element.getBoundingClientRect().top + window.scrollY; // Get the top position of the element

                // Smoothly scroll to the element plus offset
                window.scrollTo({
                    top: top + 50, // Adjust the offset as needed
                    behavior: 'smooth'
                });
            }
        }
    }));

    return (
        <div ref={targetRef} className="w-full flex flex-col pt-8">
            {PROJECTS.map((project) => (
                <>
                    <Project
                        key={`project-${project.id}`}
                        id={project.id} name={project.name}
                        description={project.description}
                        stack={project.stack}
                        preview={project.preview}
                        wip={project.wip}
                        repository={project.repository}
                    />
                    <div className="mt-20 h-[.25px] bg-[#181717]" />
                </>
            ))}
        </div >
    )
});

export default Projects;
