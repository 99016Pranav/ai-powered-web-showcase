import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background-secondary">
      <div className="container-responsive">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl hover:shadow-card transition-smooth">
                <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I'm currently pursuing my M.Tech in Computer Science at RV College of Engineering, Bangalore, 
                  with a CGPA of 8.3. With a background in Computer Science (BE from MVJ College), I'm passionate 
                  about building intelligent systems and full-stack web applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the years, I've interned at companies like EISystems, Infotrixs, and Varcoons, gaining 
                  hands-on experience in Python, Web Development, and software engineering. I enjoy blending 
                  practical skills with academic knowledge to solve real-world problems.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl hover:shadow-card transition-smooth">
                <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">What I Love</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Full-stack development with MERN Stack</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Exploring Generative AI and machine learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Building intelligent systems and web applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Academic research and practical problem-solving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats & Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-2xl text-center hover:shadow-primary transition-smooth">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center hover:shadow-accent transition-smooth">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center hover:shadow-primary transition-smooth">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Technologies Mastered</div>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center hover:shadow-accent transition-smooth">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Commitment</div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl hover:shadow-card transition-smooth">
                <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">Core Values</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      Always seeking new ways to solve problems and improve user experiences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quality</h4>
                    <p className="text-muted-foreground text-sm">
                      Committed to writing clean, maintainable code and delivering excellence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                    <p className="text-muted-foreground text-sm">
                      Believing in the power of teamwork and effective communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;