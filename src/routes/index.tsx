import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import logoImage from "@/assets/vidhi-logo.png";
import doodleImage from "@/assets/vidhi-doodle.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vidhi Bhutia | Software, AI/ML, Research, Product" },
      { name: "description", content: "Vidhi Bhutia's portfolio: software development, AI/ML, research, product thinking, and practical projects built in simple English." },
      { property: "og:title", content: "Vidhi Bhutia | Software, AI/ML, Research, Product" },
      { property: "og:description", content: "A recruiter-friendly portfolio showing software work, AI/ML projects, research, and product thinking." },
    ],
    links: [
      { rel: "icon", href: logoImage, type: "image/png" },
      { rel: "apple-touch-icon", href: logoImage },
    ],
  }),
  component: Portfolio,
});

const RESUME = "https://drive.google.com/file/d/1BJBxvoqT7zoj_8WRUJvrPRMN5FvsaXXN/view";
const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/vidhibhutia2407@gmail.com";

/* ====================== DOODLES ====================== */
const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
  </svg>
);
const Arrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 30 Q 30 5, 60 30 T 92 32" />
    <path d="M82 22 L 94 32 L 84 42" />
  </svg>
);
const Star = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2l2.5 6.5L21 9l-5 4 1.5 7L12 17l-5.5 3L8 13 3 9l6.5-.5L12 2z" />
  </svg>
);
const Heart = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 6.5 4 8.5 4 10.5 5 12 7c1.5-2 3.5-3 5.5-3C21 4 23.5 8 21.5 12 19 16.5 12 21 12 21z" />
  </svg>
);
const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 10 Q 12 0 22 10 T 42 10 T 62 10 T 82 10 T 102 10 T 122 10 T 142 10 T 162 10 T 182 10 T 198 10" />
  </svg>
);
const Bulb = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12c1 1 1.5 2 1.5 3h5c0-1 .5-2 1.5-3a7 7 0 00-4-12z" />
  </svg>
);
const Coffee = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h14v6a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM17 10h2a2 2 0 010 4h-2M7 2c0 2 2 2 2 4M11 2c0 2 2 2 2 4" />
  </svg>
);
const Flower = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="20" cy="20" r="3" />
    <ellipse cx="20" cy="9" rx="4" ry="6" /><ellipse cx="20" cy="31" rx="4" ry="6" />
    <ellipse cx="9" cy="20" rx="6" ry="4" /><ellipse cx="31" cy="20" rx="6" ry="4" />
  </svg>
);
const Cloud = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M8 20 Q 2 20 2 14 Q 2 9 8 9 Q 9 3 16 3 Q 23 3 24 9 Q 32 9 32 15 Q 32 20 26 20 Z" />
  </svg>
);
const Plane = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22 L 36 6 L 30 26 L 22 22 L 16 30 L 14 23 Z" />
  </svg>
);
const Pen = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 30 30" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M3 27 L 6 19 L 22 3 L 27 8 L 11 24 Z M 18 7 L 23 12" />
  </svg>
);
const Moon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M20 14.5A8.5 8.5 0 119.5 4a7 7 0 0010.5 10.5z"/></svg>
);
const Sun = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4"/>
  </svg>
);


/* ====================== HELPERS ====================== */
function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Tilt3D({ children, className = "", max = 14 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  return (
    <motion.div
      ref={ref}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        ry.set(x * max);
        rx.set(-y * max);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ children, href, download, variant = "solid", target, rel }: { children: React.ReactNode; href: string; download?: boolean; variant?: "solid" | "outline"; target?: string; rel?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const base = "relative inline-flex items-center gap-3 rounded-full px-7 py-4 font-serif text-lg transition-colors";
  const styles = variant === "solid"
    ? "bg-wine text-paper hover:bg-burgundy"
    : "border-2 border-burgundy text-burgundy bg-paper/60 hover:bg-burgundy hover:text-paper";
  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.3, y: (e.clientY - (r.top + r.height / 2)) * 0.3 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}

/* ====================== PAGE ====================== */
function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = saved === "dark";
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <main className="paper-texture text-ink overflow-x-hidden">
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-burgundy via-gold to-wine origin-left z-50" />
      <FloatingDoodles />
      <Nav dark={dark} toggleTheme={toggleTheme} />
      <Hero />
      <Marquee />
      <Education />
      <WorkJourney />
      <SelectedWork />
      <ResearchLab />
      <Impact />
      <Playground />
      <WallOfWins />
      <Contact />
      <Footer />
    </main>
  );
}

/* ====================== FLOATING BG DOODLES ====================== */
function FloatingDoodles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[18%] left-[4%] text-gold/40">
        <Star className="w-6 h-6" />
      </motion.div>
      <motion.div animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[42%] right-[5%] text-rose/40">
        <Sparkle className="w-5 h-5" />
      </motion.div>
      <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute top-[70%] left-[8%] text-burgundy/30">
        <Heart className="w-5 h-5" />
      </motion.div>
      <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-[30%] right-[12%] text-gold/30">
        <Flower className="w-10 h-10" />
      </motion.div>
      <motion.div animate={{ x: [0, 30, 0], y: [0, -10, 0] }} transition={{ duration: 14, repeat: Infinity }} className="absolute top-[55%] left-[45%] text-rose/30">
        <Cloud className="w-12 h-8" />
      </motion.div>
      <motion.div animate={{ x: [0, 60, 0], y: [0, -20, 0], rotate: [0, 15, 0] }} transition={{ duration: 18, repeat: Infinity }} className="absolute top-[85%] right-[20%] text-burgundy/30">
        <Plane className="w-10 h-10" />
      </motion.div>
    </div>
  );
}

