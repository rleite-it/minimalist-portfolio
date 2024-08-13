export interface ProjectProps {
	id: string;
	name: string;
	description: string;
	stack: string;
	preview: string;
}

export const PROJECTS: ProjectProps[] = [
	{
		id: "01",
		name: "ASK ME ANYTHING",
		description:
			"Ask Me Anything app with real-time updates and modern React features. Learned key techniques in WebSocket integration and state management.",
		stack:
			"Developed with Go and React, styled with TailwindCSS, containerized using Docker.",
		preview: "./src/assets/projects-preview/ama/create-room.png",
	},
];
