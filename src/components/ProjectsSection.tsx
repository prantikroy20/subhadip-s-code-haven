import { motion } from "framer-motion";
import { Github, Shield, HeartPulse } from "lucide-react";

const projects = [
  {
    title: "Secure Application Access Control for SDN",
    icon: Shield,
    tech: ["Python", "XGBoost", "Scikit-learn", "Network Security"],
    description:
      "ML-based access control system to secure SDN Northbound Interfaces by detecting malicious and unauthorized application requests.",
    highlights: [
      "Evaluated multiple ML models (Naïve Bayes, Random Forest, MLP, XGBoost), achieving improved detection accuracy using ensemble learning",
      "Integrated a rule-based trust management engine to reduce false positives and improve decision explainability",
    ],
    github: "https://github.com/subhadip-pan",
  },
  {
    title: "Healthcare Management Backend System",
    icon: HeartPulse,
    tech: ["Java", "Spring Boot", "SSMS", "JWT", "Docker"],
    description:
      "Secure RESTful backend for managing patients, doctors, appointments, and medical records using Spring Boot.",
    highlights: [
      "Implemented JWT-based authentication and role-based access control with Spring Security",
      "Designed normalized MySQL schemas and implemented persistence using Spring Data JPA and Hibernate",
      "Containerized the application using Docker and set up a basic CI workflow with GitHub Actions",
    ],
    github: "https://github.com/subhadip-pan",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-card/50">
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
              className="p-6 md:p-8 rounded-xl bg-background border border-border hover:border-primary/30 glow-border transition-all group"
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

              <ul className="space-y-2 mb-5">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="text-sm text-secondary-foreground/70 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
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
