import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const FrontendSkills = [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Bootstrap"
    ];

    const BackendSkills = [
        "Node.js",
        "Python",
        "MySQL",
        "Express.js",
        "MongoDB",
        "Laravel",
        "API",
        "PHP"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 ">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4 ">
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {" "}About Me
                </h2>

                {/* Content Section */}
                <div className="rounded-xl p-8 border-gray-700/20 hover:translate-y-1 transition-all border border-white/10">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {/* Frontend Skills */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {FrontendSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                            <h3 className="text-xl font-bold  mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {BackendSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-green-500/10 text-green-500 py-1 px-4 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education and Work Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* Education */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                        <ul className="space-y-2 list-disc list-inside ">
                            <li>
                                <strong>WE Schools</strong>{" "}
                                <span className="text-gray-400">(2022 - 2025)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Work Experience */}
                    <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                        <h4 className="text-xl font-semiboldbold mb-4 ">👨‍💻 Work Experience</h4>
                        <ul className="space-y-2 list-disc list-inside ">
                            
                            <li>
                                <strong>Freelance Developer</strong>{" "}
                                <span className="text-gray-400">(2025)</span>
                                <p className="text-gray-300 mt-1">
                                    Built custom websites and APIs for clients using React.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};