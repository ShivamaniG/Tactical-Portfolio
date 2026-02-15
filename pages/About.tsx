
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Shield, 
  Download, 
  UserCheck, 
  GraduationCap, 
  Award, 
  Trophy, 
  FileCheck, 
  ChevronRight,
  BookOpen,
  Code2,
  Calendar,
  Layers
} from 'lucide-react';

interface PageProps {
  isDarkMode: boolean;
}

const About: React.FC<PageProps> = ({ isDarkMode }) => {
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

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="max-w-4xl">
        <h1 className={`text-5xl sm:text-6xl font-gaming font-black mb-4 ${themeColors.heading}`}>MISSION INTEL</h1>
        <div className="flex items-center gap-4">
          <div className={`h-[1px] flex-grow ${isDarkMode ? 'bg-red-900/30' : 'bg-blue-200'}`}></div>
          <p className={`text-lg font-mono uppercase tracking-widest ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            My Learning Path <span className="mx-2 opacity-30">//</span> <span className="opacity-60 italic font-sans lowercase">Where curiosity met growth.</span>
          </p>
        </div>
      </motion.div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Profile Dossier (Left Column) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 lg:sticky lg:top-28"
        >
          <div className={`p-8 rounded-3xl border ${themeColors.card} ${themeColors.border} flex flex-col items-center text-center shadow-2xl relative overflow-hidden`}>
            {/* Ambient Background Glow */}
            <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full opacity-10 blur-2xl ${themeColors.accentBg}`}></div>
            
            <div className={`w-36 h-36 rounded-full border-4 ${themeColors.border} p-1.5 mb-6 relative group z-10`}>
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${isDarkMode ? 'from-red-950 to-zinc-900' : 'from-blue-100 to-slate-50'} flex items-center justify-center border ${isDarkMode ? 'border-red-500/20' : 'border-blue-500/20'}`}>
                <UserCheck className={`w-14 h-14 ${themeColors.accent}`} />
              </div>
            </div>
            
            <h2 className={`text-3xl font-gaming font-black mb-1 ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>SHIVAMANI G.</h2>
            <p className={`text-xs font-mono uppercase tracking-[0.3em] mb-8 ${themeColors.subtext}`}>ID: ENGR-2025-01</p>
            
            <div className="w-full space-y-4 text-left z-10">
              <div className={`p-5 rounded-2xl ${themeColors.muted} border ${themeColors.border}`}>
                <p className={`text-[10px] font-gaming uppercase ${themeColors.subtext} mb-1 tracking-wider`}>System Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="font-mono text-sm text-green-500 font-bold uppercase">Operational // Active</p>
                </div>
              </div>
              <div className={`p-5 rounded-2xl ${themeColors.muted} border ${themeColors.border}`}>
                <p className={`text-[10px] font-gaming uppercase ${themeColors.subtext} mb-1 tracking-wider`}>Prime Objective</p>
                <p className={`font-mono text-sm ${isDarkMode ? 'text-zinc-200' : 'text-slate-700'} font-bold`}>Full Stack AI Systems</p>
              </div>
            </div>

            <button className={`mt-8 w-full py-5 rounded-2xl ${themeColors.accentBg} text-white font-gaming text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:opacity-90 transition-all hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.3)] group z-10`}>
              <Download size={16} className="group-hover:translate-y-1 transition-transform" /> Download Dossier
            </button>
          </div>
        </motion.div>

        {/* Intelligence Grid (Right Columns) */}
        <motion.div variants={containerVariants} className="lg:col-span-8 space-y-8">
          
          {/* Education Block */}
          <motion.div 
            variants={itemVariants}
            className={`p-10 rounded-3xl border ${themeColors.card} ${themeColors.border} shadow-xl relative overflow-hidden`}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className={`p-3 rounded-xl ${themeColors.muted} ${themeColors.accent}`}>
                <GraduationCap size={32} />
              </div>
              <h3 className={`font-gaming text-3xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>EDUCATION TIMELINE</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-800/50">
              {[
                {
                  title: "Bachelor of Technology in Computer Science",
                  org: "IIT Kurnool",
                  period: "2021 - 2025",
                  desc: "Specializing in Intelligent Systems and Distributed Architecture"
                },
                {
                  title: "Intermediate (XII)",
                  org: "Narayana Junior College",
                  period: "2019 - 2021",
                  desc: "Mathematics, Physics, Chemistry (MPC) Stream"
                },
                {
                  title: "ICSE Class X",
                  org: "Johnson Grammar School",
                  period: "2019",
                  desc: "Foundational secondary education with distinction"
                }
              ].map((edu, idx) => (
                <div key={idx} className="relative pl-12 group">
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 ${themeColors.borderStrong} ${themeColors.card} flex items-center justify-center z-10 transition-all group-hover:border-red-600 group-hover:scale-110 shadow-sm`}>
                    <div className={`w-2 h-2 rounded-full ${idx === 0 ? themeColors.accentBg : (isDarkMode ? 'bg-zinc-700' : 'bg-slate-300')}`}></div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h4 className={`font-gaming text-lg font-black tracking-tight ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>{edu.title}</h4>
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className={themeColors.accent} />
                      <span className={`text-xs font-mono font-black ${themeColors.accent}`}>{edu.period}</span>
                    </div>
                  </div>
                  <p className={`text-sm font-mono font-bold mb-2 ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>{edu.org}</p>
                  <p className={`text-sm font-sans opacity-60 leading-relaxed ${themeColors.subtext}`}>{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications Block */}
            <motion.div 
              variants={itemVariants}
              className={`p-8 rounded-3xl border ${themeColors.card} ${themeColors.border} shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 rounded-lg ${themeColors.muted} ${themeColors.accent}`}>
                  <FileCheck size={24} />
                </div>
                <h3 className={`font-gaming text-xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>CERTIFICATIONS</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Introduction to AWS and CI/CD Pipelines", issuer: "Udemy, 2025", status: "Verified" },
                  { name: "Mathematics of Machine Learning", issuer: "NPTEL, 2024", status: "Active" },
                  { name: "Working ..", issuer: "AWS Training & Certs, 2025", status: "In Progress" }
                ].map((cert, i) => (
                  <div key={i} className={`p-5 rounded-2xl ${themeColors.muted} border ${themeColors.border} group transition-all hover:border-red-500/30 hover:bg-zinc-800/20`}>
                    <p className={`text-sm font-gaming font-bold mb-2 leading-tight ${isDarkMode ? 'text-zinc-200' : 'text-slate-800'}`}>{cert.name}</p>
                    <div className="flex justify-between items-center">
                      <p className={`text-[10px] font-mono uppercase tracking-wider ${themeColors.subtext}`}>{cert.issuer}</p>
                      <span className={`text-[9px] font-gaming font-bold uppercase px-3 py-1 rounded-full border ${cert.status.includes('Progress') || cert.status.includes('Working') ? 'border-yellow-500/50 text-yellow-500 bg-yellow-500/5' : 'border-green-500/50 text-green-500 bg-green-500/5'}`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Block */}
            <motion.div 
              variants={itemVariants}
              className={`p-8 rounded-3xl border ${themeColors.card} ${themeColors.border} shadow-lg relative overflow-hidden group`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 rounded-lg ${themeColors.muted} ${themeColors.accent}`}>
                  <Trophy size={24} />
                </div>
                <h3 className={`font-gaming text-xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>ACHIEVEMENTS</h3>
              </div>
              <div className="space-y-6 relative z-10">
                {[
                  { 
                    icon: <BookOpen size={16} />, 
                    title: "CISIS 2025 Publication", 
                    desc: "Hydro-Net – AI and Satellite Imagery for Precision Canal Building" 
                  },
                  { 
                    icon: <Code2 size={16} />, 
                    title: "Algorithm Specialist", 
                    desc: "Solved 160+ problems in DSA and SQL on Leetcode & HackerRank" 
                  },
                  { 
                    icon: <Award size={16} />, 
                    title: "Amazon ML Challenge '24", 
                    desc: "Top 100 – Built OCR-based image entity recognition model" 
                  },
                  { 
                    icon: <Shield size={16} />, 
                    title: "Volkswagen i.mobilothon 4.0", 
                    desc: "Finalist – Vehicle maintenance prediction with Explainable AI" 
                  }
                ].map((ach, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`${themeColors.accent} shrink-0 mt-1 transition-transform group-hover:rotate-12`}>{ach.icon}</div>
                    <div>
                      <h5 className={`text-xs font-gaming font-black mb-1 ${isDarkMode ? 'text-zinc-200' : 'text-slate-800'}`}>{ach.title}</h5>
                      <p className={`text-[13px] font-mono leading-relaxed ${themeColors.subtext}`}>{ach.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`absolute -right-6 -bottom-6 opacity-[0.03] ${themeColors.accent} group-hover:scale-110 transition-transform duration-700`}>
                <Trophy size={160} />
              </div>
            </motion.div>
          </div>

          {/* Tactical Directive (Footer Block) */}
          <motion.div 
            variants={itemVariants}
            className={`p-10 rounded-3xl border border-dashed ${isDarkMode ? 'border-red-900/40' : 'border-blue-300'} bg-transparent flex flex-col md:flex-row items-center gap-8 shadow-inner`}
          >
            <div className={`w-16 h-16 rounded-2xl ${themeColors.muted} border ${themeColors.border} flex items-center justify-center shrink-0 shadow-lg`}>
              <Layers className={themeColors.accent} size={32} />
            </div>
            <div className="text-center md:text-left">
              <h4 className={`font-gaming text-xl font-black mb-2 ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>CORE DIRECTIVE 01</h4>
              <p className={`font-mono text-sm italic tracking-tight leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                "The objective is not to build better tools, but to redefine what humanity can achieve with those tools at their disposal."
              </p>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
