import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Guru Nanak Institute of Technology (MAKAUT)",
    detail: "CGPA: 7.5",
  },
  {
    title: "Higher Secondary (WBCHSE)",
    institution: "Katwa Kashiram Das Institution",
  },
  {
    title: "Secondary (WBBSE)",
    institution: "Jamna Dhrubabati Nil Ratan High School",
  },
];

const certifications = [
  "Java Programming Fundamentals – Infosys Springboard",
  "Object-Oriented Data Structures – Coursera",
  "Analysis of Algorithms – Coursera",
  "Cyber Security Fundamentals – Deloitte",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          Education & <span className="text-gradient">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-primary" />
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((e, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-display font-medium text-sm">{e.title}</h4>
                  <p className="text-sm text-muted-foreground">{e.institution}</p>
                  {e.detail && (
                    <span className="text-xs text-primary font-medium">{e.detail}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-primary" />
              <h3 className="font-display text-lg font-semibold">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-secondary-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
