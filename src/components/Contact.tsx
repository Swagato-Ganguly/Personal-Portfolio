import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'swagato59@gmail.com',
      link: 'mailto:swagato59@gmail.com',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7890278431',
      link: 'tel:7890278431',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hooghly, West Bengal',
      link: null,
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', gradient: 'from-blue-600 to-blue-400' },
    { icon: Github, label: 'GitHub', gradient: 'from-gray-600 to-gray-400' }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Let's Build Quality Software{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ready to elevate your QA processes? Let's connect and discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <a
                  href={info.link || '#'}
                  className={`group relative block ${!info.link && 'pointer-events-none'}`}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                  <div className="relative glass-effect rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-lg bg-gradient-to-br ${info.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-gray-400 text-sm font-semibold mb-2">{info.label}</h3>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative glass-effect rounded-lg p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send size={20} />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className={`mt-12 flex justify-center gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {socialLinks.map((social, index) => (
              <button
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${social.gradient} rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${social.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <social.icon className="w-full h-full text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm">
            © 2024 Swagato Ganguly. Crafted with precision and passion for quality.
          </p>
        </div>
      </div>
    </section>
  );
}
