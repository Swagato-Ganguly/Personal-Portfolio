import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, TestTube2, Cpu, Home } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Selenium Automation Framework',
      description: 'Comprehensive end-to-end automation framework built with Selenium WebDriver, TestNG, and Page Object Model design pattern. Includes data-driven testing, parallel execution, and detailed reporting.',
      icon: TestTube2,
      tech: ['Selenium', 'Java', 'TestNG', 'Maven', 'POM'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'API Testing Suite',
      description: 'Robust API testing framework using Postman and RestAssured for comprehensive validation of RESTful services. Includes authentication, data validation, and performance testing.',
      icon: Cpu,
      tech: ['Postman', 'RestAssured', 'JSON', 'Java'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Home Safety System',
      description: 'IoT-based safety system using Arduino for real-time monitoring and automation. Integrated sensors and automated alerts for enhanced home security.',
      icon: Home,
      tech: ['Arduino', 'C++', 'IoT', 'Sensors'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl">Showcasing automation excellence and technical innovation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full">
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <div className="relative h-full glass-effect rounded-lg p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
                  <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${project.gradient} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/btn">
                        <Github size={20} />
                        <span className="text-sm font-medium group-hover/btn:underline">View Code</span>
                      </button>
                      <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/btn">
                        <ExternalLink size={20} />
                        <span className="text-sm font-medium group-hover/btn:underline">Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
