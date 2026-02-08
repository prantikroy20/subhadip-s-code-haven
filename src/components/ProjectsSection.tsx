import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Users } from "lucide-react";

const projects = [
  {
    title: "Instagram Clone – Backend",
    icon: Users,
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
    description:
      "Full-featured REST API backend for an Instagram-like social platform with user registration, authentication, posts, likes, and comments.",
    highlights: [
      "Layered architecture with Spring Data JPA",
      "Swagger & Postman for API testing",
      "Dockerized deployment setup",
    ],
    github: "https://github.com/subhadip-pan",
  },
  {
    title: "Student Management System",
    icon: Layers,
    tech: ["Java", "Spring Boot", "MySQL"],
    description:
      "Backend service to manage student and course records with full CRUD capability, validation, and exception handling.",
    highlights: [
      "CRUD APIs with input validation",
      "Custom exception handling",
      "Clean, layered code structure",
    ],
    github: "https://github.com/subhadip-pan",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 glow-border transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-surface transition-colors text-muted-foreground hover:text-primary"
                >
                  <Github size={18} />
                </a>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-secondary-foreground/70 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
