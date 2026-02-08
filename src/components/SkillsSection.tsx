import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "C++", "SQL"],
  },
  {
    title: "Web Tech",
    skills: ["HTML5", "CSS3", "React.js"],
  },
  {
    title: "Backend / Frameworks",
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs"],
  },
  {
    title: "Cloud / DevOps",
    skills: ["AWS EC2", "AWS RDS", "Docker", "GitHub Actions (CI)", "Linux"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SSMS"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Maven", "IntelliJ IDEA", "Eclipse", "Postman", "Swagger (OpenAPI)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-border text-secondary-foreground hover:border-primary/40 transition-colors"
                  >
                    {skill}
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

export default SkillsSection;
