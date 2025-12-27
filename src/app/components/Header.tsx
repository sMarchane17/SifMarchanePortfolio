import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-blue-400"
          >
            {"Sif Marchane"}
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex gap-8"
          >
            <motion.button
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              À propos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Compétences
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 flex flex-col gap-4 pb-4 overflow-hidden"
            >
              <motion.button
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                À propos
              </motion.button>
              <motion.button
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Compétences
              </motion.button>
              <motion.button
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Projects
              </motion.button>
              <motion.button
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Contact
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}