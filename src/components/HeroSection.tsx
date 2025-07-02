import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-animation absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating-animation absolute top-40 right-32 w-24 h-24 bg-accent/10 rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-animation absolute bottom-32 left-40 w-20 h-20 bg-primary-glow/10 rounded-full blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <p className="text-accent font-mono text-sm mb-2 animate-fadeInUp">Hi there, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp animate-delay-200">
                <span className="text-gradient-primary">Pranav R. Magadum</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-secondary mb-6 animate-fadeInUp animate-delay-400">
                Software Developer | GenAI & Full Stack Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fadeInUp animate-delay-600">
                Turning code into impactful solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fadeInUp animate-delay-600">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-primary transition-smooth px-8"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-surface-hover transition-smooth px-8"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start animate-fadeInUp animate-delay-600">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-smooth hover-glow"
              >
                <Github className="w-6 h-6 text-foreground-secondary hover:text-primary transition-smooth" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover border border-border hover:border-accent/50 transition-smooth hover-glow"
              >
                <Linkedin className="w-6 h-6 text-foreground-secondary hover:text-accent transition-smooth" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-border shadow-card hover:shadow-glow transition-smooth">
                <img 
                  src={profileImage} 
                  alt="Pranav R. Magadum - Software Developer"
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-surface/50 backdrop-blur-sm border border-border hover:bg-surface-hover transition-smooth"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;