/* ====================== NAV ====================== */
function Nav({ dark, toggleTheme }: { dark: boolean; toggleTheme: () => void }) {
  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-6">
      <div className="mx-auto max-w-6xl flex items-center justify-between rounded-full border border-border/60 bg-paper/75 backdrop-blur px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoImage} alt="Vidhi logo" className="h-10 w-10 rounded-full object-cover ring-1 ring-burgundy/15 shadow-sm" />
          <span className="font-serif text-base italic tracking-wide">Vidhi</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ["Education", "#education"],
            ["Experience", "#experience"],
            ["Work", "#work"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Message", "#contact"],
          ].map(([l, h]) => (
            <a key={l} href={h} className="hover:text-burgundy transition-colors relative group">
              {l}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-burgundy transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-border bg-paper flex items-center justify-center text-burgundy hover:bg-burgundy hover:text-paper transition-colors overflow-hidden relative"
          >
            <AnimatePresence mode="wait" initial={false}>
              {dark ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }} className="absolute">
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }} className="absolute">
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <a href={RESUME} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 text-sm rounded-full border border-burgundy text-burgundy px-4 py-1.5 hover:bg-burgundy hover:text-paper transition-colors">
            ↓ Résumé
          </a>
          <a href="#contact" className="text-sm rounded-full bg-wine text-paper px-4 py-1.5 hover:bg-burgundy transition-colors">Say hello</a>
        </div>
      </div>
    </header>
  );
}

/* ====================== HERO ====================== */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative">
          <Reveal>
            <p className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-rose">
              <span className="h-px w-10 bg-rose" /> Software · AI/ML · Product · Research
            </p>
          </Reveal>

          <h1 className="mt-6 font-serif text-[14vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.92] tracking-tight">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="block">
              Vidhi
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }} className="block italic text-burgundy relative">
              Bhutia<span className="text-gold">.</span>
              <Squiggle className="absolute -bottom-4 left-0 w-48 text-gold/70" />
            </motion.span>
          </h1>

          <Reveal delay={0.3}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink/80">
              I build software, AI/ML tools, and research-driven products. I like turning messy ideas into clear
              systems that are easy to use, easy to explain, and useful in real work.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              {[
                ["Based in", "Pune, IN"],
                ["Studying", "CSE & Business Systems"],
                ["CGPA", "9.04 / 10"],
                ["Focus", "AI · Build · Research"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-xs uppercase tracking-widest text-rose">{k}</div>
                  <div className="mt-1 font-serif text-lg">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* right collage */}
        <div className="lg:col-span-5 relative h-[560px]">
          <Tilt3D max={18} className="absolute top-0 right-0 w-72">
            <motion.div style={{ y: y1 }} className="polaroid rotate-[5deg]">
              <div className="aspect-[4/5] relative overflow-hidden bg-paper">
                <img src={doodleImage} alt="Hand-drawn portrait of Vidhi" className="h-full w-full object-cover" loading="eager" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-paper/8 via-transparent to-transparent" />
              </div>
              <div className="mt-3 font-hand text-xl text-ink/80 text-center">- the doodle version</div>
            </motion.div>
          </Tilt3D>

          <Tilt3D max={16} className="absolute bottom-4 left-0 w-56">
            <motion.div style={{ y: y2 }} className="polaroid rotate-[-9deg]">
              <div className="aspect-square ivory-texture relative overflow-hidden flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="font-script text-burgundy text-3xl leading-tight">building<br/>day by day.</div>
                </div>
              </div>
              <div className="mt-3 font-hand text-xl text-ink/80 text-center">notes, 2026</div>
            </motion.div>
          </Tilt3D>

          <div className="tape w-28 h-7 top-[-6px] right-24 rotate-[-12deg]" />
          <div className="tape w-24 h-6 bottom-2 left-10 rotate-[14deg]" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 120 }}
            className="absolute bottom-28 right-2 w-28 h-28"
          >
            <motion.svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-burgundy" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <defs>
                <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="9" fill="currentColor" fontFamily="serif" letterSpacing="2">
                <textPath href="#circ">VIDHI · BHUTIA · BUILDER · RESEARCHER · CREATOR · </textPath>
              </text>
            </motion.svg>
            <div className="absolute inset-3 rounded-full wax-seal p-2.5">
              <img src={logoImage} alt="Vidhi logo mark" className="h-full w-full rounded-full object-cover" />
            </div>
          </motion.div>

          <Sparkle className="absolute top-12 left-12 w-4 h-4 text-gold animate-pulse" />
          <Star className="absolute top-1/2 right-2 w-4 h-4 text-burgundy/60" />
          <Arrow className="absolute top-32 -left-8 w-20 text-rose/50 -rotate-12 hidden lg:block" />
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -bottom-2 right-32 text-burgundy/60">
            <Pen className="w-8 h-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ====================== MARQUEE ====================== */
