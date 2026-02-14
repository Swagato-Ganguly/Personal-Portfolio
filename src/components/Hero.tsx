import { useState, useEffect } from 'react';
import { Download, Mail, Briefcase } from 'lucide-react';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const textSequence = [
    "Hello, I'm Swagato Ganguly",
    "Software Quality Analyst",
    "Automation | Selenium | API Testing | QA Engineer"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textSequence.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-black opacity-90"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="glitch-wrapper mb-8">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {textSequence[textIndex]}
          </h1>
        </div>

        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-cyan-400 mb-4 font-light tracking-wide neon-text">
            Open to QA Automation & SDET Opportunities
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Transforming quality assurance with cutting-edge automation and precision testing
          </p>
        </div>

        <div className={`flex flex-wrap gap-6 justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50">
            <span className="relative z-10 flex items-center gap-2">
              <Briefcase size={20} />
              Hire Me
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
            <span className="flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </span>
          </button>

          <button className="group relative px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
            <span className="flex items-center gap-2">
              <Mail size={20} />
              Contact
            </span>
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-500 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
