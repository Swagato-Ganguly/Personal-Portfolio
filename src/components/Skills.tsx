import { useState, useEffect, useRef } from 'react';

export default function Skills() {
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

  const skills = [
    { name: 'Selenium WebDriver', level: 95, color: 'from-green-500 to-emerald-500' },
    { name: 'Testsigma', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Java', level: 88, color: 'from-orange-500 to-red-500' },
    { name: 'SQL', level: 92, color: 'from-purple-500 to-pink-500' },
    { name: 'Postman API Testing', level: 90, color: 'from-orange-400 to-yellow-400' },
    { name: 'JIRA', level: 85, color: 'from-blue-600 to-blue-400' },
    { name: 'TestNG & Maven', level: 87, color: 'from-red-500 to-orange-500' },
    { name: 'POM Framework', level: 90, color: 'from-cyan-500 to-teal-500' }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl">Expertise in modern QA automation and testing technologies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative glass-effect rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                    <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden skill-bar-shine`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
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
