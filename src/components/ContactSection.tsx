import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="container-responsive">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Contact Information */}
            <div className="space-y-8">
              <div className={`glass-card p-8 rounded-2xl hover:shadow-card transition-smooth ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">Get In Touch</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always excited to discuss new projects, innovative ideas, or opportunities to be part of your visions. 
                  Whether you're looking for a developer, have a question, or just want to connect, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-border hover:border-primary/50 transition-smooth">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">pm3073900@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-border hover:border-accent/50 transition-smooth">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                      📱
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Response Time</h4>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-border hover:border-primary/50 transition-smooth">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      🌍
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+91 9591812943</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={`glass-card p-8 rounded-2xl hover:shadow-card transition-smooth ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
                <h3 className="text-xl font-semibold mb-4 text-gradient-primary">Follow Me</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with me on social media for updates and insights
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-surface hover:bg-surface-hover rounded-lg border border-border hover:border-primary/50 transition-smooth flex-1"
                  >
                    <Github className="w-6 h-6 text-foreground-secondary" />
                    <div>
                      <div className="font-semibold text-foreground">GitHub</div>
                      <div className="text-sm text-muted-foreground">View my code</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/pranav-magadum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-surface hover:bg-surface-hover rounded-lg border border-border hover:border-accent/50 transition-smooth flex-1"
                  >
                    <Linkedin className="w-6 h-6 text-foreground-secondary" />
                    <div>
                      <div className="font-semibold text-foreground">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Let's connect</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className={`glass-card p-8 rounded-2xl hover:shadow-card transition-smooth ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-surface border-border focus:border-primary/50 transition-smooth"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-surface border-border focus:border-primary/50 transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-surface border-border focus:border-primary/50 transition-smooth resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-primary transition-smooth"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <div className="mt-6 p-4 bg-surface/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground text-center">
                  💡 <strong>Quick tip:</strong> Include details about your project timeline and budget for faster response
                </p>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-16 text-center">
            <div className={`glass-card p-8 rounded-2xl max-w-3xl mx-auto hover:shadow-card transition-smooth ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From concept to deployment, I'll help bring your vision to life with modern technologies and best practices. 
                Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:shadow-primary transition-smooth">
                  Schedule a Call
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-surface-hover transition-smooth">
                  View My Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;