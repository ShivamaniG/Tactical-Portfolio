
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Zap, 
  Globe, 
  Cpu, 
  Linkedin, 
  FileText, 
  Code2, 
  Bot,
  ChevronRight,
  Terminal
} from 'lucide-react';

interface PageProps {
  isDarkMode: boolean;
}

const Projects: React.FC<PageProps> = ({ isDarkMode }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
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
    hoverBorder: isDarkMode ? 'hover:border-red-600/40' : 'hover:border-blue-600/40',
    subtext: isDarkMode ? 'text-zinc-500' : 'text-slate-500',
    heading: isDarkMode ? 'text-red-600' : 'text-blue-600',
    muted: isDarkMode ? 'bg-zinc-900/50' : 'bg-slate-50',
    iconBox: isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-200'
  };

  const projectList = [
    {
      title: "Hydro-Net",
      desc: "Integrating AI and Satellite Imagery for Precision Canal Building using segmentation and path finding modules. Research published at CISIS 2025.",
      tags: ["Python", "U-Net", "AI Research"],
      icon: <Layers className="w-6 h-6" />,
      span: "md:col-span-4",
      links: [
        { icon: <FileText size={16} />, label: "Springer", url: "https://link.springer.com/chapter/10.1007/978-3-031-96099-4_7" },
        { icon: <Linkedin size={16} />, label: "Post", url: "https://www.linkedin.com/posts/shivamani-gangarapu_ngcn-aiforgood-satelliteimagery-share-7356310158886518785-v0xn" }
      ]
    },
    {
      title: "Policy SIM",
      desc: "An advanced simulation engine developed during the Google Hackathon for policy analysis and impact forecasting.",
      tags: ["Google Hackathon", "LLMs", "Analysis"],
      icon: <Cpu className="w-6 h-6" />,
      span: "md:col-span-2",
      links: [
        { icon: <Github size={16} />, label: "Repo", url: "https://github.com/AdityaVN5/PolicySim-v1" },
        { icon: <Linkedin size={16} />, label: "Insight", url: "https://www.linkedin.com/feed/update/urn:li:activity:7410005897474670592/?rcm=ACoAAEWhepABxdZecJKGAhv2lpHmJqr-17ti9Dg" }
      ]
    },
    {
      title: "NGCN Infrastructure",
      desc: "Full-cycle maintenance and architectural overhaul of the Next Gen Computing and Networking (NGCN) official platform.",
      tags: ["Web Architecture", "NextJS", "Optimization"],
      icon: <Globe className="w-6 h-6" />,
      span: "md:col-span-3",
      links: [
        { icon: <ExternalLink size={16} />, label: "Live", url: "https://ngcn.co.in/" }
      ]
    },
    {
      title: "Agno Intelligence",
      desc: "Open source contributor to Agno, developing specialized agents for autonomous system reasoning and task execution.",
      tags: ["Open Source", "Agents", "Agno"],
      icon: <Bot className="w-6 h-6" />,
      span: "md:col-span-3",
      links: [
        { icon: <Code2 size={16} />, label: "Contribution", url: "https://github.com/agno-ai/agno" }
      ]
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h1 className={`text-5xl sm:text-7xl font-gaming font-black mb-4 ${themeColors.heading}`}>PROJECTS</h1>
          <div className="flex items-center gap-4">
            <div className={`h-[2px] w-24 ${themeColors.accentBg} transition-all duration-500 group-hover:w-32`}></div>
            <p className={`font-mono text-sm uppercase tracking-widest ${themeColors.subtext}`}>Archive of completed work and technical builds.</p>
          </div>
        </div>
        
        <a 
          href="https://github.com/shivamanig" 
          target="_blank" 
          rel="noreferrer"
          className={`group flex items-center gap-4 p-6 rounded-2xl border ${themeColors.card} ${themeColors.border} shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-2xl`}
        >
          <div className={`p-3 rounded-xl ${themeColors.muted} ${themeColors.accent} group-hover:bg-red-600 group-hover:text-white transition-all duration-300`}>
            <Github size={24} />
          </div>
          <div>
            <p className={`text-[10px] font-gaming uppercase tracking-widest ${themeColors.subtext}`}>Repository Link</p>
            <p className={`font-mono text-sm font-bold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              github.com/shivamanig <ChevronRight size={14} className={`${themeColors.accent} transition-transform group-hover:translate-x-1`} />
            </p>
          </div>
        </a>
      </motion.div>

      {/* Project Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-6 gap-6"
      >
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`${project.span} p-10 rounded-[2.5rem] border ${themeColors.card} ${themeColors.border} ${themeColors.hoverBorder} shadow-xl group relative overflow-hidden transition-all duration-300 hover:-translate-y-1`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute -right-12 -top-12 w-48 h-48 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl rounded-full ${themeColors.accentBg}`}></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className={`p-4 rounded-2xl ${themeColors.iconBox} ${themeColors.accent} shadow-inner transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                {project.icon}
              </div>
              <div className="flex gap-2">
                {project.links.map((link, lIdx) => (
                  <a 
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-gaming uppercase ${themeColors.muted} ${themeColors.subtext} border ${themeColors.border} transition-all duration-300 hover:text-white hover:${themeColors.accentBg} group/link`}
                  >
                    {link.icon}
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <h3 className={`text-2xl font-gaming font-black mb-4 tracking-tighter ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'} transition-colors duration-300 group-hover:text-red-500`}>{project.title}</h3>
            <p className={`text-sm mb-8 font-mono leading-relaxed h-16 line-clamp-3 ${themeColors.subtext}`}>{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {project.tags.map(tag => (
                <span key={tag} className={`text-[9px] font-gaming uppercase px-3 py-1 rounded-full border ${themeColors.border} ${themeColors.subtext} bg-transparent tracking-widest transition-all duration-300 hover:border-opacity-100 hover:bg-zinc-800/20`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.01] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] group-hover:opacity-[0.02] transition-opacity"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div 
        variants={itemVariants}
        className={`p-10 rounded-3xl border border-dashed ${isDarkMode ? 'border-red-900/40' : 'border-blue-300'} bg-transparent flex flex-col items-center justify-center text-center gap-6 group transition-all duration-500 hover:border-solid hover:bg-zinc-800/5`}
      >
        <Terminal className={`w-12 h-12 ${themeColors.accent} group-hover:animate-pulse transition-transform duration-500 group-hover:scale-110`} />
        <div>
          <h4 className={`font-gaming text-xl font-black mb-2 ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>OPEN TO NEW PROJECTS</h4>
          <p className={`font-mono text-xs uppercase tracking-widest ${themeColors.subtext}`}>Interested in collaboration? I am available for impactful project work.</p>
        </div>
        <a 
          href="mailto:shivamanigangarapu@gmail.com"
          className={`px-8 py-4 rounded-xl ${themeColors.accentBg} text-white font-gaming text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-110 hover:rotate-1 shadow-lg active:scale-95`}
        >
          Contact Me
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
