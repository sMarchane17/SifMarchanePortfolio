import { motion } from "motion/react";
import { useState } from "react";

export function Skills() {
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlipped(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      gradient: "from-blue-500 to-cyan-500",
      description: "Création d'interfaces modernes et réactives"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Java", "Python", "MySQL", "Docker", "REST APIs", "C#"],
      gradient: "from-purple-500 to-pink-500",
      description: "Architecture serveur robuste et scalable"
    },
    {
      title: "Architecture & DevOps",
      icon: "🚀",
      skills: ["Docker", "Kubernetes", "Kafka", "CI/CD", "GitHub Actions", "KrakenD"],
      gradient: "from-orange-500 to-red-500",
      description: "Déploiement et infrastructure"
    },
    {
      title: "Tools",
      icon: "🔧",
      skills: ["Git", "VS Code", "Figma", "Postman", "Expo", "SQL Server"],
      gradient: "from-green-500 to-emerald-500",
      description: "Outils de développement moderne"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Effet de grille 3D en arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-white"
          style={{ textShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
        >
          Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Compétences</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="relative h-96 cursor-pointer"
                onClick={() => toggleFlip(index)}
                animate={{ 
                  rotateY: flipped.includes(index) ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Face avant */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} p-[2px] shadow-2xl`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                  }}
                >
                  <div className="w-full h-full bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center">
                    <motion.div
                      className="text-7xl mb-4"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl mb-3 text-white">{category.title}</h3>
                    <p className="text-gray-400 text-center text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="text-blue-400 text-sm animate-pulse">
                      Cliquez pour voir ➜
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} p-[2px] shadow-2xl`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="w-full h-full bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center">
                    <h3 className="text-xl mb-4 text-white text-center">{category.title}</h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: flipped.includes(index) ? 1 : 0,
                            x: flipped.includes(index) ? 0 : -20,
                          }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/10"
                        >
                          <span className="text-2xl">✨</span>
                          <span className="text-white text-sm">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-blue-400 text-sm animate-pulse mt-4 text-center">
                      Cliquez pour retourner
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Indicateur d'interaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-gray-400"
        >
          <p className="text-lg">💡 Cliquez sur les cartes pour découvrir les technologies</p>
        </motion.div>
      </div>
    </section>
  );
}