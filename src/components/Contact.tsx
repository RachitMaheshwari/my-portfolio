import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/rachit-maheshwari-b25a00230",
    color: "hover:text-blue-500",
  },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:rachitmaheshwari829@gmail.com",
    color: "hover:text-primary",
  },
  {
    icon: Phone,
    label: "Phone",
    url: "tel:+918630142314",
    color: "hover:text-secondary",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    // ✅ Replace with your actual EmailJS IDs
    const SERVICE_ID = "service_clg77ye";
    const TEMPLATE_ID = "template_af2jyxa";
    const PUBLIC_KEY = "V36qAmPNXNxzTmkN5";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Error Sending Message",
          description: "Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:rachitmaheshwari829@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      rachitmaheshwari829@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground">Vikas Nagar, Dehradun (248198)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+918630142314"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91-8630142314
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="font-semibold mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg glass-card hover:neon-border transition-all duration-300 ${link.color}`}
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block"
            >
              <div className="text-9xl text-center opacity-20">📬</div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-morphism border-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-morphism border-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-morphism border-primary/20 focus:border-primary resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSending}
                className="w-full glass-morphism hover:neon-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                {isSending ? "Sending..." : <><Send className="mr-2 h-4 w-4" />Send Message</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
