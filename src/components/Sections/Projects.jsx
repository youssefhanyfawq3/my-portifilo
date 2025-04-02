import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    // Sample project data
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio website built with React and TailwindCSS.",
            link: "https://example.com/portfolio",
            tools: ["React", "TailwindCSS", "Vite"]
        },
        {
            title: "E-commerce Store",
            description: "A full-stack e-commerce platform with user authentication and payment integration.",
            link: "https://example.com/ecommerce",
            tools: ["Node.js", "Express.js", "MongoDB", "Stripe"]
        },
        {
            title: "Weather App",
            description: "A real-time weather app that fetches data from a public API.",
            link: "https://example.com/weather",
            tools: ["React", "Axios", "OpenWeatherMap API"]
        }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center py-20" id="projects">
            <RevealOnScroll> 
            <div className="max-w-3xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                {/* Project Cards */}
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="p-6 rounded-lg border border-gray-700/20 shadow-md hover:scale-105 transition-transform"
                        >
                            {/* Title */}
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                            {/* Description */}
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            {/* Tools */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tools.map((tool, idx) => (
                                    <span
                                    key={index}
                                    className="bg-green-500/10 text-green-500 py-1 px-4 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                                >
                                    {tool}
                                </span>
                                ))}
                            </div>

                            {/* Link */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-500 hover:text-blue-400 transition"
                            >
                                soon..
                            </a>
                        </article>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};