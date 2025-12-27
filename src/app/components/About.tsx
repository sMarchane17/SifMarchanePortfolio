import { Code2, Lightbulb, Rocket } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-white"
        >
          À propos de moi
        </motion.h2>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 mb-6"
          >
            Je suis passionné par le génie logiciel depuis plus de 5 ans, que ce soit au cegep ou à l'université je développe des applications web et mobiles puis des solutions logicielles.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            Mon aventure dans le domaine du génie logiciel a commencé par une curiosité sur le fonctionnement des choses, et elle s'est transformée en une carrière dédiée à la résolution de problèmes complexes et à la création d'expériences numériques significatives. Je crois en l'écriture de code propre et maintenable, tout en restant à jour avec les dernières technologies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-900/50 to-blue-950/50 backdrop-blur-sm border border-blue-500/30 shadow-xl"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full mb-4 shadow-lg"
            >
              <Code2 size={32} />
            </motion.div>
            <h3 className="text-xl mb-3 text-white">Code propre</h3>
            <p className="text-gray-300">
              Écriture de code lisible, maintenable et efficace pour des solutions durables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-900/50 to-indigo-950/50 backdrop-blur-sm border border-indigo-500/30 shadow-xl"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-full mb-4 shadow-lg"
            >
              <Lightbulb size={32} />
            </motion.div>
            <h3 className="text-xl mb-3 text-white">Résolution de problèmes</h3>
            <p className="text-gray-300">
              Attaquer les défis complexes avec des solutions créatives et une pensée analytique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-sm border border-purple-500/30 shadow-xl"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full mb-4 shadow-lg"
            >
              <Rocket size={32} />
            </motion.div>
            <h3 className="text-xl mb-3 text-white">Livraison rapide</h3>
            <p className="text-gray-300">
              Livraison de produits de haute qualité efficacement sans compromettre la qualité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}