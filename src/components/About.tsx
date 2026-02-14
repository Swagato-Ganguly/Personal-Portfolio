import { useState, useEffect, useRef } from 'react';
import { Target, Zap, Shield, Code } from 'lucide-react';

export default function About() {
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

  const features = [
    { icon: Target, title: 'Precision Testing', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, title: 'Automation Expert', color: 'from-cyan-500 to-blue-500' },
    { icon: Shield, title: 'Quality Assurance', color: 'from-blue-600 to-cyan-600' },
    { icon: Code, title: 'Framework Design', color: 'from-cyan-600 to-blue-600' }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative glass-effect rounded-lg p-8 border border-cyan-500/20">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Dedicated <span className="text-cyan-400 font-semibold">Software Quality Analyst</span> specializing in SaaS product testing, automation, and data validation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Experienced in <span className="text-blue-400 font-semibold">Selenium, Testsigma, API testing</span>, and SQL validation with focus on delivering stable and high-quality releases.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Passionate about building robust automation frameworks and ensuring seamless user experiences through comprehensive testing strategies.
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg glass-effect border border-cyan-500/20 p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${feature.color} p-3 shadow-lg`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
