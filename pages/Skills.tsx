
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Brain, 
  Code2, 
  Layout, 
  Database, 
  CloudSync, 
  Users, 
  Terminal, 
  Zap, 
  ShieldCheck,
  Binary
} from 'lucide-react';

interface PageProps {
  isDarkMode: boolean;
}

const Skills: React.FC<PageProps> = ({ isDarkMode }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0, y: 15 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const themeColors = {
    card: isDarkMode ? 'bg-[#121212]' : 'bg-white',
    accent: isDarkMode ? 'text-red-600' : 'text-blue-600',
    accentBg: isDarkMode ? 'bg-red-600' : 'bg-blue-600',
    border: isDarkMode ? 'border-red-950/20' : 'border-blue-100',
    subtext: isDarkMode ? 'text-zinc-500' : 'text-slate-500',
    heading: isDarkMode ? 'text-red-600' : 'text-blue-600',
    muted: isDarkMode ? 'bg-zinc-900/50' : 'bg-slate-50',
    iconBox: isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-200'
  };

  const skillGroups = [
    {
      category: "AI / ML Operations",
      icon: <Brain size={24} />,
      skills: ["NLP", "Machine Learning", "Deep Learning", "TensorFlow"],
      span: "md:col-span-3",
      accent: "from-purple-500/20 to-transparent"
    },
    {
      category: "System Core / Backend",
      icon: <Terminal size={24} />,
      skills: ["Flask", "FastAPI", "Node.js"],
      span: "md:col-span-3",
      accent: "from-green-500/20 to-transparent"
    },
    {
      category: "Tactical Frontend",
      icon: <Layout size={24} />,
      skills: ["React", "Tailwind", "HTML", "CSS"],
      span: "md:col-span-2",
      accent: "from-blue-500/20 to-transparent"
    },
    {
      category: "Data Repositories",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB", "Firebase"],
      span: "md:col-span-2",
      accent: "from-orange-500/20 to-transparent"
    },
    {
      category: "DevOps & Deployment",
      icon: <CloudSync size={24} />,
      skills: ["Docker", "Git", "AWS"],
      span: "md:col-span-2",
      accent: "from-cyan-500/20 to-transparent"
    },
    {
      category: "Strategic Assets",
      icon: <ShieldCheck size={24} />,
      skills: ["Psychology", "Leadership", "Problem-solving"],
      span: "md:col-span-6",
      accent: "from-red-500/20 to-transparent"
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="max-w-4xl">
        <h1 className={`text-5xl sm:text-7xl font-gaming font-black mb-6 ${themeColors.heading}`}>SKILL_TREE</h1>
        <div className="flex items-center gap-4">
          <div className={`h-[2px] w-24 ${themeColors.accentBg} transition-all duration-500`}></div>
          <p className={`font-mono text-sm uppercase tracking-widest ${themeColors.subtext}`}>Neural Network Capability & Tactical Specializations</p>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`${group.span} p-8 rounded-[2.5rem] border ${themeColors.card} ${themeColors.border} shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl`}
          >
            {/* Ambient Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl ${themeColors.iconBox} ${themeColors.accent} border shadow-inner transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                  {group.icon}
                </div>
                <h3 className={`font-gaming text-lg font-black tracking-tight ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'} transition-colors duration-300 group-hover:text-red-500`}>
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className={`px-5 py-3 rounded-xl ${themeColors.muted} border ${themeColors.border} flex items-center gap-3 transition-all duration-300 hover:translate-y-[-2px] hover:border-opacity-100 hover:bg-zinc-800/30 cursor-default group/skill`}
                  >
                    <Binary size={12} className={`opacity-40 ${themeColors.accent} transition-transform duration-300 group-hover/skill:rotate-45 group-hover/skill:opacity-100`} />
                    <span className={`font-mono text-xs font-bold ${isDarkMode ? 'text-zinc-200' : 'text-slate-700'} transition-colors duration-300 group-hover/skill:text-white`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Scan Line Decor */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Terminal Footer Info */}
      <motion.div variants={itemVariants} className={`p-8 rounded-3xl border border-dashed ${isDarkMode ? 'border-red-900/40' : 'border-blue-300'} bg-transparent flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-solid hover:bg-zinc-800/5`}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-red-500/20 flex items-center justify-center animate-pulse">
            <Zap className={themeColors.accent} size={18} />
          </div>
          <p className={`font-mono text-xs uppercase tracking-tight ${themeColors.subtext}`}>
            System analysis: 98% specialization depth achieved in core AI/ML categories.
          </p>
        </div>
        <div className="flex gap-2">
           <div className="w-2 h-2 rounded-full bg-red-600 animate-ping"></div>
           <div className="w-2 h-2 rounded-full bg-red-600 opacity-50 transition-opacity duration-300 hover:opacity-100"></div>
           <div className="w-2 h-2 rounded-full bg-red-600 opacity-20 transition-opacity duration-300 hover:opacity-100"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