function Marquee() {
  const words = ["Engineer", "✦", "Researcher", "✦", "Builder", "✦", "Designer", "✦", "Tinkerer", "✦", "Product Manager", "✦"];
  return (
    <section className="border-y border-border/60 bg-wine text-paper py-6 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap font-serif text-3xl md:text-4xl italic"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className={w === "✦" ? "text-gold not-italic" : ""}>{w}</span>
        ))}
      </motion.div>
    </section>
  );
}

/* ====================== EDUCATION ====================== */
function Education() {
  const items = [
    { year: "2019", title: "Class X · CBSE", place: "Delhi Public School, Katni", note: "Scored 92.6%. Where I first fell in love with making things.", icon: "🏫", tilt: "-2deg" },
    { year: "2021", title: "Class XII · CBSE", place: "Scindia Kanya Vidyalaya, Gwalior", note: "Scored 95.8%. Boarding school taught me focus, notebooks, and curiosity.", icon: "📚", tilt: "1.5deg" },
    { year: "2022 → Present", title: "B.Tech · CSE & Business Systems", place: "Vellore Institute of Technology", note: "CGPA 9.04 - where engineering met business and research.", icon: "🎓", tilt: "-1deg" },
    { year: "Jan → Apr 2026", title: "Project Management Fellowship", place: "NextLeap", note: "An 8-week cohort fellowship focused on product thinking, user research, roadmaps, prioritization, mentorship, and interview practice.", icon: "📐", tilt: "2deg", featured: true },
  ];

  return (
    <section id="education" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-hand text-2xl text-rose flex items-center gap-3">- chapter one <Bulb className="w-5 h-5" /></p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Learning, <span className="italic text-burgundy">in classrooms.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/75">School, campus, and a PM fellowship shaped how I plan work, make decisions, and ship things with care.</p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Tilt3D max={10}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className={`relative ivory-texture border ${s.featured ? "border-burgundy" : "border-border"} rounded-sm p-7 shadow-[0_15px_45px_-18px_rgba(66,25,36,0.35)]`}
                  style={{ transform: `rotate(${s.tilt})` }}
                >
                  <div className="tape w-20 h-5 -top-2 left-6 rotate-[-6deg]" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-script text-4xl text-burgundy/80">{s.year}</div>
                      <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                      <p className="mt-1 text-rose italic">{s.place}</p>
                    </div>
                    <div className="text-4xl" aria-hidden>{s.icon}</div>
                  </div>
                  <p className="mt-4 text-ink/75 font-serif">{s.note}</p>
                  {s.featured && (
                    <div className="absolute -top-3 -right-3 stamp bg-paper text-burgundy text-[10px]">new · 2026</div>
                  )}
                </motion.div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>

        <Squiggle className="mx-auto mt-16 w-64 text-gold/60" />
      </div>
    </section>
  );
}

