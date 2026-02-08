import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            Open to backend developer roles, internships, and exciting collaboration opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          <a
            href="mailto:noton8520@gmail.com"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
          >
            <Mail size={18} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm">noton8520@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+918391983177"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
          >
            <Phone size={18} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm">+91 83919 83177</p>
            </div>
          </a>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
            <MapPin size={18} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm">Kolkata, West Bengal</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/subhadip-pan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface border border-border hover:border-primary/50 text-sm transition-all"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/subhadip-pan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface border border-border hover:border-primary/50 text-sm transition-all"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
