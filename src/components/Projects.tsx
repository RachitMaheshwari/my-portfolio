import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "IPPB Bank Project",
    description:
      "Comprehensive Finacle customization for India Post Payments Bank with backend modules, API integrations, and automated reporting systems.",
    image: "🏦",
    tags: ["Java", "Finacle", "PL/SQL", "REST API"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cash Report & Bulk Upload Module",
    description:
      "Scalable backend system for handling large financial datasets with Maker-Checker workflow and automated PL/SQL procedures.",
    image: "💰",
    tags: ["Java", "PostgreSQL", "PL/SQL", "JasperReports"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Aadhaar Services Integration",
    description:
      "Secure biometric OTP generation and Aadhaar authentication system ensuring compliance with security standards.",
    image: "🔐",
    tags: ["Java", "REST API", "Aadhaar API", "Security"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Project Management System",
    description:
      "Full-stack web application for task allocation and progress tracking with role-based access control and real-time notifications.",
    image: "📊",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Mobile Banking API Suite",
    description:
      "RESTful API development for mobile banking applications with data security, validation, and comprehensive error handling.",
    image: "📱",
    tags: ["Java", "REST API", "Postman", "JBoss"],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "JasperReports Analytics",
    description:
      "Enterprise reporting solution with SQL integration, custom layouts, and optimized performance for large datasets.",
    image: "📈",
    tags: ["JasperReports", "SQL", "iReport", "Oracle"],
    gradient: "from-rose-500 to-pink-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work and creative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:neon-border transition-all duration-300 h-full flex flex-col">
                {/* Project Image/Icon */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl overflow-hidden`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>

                  {/* Overlay on Hover */}

                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
