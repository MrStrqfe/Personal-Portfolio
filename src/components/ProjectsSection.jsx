import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Anime Guessing Game",
        description: `Developed an engaging anime guessing game inspired by my favorite series,
        with integrated API support to challenge both casual fans and seasoned anime enthusiasts.`,
        image: "/projects/animeproject.jpeg",
        tags: ["HTML", "CSS", "JavaScript", "Jikan API"],
        demoUrl: "https://mrstrqfe-anime-game.vercel.app/",
        githubUrl: "https://github.com/MrStrqfe/anime-guess-game",
    },
    {
        id: 2,
        title: "Meter's Running",
        description: `Created a fast-paced top-down driving game where players deliver passengers before time runs out. 
        Optional zombie encounters offer cash rewards at the cost of car damage, with faster completions unlocking upgrade opportunities.`,
        image: "/projects/project2.jpg",
        tags: ["Unity", "C#"],
        demoUrl: "https://mrstrqfe.itch.io/meters-running",
        githubUrl: "https://github.com/Danksi4/CMPUT250-Divided-Games",
    },
    {
        id: 3,
        title: "Dungeon Web Game",
        description: "Built a browser-based dungeon game where players upgrade weapons and health to defeat a dragon boss.",
        image: "/projects/dungeongame.jpeg",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://dungeon-web-game.vercel.app/",
        githubUrl: "https://github.com/MrStrqfe/dungeon-web-game",
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    {" "}
                    Featured <span className="text-primary"> Projects</span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Some of my most recent and successful projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden"> 
                                <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/MrStrqfe">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};