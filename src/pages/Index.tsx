import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Rachit Maheshwari. Built with{" "}
            <span className="text-primary">React</span> &{" "}
            <span className="text-secondary">Tailwind</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
