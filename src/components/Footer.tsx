import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container-responsive py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient-primary mb-2">Alex Johnson</h3>
            <p className="text-muted-foreground text-sm">
              Front-End Developer | GenAI Enthusiast
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-3">Quick Links</p>
            <div className="flex justify-center gap-6">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-smooth"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-smooth" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-accent/50 transition-smooth"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent transition-smooth" />
            </a>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-smooth"
            >
              <ArrowUp className="w-5 h-5 text-muted-foreground hover:text-primary transition-smooth" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Alex Johnson. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Crafted with 💜 and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;