/* ====================== WORK JOURNEY ====================== */
function WorkJourney() {
  const stops = [
    { year: "May → Jul 2024", title: "Summer Research Intern", place: "NIT Rourkela", note: "Worked on a research project under the CSE department, exploring algorithms and writing clean Python code.", tilt: "-1deg" },
    { year: "Jun → Aug 2024", title: "Data & Research Intern", place: "Northstar Impact Solution · Remote", note: "Studied how 20+ companies handle sustainability. Built Power BI dashboards leadership actually used.", tilt: "1deg" },
    { year: "May → Jul 2025", title: "Technology Analyst Intern", place: "Morgan Stanley · Bengaluru", note: "Built an ML dashboard that found bugs faster. Read 50,000+ logs a day so people didn't have to.", tilt: "-1.5deg" },
    { year: "Feb 2026 → Present", title: "IT & Software Intern", place: "People Prudent · Pune", note: "Building a real workforce monitoring product used by enterprise teams.", tilt: "1.5deg" },
  ];

  return (
    <section id="experience" className="relative py-32 px-6 ivory-texture border-y border-border">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-hand text-2xl text-rose flex items-center gap-3">- chapter two <Coffee className="w-5 h-5" /></p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Working, <span className="italic text-burgundy">in the real world.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/75">Four internships across research, finance, sustainability, and product. One simple goal - make data useful.</p>
        </Reveal>

        <div className="mt-20 relative">
          <svg className="absolute left-1/2 top-0 h-full -translate-x-1/2 hidden md:block text-rose/50" width="20" height="100%" viewBox="0 0 20 1000" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6">
            <path d="M10 0 Q 0 250 10 500 T 10 1000" />
          </svg>

          <div className="space-y-16">
            {stops.map((s, i) => (
              <Reveal key={s.year} delay={i * 0.05}>
                <div className={`md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`relative ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <div className="font-script text-5xl text-burgundy/80">{s.year}</div>
                  </div>
                  <Tilt3D max={10}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14 }}
                      className="relative bg-paper border border-border rounded-sm p-7 shadow-[0_18px_50px_-18px_rgba(66,25,36,0.35)]"
                      style={{ transform: `rotate(${s.tilt})` }}
                    >
                      <div className="tape w-20 h-5 -top-2 left-6 rotate-[-6deg]" />
                      <h3 className="font-serif text-2xl">{s.title}</h3>
                      <p className="mt-1 text-rose italic">{s.place}</p>
                      <p className="mt-3 text-ink/75">{s.note}</p>
                    </motion.div>
                  </Tilt3D>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== SELECTED WORK ====================== */
function SelectedWork() {
  const cases = [
    {
      no: "01",
      title: "Workforce Monitoring Platform",
      where: "People Prudent · 2026",
      problem: "Teams needed work tracking without making people feel watched.",
      thinking: "Keep the system honest, simple, and role-based so teams can trust it.",
      approach: "Built a platform that tracks activity, browser use, and apps. Screenshot intervals run from every 5 seconds to once a day, with live monitoring and auto reports.",
      impact: ["5s → 24h capture", "Org-wide device coverage", "4+ user roles with RBAC"],
      stack: "Auth · RBAC · MSI Installer · Live capture",
      live: "https://peopleprudent.com",
      code: "https://github.com/Vidhi-bhutia?tab=repositories",
    },
    {
      no: "02",
      title: "Bug-spotting Dashboard",
      where: "Morgan Stanley · 2025",
      problem: "Onboarding teams were spending too much time reading logs.",
      thinking: "If the answer is hidden in 50,000 lines, build a tool that finds the signal fast.",
      approach: "Built an ML dashboard that reads daily logs, spots unusual patterns, and shows trends to leaders.",
      impact: ["30% faster bug detection", "50,000+ daily logs read", "15+ live charts"],
      stack: "Python · Dash · ML · Log parsing",
      live: null,
      code: "https://github.com/Vidhi-bhutia?tab=repositories",
    },
    {
      no: "03",
      title: "ESG Reporting Dashboard",
      where: "Northstar Impact · 2024",
      problem: "Sustainability data looked different at every company.",
      thinking: "Leaders need one clear format, not more noise.",
      approach: "Studied 20+ companies, created one ESG format for 5 power companies, and built clean Power BI dashboards.",
      impact: ["20+ firms studied", "3 product decisions made", "20% clearer insights"],
      stack: "Power BI · Research · ESG",
      live: null,
      code: "https://github.com/Vidhi-bhutia?tab=repositories",
    },
  ];

  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="font-hand text-2xl text-rose">- selected work</p>
              <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">Work that is <span className="italic text-burgundy">useful, clear, and real.</span></h2>
            </div>
            <div className="font-hand text-xl text-ink/70 max-w-xs">Three projects that show software, AI, and product thinking.</div>
          </div>
        </Reveal>

        <div className="mt-20 space-y-28">
          {cases.map((c) => (
            <Reveal key={c.no} delay={0.05}>
              <article className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <div className="font-serif text-[7rem] leading-none text-burgundy/15">{c.no}</div>
                    <h3 className="mt-2 font-serif text-3xl md:text-4xl">{c.title}</h3>
                    <p className="mt-3 text-rose italic">{c.where}</p>
                    <div className="mt-6 stamp inline-block text-burgundy text-xs">case · file {c.no}</div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {c.live && (
                        <a href={c.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-full bg-wine text-paper px-4 py-2 hover:bg-burgundy transition-colors">
                          Visit ↗
                        </a>
                      )}
                      <a href={c.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-full border border-burgundy text-burgundy px-4 py-2 hover:bg-burgundy hover:text-paper transition-colors">
                        Code ↗
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-7">
                  {[
                    ["The problem", c.problem],
                    ["My thinking", c.thinking],
                    ["What I built", c.approach],
                  ].map(([k, v]) => (
                    <motion.div
                      key={k}
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="border-l-2 border-gold pl-5"
                    >
                      <div className="text-xs uppercase tracking-[0.3em] text-rose">{k}</div>
                      <p className="mt-2 font-serif text-xl leading-relaxed text-ink/90">{v}</p>
                    </motion.div>
                  ))}

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {c.impact.map((m) => (
                      <Tilt3D key={m} max={10}>
                        <motion.div whileHover={{ y: -4, scale: 1.04 }} className="bg-paper border border-border rounded-sm p-5 text-center shadow-sm">
                          <div className="font-serif text-2xl text-burgundy">{m.split(" ")[0]}</div>
                          <div className="mt-1 text-xs uppercase tracking-widest text-ink/60">{m.split(" ").slice(1).join(" ")}</div>
                        </motion.div>
                      </Tilt3D>
                    ))}
                  </div>

                  <p className="mt-4 font-hand text-xl text-ink/70">stack · {c.stack}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== RESEARCH LAB ====================== */
function ResearchLab() {
  const notes = [
    {
      tag: "Shipped",
      title: "GitHub README Viewer",
      stack: "Extension · TypeScript · VS Code",
      lines: ["Shows README files in GitHub-like styling inside VS Code.", "Marketplace installs: 13+ and growing."],
      rotate: "-1.2deg",
      code: "https://github.com/Vidhi-bhutia/Github-Readme-Viewer",
    },
    {
      tag: "Dev Tool",
      title: "Project Dependency Detector",
      stack: "Python · CLI · DevEx",
      lines: ["Scans projects and lists dependencies quickly.", "Helps teams audit and clean package usage."],
      rotate: "1.2deg",
      code: "https://github.com/Vidhi-bhutia/Project-Dependency-Detector",
    },
    {
      tag: "Reliability",
      title: "Service Health Checker",
      stack: "Python · Monitoring",
      lines: ["Tracks service uptime and status in one place.", "Built to catch issues before users report them."],
      rotate: "-0.8deg",
      code: "https://github.com/Vidhi-bhutia/Service-Health-Checker",
    },
    {
      tag: "Research",
      title: "Health Analysis using Federated Learning",
      stack: "Python · FL · Privacy",
      lines: ["Trains across clients without moving private data.", "Uses federated learning for safer collaboration."],
      rotate: "1.4deg",
      code: "https://github.com/Vidhi-bhutia/Health-Analysis-using-Federated-Learning-and-Cloud",
    },
    {
      tag: "Automation",
      title: "N8N Job Search Automation",
      stack: "n8n · APIs · Sheets · Telegram",
      lines: ["Runs recurring job searches automatically.", "Writes matches to sheets and sends instant alerts."],
      rotate: "-1.5deg",
      code: "https://github.com/Vidhi-bhutia/N8N-Job-Search-Automation",
    },
    {
      tag: "Agents",
      title: "Agentic AI Researcher",
      stack: "Python · LangGraph · Gemini",
      lines: ["A multi-agent pipeline for step-by-step research.", "Cuts repeated work and improves output consistency."],
      rotate: "1deg",
      code: "https://github.com/Vidhi-bhutia/Agentic-AI-Researcher",
    },
    {
      tag: "ML",
      title: "Job Recommendation System",
      stack: "ML · Ranking",
      lines: ["Recommends jobs from profile and preference signals.", "Built to speed up decision-making for applicants."],
      rotate: "-1deg",
      code: "https://github.com/Vidhi-bhutia/Job-Recommendation-System",
    },
    {
      tag: "Simulation",
      title: "Neuromorphic Routing Simulator",
      stack: "Research · TypeScript",
      lines: ["Tests brain-inspired approaches to network routing.", "Explores adaptive behavior under changing load."],
      rotate: "0.7deg",
      code: "https://github.com/Vidhi-bhutia/Neuromorphic-Routing-Simulator",
    },
    {
      tag: "AI Docs",
      title: "Documentation AI",
      stack: "AI · TypeScript",
      lines: ["Generates documentation from code context.", "Improves handoff quality for teams."],
      rotate: "-0.9deg",
      code: "https://github.com/Vidhi-bhutia/Documentation-AI",
    },
    {
      tag: "Crypto",
      title: "Stateful Hash Based Signature Scheme",
      stack: "Security · Cryptography",
      lines: ["Implements and studies stateful hash signatures.", "Focused on post-quantum-safe signing ideas."],
      rotate: "1.6deg",
      code: "https://github.com/Vidhi-bhutia/Stateful-Hash-Based-Signature-Scheme",
    },
    {
      tag: "Product",
      title: "Skillyn",
      stack: "Platform · Learning",
      lines: ["Skill learning product with guided paths.", "Designed for easy navigation and progress tracking."],
      rotate: "-1.4deg",
      code: "https://github.com/Vidhi-bhutia/Skillyn",
    },
    {
      tag: "Health",
      title: "Remedy Relay",
      stack: "HealthTech",
      lines: ["A healthcare-focused coordination concept.", "Built to simplify communication and follow-ups."],
      rotate: "1.3deg",
      code: "https://github.com/Vidhi-bhutia/Remedy-Relay",
    },
    {
      tag: "ML",
      title: "Diabetes Prediction",
      stack: "Machine Learning",
      lines: ["Predicts diabetes risk from health features.", "Explains outcomes in a simple, readable format."],
      rotate: "-0.6deg",
      code: "https://github.com/Vidhi-bhutia/Diabetes-Prediction",
    },
    {
      tag: "Algorithms",
      title: "Optimized A-star",
      stack: "Pathfinding · Algorithms",
      lines: ["Improves route-finding performance with heuristics.", "Built for faster shortest-path exploration."],
      rotate: "0.8deg",
      code: "https://github.com/Vidhi-bhutia/Optimized-A-star",
    },
    {
      tag: "ML",
      title: "Disease Prediction Model",
      stack: "Machine Learning",
      lines: ["Classifies disease probabilities from symptom patterns.", "Focused on interpretable, practical predictions."],
      rotate: "-1.1deg",
      code: "https://github.com/Vidhi-bhutia/Disease-Prediction-Model",
    },
    {
      tag: "Data Science",
      title: "Climate Change Predictions",
      stack: "Forecasting · Data",
      lines: ["Models long-term climate trend movement.", "Turns historical signals into future estimates."],
      rotate: "1.1deg",
      code: "https://github.com/Vidhi-bhutia/Climate-Change-Predictions",
    },
    {
      tag: "Finance ML",
      title: "Stock Price Predictor",
      stack: "Time Series · ML",
      lines: ["Forecasts price movement from market history.", "Built as a learning-focused prediction project."],
      rotate: "-0.7deg",
      code: "https://github.com/Vidhi-bhutia/Stock_Price_Predictor",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 ivory-texture border-y border-border overflow-hidden">
      <motion.div
        className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 24, 0], y: [0, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-burgundy/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], x: [0, -20, 0], y: [0, -14, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-hand text-2xl text-rose">- selected projects</p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Notes from a <span className="italic text-burgundy">curious desk.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-ink/75">One project gallery only, in the same notebook style. Each card opens the GitHub repo.</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {notes.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.1}>
              <Tilt3D max={14}>
                <motion.div
                  whileHover={{ y: -10, rotate: 0, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="relative bg-paper border border-border notebook-lines p-7 pt-10 shadow-[0_20px_50px_-20px_rgba(66,25,36,0.35)] min-h-[400px] flex flex-col"
                  style={{ transform: `rotate(${n.rotate})` }}
                >
                  <div className="tape w-24 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]" />
                  <div className="absolute top-4 right-5 stamp text-rose text-[10px]">{n.tag}</div>
                  <h3 className="font-serif text-2xl mt-4">{n.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-rose">{n.stack}</p>
                  <ul className="mt-6 space-y-4 font-hand text-xl leading-snug text-ink/85 flex-1">
                    {n.lines.map((l) => (
                      <li key={l} className="flex gap-2"><span className="text-gold">›</span>{l}</li>
                    ))}
                  </ul>
                  <a href={n.code} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm text-burgundy hover:text-wine font-serif italic">View code ↗</a>
                </motion.div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== IMPACT ====================== */
function Impact() {
  const stats = [
    ["9.04", "CGPA at VIT"],
    ["50k+", "Daily logs read"],
    ["60%", "Less repeat research"],
    ["13+", "Extension installs"],
  ];
  return (
    <section className="relative py-28 px-6 bg-wine text-paper overflow-hidden">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="mx-auto max-w-6xl relative">
        <Reveal>
          <p className="font-hand text-2xl text-gold">- the receipts</p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">Small numbers, <span className="italic">honest weight.</span></h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.08}>
              <Tilt3D max={12}>
                <motion.div whileHover={{ y: -6 }} className="border-t border-paper/30 pt-5">
                  <div className="font-serif text-6xl md:text-7xl text-gold">{n}</div>
                  <div className="mt-3 text-paper/80 text-sm uppercase tracking-widest">{l}</div>
                </motion.div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== SKILLS (from resume only) ====================== */
function Playground() {
  const groups = [
    {
      label: "AI · ML · GenAI",
      doodle: "✦",
      items: [
        { name: "TensorFlow", slug: "tensorflow" },
        { name: "Keras", slug: "keras" },
        { name: "Scikit-learn", slug: "scikitlearn" },
        { name: "Deep Learning" },
        { name: "Generative AI" },
        { name: "Prompt Engineering" },
        { name: "Agentic AI" },
        { name: "NLP" },
        { name: "Computer Vision" },
        { name: "Model Evaluation" },
        { name: "AI Governance" },
      ],
    },
    {
      label: "Programming & Core CS",
      doodle: "❮❯",
      items: [
        { name: "Python", slug: "python" },
        { name: "JavaScript", slug: "javascript" },
        { name: "C++", slug: "cplusplus" },
        { name: "C", slug: "c" },
        { name: "OOP" },
        { name: "DSA" },
        { name: "Authentication" },
        { name: "RBAC" },
      ],
    },
    {
      label: "Data & Visualization",
      doodle: "❖",
      items: [
        { name: "Power BI" },
        { name: "Excel", slug: "microsoftexcel" },
        { name: "MySQL", slug: "mysql" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "Oracle", slug: "oracle" },
        { name: "Cosmos DB" },
        { name: "R", slug: "r" },
        { name: "Statistics" },
        { name: "Data Cleaning" },
      ],
    },
    {
      label: "Cloud & Infrastructure",
      doodle: "☁",
      items: [
        { name: "AWS", slug: "amazonaws" },
        { name: "EC2", slug: "amazonec2" },
        { name: "IAM" },
        { name: "Auto Scaling" },
        { name: "Load Balancing" },
        { name: "CloudTrail" },
        { name: "CloudWatch" },
        { name: "Azure", slug: "microsoftazure" },
        { name: "Azure Blob" },
        { name: "CI/CD" },
        { name: "Azure Boards" },
      ],
    },
    {
      label: "Automation",
      doodle: "⚙",
      items: [
        { name: "n8n", slug: "n8n" },
        { name: "Opal" },
        { name: "API Integration" },
        { name: "Workflow Automation" },
        { name: "Web Scraping" },
        { name: "BeautifulSoup" },
      ],
    },
    {
      label: "AI-Assisted Coding",
      doodle: "♡",
      items: [
        { name: "Google AI Studio" },
        { name: "Cursor", slug: "cursor" },
        { name: "Antigravity" },
        { name: "Replit", slug: "replit" },
        { name: "v0" },
      ],
    },
    {
      label: "Backend & Frameworks",
      doodle: "✺",
      items: [
        { name: "React", slug: "react" },
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Express", slug: "express" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "Flask", slug: "flask" },
        { name: "Streamlit" },
        { name: "REST APIs" },
        { name: "HTML", slug: "html5" },
        { name: "CSS", slug: "css3" },
        { name: "MSI Installer" },
      ],
    },
    {
      label: "Dev Tools",
      doodle: "✜",
      items: [
        { name: "Git", slug: "git" },
        { name: "GitHub", slug: "github" },
        { name: "Jira", slug: "jira" },
        { name: "TeamCity" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden py-32 px-6">
      <motion.div
        className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, 18, 0], y: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-burgundy/12 blur-3xl"
        animate={{ scale: [1, 1.08, 1], x: [0, -24, 0], y: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <div className="mx-auto max-w-6xl relative">
        <Reveal>
          <p className="font-hand text-2xl text-rose flex items-center gap-3">- the workshop <Sparkle className="w-4 h-4" /></p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Tools on my <span className="italic text-burgundy">workbench.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/75">A high-energy skill map with stronger visual hierarchy, motion, and cleaner chips that show names only.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <Tilt3D max={8}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/70 p-7 shadow-[0_22px_70px_-30px_rgba(66,25,36,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-35px_rgba(66,25,36,0.5)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-burgundy via-gold to-rose" />
                  <div className="absolute -right-5 -top-5 text-8xl text-gold/12 select-none transition-transform duration-500 group-hover:rotate-12">{g.doodle}</div>
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-burgundy to-wine text-paper text-xs font-serif shadow-md">{String(i+1).padStart(2,'0')}</span>
                    <h3 className="font-serif text-xl tracking-tight text-ink">{g.label}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 relative">
                    {g.items.map((it) => (
                      <motion.div
                        key={it.name}
                        whileHover={{ y: -6, scale: 1.07, rotate: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 14 }}
                        className="group rounded-full border border-border/70 bg-paper/85 px-4 py-2 text-sm font-serif tracking-wide text-ink/85 shadow-sm shadow-black/5 transition-all hover:border-burgundy/45 hover:bg-white hover:text-burgundy hover:shadow-lg"
                      >
                        <span className="whitespace-nowrap">{it.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== WALL OF WINS ====================== */
function WallOfWins() {
  const wins = [
    { kind: "Polaroid", text: "9.04 CGPA", sub: "VIT, ongoing", rot: "-4deg", color: "bg-burgundy" },
    { kind: "Sticky", text: "95.8% in Class XII", sub: "Scindia Kanya Vidyalaya", rot: "3deg", color: "bg-gold/80" },
    { kind: "Stamp", text: "Morgan Stanley Intern", sub: "Summer 2025", rot: "-2deg" },
    { kind: "Polaroid", text: "30% faster bug detection", sub: "ML dashboard, MS", rot: "5deg", color: "bg-wine" },
    { kind: "Sticky", text: "13+ extension installs", sub: "ReadMe Live Preview", rot: "-3deg", color: "bg-rose/70" },
    { kind: "Stamp", text: "PyPI Author", sub: "Code Change Impact Analyzer", rot: "2deg" },
    { kind: "Polaroid", text: "NextLeap PM Fellow", sub: "Jan → Apr 2026", rot: "-6deg", color: "bg-burgundy" },
    { kind: "Sticky", text: "100+ jobs / day automated", sub: "n8n + Telegram", rot: "4deg", color: "bg-gold/70" },
  ] as const;

  return (
    <section className="relative py-32 px-6 ivory-texture border-y border-border">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-hand text-2xl text-rose">- wall of wins</p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Pinned, in <span className="italic text-burgundy">no order at all.</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {wins.map((w, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <Tilt3D max={14}>
                <motion.div
                  whileHover={{ rotate: 0, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  style={{ transform: `rotate(${w.rot})` }}
                  className="relative"
                >
                  {w.kind === "Polaroid" && (
                    <div className="polaroid">
                      <div className={`aspect-square ${w.color} relative overflow-hidden flex items-center justify-center text-paper p-4 text-center`}>
                        <div className="absolute inset-0 grain opacity-40" />
                        <div className="relative font-serif text-xl leading-snug">{w.text}</div>
                      </div>
                      <div className="mt-3 font-hand text-lg text-ink/80 text-center">{w.sub}</div>
                    </div>
                  )}
                  {w.kind === "Sticky" && (
                    <div className={`${w.color} aspect-square p-5 shadow-[0_15px_30px_-10px_rgba(66,25,36,0.4)] flex flex-col justify-center`}>
                      <div className="font-hand text-3xl leading-tight text-wine">{w.text}</div>
                      <div className="mt-3 text-sm text-wine/80">{w.sub}</div>
                    </div>
                  )}
                  {w.kind === "Stamp" && (
                    <div className="bg-paper border-2 border-burgundy aspect-square flex flex-col items-center justify-center p-4 text-center">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-burgundy">Approved</div>
                      <div className="mt-3 font-serif text-xl text-burgundy">{w.text}</div>
                      <div className="mt-2 font-hand text-lg text-ink/70">{w.sub}</div>
                      <div className="mt-3 w-12 h-12 rounded-full wax-seal" />
                    </div>
                  )}
                </motion.div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== CONTACT ====================== */
function Contact() {
  const [time, setTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  useEffect(() => {
    setTime(new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));
  }, []);

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name || "visitor"}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("done");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 ivory-texture border-t border-border">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="font-hand text-2xl text-rose">- get in touch</p>
            <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
              A letter for <span className="italic text-burgundy">everyone</span> and a way to reply.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal delay={0.15}>
            <Tilt3D max={6}>
              <div className="relative bg-paper p-10 md:p-14 shadow-[0_30px_70px_-20px_rgba(66,25,36,0.35)] notebook-lines h-full">
              <div className="tape w-32 h-7 -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
              <div className="text-right font-hand text-xl text-ink/70">{time}</div>
                <p className="mt-8 font-serif text-2xl italic">Dear visitor,</p>
              <p className="mt-6 text-lg leading-relaxed text-ink/85 font-serif">
                I build software, AI/ML tools, and research-led products in simple English and with clear thinking.
                If you want to collaborate, ask a question, discuss an idea, or share an opportunity, I would love to hear from you.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-6 text-sm">
                {[
                  ["Email", "vidhibhutia2407@gmail.com", "mailto:vidhibhutia2407@gmail.com"],
                  ["LinkedIn", "linkedin.com/in/vidhi-bhutia", "https://linkedin.com/in/vidhi-bhutia"],
                  ["GitHub", "github.com/Vidhi-bhutia", "https://github.com/Vidhi-bhutia"],
                  ["Phone", "+91 96858 56291", "tel:+919685856291"],
                ].map(([k, v, h]) => (
                  <a key={k} href={h} className="group block border-b border-border pb-3 hover:border-burgundy transition-colors">
                    <div className="text-xs uppercase tracking-[0.25em] text-rose">{k}</div>
                    <div className="mt-1 font-serif text-lg group-hover:text-burgundy transition-colors">{v}</div>
                  </a>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton href="mailto:vidhibhutia2407@gmail.com">Email me →</MagneticButton>
                <MagneticButton href={RESUME} target="_blank" rel="noreferrer" variant="outline">Open résumé</MagneticButton>
              </div>

              <div className="mt-12 flex items-end justify-between">
                <div>
                  <p className="font-serif italic text-ink/80">With warmth,</p>
                  <div className="font-script text-5xl text-burgundy mt-2">Vidhi</div>
                </div>
                <div className="w-20 h-20 rounded-full wax-seal p-2.5">
                  <img src={logoImage} alt="Vidhi logo mark" className="h-full w-full rounded-full object-cover" />
                </div>
              </div>
              </div>
            </Tilt3D>
          </Reveal>

          <Reveal delay={0.25}>
            <Tilt3D max={6}>
              <form onSubmit={sendMessage} className="relative bg-wine text-paper p-10 md:p-14 shadow-[0_30px_70px_-20px_rgba(66,25,36,0.45)] overflow-hidden h-full">
                <div className="absolute inset-0 grain opacity-20" />
                <div className="tape w-32 h-7 -top-3 right-10 rotate-[3deg]" />
                <p className="font-hand text-2xl text-gold">- direct message</p>
                <h3 className="mt-2 font-serif text-3xl md:text-4xl">Send a note.</h3>
                <p className="mt-4 text-paper/80 leading-relaxed font-serif">
                  Tell me your name, email, and message. This sends directly without opening any mail app.
                </p>

                <div className="relative mt-8 grid gap-4">
                  <label className="grid gap-2 text-sm">
                    <span className="uppercase tracking-[0.25em] text-paper/70">Name</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="rounded-2xl border border-paper/15 bg-paper/10 px-4 py-3 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-gold"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    <span className="uppercase tracking-[0.25em] text-paper/70">Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="rounded-2xl border border-paper/15 bg-paper/10 px-4 py-3 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-gold"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    <span className="uppercase tracking-[0.25em] text-paper/70">Message</span>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={6}
                      className="rounded-2xl border border-paper/15 bg-paper/10 px-4 py-3 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-gold resize-none"
                      placeholder="What would you like to talk about?"
                    />
                  </label>
                </div>

                <div className="relative mt-8 flex flex-wrap gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-wine transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                  <a href="mailto:vidhibhutia2407@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper/10">
                    Or email me
                  </a>
                </div>
                <div className="relative mt-4 min-h-6 text-sm text-paper/80">
                  {status === "done" && <p>Message sent successfully. Thank you for writing.</p>}
                  {status === "error" && <p>Message could not be sent right now. Please try again or use email.</p>}
                </div>
              </form>
            </Tilt3D>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ====================== FOOTER ====================== */
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-wine text-paper/80">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-6 text-sm">
        <div className="font-serif italic">© {new Date().getFullYear()} Vidhi Bhutia · Made by hand in Vellore.</div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Vidhi-bhutia" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/vidhi-bhutia" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
          <a href="mailto:vidhibhutia2407@gmail.com" className="hover:text-gold transition-colors">Email</a>
          <a href={RESUME} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Résumé ↓</a>
        </div>
      </div>
    </footer>
  );
}
