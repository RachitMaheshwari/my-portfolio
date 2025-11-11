import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Code2, Palette, Zap } from "lucide-react";

const skills = [
  { name: "JS", level: 90, icon: "☕" },
  { name: "Finacle Scripting", level: 88, icon: "🏦" },
  { name: "PL/SQL", level: 85, icon: "🗄️" },
  { name: "React", level: 82, icon: "⚛️" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "REST APIs", level: 87, icon: "🔌" },
  { name: "PostgreSQL/SQL", level: 85, icon: "🐘" },
  { name: "MongoDB", level: 80, icon: "🍃" },
];

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Building robust banking solutions with Java and Finacle",
  },
  {
    icon: Palette,
    title: "Database Mastery",
    description: "Optimizing SQL, PostgreSQL, and MongoDB for performance",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Designing secure RESTful APIs and microservices",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold">
              Software Developer with <span className="gradient-text">3+ Year</span> of Experience
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dynamic and results-driven Software Developer specializing in Finacle scripting, backend development,
              and database management. I deliver high-performance, secure, and scalable solutions for IPPB
              banking systems, using Java, PL/SQL, and web technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in REST API development, microservices architecture, Complete Full Stack Devloper
              I'm passionate about leveraging emerging technologies to build innovative systems that solve
              real-world problems in the financial technology sector.
            </p>
            <Button
              size="lg"
              className="glass-morphism hover:neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
              asChild
            >
              <a href="Rachit_Maheshwari_SD.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:neon-border transition-all duration-300 group"
            >
              <highlight.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
              <p className="text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="space-y-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium flex items-center gap-2">
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
