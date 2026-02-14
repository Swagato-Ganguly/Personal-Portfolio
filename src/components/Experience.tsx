import { useState, useEffect, useRef } from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
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

  const achievements = [
    'Automation testing with Selenium WebDriver',
    'API validation using Postman & RestAssured',
    'Built scalable Selenium framework with TestNG',
    'Agile testing in sprint cycles',
    'Defect tracking & bug lifecycle management',
    'SQL validation for data integrity'
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

            <div className="relative ml-20">
              <div className="absolute -left-[3.25rem] top-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center border-4 border-gray-900 shadow-lg shadow-cyan-500/50">
                <Building2 className="text-white" size={28} />
              </div>

              <div className="group relative mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative glass-effect rounded-lg p-8 border border-cyan-500/20">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Software Quality Analyst</h3>
                    <p className="text-cyan-400 text-xl font-semibold mb-2">SuperProcure</p>
                    <p className="text-gray-400">QA automation and ensuring product quality</p>
                  </div>

                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                        style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle2 className="text-cyan-400" size={24} />
                        </div>
                        <p className="text-gray-300 text-lg">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-cyan-500/20">
                    <div className="flex flex-wrap gap-3">
                      {['Selenium', 'Testsigma', 'Java', 'SQL', 'Postman', 'JIRA', 'TestNG'].map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
