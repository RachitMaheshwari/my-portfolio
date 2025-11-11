import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
          </Float>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="block text-foreground mb-2">Hi, I'm</span>
              <span className="gradient-text glow-text font-extrabold">Rachit Maheshwari</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light"
          >
            A <span className="text-primary font-semibold">Software Developer</span> specializing in Finacle scripting, backend development, and database management. Building scalable, secure, and innovative solutions for enterprise banking systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center pt-8"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group glass-morphism hover:neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-morphism border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
              asChild
            >
              <a href="/Rachit_Maheshwari_SD.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="glass-morphism border-secondary/50 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)] transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Let's Connect
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary/70"
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
