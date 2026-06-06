import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "motion/react";
import { useRef, useState, useEffect } from "react";
import logoImage from "@/assets/vidhi-logo.png";
import doodleImage from "@/assets/vidhi-doodle.png";
import formalImage from "@/assets/formal pic.jpg";

const skillIconModules = import.meta.glob("../assets/icons/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const skillIcon = (fileName: string) => skillIconModules[`../assets/icons/${fileName}`];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vidhi Bhutia | Software, AI/ML, Research, Product" },
      {
        name: "description",
        content:
          "Vidhi Bhutia's portfolio: software development, AI/ML, research, product thinking, and practical projects built in simple English.",
      },
      { property: "og:title", content: "Vidhi Bhutia | Software, AI/ML, Research, Product" },
      {
        property: "og:description",
        content:
          "A recruiter-friendly portfolio showing software work, AI/ML projects, research, and product thinking.",
      },
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
  <svg
    viewBox="0 0 100 60"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
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
  <svg
    viewBox="0 0 200 20"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M2 10 Q 12 0 22 10 T 42 10 T 62 10 T 82 10 T 102 10 T 122 10 T 142 10 T 162 10 T 182 10 T 198 10" />
  </svg>
);
const Bulb = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12c1 1 1.5 2 1.5 3h5c0-1 .5-2 1.5-3a7 7 0 00-4-12z" />
  </svg>
);
const Coffee = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8h14v6a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM17 10h2a2 2 0 010 4h-2M7 2c0 2 2 2 2 4M11 2c0 2 2 2 2 4" />
  </svg>
);
const Flower = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <circle cx="20" cy="20" r="3" />
    <ellipse cx="20" cy="9" rx="4" ry="6" />
    <ellipse cx="20" cy="31" rx="4" ry="6" />
    <ellipse cx="9" cy="20" rx="6" ry="4" />
    <ellipse cx="31" cy="20" rx="6" ry="4" />
  </svg>
);
const Cloud = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
  >
    <path d="M8 20 Q 2 20 2 14 Q 2 9 8 9 Q 9 3 16 3 Q 23 3 24 9 Q 32 9 32 15 Q 32 20 26 20 Z" />
  </svg>
);
const Plane = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 22 L 36 6 L 30 26 L 22 22 L 16 30 L 14 23 Z" />
  </svg>
);
const Pen = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 30 30"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
  >
    <path d="M3 27 L 6 19 L 22 3 L 27 8 L 11 24 Z M 18 7 L 23 12" />
  </svg>
);
const Moon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20 14.5A8.5 8.5 0 119.5 4a7 7 0 0010.5 10.5z" />
  </svg>
);
const Sun = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4" />
  </svg>
);

const CheckMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const PaperClip = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
  </svg>
);

const CircleDoodle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <path d="M50 10 C 20 12, 10 40, 15 65 C 20 90, 60 95, 80 80 C 95 65, 90 20, 52 12 C 45 10, 38 12, 35 15" />
  </svg>
);

const HighlightStroke = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 10"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <path d="M5 5 C 30 2, 60 8, 95 4" />
  </svg>
);

const ArrowConnector = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 40"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 35 Q 25 15, 50 20 T 92 10" />
    <path d="M82 18 L 94 10 L 86 2" />
  </svg>
);

