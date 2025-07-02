import { useEffect, useRef, useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'Web' | 'AI' | 'Mobile';
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Agricultural Disease Predictor',
    description: 'AI-powered system to identify crop diseases from images and suggest remedies',
    longDescription: 'An intelligent agricultural solution that uses computer vision and machine learning to detect plant diseases early. The system processes uploaded plant images and provides accurate disease identification along with recommended treatment options.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'OpenCV', 'React'],
    category: 'AI',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'E-Commerce Dashboard',
    description: 'Modern admin dashboard for e-commerce management with real-time analytics',
    longDescription: 'A comprehensive dashboard solution for e-commerce businesses featuring real-time sales analytics, inventory management, customer insights, and automated reporting systems.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    category: 'Web',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: '3',
    title: 'Task Management Progressive Web App',
    description: 'Feature-rich PWA for team collaboration and project tracking',
    longDescription: 'A modern progressive web application designed for seamless team collaboration. Features include real-time updates, offline functionality, drag-and-drop task management, and integrated communication tools.',
    techStack: ['React', 'PWA', 'Firebase', 'Material-UI', 'Service Workers'],
    category: 'Web',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: '4',
    title: 'AI Content Generator',
    description: 'GPT-powered content creation tool for marketers and writers',
    longDescription: 'An intelligent content generation platform that leverages advanced AI models to help content creators, marketers, and writers produce high-quality articles, social media posts, and marketing copy.',
    techStack: ['React', 'OpenAI API', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'AI',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: '5',
    title: 'Weather Analytics Dashboard',
    description: 'Real-time weather monitoring with predictive analytics',
    longDescription: 'A comprehensive weather monitoring solution that combines real-time data collection with predictive analytics to provide accurate weather forecasts and trend analysis.',
    techStack: ['Vue.js', 'Python', 'FastAPI', 'D3.js', 'Weather API'],
    category: 'Web',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: '6',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting platform using blockchain technology',
    longDescription: 'A decentralized voting platform built on blockchain technology ensuring transparency, security, and immutability of voting records while maintaining voter privacy.',
    techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    category: 'Web',
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop',
    featured: false
  }
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Web' | 'AI' | 'Mobile'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background-secondary">
      <div className="container-responsive">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of my recent work spanning web development, AI/ML, and innovative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`glass-card rounded-2xl overflow-hidden hover:shadow-card transition-smooth group cursor-pointer ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === 'AI' ? 'bg-accent/20 text-accent' :
                        project.category === 'Web' ? 'bg-primary/20 text-primary' :
                        'bg-surface text-foreground'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-surface rounded text-xs text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-xs text-accent">+{project.techStack.length - 3} more</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 transition-smooth"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-accent/50 transition-smooth"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 p-2 bg-surface rounded-2xl border border-border">
              {(['All', 'Web', 'AI'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-xl transition-smooth font-medium ${
                    activeCategory === category
                      ? 'bg-gradient-primary text-white shadow-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface-hover'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden hover:shadow-card transition-smooth group cursor-pointer ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.category === 'AI' ? 'bg-accent/20 text-accent' :
                      project.category === 'Web' ? 'bg-primary/20 text-primary' :
                      'bg-surface text-foreground'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gradient-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-surface rounded text-xs text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="px-2 py-1 text-xs text-accent">+{project.techStack.length - 2}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-surface hover:bg-surface-hover border border-border transition-smooth"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3 h-3" />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-surface hover:bg-surface-hover border border-border transition-smooth"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary-glow">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto hover:shadow-card transition-smooth">
              <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and exciting projects
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-primary transition-smooth">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal would go here - simplified for now */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass-card max-w-2xl w-full rounded-2xl p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gradient-primary">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-surface-hover rounded-lg transition-smooth"
              >
                ✕
              </button>
            </div>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-muted-foreground mb-4">{selectedProject.longDescription}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-surface rounded-full text-sm border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
              {selectedProject.liveUrl && (
                <Button asChild className="bg-gradient-primary">
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;