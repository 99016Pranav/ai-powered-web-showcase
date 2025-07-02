import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, icon: '🌐', category: 'Frontend' },
  { name: 'CSS3', level: 90, icon: '🎨', category: 'Frontend' },
  { name: 'JavaScript', level: 85, icon: '⚡', category: 'Frontend' },
  { name: 'React', level: 80, icon: '⚛️', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', level: 75, icon: '🟢', category: 'Backend' },
  { name: 'Express', level: 70, icon: '🚀', category: 'Backend' },
  
  // Programming Languages
  { name: 'Python', level: 85, icon: '🐍', category: 'Languages' },
  { name: 'Java', level: 80, icon: '☕', category: 'Languages' },
  
  // Tools & Technologies
  { name: 'Git/GitHub', level: 90, icon: '🔧', category: 'Tools' },
  { name: 'VS Code', level: 95, icon: '💻', category: 'Tools' },
  { name: 'Figma', level: 75, icon: '🎯', category: 'Tools' },
  { name: 'Postman', level: 80, icon: '📮', category: 'Tools' },
];

const softSkills = [
  { name: 'Teamwork', description: 'Collaborative problem-solving and effective communication' },
  { name: 'Adaptability', description: 'Quick learning and adaptation to new technologies' },
  { name: 'Communication', description: 'Clear technical communication and documentation' },
  { name: 'Problem Solving', description: 'Analytical thinking and creative solution development' },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="container-responsive">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gradient-primary">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="glass-card p-6 rounded-2xl hover:shadow-card transition-smooth">
                  <h4 className="text-lg font-semibold mb-6 text-accent">{category}</h4>
                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => {
                      const globalIndex = skills.findIndex(s => s === skill);
                      const isAnimated = animatedSkills.includes(globalIndex);
                      
                      return (
                        <div key={skill.name} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{skill.icon}</span>
                              <span className="font-medium text-foreground">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-primary rounded-full h-2 transition-all duration-1000 ease-out"
                              style={{ 
                                width: isAnimated ? `${skill.level}%` : '0%',
                                transition: 'width 1s ease-out'
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gradient-primary">Soft Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`glass-card p-6 rounded-2xl hover:shadow-card transition-smooth hover:scale-105 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto hover:shadow-card transition-smooth">
              <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">Currently Learning</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly expanding my skillset and staying updated with the latest technologies
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS', 'Machine Learning'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-surface rounded-full text-sm font-medium border border-border hover:border-accent/50 transition-smooth"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;