/* ====================== HELPERS ====================== */
function Reveal({
  children,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
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

function Tilt3D({
  children,
  className = "",
  max = 14,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        ry.set(x * max);
        rx.set(-y * max);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({
  children,
  href,
  download,
  variant = "solid",
  target,
  rel,
}: {
  children: React.ReactNode;
  href: string;
  download?: boolean;
  variant?: "solid" | "outline";
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const base =
    "relative inline-flex items-center gap-3 rounded-full px-7 py-4 font-serif text-lg transition-colors";
  const styles =
    variant === "solid"
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
        setPos({
          x: (e.clientX - (r.left + r.width / 2)) * 0.3,
          y: (e.clientY - (r.top + r.height / 2)) * 0.3,
        });
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
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-burgundy via-gold to-wine origin-left z-50"
      />
      <FloatingDoodles />
      <Nav dark={dark} toggleTheme={toggleTheme} />
      <Hero />
      <Approach />
      <Marquee />
      <Education />
      <WorkJourney />
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
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[18%] left-[4%] text-gold/40"
      >
        <Star className="w-6 h-6" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[42%] right-[5%] text-rose/40"
      >
        <Sparkle className="w-5 h-5" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute top-[70%] left-[8%] text-burgundy/30"
      >
        <Heart className="w-5 h-5" />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] right-[12%] text-gold/30"
      >
        <Flower className="w-10 h-10" />
      </motion.div>
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-[55%] left-[45%] text-rose/30"
      >
        <Cloud className="w-12 h-8" />
      </motion.div>
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute top-[85%] right-[20%] text-burgundy/30"
      >
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
          <img
            src={logoImage}
            alt="Vidhi logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-burgundy/15 shadow-sm"
          />
          <span className="font-serif text-base italic tracking-wide">Vidhi</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ["Education", "#education"],
            ["Experience", "#experience"],
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
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <a
            href={RESUME}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm rounded-full border border-burgundy text-burgundy px-4 py-1.5 hover:bg-burgundy hover:text-paper transition-colors"
          >
            ↓ Résumé
          </a>
          <a
            href="#contact"
            className="text-sm rounded-full bg-wine text-paper px-4 py-1.5 hover:bg-burgundy transition-colors"
          >
            Say hello
          </a>
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
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="block"
            >
              Vidhi
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="block italic text-burgundy relative"
            >
              Bhutia<span className="text-gold">.</span>
              <Squiggle className="absolute -bottom-4 left-0 w-48 text-gold/70" />
            </motion.span>
          </h1>

          <Reveal delay={0.3}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink/80">
              Engineer, researcher, and product thinker building software that turns complex
              problems into systems people can actually use. I like turning messy ideas into clear
              systems that are easy to use, easy to explain, and useful in real work.
            </p>
          </Reveal>

          {/* <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-3" aria-label="Selected credentials">
              {[
                "Morgan Stanley Intern",
                "NextLeap PM Fellow",
                "NIT Rourkela Research",
                "LinkedIn Top Voice",
                "9.04 CGPA",
              ].map((proof, i) => (
                <motion.span
                  key={proof}
                  whileHover={{ y: -4, rotate: i % 2 ? 1 : -1 }}
                  className="proof-stamp"
                >
                  {proof}
                </motion.span>
              ))}
            </div>
          </Reveal> */}

          <Reveal delay={0.7}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              {[
                ["Based in", "Pune, IN"],
                ["Degree", "CSE & Business Systems"],
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
            <motion.div 
              style={{ y: y1 }} 
              className="polaroid rotate-[5deg]"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-paper">
                <img
                  src={doodleImage}
                  alt="Hand-drawn portrait of Vidhi"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper/8 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-3 font-hand text-xl text-ink/80 text-center min-h-[28px] select-none">
                - the doodle version
              </div>
            </motion.div>
          </Tilt3D>

          <Tilt3D max={16} className="absolute bottom-4 left-0 w-56">
            <motion.div style={{ y: y2 }} className="polaroid rotate-[-9deg]">
              <div className="aspect-square ivory-texture relative overflow-hidden flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="font-script text-burgundy text-3xl leading-tight">
                    building
                    <br />
                    day by day.
                  </div>
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
            {/* Hand-drawn sketch circle around wax seal */}
            <div className="absolute -inset-3 text-gold/70 select-none pointer-events-none">
              <CircleDoodle className="w-full h-full" />
            </div>

            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full text-burgundy"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="9" fill="currentColor" fontFamily="serif" letterSpacing="2">
                <textPath href="#circ">VIDHI · BHUTIA · BUILDER · RESEARCHER · CREATOR · </textPath>
              </text>
            </motion.svg>
            <div className="absolute inset-3 rounded-full wax-seal p-2.5">
              <img
                src={logoImage}
                alt="Vidhi logo mark"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          <Sparkle className="absolute top-12 left-12 w-4 h-4 text-gold animate-pulse" />
          <Star className="absolute top-1/2 right-2 w-4 h-4 text-burgundy/60" />
          <Arrow className="absolute top-32 -left-8 w-20 text-rose/50 -rotate-12 hidden lg:block" />

          <div className="absolute top-1/3 -right-24 font-hand text-lg text-burgundy/60 rotate-[-12deg] hidden xl:block z-10">
            - student & developer
          </div>

          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-2 right-32 text-burgundy/60"
          >
            <Pen className="w-8 h-8" />
          </motion.div>
        </div>
      </div>

      {/* Margin note under Hero content */}
      <div className="absolute bottom-6 left-12 font-hand text-lg text-rose/60 rotate-[2deg] hidden lg:flex items-center gap-1 z-10 select-none">
        <CheckMark className="w-4 h-4 text-gold" />
        always building & shipping 🚀
      </div>
    </section>
  );
}

/* ====================== APPROACH ====================== */
function Approach() {
  const steps = [
    {
      no: "01",
      label: "Listen",
      title: "Understand the human problem",
      note: "Context before code. I map the people, constraints, and decisions hiding beneath the request.",
    },
    {
      no: "02",
      label: "Investigate",
      title: "Find the useful signal",
      note: "Research, data, and prototypes help me separate a real need from an attractive assumption.",
    },
    {
      no: "03",
      label: "Build",
      title: "Make complexity feel simple",
      note: "I shape reliable systems with clear interfaces, measurable outcomes, and room to evolve.",
    },
  ];

  return (
    <section id="approach" className="relative px-6 pb-32">
      <div className="mx-auto max-w-6xl notebook-sheet p-8 md:p-14">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-hand text-2xl text-rose">- how I think</p>
              <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
                My <span className="italic text-burgundy">approach.</span>
              </h2>
            </div>
            <p className="max-w-sm font-serif text-lg text-ink/70">
              Engineering, research, product thinking, and AI are not separate lanes. They are
              different ways to ask better questions.
            </p>
          </div>
        </Reveal>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="approach-connector hidden md:block" />
          {steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8, rotate: i === 1 ? 0 : i ? 1 : -1 }}
                className="approach-card"
              >
                <span className="font-script text-4xl text-gold">{step.no}</span>
                <p className="mt-8 text-xs uppercase tracking-[0.28em] text-rose">{step.label}</p>
                <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/70">{step.note}</p>
                <Squiggle className="mt-7 w-28 text-gold/70" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== MARQUEE ====================== */
function Marquee() {
  const words = [
    "Engineer",
    "✦",
    "Researcher",
    "✦",
    "Builder",
    "✦",
    "Analyst",
    "✦",
    "Tinkerer",
    "✦",
    "Product Manager",
    "✦",
  ];
  return (
    <section className="border-y border-border/60 bg-wine text-paper py-6 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap font-serif text-3xl md:text-4xl italic"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className={w === "✦" ? "text-gold not-italic" : ""}>
            {w}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

/* ====================== EDUCATION ====================== */
function Education() {
  const items = [
    {
      year: "2019",
      title: "Class X · CBSE",
      place: "Delhi Public School, Katni",
      note: "Scored 92.6%. Where I first fell in love with making things.",
      icon: "🏫",
      tilt: "-2deg",
      doodle: "first lines of code!",
    },
    {
      year: "2021",
      title: "Class XII · CBSE",
      place: "Scindia Kanya Vidyalaya, Gwalior",
      note: "Scored 95.8%. Boarding school taught me focus, notebooks, and curiosity.",
      icon: "📚",
      tilt: "1.5deg",
      doodle: "boarding school focus",
    },
    {
      year: "2022 → Present",
      title: "B.Tech · CSE & Business Systems",
      place: "Vellore Institute of Technology",
      note: "CGPA 9.04 - where engineering met business and research.",
      icon: "🎓",
      tilt: "-1deg",
      doodle: "9.04 CGPA 🚀",
    },
    {
      year: "Jan → Apr 2026",
      title: "Project Management Fellowship",
      place: "NextLeap",
      note: "An 8-week cohort fellowship focused on product thinking, user research, roadmaps, prioritization, mentorship, and interview practice.",
      icon: "📐",
      tilt: "2deg",
      featured: true,
      doodle: "cohort PM study",
    },
  ];

  return (
    <section id="education" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-hand text-2xl text-rose flex items-center gap-3">
            - chapter one <Bulb className="w-5 h-5" />
          </p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Learning, <span className="italic text-burgundy">in classrooms.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/75">
            School, campus, and a PM fellowship shaped how I plan work, make decisions, and ship
            things with care.
          </p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Tilt3D max={10}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className={`relative ivory-texture border ${s.featured ? "border-burgundy" : "border-border"} rounded-sm p-7 shadow-[0_15px_45px_-18px_rgba(66,25,36,0.35)] group`}
                  style={{ transform: `rotate(${s.tilt})` }}
                >
                  <PaperClip className="absolute top-4 right-14 w-7 h-7 text-rose/30 -rotate-12 pointer-events-none group-hover:rotate-0 transition-transform" />
                  <div className="tape w-20 h-5 -top-2 left-6 rotate-[-6deg]" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-script text-4xl text-burgundy/80">{s.year}</div>
                      <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                      <p className="mt-1 text-rose italic">{s.place}</p>
                    </div>
                    <div className="text-4xl" aria-hidden>
                      {s.icon}
                    </div>
                  </div>
                  <p className="mt-4 text-ink/75 font-serif">{s.note}</p>

                  {s.doodle && (
                    <div className="mt-4 font-hand text-lg text-rose/70 italic text-right group-hover:text-burgundy transition-colors">
                      ~ {s.doodle}
                    </div>
                  )}

                  {s.featured && (
                    <div className="absolute -top-3 -right-3 stamp bg-paper text-burgundy text-[10px]">
                      new · 2026
                    </div>
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
    {
      year: "Feb 2026 - Present",
      title: "IT & Software Intern",
      place: "People Prudent · Pune",
      note: "Designing an enterprise workforce platform with real-time activity, browser and application analytics, configurable 5-second to 24-hour capture, live screen monitoring, automated reports, device validation, and RBAC across 4+ roles.",
      metric: "7+ enterprise devices tested",
      tilt: "-1deg",
      doodle: "activity tracker built from scratch",
    },
    {
      year: "May - Jul 2025",
      title: "Technology Analyst Intern",
      place: "Morgan Stanley · Bengaluru",
      note: "Built an ML-powered anomaly dashboard for Account Onboarding, parsing 50,000+ daily logs and surfacing trends through 15+ Dash components. Also developed an AI chatbot for recurring internal queries.",
      metric: "30% faster anomaly detection",
      tilt: "1deg",
      doodle: "parsing 50k+ logs/day ⚡",
    },
    {
      year: "Jun - Aug 2024",
      title: "Data Analysis & Research Intern",
      place: "Northstar Impact Solution · Remote",
      note: "Compared 20+ sustainability products, translated GRI, TCFD, IR and NVG frameworks into a unified benchmark for 5 power companies, and built Power BI reports used for product positioning.",
      metric: "50% more efficient reporting",
      tilt: "-1.5deg",
      doodle: "benchmarked ESG metrics",
    },
    {
      year: "Jun 2024",
      title: "Data Analyst Research Intern",
      place: "NIT Rourkela",
      note: "Worked on stock-market forecasting studies using 20 years of data. Evaluated LSTM, GRU and TCN models with MSE, RMSE and MAE, then deployed real-time forecasts with yfinance and Streamlit.",
      metric: "20+ years of data",
      tilt: "1.5deg",
      doodle: "sequence-model comparison studies",
    },
    {
      year: "Feb - Mar 2024",
      title: "HR Management Intern",
      place: "Suvidha Foundation · Remote",
      note: "Coordinated candidate communication, onboarding, databases and official support groups while reporting recruitment progress and resolving candidate queries.",
      metric: "Candidate operations end to end",
      tilt: "-1deg",
      doodle: "onboarding operations",
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-6 ivory-texture border-y border-border">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-hand text-2xl text-rose flex items-center gap-3">
            - chapter two <Coffee className="w-5 h-5" />
          </p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Working, <span className="italic text-burgundy">in the real world.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/75">
            Four internships across research, finance, sustainability, and product. One simple goal
            - make data useful.
          </p>
        </Reveal>

        <div className="mt-20 relative">
          <svg
            className="absolute left-1/2 top-0 h-full -translate-x-1/2 hidden md:block text-rose/50"
            width="20"
            height="100%"
            viewBox="0 0 20 1000"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          >
            <path d="M10 0 Q 0 250 10 500 T 10 1000" />
          </svg>

          <div className="space-y-16">
            {stops.map((s, i) => (
              <Reveal key={s.year} delay={i * 0.05}>
                <div
                  className={`md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`relative ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <div className="font-script text-5xl text-burgundy/80">{s.year}</div>
                  </div>
                  <Tilt3D max={10}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14 }}
                      className="relative bg-paper border border-border rounded-sm p-7 shadow-[0_18px_50px_-18px_rgba(66,25,36,0.35)] group"
                      style={{ transform: `rotate(${s.tilt})` }}
                    >
                      <PaperClip className="absolute top-4 right-14 w-7 h-7 text-rose/30 -rotate-12 pointer-events-none group-hover:rotate-0 transition-transform" />
                      <div className="tape w-20 h-5 -top-2 left-6 rotate-[-6deg]" />
                      <h3 className="font-serif text-2xl">{s.title}</h3>
                      <p className="mt-1 text-rose italic">{s.place}</p>
                      <p className="mt-3 text-ink/75 leading-relaxed">{s.note}</p>

                      {s.doodle && (
                        <div className="mt-4 font-hand text-lg text-rose/70 italic group-hover:text-burgundy transition-colors">
                          ~ {s.doodle}
                        </div>
                      )}

                      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 font-serif text-sm text-burgundy">
                        <CheckMark className="w-3.5 h-3.5" />
                        {s.metric}
                      </div>
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
      title: "Workforce Monitoring Platform",
      where: "People Prudent · 2026",
      problem: "Teams needed work tracking without making people feel watched.",
      thinking: "Keep the system honest, simple, and role-based so teams can trust it.",
      approach:
        "Built a platform that tracks activity, browser use, and apps. Screenshot intervals run from every 5 seconds to once a day, with live monitoring and auto reports.",
      impact: ["5s → 24h capture", "Org-wide device coverage", "4+ user roles with RBAC"],
      stack: "Auth · RBAC · MSI Installer · Live capture",
      live: null,
      code: null,
    },
    {
      title: "Bug-spotting Dashboard",
      where: "Morgan Stanley · 2025",
      problem: "Onboarding teams were spending too much time reading logs.",
      thinking: "If the answer is hidden in 50,000 lines, build a tool that finds the signal fast.",
      approach:
        "Built an ML dashboard that reads daily logs, spots unusual patterns, and shows trends to leaders.",
      impact: ["30% faster bug detection", "50,000+ daily logs read", "15+ live charts"],
      stack: "Python · Dash · ML · Log parsing",
      live: null,
      code: null,
    },
    {
      title: "ESG Reporting Dashboard",
      where: "Northstar Impact · 2024",
      problem: "Sustainability data looked different at every company.",
      thinking: "Leaders need one clear format, not more noise.",
      approach:
        "Studied 20+ companies, created one ESG format for 5 power companies, and built clean Power BI dashboards.",
      impact: [
        "20+ firms studied",
        "5 power companies analyzed",
        "4 reporting frameworks compared",
      ],
      stack: "Power BI · Research · ESG",
      live: null,
      code: null,
    },
    {
      title: "Stock Market Prediction Lab",
      where: "NIT Rourkela · 2024",
      problem:
        "Market forecasting experiments are difficult to compare when models, time windows, and evaluation methods are fragmented.",
      thinking:
        "Treat forecasting as a research system: use the same 20-year dataset, compare architectures fairly, and make error visible rather than promising certainty.",
      approach:
        "Collaborated on two research projects comparing LSTM, GRU, and TCN models. Evaluated results with MSE, RMSE, and MAE, then deployed a Streamlit application with yfinance for real-time forecasts and visualization.",
      impact: ["20 years analyzed", "3 model families", "2 research projects"],
      stack: "Python · LSTM · GRU · TCN · yfinance · Streamlit",
      live: null,
      code: "https://github.com/Vidhi-bhutia/Stock_Price_Predictor",
    },
  ];

  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="font-hand text-2xl text-rose">- internship projects</p>
              <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
                Problems I owned, <span className="italic text-burgundy">systems I shaped.</span>
              </h2>
            </div>
            <div className="font-hand text-xl text-ink/70 max-w-xs">
              Work across enterprise software, financial systems, sustainability research, and
              forecasting.
            </div>
          </div>
        </Reveal>

        <div className="mt-20 space-y-28">
          {cases.map((c, caseIndex) => (
            <Reveal key={c.title} delay={0.05}>
              <article className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <div className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-rose">
                      <span className="h-px w-10 bg-gold" />
                      Internship project {String(caseIndex + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl">{c.title}</h3>
                    <p className="mt-3 text-rose italic">{c.where}</p>
                    {c.code && (
                      <a
                        href={c.code}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-burgundy px-4 py-2 text-sm text-burgundy transition-colors hover:bg-burgundy hover:text-paper"
                      >
                        View research code ↗
                      </a>
                    )}
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
                        <motion.div
                          whileHover={{ y: -4, scale: 1.04 }}
                          className="bg-paper border border-border rounded-sm p-5 text-center shadow-sm"
                        >
                          <div className="font-serif text-2xl text-burgundy">{m.split(" ")[0]}</div>
                          <div className="mt-1 text-xs uppercase tracking-widest text-ink/60">
                            {m.split(" ").slice(1).join(" ")}
                          </div>
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
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const featuredProjects = [
    {
      title: "Workforce Monitoring Platform",
      tag: "Enterprise System",
      stack: "Auth · RBAC · MSI Installer · Live capture",
      lines: [
        "Tracks employee activity, browser usage, and application metrics without compromising trust.",
        "Supports dynamic screenshot intervals from 5 seconds to 24 hours, live screen monitoring, and automated reporting.",
        "Engineered with strict Role-Based Access Control across 4+ enterprise user groups.",
      ],
      code: null,
      live: null,
      doodle: "activity tracker",
    },
    {
      title: "Agentic AI Researcher",
      tag: "AI & Agents",
      stack: "Python · Gemini · arXiv · Streamlit",
      lines: [
        "Autonomous agent that plans research tasks, searches arXiv database, and downloads/parses PDFs.",
        "Synthesizes structured literature reviews and outputs fully compiled LaTeX drafts.",
        "Integrates human-in-the-loop validation checkpoints before compilation.",
      ],
      code: "https://github.com/Vidhi-bhutia/Agentic-AI-Researcher",
      live: null,
      doodle: "autonomous draft",
    },
    {
      title: "Health Analysis using Federated Learning",
      tag: "Research Project",
      stack: "Flask · XGBoost · FedAvg · Gemini",
      lines: [
        "Predicts health risks using machine learning models trained across multiple simulated hospital databases.",
        "Aggregates local model parameters securely using the federated learning algorithm (FedAvg).",
        "Includes personalized appointment booking and AI-generated wellness advice dashboards.",
      ],
      code: "https://github.com/Vidhi-bhutia/Health-Analysis-using-Federated-Learning-and-Cloud",
      live: null,
      doodle: "federated ML nodes",
    },
    {
      title: "Remedy Relay",
      tag: "Health & RAG",
      stack: "Flask · Gemini · Pinecone · RAG",
      lines: [
        "Medical knowledge assistant utilizing Retrieval-Augmented Generation for document QA.",
        "Indexes dense vector embeddings of scanned medical textbooks and papers into Pinecone.",
        "Returns context-linked answers ensuring medical advice is grounded in literature.",
      ],
      code: "https://github.com/Vidhi-bhutia/Remedy-Relay",
      live: null,
      doodle: "vector index",
    },
    {
      title: "N8N Job Search Automation",
      tag: "Automation System",
      stack: "n8n · Sheets · Telegram · APIs",
      lines: [
        "Runs automated query workflows searching LinkedIn listings on a configured 6-hour cron schedule.",
        "Integrates Google Drive to parse resumes, deduplicate listings, and rate-limit requests.",
        "Pushes daily matched roles direct to Telegram alert channels with compatibility summaries.",
      ],
      code: "https://github.com/Vidhi-bhutia/N8N-Job-Search-Automation",
      live: null,
      doodle: "pipeline workflow",
    },
    {
      title: "README Live Preview",
      tag: "VS Code Tool",
      stack: "VS Code Extension · Free",
      lines: [
        "Live Markdown compiler side-panel matching GitHub's official CSS theme.",
        "Supports dynamic rendering of tables, checklists, local images, and syntax highlighting.",
        "Downloaded by 113+ developers worldwide with live auto-refresh on save.",
      ],
      code: "https://github.com/Vidhi-bhutia/Github-Readme-Viewer",
      install:
        "https://marketplace.visualstudio.com/items?itemName=VidhiBhutia.readme-live-preview&ssr=false#overview",
      doodle: "113+ installs!",
    },
  ];

  const archiveProjects = [
    {
      tag: "Dev Tool",
      title: "Code Change Impact Analyzer",
      stack: "Python · Static Analysis · CLI",
      lines: [
        "Parses Python imports, function definitions, and calls to build dependency graphs.",
        "Predicts which modules and tests may be affected when a file changes.",
      ],
      code: "https://github.com/Vidhi-bhutia/Project-Dependency-Detector",
    },
    {
      tag: "Reliability",
      title: "Service Health Checker",
      stack: "Python · Monitoring",
      lines: [
        "Runs TCP, HTTP, and disk-space checks for production readiness and deployments.",
        "Provides library and CLI output with automation-friendly exit codes and no dependencies.",
      ],
      code: "https://github.com/Vidhi-bhutia/Service-Health-Checker",
    },
    {
      tag: "Product",
      title: "Skillyn",
      stack: "Streamlit · Gemini · PyPDF2",
      lines: [
        "Analyzes a PDF resume against a pasted job description for ATS alignment.",
        "Returns a match percentage, missing keywords, profile summary, and actionable feedback.",
      ],
      code: "https://github.com/Vidhi-bhutia/Skillyn",
    },
    {
      tag: "ML",
      title: "Job Recommendation System",
      stack: "Flask · Gemini · BeautifulSoup",
      lines: [
        "Scrapes live LinkedIn and Workday listings with custom filtering instead of a paid data API.",
        "Compares a PDF resume with each role and explains fit scores and improvement advice.",
      ],
      code: "https://github.com/Vidhi-bhutia/Job-Recommendation-System",
    },
    {
      tag: "Simulation",
      title: "Neuromorphic Routing Simulator",
      stack: "Python · FastAPI · AsyncIO",
      lines: [
        "Compares traditional routing with a decentralized winner-takes-all simulation.",
        "Reinforces faster services over time and visualizes latency, throughput, and reliability.",
      ],
      code: "https://github.com/Vidhi-bhutia/Neuromorphic-Routing-Simulator",
    },
    {
      tag: "AI Docs",
      title: "Documentation AI",
      stack: "React · TypeScript · Gemini · PlantUML",
      lines: [
        "Analyzes an uploaded codebase ZIP and drafts architecture and module documentation.",
        "Generates multiple UML diagram types and exports the finished notebook as a PDF.",
      ],
      code: "https://github.com/Vidhi-bhutia/Documentation-AI",
    },
    {
      tag: "Crypto",
      title: "Stateful Hash Based Signature Scheme",
      stack: "Python · Streamlit · Cryptography",
      lines: [
        "Research prototype for hashing, signing, verifying, and storing long-lived document metadata.",
        "Attempts XMSS, LMS, or SPHINCS integrations and clearly labels its Ed25519 demo fallback as non-quantum-safe.",
      ],
      code: "https://github.com/Vidhi-bhutia/Stateful-Hash-Based-Signature-Scheme",
    },
    {
      tag: "ML",
      title: "Diabetes Prediction",
      stack: "Machine Learning",
      lines: [
        "A diabetes-prediction repository whose current README contains only the project title.",
        "Kept in the archive without additional claims until its model and interface are documented.",
      ],
      code: "https://github.com/Vidhi-bhutia/Diabetes-Prediction",
    },
    {
      tag: "Algorithms",
      title: "Optimized A-star",
      stack: "C++ · A* · Haversine",
      lines: [
        "Finds a route between cities using A* and geographic distance as the heuristic.",
        "Adjusts route cost for traffic levels and excludes roads marked as closed.",
      ],
      code: "https://github.com/Vidhi-bhutia/Optimized-A-star",
    },
    {
      tag: "ML",
      title: "Disease Prediction Model",
      stack: "Machine Learning",
      lines: [
        "README describes a general prediction framework with preprocessing and multiple model families.",
        "Documents evaluation through accuracy, precision, recall, and F1 without claiming a specific deployed disease model.",
      ],
      code: "https://github.com/Vidhi-bhutia/Disease-Prediction-Model",
    },
    {
      tag: "Data Science",
      title: "Climate Change Predictions",
      stack: "Streamlit · scikit-learn · Visualization",
      lines: [
        "Compares Random Forest, Gradient Boosting, and neural networks for temperature prediction.",
        "Explores model error with MSE, RMSE, MAE, MAPE, residual, distribution, and Q-Q views.",
      ],
      code: "https://github.com/Vidhi-bhutia/Climate-Change-Predictions",
    },
    {
      tag: "Finance ML",
      title: "Stock Price Predictor",
      stack: "LSTM · GRU · TCN · Yahoo Finance",
      lines: [
        "Compares three sequence-model architectures for forecasting stock prices from historical data.",
        "Uses Yahoo Finance data as the shared input for LSTM, GRU, and TCN experiments.",
      ],
      code: "https://github.com/Vidhi-bhutia/Stock_Price_Predictor",
    },
  ];

  const tags = [
    "All",
    "Dev Tool",
    "Reliability",
    "Research",
    "Automation",
    "ML",
    "Simulation",
    "AI Docs",
    "Algorithms",
    "Data Science",
    "Finance ML",
  ];

  const filteredArchive = archiveProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stack.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.lines.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = selectedTag === "All" || p.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <section
      id="projects"
      className="relative py-32 px-6 ivory-texture border-y border-border overflow-hidden"
    >
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

      <div className="mx-auto max-w-6xl relative">
        <Reveal>
          <div className="relative inline-block">
            <p className="font-hand text-2xl text-rose flex items-center gap-2">
              - projects & open-source tools
              <Sparkle className="w-4 h-4 text-gold" />
            </p>
            <Arrow className="absolute -right-16 top-2 w-12 text-rose/40 rotate-12 hidden md:block" />
          </div>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Notes from a <span className="italic text-burgundy">curious desk.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-ink/75 font-serif text-lg leading-relaxed">
            Flagship creations, research systems, and open utilities designed to turn complexity
            into utility.
          </p>
        </Reveal>

        {/* Flagship Featured Projects Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Tilt3D max={6} className="h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="group relative h-full bg-paper border border-border/80 rounded-sm p-8 md:p-10 shadow-[0_25px_60px_-25px_rgba(66,25,36,0.3)] flex flex-col justify-between"
                  style={{ rotate: i % 2 === 0 ? "-0.8deg" : "0.8deg" }}
                >
                  <PaperClip className="absolute top-4 left-6 w-8 h-8 text-rose/40 -rotate-12 group-hover:rotate-0 transition-transform" />

                  <div className="absolute -top-3.5 right-6 bg-ivory border border-border border-b-paper rounded-t px-3 py-0.5 text-[10px] tracking-wider uppercase font-serif text-rose group-hover:bg-gold/15 group-hover:text-burgundy transition-colors">
                    {p.tag}
                  </div>

                  <div>
                    <div className="mt-4">
                      <h3 className="font-serif text-2xl md:text-3xl leading-tight text-ink relative inline-block group-hover:text-burgundy transition-colors">
                        {p.title}
                        <HighlightStroke className="absolute -bottom-2 left-0 w-full text-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="mt-2 text-xs font-hand text-rose uppercase tracking-widest">
                        {p.stack}
                      </p>
                    </div>

                    <ul className="mt-8 space-y-4 font-serif text-[16px] leading-relaxed text-ink/85 border-l-2 border-gold/40 pl-5">
                      {p.lines.map((line, index) => (
                        <li key={index} className="relative">
                          <CheckMark className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 text-burgundy/60" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {p.doodle && (
                    <div className="absolute -bottom-5 right-4 font-hand text-lg text-rose/70 italic rotate-[3deg] group-hover:text-burgundy transition-colors">
                      ~ {p.doodle}
                    </div>
                  )}

                  <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border/45 pt-6">
                    {p.install ? (
                      <a
                        href={p.install}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-wine text-paper px-5 py-2.5 text-sm font-serif transition-colors hover:bg-burgundy shadow-sm"
                      >
                        Install Extension ↓
                      </a>
                    ) : null}
                    {p.code ? (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-burgundy hover:text-wine font-serif italic transition-colors"
                      >
                        View code on GitHub ↗
                      </a>
                    ) : (
                      <span className="text-xs uppercase tracking-widest text-ink/40 font-serif italic">
                        Enterprise Source
                      </span>
                    )}
                  </div>
                </motion.div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>

        {/* PROJECT ARCHIVE filing cabinet drawer */}
        <div className="mt-28 border-t border-border/80 pt-20">
          <div className="flex flex-col items-center">
            <Reveal>
              <div className="relative">
                <motion.button
                  onClick={() => setArchiveOpen(!archiveOpen)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex flex-col items-center bg-paper border-2 border-burgundy rounded px-12 py-5 shadow-[0_12px_28px_-8px_rgba(66,25,36,0.3)] cursor-pointer select-none group"
                >
                  <div className="w-24 h-4 rounded-full border-2 border-burgundy/60 bg-ivory shadow-inner flex items-center justify-center mb-2">
                    <div className="w-20 h-1.5 bg-burgundy/20 rounded-full" />
                  </div>
                  <span className="font-serif text-lg font-medium text-burgundy uppercase tracking-widest group-hover:text-wine">
                    {archiveOpen ? "Close Project Drawer" : "View Archive (11+ Projects)"}
                  </span>
                  <div className="font-hand text-sm text-rose/70 mt-1 italic">
                    {archiveOpen ? "Click to close filing cabinet" : "Click to slide drawer open"}
                  </div>

                  <div className="absolute -top-6 -right-12 bg-gold text-wine font-hand text-xs rounded px-2.5 py-1 rotate-[8deg] shadow-sm pointer-events-none group-hover:rotate-[15deg] transition-transform">
                    experiments inside!
                  </div>
                </motion.button>
              </div>
            </Reveal>

            <AnimatePresence>
              {archiveOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full overflow-hidden mt-12 bg-ivory/50 border border-border/80 rounded-sm p-6 md:p-10 shadow-[inset_0_4px_16px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/60 pb-8">
                    <div>
                      <h4 className="font-serif text-2xl text-ink">The Research Catalog</h4>
                      <p className="font-hand text-lg text-rose mt-1">
                        Scribbles, utilities, and older data models
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <select
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                        className="bg-paper border border-border rounded-full px-4 py-2 text-xs font-serif text-ink focus:outline-none focus:border-burgundy"
                      >
                        {tags.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>

                      <input
                        type="text"
                        placeholder="Search files..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-paper border border-border rounded-full px-4 py-2 text-xs font-serif text-ink placeholder:text-ink/40 focus:outline-none focus:border-burgundy"
                      />
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                      {filteredArchive.map((n, i) => (
                        <motion.div
                          key={n.title}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ y: -4, rotate: i % 2 === 0 ? "-1deg" : "1deg" }}
                          className="relative bg-paper border border-border rounded-sm p-6 shadow-sm min-h-[220px] flex flex-col justify-between group"
                        >
                          <div className="tape w-16 h-4.5 -top-2 left-6 rotate-[-4deg] opacity-75" />
                          <div className="absolute top-4 right-4 text-[9px] uppercase tracking-widest text-rose bg-rose/5 px-2 py-0.5 rounded">
                            {n.tag}
                          </div>

                          <div className="mt-4">
                            <h3 className="font-serif text-xl mt-2 group-hover:text-burgundy transition-colors">
                              {n.title}
                            </h3>
                            <p className="mt-1 text-[11px] uppercase tracking-wider text-rose">
                              {n.stack}
                            </p>
                            <ul className="mt-4 space-y-2 font-hand text-base text-ink/80">
                              {n.lines.map((line, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-gold">›</span>
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 border-t border-border/30 pt-4 flex items-center justify-between">
                            <a
                              href={n.code}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs text-burgundy hover:text-wine font-serif italic inline-flex items-center gap-1"
                            >
                              Open file ↗
                            </a>
                            <CheckMark className="w-3.5 h-3.5 text-gold/40" />
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {filteredArchive.length === 0 && (
                      <div className="col-span-full py-16 text-center font-hand text-2xl text-rose/80">
                        No documents found matching the query.
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
    ["20+", "Projects Built"],
    ["113", "Extension installs"],
  ];
  return (
    <section className="relative py-28 px-6 bg-wine text-paper overflow-hidden">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="mx-auto max-w-6xl relative">
        <Reveal>
          <p className="font-hand text-2xl text-gold">- the receipts</p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Small numbers, <span className="italic">honest weight.</span>
          </h2>
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
  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Resize listener to scale the system for mobile devices
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width < 768) {
        setScale(Math.min(1, (width - 40) / 760));
      } else if (width < 1024) {
        setScale(Math.min(1, (width - 80) / 760));
      } else {
        setScale(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous animation loop for orbits
  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();
    const update = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      // Orbit slows down or stops if any technology is hovered, rotating at a calm pace normally
      const speed = hoveredSkill ? 0.0008 : 0.005; 
      setRotation(prev => (prev + speed * delta) % 360);
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [hoveredSkill]);

  const orbit1Skills = [
    ["Python", "Python.png"],
    ["JavaScript", "JavaScript.png"],
    ["TypeScript", "TypeScript.png"],
    ["React", "React.png"],
    ["Node.js", "Node.js.png"],
    ["FastAPI", "FastAPI.png"],
    ["Express", "Express.png"],
    ["Streamlit", "Streamlit.png"]
  ];

  const orbit2Skills = [
    ["TensorFlow", "TensorFlow (1).png"],
    ["Keras", "Keras.png"],
    ["PyTorch", "PyTorch.png"],
    ["Pandas", "Pandas.png"],
    ["NumPy", "NumPy.png"],
    ["Matplotlib", "Matplotlib.png"],
    ["MySQL", "MySQL.png"],
    ["MongoDB", "MongoDB.png"],
    ["Oracle", "Oracle.png"],
    ["Azure", "Azure.png"]
  ];

  const orbit3Skills = [
    ["Git", "Git.png"],
    ["GitHub", "GitHub.png"],
    ["Jira", "Jira.png"],
    ["Postman", "Postman.png"],
    ["Jupyter", "Jupyter.png"],
    ["LaTeX", "LaTeX.png"],
    ["HTML5", "HTML5.png"],
    ["CSS3", "CSS3.png"],
    ["Tailwind CSS", "Tailwind CSS.png"],
    ["Vite", "Vite.png"]
  ];

  const orbits = [
    {
      id: 1,
      radius: 125,
      direction: 1.2, // clockwise
      skills: orbit1Skills
    },
    {
      id: 2,
      radius: 220,
      direction: -0.8, // counter-clockwise
      skills: orbit2Skills
    },
    {
      id: 3,
      radius: 315,
      direction: 0.5, // clockwise
      skills: orbit3Skills
    }
  ];

  return (
    <section id="skills" className="relative overflow-hidden py-32 px-6">
      <div className="mx-auto max-w-6xl relative">
        <Reveal>
          <div className="relative inline-block">
            <p className="font-hand text-2xl text-rose flex items-center gap-3">
              - the workshop
              <Sparkle className="w-4 h-4 text-gold" />
            </p>
          </div>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Technology <span className="italic text-burgundy">universe.</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink/75 font-serif text-lg leading-relaxed">
            Hover over any technology symbol to decelerate orbits and inspect its profile.
          </p>
        </Reveal>

        {/* Outer container adjusting height dynamically to prevent vertical gaps when scaled */}
        <div 
          className="relative w-full flex items-center justify-center mt-12 overflow-visible"
          style={{ height: `${760 * scale}px` }}
        >
          {/* Inner solar system container with responsive scale */}
          <div
            ref={containerRef}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center center"
            }}
            className="absolute w-[760px] h-[760px] flex items-center justify-center select-none"
          >
            {/* Sketch Background annotations */}
            <div className="absolute top-4 left-6 font-hand text-rose/40 text-lg rotate-[-5deg] pointer-events-none">
              * celestial mapping of systems
            </div>
            <div className="absolute bottom-8 right-6 font-hand text-rose/40 text-lg rotate-[4deg] pointer-events-none">
              ~ built step-by-step
            </div>

            {/* Orbit lines */}
            <div className="absolute rounded-full border border-dashed border-border/80 pointer-events-none" style={{ width: 250, height: 250, left: "255px", top: "255px" }} />
            <div className="absolute rounded-full border border-dashed border-border/80 pointer-events-none" style={{ width: 440, height: 440, left: "160px", top: "160px" }} />
            <div className="absolute rounded-full border border-dashed border-border/80 pointer-events-none" style={{ width: 630, height: 630, left: "65px", top: "65px" }} />

            {/* Center System Core (Skills) */}
            <div className="absolute w-20 h-20 rounded-full bg-paper border-2 border-burgundy shadow-[0_6px_20px_-8px_rgba(66,25,36,0.4)] flex items-center justify-center text-center p-3 z-20" style={{ left: "340px", top: "340px" }}>
              <CircleDoodle className="absolute inset-0 w-full h-full text-rose/30 pointer-events-none" />
              <span className="font-serif text-sm font-semibold tracking-widest text-burgundy relative z-10">
                SKILLS
              </span>
            </div>

            {/* Direct Skills Orbiting Nodes */}
            {orbits.map((orbit) => {
              return orbit.skills.map(([name, file], idx) => {
                const baseAngle = (idx * 360) / orbit.skills.length;
                const angle = baseAngle + rotation * orbit.direction;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * orbit.radius;
                const y = Math.sin(rad) * orbit.radius;

                const isHovered = hoveredSkill === name;
                const isOtherHovered = hoveredSkill !== null && !isHovered;

                return (
                  <motion.div
                    key={name}
                    onMouseEnter={() => setHoveredSkill(name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      left: `${352 + x}px`,
                      top: `${352 + y}px`,
                      zIndex: isHovered ? 40 : 10,
                    }}
                    className="absolute"
                    animate={{
                      scale: isHovered ? 1.35 : 1,
                      opacity: isOtherHovered ? 0.35 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 180, damping: 14 }}
                  >
                    <div 
                      className="relative w-14 h-14 rounded-full bg-paper border border-border shadow-md flex items-center justify-center p-2.5 cursor-pointer group"
                      style={{ borderColor: isHovered ? "var(--burgundy)" : "var(--border)" }}
                    >
                      {isHovered && (
                        <CircleDoodle className="absolute -inset-2.5 w-[135%] h-[135%] text-gold animate-[spin_8s_linear_infinite] pointer-events-none" />
                      )}
                      
                      <img
                        src={skillIcon(file)}
                        alt={name}
                        className="w-9 h-9 object-contain select-none pointer-events-none"
                      />
                      
                      {/* Floating handwritten label */}
                      {isHovered && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-hand text-[15px] leading-none text-wine font-medium whitespace-nowrap bg-paper border border-border px-2 py-1 rounded shadow-sm z-50">
                          {name}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== WALL OF WINS ====================== */
function WallOfWins() {
  const wins = [
    {
      kind: "Polaroid",
      text: "9.04 CGPA",
      sub: "VIT, ongoing",
      rot: "-4deg",
      color: "bg-burgundy",
    },
    {
      kind: "Sticky",
      text: "95.8% in Class XII",
      sub: "Scindia Kanya Vidyalaya",
      rot: "3deg",
      color: "bg-gold/80",
    },
    { kind: "Stamp", text: "Morgan Stanley Intern", sub: "Summer 2025", rot: "-2deg" },
    {
      kind: "Polaroid",
      text: "30% faster bug detection",
      sub: "ML dashboard, MS",
      rot: "5deg",
      color: "bg-wine",
    },
    {
      kind: "Sticky",
      text: "113 extension installs",
      sub: "README Live Preview",
      rot: "-3deg",
      color: "bg-rose/70",
    },
    { kind: "Stamp", text: "PyPI Author", sub: "Code Change Impact Analyzer", rot: "2deg" },
    {
      kind: "Polaroid",
      text: "NextLeap PM Fellow",
      sub: "Jan → Apr 2026",
      rot: "-6deg",
      color: "bg-burgundy",
    },
    {
      kind: "Sticky",
      text: "100+ jobs / day automated",
      sub: "n8n + Telegram",
      rot: "4deg",
      color: "bg-gold/70",
    },
  ] as const;

  return (
    <section className="relative py-32 px-6 ivory-texture border-y border-border overflow-hidden">
      <div className="mx-auto max-w-6xl relative">
        <Reveal>
          <div className="relative inline-block">
            <p className="font-hand text-2xl text-rose flex items-center gap-2">
              - wall of wins
              <CheckMark className="w-4 h-4 text-burgundy" />
            </p>
          </div>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[0.95]">
            Pinned, in <span className="italic text-burgundy">no order at all.</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Handwritten margin notes */}
          <div className="absolute -top-10 -left-6 font-hand text-lg text-rose/60 -rotate-[10deg] hidden lg:block z-10">
            * university & boards
          </div>
          <div className="absolute -bottom-10 left-1/3 font-hand text-lg text-burgundy/60 rotate-[4deg] hidden lg:block z-10">
            * extension & tools automation
          </div>
          <div className="absolute top-1/2 -right-10 font-hand text-lg text-rose/60 rotate-[-8deg] hidden lg:block z-10">
            * internship metrics!
          </div>

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
                    <div className="polaroid relative">
                      {/* Paperclip overlay on Polaroids */}
                      {i % 2 === 0 && (
                        <PaperClip className="absolute top-2 right-2 w-6 h-6 text-rose/40 rotate-[15deg] z-25 pointer-events-none" />
                      )}
                      <div
                        className={`aspect-square ${w.color} relative overflow-hidden flex items-center justify-center text-paper p-4 text-center`}
                      >
                        <div className="absolute inset-0 grain opacity-40" />
                        <div className="relative font-serif text-xl leading-snug">{w.text}</div>
                      </div>
                      <div className="mt-3 font-hand text-lg text-ink/80 text-center">{w.sub}</div>
                    </div>
                  )}
                  {w.kind === "Sticky" && (
                    <div
                      className={`${w.color} aspect-square p-5 shadow-[0_15px_30px_-10px_rgba(66,25,36,0.4)] flex flex-col justify-center relative`}
                    >
                      {/* Pushpin circle dot doodle */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-burgundy/40 border border-burgundy/60" />
                      <div className="font-hand text-3xl leading-tight text-wine">{w.text}</div>
                      <div className="mt-3 text-sm text-wine/80">{w.sub}</div>
                    </div>
                  )}
                  {w.kind === "Stamp" && (
                    <div className="bg-paper border-2 border-burgundy aspect-square flex flex-col items-center justify-center p-4 text-center relative">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-burgundy">
                        Approved
                      </div>
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
    setTime(
      new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
    );
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
              A letter for <span className="italic text-burgundy">everyone</span> and a way to
              reply.
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
                  If you've made it this far, thank you. I enjoy conversations about software, AI,
                  research, product building, and ambitious ideas. Whether it's a role,
                  collaboration, startup idea, or simply a good discussion, I'd love to hear from
                  you.
                </p>

                <div className="mt-10 grid sm:grid-cols-2 gap-6 text-sm">
                  {[
                    ["Email", "vidhibhutia2407@gmail.com", "mailto:vidhibhutia2407@gmail.com"],
                    ["LinkedIn", "vidhi-bhutia", "https://linkedin.com/in/vidhi-bhutia"],
                    ["GitHub", "Vidhi-bhutia", "https://github.com/Vidhi-bhutia"],
                    ["Phone", "+91 96858 56291", "tel:+919685856291"],
                  ].map(([k, v, h]) => (
                    <a
                      key={k}
                      href={h}
                      className="group block border-b border-border pb-3 hover:border-burgundy transition-colors"
                    >
                      <div className="text-xs uppercase tracking-[0.25em] text-rose">{k}</div>
                      <div className="mt-1 font-serif text-lg group-hover:text-burgundy transition-colors">
                        {v}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="mailto:vidhibhutia2407@gmail.com">
                    Email me →
                  </MagneticButton>
                  <MagneticButton href={RESUME} target="_blank" rel="noreferrer" variant="outline">
                    Open résumé
                  </MagneticButton>
                </div>

                <div className="mt-12 flex items-end justify-between">
                  <div>
                    <p className="font-serif italic text-ink/80">With warmth,</p>
                    <div className="font-script text-5xl text-burgundy mt-2">Vidhi</div>
                  </div>
                  <div className="w-20 h-20 rounded-full wax-seal p-2.5">
                    <img
                      src={logoImage}
                      alt="Vidhi logo mark"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Tilt3D>
          </Reveal>

          <Reveal delay={0.25}>
            <Tilt3D max={6}>
              <form
                onSubmit={sendMessage}
                className="relative bg-wine text-paper p-10 md:p-14 shadow-[0_30px_70px_-20px_rgba(66,25,36,0.45)] overflow-hidden h-full"
              >
                <div className="absolute inset-0 grain opacity-20" />
                <div className="tape w-32 h-7 -top-3 right-10 rotate-[3deg]" />
                <p className="font-hand text-2xl text-gold">- direct message</p>
                <h3 className="mt-2 font-serif text-3xl md:text-4xl">Send a note.</h3>
                <p className="mt-4 text-paper/80 leading-relaxed font-serif">
                  Tell me your name, email, and message. This sends directly without opening any
                  mail app.
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
                  <a
                    href="mailto:vidhibhutia2407@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
                  >
                    Or email me
                  </a>
                </div>
                <div className="relative mt-4 min-h-6 text-sm text-paper/80">
                  {status === "done" && <p>Message sent successfully. Thank you for writing.</p>}
                  {status === "error" && (
                    <p>Message could not be sent right now. Please try again or use email.</p>
                  )}
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
        <div className="font-serif italic">
          © {new Date().getFullYear()} Vidhi Bhutia · Made by hand in Vellore.
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Vidhi-bhutia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vidhi-bhutia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:vidhibhutia2407@gmail.com" className="hover:text-gold transition-colors">
            Email
          </a>
          <a
            href={RESUME}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors"
          >
            Résumé ↓
          </a>
        </div>
      </div>
    </footer>
  );
}
