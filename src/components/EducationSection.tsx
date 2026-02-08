import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Guru Nanak Institute of Technology (MAKAUT)",
    years: "2022 – 2026",
    detail: "CGPA: 7.5",
  },
  {
    title: "Higher Secondary (WBCHSE)",
    institution: "Katwa Kashiram Das Institution",
    years: "2020 – 2022",
  },
  {
    title: "Secondary (WBBSE)",
    institution: "Jamna Dhrubabati Nil Ratan High School",
    years: "Up to 2019",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-primary" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <div>
                  <h4 className="font-display font-semibold">{e.title}</h4>
                  <p className="text-sm text-muted-foreground">{e.institution}</p>
                  {e.detail && (
                    <span className="text-sm text-primary font-medium">{e.detail}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{e.years}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
