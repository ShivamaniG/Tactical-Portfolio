
import React, { useState, useRef, MouseEvent } from 'react';
import { motion, Variants, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Cpu, 
  Code2, 
  Bot, 
  ChevronRight, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Github, 
  Linkedin, 
  Mail, 
  Rocket, 
  MessageSquareQuote,
  Zap,
  Users,
  Send,
  X,
  Terminal,
  Gamepad2,
  Target,
  Box,
  Dumbbell,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageProps {
  isDarkMode: boolean;
}

/**
 * Tactical 3D Tilt Component
 * Provides 3D rotation and dynamic shine based on mouse position
 */
const TiltCard = ({ 
  children, 
  className = "", 
  isDarkMode 
}: { 
  children: React.ReactNode, 
  className?: string, 
  isDarkMode: boolean 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the motion
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  // Shine effect transforms
  const shineX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const shineY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const shineOpacity = useTransform(mouseX, [0, 100], [0, 0.2]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = event.clientX - rect.left;
    const mouseYVal = event.clientY - rect.top;

    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    mouseX.set(mouseXVal);
    mouseY.set(mouseYVal);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const themeColors = {
    card: isDarkMode ? 'bg-[#121212]' : 'bg-white',
    border: isDarkMode ? 'border-red-900/10' : 'border-blue-100',
    hoverBorder: isDarkMode ? 'hover:border-red-600/50' : 'hover:border-blue-600/50',
    shine: isDarkMode ? 'rgba(220, 38, 38, 0.15)' : 'rgba(37, 99, 235, 0.1)'
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all duration-300 ${themeColors.card} border ${themeColors.border} ${themeColors.hoverBorder} rounded-3xl shadow-lg group ${className}`}
    >
      {/* Shine Overlay */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${shineX}px ${shineY}px, ${themeColors.shine}, transparent 80%)`,
        }}
        className="absolute inset-0 pointer-events-none rounded-3xl z-30"
      />
      
      {children}
    </motion.div>
  );
};

const Home: React.FC<PageProps> = ({ isDarkMode }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: '', message: '' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const themeColors = {
    accent: isDarkMode ? 'text-red-600' : 'text-blue-600',
    accentBg: isDarkMode ? 'bg-red-600' : 'bg-blue-600',
    border: isDarkMode ? 'border-red-900/10' : 'border-blue-100',
    subtext: isDarkMode ? 'text-zinc-500' : 'text-slate-500',
    heading: isDarkMode ? 'text-red-600' : 'text-blue-600',
    muted: isDarkMode ? 'bg-zinc-900/30' : 'bg-slate-50',
    buttonHover: isDarkMode ? 'hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]' : 'hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]',
    iconBox: isDarkMode ? 'bg-[#0f0f0f] border-zinc-800' : 'bg-white border-slate-200',
    input: isDarkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
  };

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`System Verification: Testimonial from ${formData.name}`);
    const body = encodeURIComponent(
      `Testimonial Entry:\n\nName: ${formData.name}\nRole/Company: ${formData.role}\n\nMessage:\n${formData.message}\n\n--- End of Signal ---`
    );
    window.location.href = `mailto:shivamanigangarapu@gmail.com?subject=${subject}&body=${body}`;
    setShowForm(false);
    setFormData({ name: '', role: '', message: '' });
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-6 gap-4 [perspective:1000px]"
    >
      {/* HERO SECTION */}
      <motion.div variants={itemVariants} className="md:col-span-4 h-full">
        <TiltCard isDarkMode={isDarkMode} className="h-full p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 [transform:translateZ(50px)]">
            <motion.h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-gaming font-black leading-tight sm:leading-none mb-4 ${themeColors.heading}`}>
              SHIVAMANI<br className="hidden sm:block" /> GANGARAPU
            </motion.h1>
            <p className={`font-mono text-sm sm:text-lg mb-8 uppercase tracking-tight ${themeColors.subtext}`}>
              AI Engineer & Full Stack Developer <span className={themeColors.accent}>|</span> Systems Innovation
            </p>
          </div>
          
          <div className="flex gap-4 mt-8 relative z-10 [transform:translateZ(30px)]">
            {[Code2, Cpu, Bot].map((Icon, i) => (
              <div key={i} className={`p-3 sm:p-4 rounded-2xl ${themeColors.iconBox} border transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 shadow-lg`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${themeColors.accent}`} />
              </div>
            ))}
          </div>
          <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-5 blur-3xl ${themeColors.accentBg} transition-opacity duration-500 group-hover:opacity-10`}></div>
        </TiltCard>
      </motion.div>

      {/* STRATEGIC ACQUISITIONS */}
      <motion.div variants={itemVariants} className="md:col-span-2">
        <TiltCard isDarkMode={isDarkMode} className="h-full p-6 sm:p-8 flex flex-col justify-between">
          <div className="[transform:translateZ(40px)]">
            <div className="flex justify-between items-start mb-6">
              <h2 className={`font-gaming text-lg sm:text-xl font-bold leading-tight ${isDarkMode ? 'text-zinc-200' : 'text-slate-800'}`}>STRATEGIC<br />ACQUISITIONS</h2>
              <GraduationCap className={`w-6 h-6 ${themeColors.accent} transition-transform group-hover:scale-125`} />
            </div>
            <p className={`text-xs sm:text-sm font-mono mb-1 ${themeColors.subtext}`}>Undergraduate @</p>
            <p className={`text-sm sm:text-base font-mono font-bold ${isDarkMode ? 'text-zinc-400' : 'text-slate-700'}`}>IIIT Kurnool '25</p>
          </div>
          <Link to="/about" className={`flex items-center justify-between text-[10px] font-gaming uppercase p-4 mt-6 rounded-2xl ${themeColors.muted} border ${themeColors.border} transition-all duration-300 hover:translate-x-1 group/link [transform:translateZ(20px)]`}>
            <span>Full Intel Dossier</span>
            <ChevronRight className={`w-4 h-4 transition-transform group-hover/link:translate-x-1 ${themeColors.accent}`} />
          </Link>
        </TiltCard>
      </motion.div>

      {/* FIELD OPS PREVIEW */}
      <motion.div variants={itemVariants} className="md:col-span-3">
        <TiltCard isDarkMode={isDarkMode} className="h-full p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6 [transform:translateZ(30px)]">
            <h2 className={`font-gaming text-xl sm:text-2xl font-black ${themeColors.heading}`}>FIELD OPS</h2>
            <Briefcase className={`w-6 h-6 ${themeColors.accent} transition-transform group-hover:rotate-12`} />
          </div>
          <div className="space-y-4 mb-8 [transform:translateZ(10px)]">
            {[
              { role: "AI Engineer", org: "Antz AI" },
              { role: "Research Mentor", org: "NGCN", opacity: "opacity-60" }
            ].map((item, i) => (
              <div key={i} className={`flex justify-between items-center gap-2 ${item.opacity || ''} transition-opacity duration-300 group-hover:opacity-100`}>
                <span className={`text-xs sm:text-sm font-gaming truncate ${isDarkMode ? 'text-zinc-200' : 'text-slate-800'}`}>{item.role}</span>
                <span className={`text-[9px] sm:text-[10px] font-mono shrink-0 ${themeColors.accent}`}>{item.org}</span>
              </div>
            ))}
          </div>
          <Link to="/operations" className={`w-full py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 border border-dashed ${isDarkMode ? 'border-red-900/50 text-red-500' : 'border-blue-300 text-blue-600'} font-gaming text-[10px] uppercase transition-all duration-300 hover:bg-zinc-800/10 hover:border-solid [transform:translateZ(20px)]`}>
            View Mission Log <ChevronRight size={14} />
          </Link>
        </TiltCard>
      </motion.div>

      {/* PROFICIENCIES */}
      <motion.div variants={itemVariants} className="md:col-span-3">
        <TiltCard isDarkMode={isDarkMode} className="h-full p-6 sm:p-8 flex flex-col justify-between">
          <div className="[transform:translateZ(30px)]">
            <div className="flex items-center gap-3 mb-6">
              <Zap size={20} className={`${themeColors.accent} group-hover:animate-pulse`} />
              <h2 className={`font-gaming text-lg sm:text-xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>PROFICIENCIES</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {['AI Systems', 'Full Stack', 'Cloud Ops', 'Data Science'].map((skill, i) => (
                <div key={i} className={`p-2 sm:p-3 rounded-xl ${themeColors.muted} border ${themeColors.border} text-[8px] sm:text-[9px] font-gaming uppercase text-center transition-all duration-300 hover:scale-105 hover:border-opacity-100`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <Link to="/skills" className={`flex items-center justify-between text-[10px] font-gaming uppercase p-4 mt-6 rounded-2xl ${themeColors.muted} border ${themeColors.border} transition-all duration-300 hover:translate-x-1 group/link [transform:translateZ(20px)]`}>
            <span>Full Skill Tree</span>
            <ChevronRight className={`w-4 h-4 transition-transform group-hover/link:translate-x-1 ${themeColors.accent}`} />
          </Link>
        </TiltCard>
      </motion.div>

      {/* HOBBIES & GAMER SECTION */}
      <motion.div variants={itemVariants} className="md:col-span-6">
        <TiltCard isDarkMode={isDarkMode} className="h-full p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative z-10 w-full">
            <div className={`p-4 sm:p-6 rounded-2xl ${isDarkMode ? 'bg-red-950/20 border-red-500/20' : 'bg-blue-100/50 border-blue-500/20'} border shadow-inner flex items-center justify-center relative group/icon [transform:translateZ(40px)]`}>
               <div className="flex flex-col items-center gap-2">
                 <Gamepad2 className={`w-8 h-8 sm:w-10 sm:h-10 ${themeColors.accent} transition-transform duration-500 group-hover/icon:scale-110`} />
                 <Dumbbell className={`w-8 h-8 sm:w-10 sm:h-10 ${themeColors.accent} opacity-50 group-hover/icon:opacity-100 transition-opacity`} />
               </div>
               <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-[#121212]"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left [transform:translateZ(30px)]">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className={`text-[8px] sm:text-[10px] font-gaming px-2 py-0.5 rounded bg-red-600/10 text-red-500 border border-red-500/20 uppercase tracking-tighter`}>Level 99</span>
                <h3 className={`font-gaming text-xl sm:text-2xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>HOBBIES & INTEL</h3>
              </div>
              <p className={`font-mono text-xs sm:text-sm leading-relaxed ${themeColors.subtext}`}>
                Operational downtime engaged. <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>I'm a gamer and a GYM freak</span>. 
                I play <span className={themeColors.accent}>Valorant</span> a lot, with <span className={themeColors.accent}>Minecraft</span> and <span className={themeColors.accent}>GTA</span>.
              </p>
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                <MessageSquare size={14} className={themeColors.accent} />
                <span className={`text-[9px] sm:text-[10px] font-mono font-bold ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>Discord: shivamani.g</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto [transform:translateZ(20px)]">
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#5865F2] text-white font-gaming text-[9px] sm:text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg hover:shadow-indigo-500/40`}
              >
                <Users size={16} /> Link via Discord
              </a>
              <div className="flex gap-2 justify-center">
                {['VAL', 'MC'].map((game, idx) => (
                  <div key={idx} className={`px-2 py-1.5 rounded-lg ${themeColors.muted} ${themeColors.subtext} flex items-center gap-2 border ${themeColors.border} transition-all hover:text-white hover:${themeColors.accentBg}`}>
                    {game === 'VAL' ? <Target size={12} className={themeColors.accent} /> : <Box size={12} className={themeColors.accent} />}
                    <span className="text-[7px] sm:text-[8px] font-gaming">{game}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-700">
            <Gamepad2 size={240} className={themeColors.accent} />
          </div>
        </TiltCard>
      </motion.div>

      {/* VIEW CONQUESTS */}
      <motion.div variants={itemVariants} className="md:col-span-6">
        <TiltCard isDarkMode={isDarkMode} className="h-full p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-4 sm:gap-6 [transform:translateZ(30px)]">
            <div className={`p-3 sm:p-4 rounded-2xl ${themeColors.accentBg} text-white shadow-lg transition-transform group-hover:rotate-12`}>
              <Rocket size={28} />
            </div>
            <div>
              <h3 className={`font-gaming text-xl sm:text-2xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>DEPLOYED ASSETS</h3>
              <p className={`font-mono text-xs sm:text-sm ${themeColors.subtext}`}>Browse high-impact systems.</p>
            </div>
          </div>
          <Link to="/projects" className={`w-full md:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl ${themeColors.accentBg} text-white font-gaming text-xs sm:text-sm font-black uppercase tracking-tight transition-all duration-300 ${themeColors.buttonHover} hover:scale-[1.05] shadow-xl flex items-center justify-center gap-3 [transform:translateZ(20px)]`}>
            ACCESS CONQUESTS <ChevronRight size={18} />
          </Link>
        </TiltCard>
      </motion.div>

      {/* SIGNAL INTERCEPTS */}
      <motion.div variants={itemVariants} className="md:col-span-6">
        <TiltCard isDarkMode={isDarkMode} className="h-full p-8 sm:p-12 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-4 mb-8 [transform:translateZ(40px)]">
            <div className={`p-3 rounded-xl ${themeColors.accentBg} text-white group-hover:animate-bounce`}>
              <MessageSquareQuote size={28} />
            </div>
            <h2 className={`font-gaming text-2xl sm:text-3xl font-black ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>SIGNAL INTERCEPTS</h2>
          </div>

          <div className={`max-w-md w-full p-6 sm:p-8 rounded-3xl border ${themeColors.border} ${themeColors.muted} transition-all duration-300 hover:border-opacity-100 [transform:translateZ(20px)]`}>
            <Users className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-6 ${themeColors.accent} opacity-40 transition-opacity group-hover:opacity-100`} />
            <p className={`font-mono text-xs sm:text-sm mb-8 ${themeColors.subtext}`}>Secure transmission lines are open for verified peer verification.</p>
            <button 
              onClick={() => setShowForm(true)}
              className={`w-full py-4 rounded-xl ${themeColors.accentBg} text-white font-gaming text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-3`}
            >
              INITIATE TRANSMISSION <Send size={14} />
            </button>
          </div>
        </TiltCard>

        {/* Form Modal (Static overlay) */}
        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className={`max-w-lg w-full ${isDarkMode ? 'bg-[#121212]' : 'bg-white'} border ${isDarkMode ? 'border-red-500/30' : 'border-blue-500/30'} rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto`}
              >
                <button 
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-800/20 transition-all hover:rotate-90"
                >
                  <X size={20} className={themeColors.subtext} />
                </button>
                <div className="flex items-center gap-3 mb-6">
                  <Terminal size={18} className={themeColors.accent} />
                  <h3 className={`font-gaming text-lg sm:text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>ENTRY LOG: TESTIMONIAL</h3>
                </div>
                <form onSubmit={handleTestimonialSubmit} className="space-y-4 sm:space-y-6">
                  {['Name', 'Role', 'Message'].map((field) => (
                    <div key={field}>
                      <label className={`block font-gaming text-[9px] uppercase mb-1.5 ${themeColors.subtext}`}>Dossier {field}</label>
                      {field === 'Message' ? (
                        <textarea required rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-all ${isDarkMode ? 'focus:border-red-500' : 'focus:border-blue-500'} font-mono text-xs sm:text-sm resize-none ${themeColors.input}`} placeholder={`Intercept ${field} Data...`} />
                      ) : (
                        <input required type="text" value={field === 'Name' ? formData.name : formData.role} onChange={(e) => setFormData({...formData, [field.toLowerCase()]: e.target.value})} className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-all ${isDarkMode ? 'focus:border-red-500' : 'focus:border-blue-500'} font-mono text-xs sm:text-sm ${themeColors.input}`} placeholder={field === 'Name' ? 'Identified Entity' : 'Position @ Organization'} />
                      )}
                    </div>
                  ))}
                  <button type="submit" className={`w-full py-4 rounded-xl ${themeColors.accentBg} text-white font-gaming text-[10px] sm:text-xs font-bold uppercase transition-all hover:scale-102 active:scale-95 shadow-xl flex items-center justify-center gap-3`}>
                    SEND TRANSMISSION <Send size={14} />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* INITIATE COMMS */}
      <motion.div variants={itemVariants} className="md:col-span-6">
        <TiltCard isDarkMode={isDarkMode} className="h-full p-8 sm:p-10 flex flex-col items-center justify-center text-center py-10">
          <div className="relative z-10 flex flex-col items-center w-full [transform:translateZ(40px)]">
            <h2 className={`font-gaming text-2xl sm:text-3xl font-black mb-8 ${isDarkMode ? 'text-zinc-100' : 'text-slate-800'}`}>INITIATE COMMS</h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/shivamanig" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shivamani-gangarapu/" },
                { icon: <Mail size={20} />, href: "mailto:shivamanigangarapu@gmail.com" },
                { icon: <MessageSquare size={20} />, href: "https://discord.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl ${themeColors.iconBox} border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${themeColors.accent} hover:border-red-500 shadow-sm hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className={`font-mono text-[9px] sm:text-[10px] mt-8 lowercase tracking-widest leading-relaxed ${themeColors.subtext}`}>
              shivamanigangarapu@gmail.com <br className="sm:hidden" />
              <span className="hidden sm:inline mx-2 opacity-30">|</span> 
              discord: shivamani.g
            </p>
          </div>
        </TiltCard>
      </motion.div>
    </motion.div>
  );
};

export default Home;
