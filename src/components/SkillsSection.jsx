import { cn } from "../lib/utils";
import { useState } from "react";


const skills = [
    // Frontend
    {name: "HTML/CSS", level: 1, category: "frontend" },
    {name: "JavaScript", level: 1, category: "frontend" },
    {name: "React", level: 2, category: "frontend" }, 
    {name: "TypeScript", level: 1, category: "frontend" },
    {name: "Tailwind CSS", level: 1, category: "frontend" },
    {name: "Next.js", level: 1, category: "frontend" },

    // Backend
    {name: "Node.js", level: 1, category: "backend" },
    {name: "Express", level: 1, category: "backend" },
    {name: "MongoDB", level: 1, category: "backend" },
    {name: "PostgreSQL", level: 1, category: "backend" },
    {name: "GraphQL", level: 1, category: "backend" },

    // Tools
    {name: "Git/GitHub", level: 3, category: "tools" },
    {name: "Visual Studio Code", level: 3, category: "tools" },
    {name: "AWS", level: 1, category: "tools" },
]

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    const MAX_YEARS = 3; // Maximum years of experience in each category
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="containerr mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key} 
                    onClick={() => setActiveCategory(category) }
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category  ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left-mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                                style={{width: `${(skill.level / MAX_YEARS) * 100}%`}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level} years</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};