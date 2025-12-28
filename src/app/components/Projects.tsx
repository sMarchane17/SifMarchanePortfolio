import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Plateforme de préparation aux examens",
      description: "Une solution complète pour la préparation du test Casper pour les futures étudiants en médecine, offrant des ressources d'étude, des tests pratiques et des analyses de performance.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb258ZW58MXx8fHwxNzY1NTkyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "Node.js", "SQL", "Stripe"],
      github: "https://github.com/sMarchane17/Site-Web-ProjetWhiteCoat",
      live: "https://projectwhitecoat.com/",
      icon: "📖",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "App de réservation de voyages",
      description: "Une application mobile intuitive pour réserver des voyages les moins chers, gérer les itinéraires et accéder à des recommandations personnalisées en fonction des préférences de l'utilisateur.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWx8ZW58MXx8fHwxNzY1NTkyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "Firebase", "Expo"],
      github: "https://github.com/sMarchane17/Airbird",
      live: "/coming-soon.html",
      icon: "✈️",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Système de courtage boursier en ligne",
      description: "Un système de courtage boursier en ligne offrant des fonctionnalités avancées de trading, des analyses de marché en temps réel et une interface utilisateur conviviale pour les investisseurs.",
      image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU2NDcxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Java", "SpringBoot", "Docker", "CI/CD"],
      github: "https://github.com/sMarchane17/brokerx",
      live: "/videos/videoDemoBrokerXMuet.mp4",
      icon: "📈",
      gradient: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Effet d'étoiles en arrière-plan */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-white"
          style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
        >
          Projets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Réalisés</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ 
                perspective: '1500px',
                transformStyle: "preserve-3d" 
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={`bg-gradient-to-br ${project.gradient} p-[2px] rounded-xl shadow-2xl`}
                animate={{
                  rotateY: hoveredIndex === index ? 5 : 0,
                  rotateX: hoveredIndex === index ? -5 : 0,
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: hoveredIndex === index 
                    ? '0 30px 60px rgba(59, 130, 246, 0.4)'
                    : '0 10px 30px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className="bg-slate-900 rounded-xl overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Icône flottante */}
                    <motion.div
                      className="absolute top-4 right-4 text-6xl"
                      animate={{
                        y: hoveredIndex === index ? [-10, 0, -10] : 0,
                        rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: hoveredIndex === index ? Infinity : 0,
                      }}
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))',
                      }}
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  <div className="p-6" style={{ transform: 'translateZ(30px)' }}>
                    <motion.h3 
                      className="text-2xl mb-3 text-white"
                      animate={{
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 mb-4 text-sm leading-relaxed"
                      animate={{
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ delay: 0.05 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-white/10 text-white rounded-full text-xs border border-white/20 backdrop-blur-sm"
                          animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                            y: hoveredIndex === index ? -2 : 0,
                          }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.2, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}