import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 pt-16"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Particules flottantes 3D */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Cercles d'arrière-plan avec effet parallaxe */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar 3D Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center md:justify-end"
            >
              <motion.div
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg)`,
                }}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Avatar principal avec effet 3D */}
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-2 shadow-2xl"
                  style={{
                    transform: 'translateZ(50px)',
                    boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="text-9xl"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      👨‍💻
                    </motion.div>
                  </div>
                </div>

                {/* Anneaux orbitaux 3D */}
                <motion.div
                  className="absolute inset-0 border-4 border-blue-400/30 rounded-full"
                  style={{
                    transform: 'rotateX(60deg) translateZ(-30px)',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-0 border-4 border-purple-400/30 rounded-full"
                  style={{
                    transform: 'rotateY(60deg) translateZ(-30px)',
                  }}
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Icônes flottantes autour de l'avatar */}
                {['💻', '🚀', '⚡', '🎨', '🔧', '📱'].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 60}deg) translateY(-200px)`,
                    }}
                    animate={{
                      rotate: [i * 60, i * 60 + 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      {icon}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contenu texte */}
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl mb-6 text-white"
                style={{
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                }}
              >
                Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Sif Marchane</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-blue-200 mb-8"
              >
                Ingénieur Logiciel
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg text-gray-300 mb-12"
              >
                J'étudie en génie logiciel à l'école de technologie supérieure (ÉTS) à Montréal. Passionné par l'informatique, je développe des systèmes qui réponde à des besoins avec efficacité et innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="flex gap-4 justify-center md:justify-start mb-12 flex-wrap"
              >
                <motion.a
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/repos?q=owner%3A%40me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                  style={{
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Github size={20} />
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotateZ: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/sif-marchane-3813b0221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                  style={{
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                  }}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:sifmarchane02@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors shadow-lg"
                  style={{
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Mail size={20} />
                  Email
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotateZ: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cvSifMarchane_Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                  style={{
                    boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)',
                  }}
                >
                  <FileText size={20} />
                  CV
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="flex gap-6 justify-center md:justify-start text-center flex-wrap"
              >
                {[
                  { number: '5+', label: 'Expérience' },
                  { number: '10+', label: 'Projets Terminés' },
                  { number: '20+', label: 'Clients Satisfaits' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="backdrop-blur-sm bg-white/10 px-6 py-4 rounded-lg border border-white/20"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    <div className="text-3xl text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}