import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface mb-8">
            <MapPin size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Kolkata, India</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Subhadip <span className="text-gradient">Pan</span>
          </h1>

          <p className="font-display text-xl md:text-2xl text-muted-foreground mb-6">
            Java Backend Developer{" "}
            <span className="text-primary">·</span> Spring Boot Enthusiast
          </p>

          <p className="max-w-xl mx-auto text-secondary-foreground/70 mb-10 leading-relaxed">
            Building clean, scalable backend systems with Spring Boot & Java.
            Passionate about crafting reliable APIs and robust architectures.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="https://github.com/subhadip-pan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/subhadip-pan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:noton8520@gmail.com"
              className="p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
