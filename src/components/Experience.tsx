import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Alstonia Consulting LLP",
    duration: "Nov 2023 - Present",
    description: "Working on IPPB Bank Project, focusing on Finacle scripting, backend development, and database integration using SQL, PostgreSQL, and PL/SQL.",
    achievements: [
      "Designed and developed robust backend modules using Java and Finacle for Core banking software",
      "Implemented RESTful APIs for mobile app communication and external service integrations (Aadhaar, MATM)",
      "Built and optimized PL/SQL procedures for efficient financial data processing and reporting",
      "Created scalable backend logic for Cash Report, Bulk Upload, and Maker-Checker flows",
      "Developed JAR files to enhance banking software functionalities and system integration",
    ],
    color: "from-primary to-primary-glow",
  },
  {
    role: "Intern - Finacle Developer",
    company: "Alstonia Consulting LLP",
    duration: "Nov 2023 - Feb 2024",
    description: "Worked on Core Banking System (CBS) customization, focusing on financial software development using Finacle scripting and PL/SQL.",
    achievements: [
      "Enhanced CBS functionalities through Finacle scripting",
      "Automated workflows using PL/SQL procedures",
      "Gained hands-on experience with banking software customization",
    ],
    color: "from-secondary to-secondary-glow",
  },
  {
    role: "Data Engineer and Analyst",
    company: "Pure and Cure Healthcare Pvt. Ltd.",
    duration: "Feb 2020 - Feb 2021",
    description: "Utilized Excel and SQL for data management, documentation, and analysis, ensuring accuracy and compliance with industry standards.",
    achievements: [
      "Streamlined data management processes to improve operational efficiency",
      "Organized and maintained essential records for efficient workflow",
      "Collaborated with cross-functional teams for reporting and decision-making support",
    ],
    color: "from-primary to-secondary",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and growth as a developer
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-20 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse-glow z-10" />

                {/* Content Card */}
                <div className="ml-16 md:ml-0">
                  <div className="glass-card p-6 rounded-2xl hover:neon-border transition-all duration-300 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} text-background`}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                          <span className="font-semibold text-primary">{exp.company}</span>
                          <span className="hidden md:inline">•</span>
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary mb-2">Key Achievements:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▹</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="glass-morphism hover:neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
            asChild
          >
            <a href="/Rachit_Maheshwari_SD.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
