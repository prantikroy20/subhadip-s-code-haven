import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 glow-border transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Nexora Technologies Pvt. Ltd.</h3>
                  <p className="text-primary font-medium">Backend Developer (Java)</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>Jan 2024 – Aug 2024</span>
            </div>
          </div>

          <ul className="space-y-3">
            {[
              "Built RESTful backend services for an e-commerce application using Spring Boot, following a layered architecture (Controller–Service–Repository).",
              "Implemented secure authentication and role-based authorization using Spring Security and JWT.",
              "Containerized the application using Docker to ensure consistent development and deployment environments.",
              "Configured a basic CI pipeline with GitHub Actions to automate build and dependency validation on code push.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-secondary-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
