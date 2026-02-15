
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  ChevronRight, 
  Users, 
  ShieldCheck,
  Globe,
  Star,
  Zap,
  Layers,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageProps {
  isDarkMode: boolean;
}

const Operations: React.FC<PageProps> = ({ isDarkMode }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const themeColors = {
    card: isDarkMode ? 'bg-[#121212]' : 'bg-white',
    accent: isDarkMode ? 'text-red-600' : 'text-blue-600',
    accentBg: isDarkMode ? 'bg-red-600' : 'bg-blue-600',
    border: isDarkMode ? 'border-red-900/10' : 'border-blue-100',
    subtext: isDarkMode ? 'text-zinc-500' : 'text-slate-500',
    heading: isDarkMode ? 'text-red-600' : 'text-blue-600',
    muted: isDarkMode ? 'bg-zinc-900/30' : 'bg-slate-50',
    borderStrong: isDarkMode ? 'border-zinc-800' : 'border-slate-200'
  };

  const experiences = [
    { 
      title: "AI Engineer", 
      org: "Antz AI", 
      period: "July 2025 - Present",
      brief: "Architecting neural core systems and high-scale AI infrastructure deployments.",
      tags: ["Systems Architecture", "Neural Engines"]
    },
    { 
      title: "AI Intern", 
      org: "Antz AI", 
      period: "Jun 2025 - Aug 2025",
      brief: "Developed optimized inference pipelines and integrated LLM workflows for production environments.",
      tags: ["Pipeline Optimization", "LLMs"]
    },
    { 
      title: "Research Mentor", 
      org: "Next Gen Computing and Networking (NGCN)", 
      period: "Apr 2025 - Jul 2025",
      brief: "Guided peer-led research initiatives in advanced networking and AI-integrated protocols.",
      tags: ["Leadership", "Protocols"]
    },
    { 
      title: "AI Researcher", 
      org: "Next Gen Computing and Networking (NGCN)", 
      period: "Jun 2024 - Apr 2025",
      brief: "Published research on satellite imagery and precision building using AI-driven spatial analysis.",
      tags: ["Spatial Analysis", "Deep Learning"]
    },
    { 
      title: "Back End Developer Intern", 
      org: "Spaarks", 
      period: "March 2025",
      brief: "Engineered robust backend microservices with high emphasis on real-time data synchronization.",
      tags: ["Microservices", "Real-time Data"]
    },
  ];

  const clients = [
    "Zyter TruCare", "Agno", "Second Brain Labs", "Spaarks", 
    "Hyderabad Central University", "Antz AI", "Birla"
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16"
    >
      {/* Page Header */}
      <motion.div variants={itemVariants} className="max-w-4xl">
        <h1 className={`text-5xl sm:text-6xl font-gaming font-black mb-6 ${themeColors.heading}`}>MISSION OPERATIONS</h1>
        <div className="flex items-center gap-4">
          <div className={`h-[1px] flex-grow ${isDarkMode ? 'bg-red-900/30' : 'bg-blue-200'}`}></div>
          <p className={`text-lg font-mono uppercase tracking-widest ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            Professional Journey <span className="mx-2 opacity-30">//</span> <span className="opacity-60 italic font-sans lowercase">Tracing growth through impactful collaborations.</span>
          </p>
        </div>
      </motion.div>

      {/* Main Experience Log */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-10">
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-3 rounded-xl ${themeColors.muted} ${themeColors.accent}`}>
              <Briefcase size={32} />
            </div>
            <h2 className={`font-gaming text-2xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>COMMAND HISTORY</h2>
          </div>

          <div className="relative space-y-12 before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-red-600/50 before:to-transparent">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-16 group">
                <div className={`absolute left-0 top-1.5 w-12 h-12 rounded-2xl ${themeColors.muted} border ${themeColors.border} flex items-center justify-center z-10 transition-all group-hover:border-red-600 group-hover:scale-110 shadow-lg`}>
                  <ShieldCheck className={`${idx === 0 ? themeColors.accent : themeColors.subtext}`} size={24} />
                </div>
                
                <div className={`p-8 rounded-3xl border ${themeColors.card} ${themeColors.border} shadow-xl transition-all hover:bg-zinc-800/10 group-hover:border-red-500/20`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                    <h3 className={`font-gaming text-xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>{exp.title}</h3>
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className={themeColors.accent} />
                      <span className={`text-xs font-mono font-black ${themeColors.accent}`}>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 size={14} className={themeColors.subtext} />
                    <p className={`text-sm font-mono font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>{exp.org}</p>
                  </div>

                  <p className={`text-sm font-sans leading-relaxed mb-6 ${themeColors.subtext}`}>
                    {exp.brief}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className={`text-[9px] font-gaming px-3 py-1 rounded-full border ${themeColors.border} ${themeColors.muted} ${themeColors.subtext}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar Info */}
        <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
          <div className={`p-8 rounded-3xl border ${themeColors.card} ${themeColors.border} shadow-lg`}>
            <div className="flex items-center gap-3 mb-6">
              <Star className={themeColors.accent} size={24} />
              <h3 className={`font-gaming text-lg font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>SPECIALIZATIONS</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Systems Architecture", icon: <Layers size={14} /> },
                { label: "AI Infrastructure", icon: <Zap size={14} /> },
                { label: "Full Stack Ops", icon: <Globe size={14} /> }
              ].map((spec, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-xl ${themeColors.muted} border ${themeColors.border}`}>
                  <span className={`text-xs font-gaming ${isDarkMode ? 'text-zinc-300' : 'text-slate-700'}`}>{spec.label}</span>
                  <div className={themeColors.accent}>{spec.icon}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-8 rounded-3xl border border-dashed ${isDarkMode ? 'border-red-900/40' : 'border-blue-300'} bg-transparent flex flex-col items-center text-center gap-6 shadow-sm`}>
            <div className={`w-12 h-12 rounded-full ${themeColors.accentBg} text-white flex items-center justify-center shadow-lg`}>
              <Zap size={24} />
            </div>
            <div>
              <h4 className={`font-gaming text-sm font-black mb-2 ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>DEPLOYMENT READY</h4>
              <p className={`font-mono text-[11px] leading-relaxed mb-6 ${themeColors.subtext}`}>
                Currently open for high-impact collaborations and architectural challenges.
              </p>
              <Link 
                to="/#comms" 
                onClick={() => {
                   // Ensure navigation to home and then scroll to section
                   setTimeout(() => {
                     document.getElementById('comms')?.scrollIntoView({ behavior: 'smooth' });
                   }, 100);
                }}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-${isDarkMode ? 'red-500' : 'blue-500'} ${isDarkMode ? 'text-red-500' : 'text-blue-500'} font-gaming text-[10px] uppercase hover:bg-${isDarkMode ? 'red-500/10' : 'blue-500/10'} transition-all hover:scale-[1.02] shadow-sm`}
              >
                <MessageCircle size={14} /> Connect with me
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Clients Section */}
      <motion.div variants={itemVariants} className={`p-10 rounded-3xl border ${themeColors.card} ${themeColors.border} shadow-lg overflow-hidden relative`}>
        <div className="flex items-center gap-4 mb-10">
          <Users size={24} className={themeColors.accent} />
          <h3 className={`font-gaming text-2xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>ALLIED FORCES & COLLABORATIONS</h3>
        </div>
        
        <div className="flex overflow-hidden relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, idx) => (
              <div key={idx} className={`flex items-center gap-4 py-4 px-10 rounded-2xl ${themeColors.muted} border ${themeColors.border} font-gaming text-xs uppercase tracking-[0.2em] ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'} transition-colors hover:text-red-500`}>
                <div className={`w-2 h-2 rounded-full ${themeColors.accentBg}`}></div>
                {client}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </motion.div>

    </motion.div>
  );
};

export default Operations;
