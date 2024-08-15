export interface ProjectProps {
	id: string;
	name: string;
	description: string;
	stack: string;
	preview: string;
	repository?: string;
	wip: boolean;
}

export const PROJECTS: ProjectProps[] = [
	{
		id: "01",
		name: "ASK ME ANYTHING",
		description:
			"Ask Me Anything app with real-time updates and modern React features. Learned key techniques in WebSocket integration and state management.",
		stack:
			"Developed with Go and React, styled with TailwindCSS, containerized using Docker.",
		preview: "./src/assets/projects-preview/ama/create-room.webp",
		repository: "https://github.com/rleite-it/ask-me-anything",
		wip: false,
	},
	{
		id: "02",
		name: "MINIMALIST PORTFOLIO",
		description:
			"Minimalist portfolio built with React. Focused on optimizing performance and seamless user experience.",
		stack: "Developed with React and styled with TailwindCSS.",
		preview: "./src/assets/projects-preview/minimalist-portfolio/work.webp",
		repository: "https://github.com/rleite-it/minimalist-portfolio",
		wip: true,
	},
];
