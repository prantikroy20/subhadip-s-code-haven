import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowDown, Phone, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <img
              src={profilePhoto}
              alt="Subhadip Pan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-xl"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface mb-8">
            <MapPin size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Katwa, West Bengal, India</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Subhadip <span className="text-gradient">Pan</span>
          </h1>

          <p className="font-display text-xl md:text-2xl text-muted-foreground mb-6">
            Java Backend Developer
          </p>

          <p className="max-w-2xl mx-auto text-secondary-foreground/70 mb-10 leading-relaxed">
            Java Backend Developer with hands-on experience in building Spring Boot–based RESTful applications. 
            Experienced in designing scalable backend systems using Core Java, SQL, and layered architecture principles.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
            <a
              href="mailto:subhadip.pan04@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              subhadip.pan04@gmail.com
            </a>
            <a
              href="tel:+918391983177"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              +91 83919 83177
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="#"
              className="p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-all"
              title="Portfolio"
            >
              <Globe size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/subhadippan-sp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-all"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/subhadip-pan09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-all"
              title="GitHub"
            >
              <Github size={20} />
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
