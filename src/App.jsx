import React, { useEffect, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Globe,
  Mail,
  MousePointer2,
  Orbit,
  ShieldCheck,
  Sparkles,
  Workflow,
  LineChart,
  BadgeCheck,
  Target,
  BarChart3,
  MessagesSquare,
  Plus,
  Minus,
  Quote,
  Star,
} from "lucide-react";

const packages = [
  {
    name: "Signal Launch System",
    price: "R3 500",
    period: "/month",
    badge: "Early-stage growth",
    description:
      "For brands that need a sharp digital foundation, clearer positioning, and disciplined lead capture.",
    features: [
      "Brand positioning refinement",
      "Landing page conversion review",
      "Meta + Google campaign setup",
      "Monthly content direction",
      "Lead capture workflow",
    ],
  },
  {
    name: "Revenue Engine System",
    price: "R7 900",
    period: "/month",
    badge: "Most popular",
    description:
      "A full-funnel growth system designed to compound demand generation, conversion, and authority.",
    features: [
      "Paid media management",
      "Conversion engineering sprints",
      "Email nurture sequences",
      "Monthly analytics intelligence",
      "Offer + funnel optimization",
    ],
    featured: true,
  },
  {
    name: "Market Domination System",
    price: "R14 900",
    period: "/month",
    badge: "Scale with precision",
    description:
      "For ambitious companies that want premium strategic execution, stronger reporting depth, and market presence.",
    features: [
      "Multi-channel growth strategy",
      "Authority content system",
      "Advanced CRO experiments",
      "Executive reporting dashboard",
      "Priority strategic support",
    ],
  },
];

const pillars = [
  {
    icon: Orbit,
    title: "Demand Generation",
    text: "Campaign systems that create qualified attention instead of vanity traffic.",
  },
  {
    icon: MousePointer2,
    title: "Conversion Engineering",
    text: "Sharper landing experiences, decision architecture, and measurable uplift.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Authority Systems",
    text: "A premium digital presence engineered to make trust feel immediate.",
  },
  {
    icon: LineChart,
    title: "Growth Intelligence",
    text: "Reporting, signal tracking, and strategic insight that actually informs action.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Target,
    title: "Strategic audit",
    text: "We assess your market position, digital footprint, offer clarity, funnel quality, and where growth is currently leaking before execution begins.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "System design",
    text: "We structure the right growth engine across acquisition, messaging, landing pages, lead capture, and conversion flow so every part supports the same outcome.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Launch and optimize",
    text: "We activate campaigns, content, and conversion improvements, then measure performance signals and refine what matters most to qualified pipeline and revenue.",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Scale with clarity",
    text: "Once the system proves itself, we expand what is working into a stronger, more defensible growth machine built for consistency and premium positioning.",
  },
];

const faqs = [
  {
    question: "What exactly is a growth engineering system?",
    answer:
      "It is Adverra Labs’ way of packaging digital growth into one coordinated operating system. Instead of isolated marketing tasks, you get strategy, messaging, campaign execution, conversion improvement, and performance insight working together.",
  },
  {
    question: "Who are these systems best suited for?",
    answer:
      "They are ideal for businesses that want a more premium digital presence, more qualified inbound interest, and a clearer path from attention to consultation or sale.",
  },
  {
    question: "Do I need a large budget to start?",
    answer:
      "No. The systems are tiered so businesses can begin at the level that fits their current stage, then scale into broader execution and deeper optimization over time.",
  },
  {
    question: "How quickly can we begin?",
    answer:
      "Once we understand your goals and fit, the project can move into planning quickly. The consultation helps define the right starting point and execution scope.",
  },
];

const reviews = [
  {
    company: "North Vale Advisory",
    industry: "Advisory & corporate services",
    person: "Managing Director",
    review:
      "Adverra Labs brought discipline to our digital presence in a way most agencies never manage. The repositioning alone made us look more established, and the quality of inbound conversations improved within weeks.",
  },
  {
    company: "Kestrel Commerce Group",
    industry: "Commerce operations",
    person: "Growth Lead",
    review:
      "What impressed us most was the structure. Nothing felt random. Campaign direction, landing page refinement, and lead flow all connected into one coherent system.",
  },
  {
    company: "Blue Harbour Projects",
    industry: "Industrial projects",
    person: "Executive Partner",
    review:
      "We needed to look sharper and convert interest better. Adverra Labs helped us elevate both. The brand now feels premium and the enquiry process feels far more intentional.",
  },
  {
    company: "Southbridge Capital Network",
    industry: "Financial network",
    person: "Commercial Director",
    review:
      "Adverra Labs thinks like operators, not just marketers. Their work made our digital environment feel more credible, more focused, and much more aligned with the level of clients we want to attract.",
  },
  {
    company: "Aureon Logistics Partners",
    industry: "Logistics",
    person: "Operations Executive",
    review:
      "The difference was immediate. Our messaging became clearer, our presentation stronger, and our consultation pipeline better qualified. It felt like we moved from fragmented activity into an actual system.",
  },
  {
    company: "Meridian Workforce Solutions",
    industry: "People & workforce services",
    person: "Head of Commercial",
    review:
      "Adverra Labs helped us clarify what we should say, where we should say it, and how prospects should move through our digital journey. The result was cleaner traction and better confidence internally.",
  },
];

function ScrollReveal({ children, className = "", delay = 0, y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerGroup({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Logo({ size = "nav", className = "" }) {
  const sizeClasses = {
    nav: "w-[108px] md:w-[122px]",
    footer: "w-[106px]",
    panel: "w-[92px]",
  };

  return (
    <img
      src="/adverra-logo.png"
      alt="Adverra Labs"
      className={`${sizeClasses[size] || sizeClasses.nav} h-auto object-contain shrink-0 ${className}`}
      draggable="false"
    />
  );
}

function PageGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-8%] top-[8%] h-80 w-80 rounded-full bg-cyan-400/8 blur-3xl" />
      <div className="absolute right-[-6%] top-[20%] h-96 w-96 rounded-full bg-blue-500/8 blur-3xl" />
      <div className="absolute bottom-[0%] left-[18%] h-80 w-80 rounded-full bg-sky-400/8 blur-3xl" />
    </div>
  );
}

function CursorAura() {
  const mx = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const my = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const x = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.6 });
  const y = useSpring(my, { stiffness: 70, damping: 18, mass: 0.6 });

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX - 120);
      my.set(e.clientY - 120);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-30 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),rgba(37,99,235,0.04),transparent_72%)] blur-3xl mix-blend-screen"
    />
  );
}

function HeroNav() {
  return (
    <div className="absolute inset-x-0 top-0 z-40 px-4 pt-4 lg:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.3rem] border border-white/10 bg-slate-950/55 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl lg:px-5">
        <a href="#top" className="flex shrink-0 items-center px-1 py-1">
          <Logo size="nav" />
        </a>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {[
              ["Systems", "#systems"],
              ["Capabilities", "#capabilities"],
              ["Process", "#process"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="shrink-0 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 px-4 py-2.5 text-sm font-medium text-cyan-100 transition hover:scale-[1.02] hover:border-cyan-300/60"
        >
          Book a consultation <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function HeroScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 600], [0, 90]);
  const heroPanelY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroFade = useTransform(scrollY, [0, 500], [1, 0.45]);

  useEffect(() => {
    const handle = (e) =>
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const orbStyle = useMemo(
    () => ({
      transform: `translate(${(mouse.x - 0.5) * 20}px, ${(mouse.y - 0.5) * 20}px)`,
    }),
    [mouse]
  );

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#020816]">
      <HeroNav />

      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.2]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-particles.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,8,22,0.4),rgba(2,8,22,0.84))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_26%)]" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div
        className="absolute left-[-8%] top-[12%] h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl"
        style={orbStyle}
      />
      <div
        className="absolute bottom-[10%] right-[-4%] h-96 w-96 rounded-full bg-blue-600/12 blur-3xl"
        style={orbStyle}
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-14 px-6 pb-16 pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div style={{ y: heroTextY, opacity: heroFade }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" /> Growth engineering for modern brands
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-5xl font-black leading-[0.95] text-white md:text-7xl"
          >
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent">
              Build demand.
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent">
              Engineer conversion.
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Scale with precision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            Adverra Labs designs premium growth systems for companies that want a sharper digital footprint,
            stronger conversion performance, and market authority that feels inevitable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.22)] transition hover:scale-[1.02]"
            >
              Book a consultation <CalendarDays className="h-4 w-4" />
            </a>
            <a
              href="#systems"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Explore systems <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ y: heroPanelY }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/16 to-blue-600/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-20%", "120%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent blur-xl"
            />
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.32em] text-cyan-200">Live growth layer</div>
                <div className="mt-2 text-lg font-semibold text-white">Adverra Intelligence Console</div>
              </div>
              <Logo size="panel" className="opacity-90" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Pipeline signal", "+182%"],
                ["CTR uplift", "+31%"],
                ["Lead velocity", "2.4x"],
                ["Booked calls", "+46"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                  <div className="text-sm text-slate-400">{label}</div>
                  <div className="mt-2 text-3xl font-black text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#capabilities"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300 backdrop-blur"
      >
        Scroll <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative border-y border-white/10 bg-slate-950 py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.32em] text-cyan-300">Core capabilities</div>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent">
              Premium growth execution, structured like a system.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Adverra Labs combines agency operations with systems thinking, so every action supports a more
            defensible growth engine.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                  <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="bg-[#020816] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.32em] text-cyan-300">How it works</div>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent">
              A premium growth process with real business logic behind it.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Adverra Labs does not treat growth like scattered marketing activity. We approach it like a commercial system:
            diagnose where value is being lost, engineer better movement through the funnel, then scale what proves itself.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                  <div className="text-sm font-bold tracking-[0.28em] text-cyan-300">{step.number}</div>
                  <div className="mt-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ReviewCard({ item, featured = false }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`rounded-[2rem] border backdrop-blur-xl ${
        featured
          ? "border-cyan-300/30 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 p-7 shadow-[0_0_50px_rgba(34,211,238,0.08)]"
          : "border-white/10 bg-white/[0.04] p-6"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-white">{item.company}</div>
          <div className="mt-1 text-sm text-cyan-300">{item.industry}</div>
        </div>
        <Quote className="h-6 w-6 shrink-0 text-cyan-300/80" />
      </div>

      <div className="mt-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-cyan-300 text-cyan-300" />
        ))}
      </div>

      <p className={`mt-5 leading-7 text-slate-300 ${featured ? "text-base" : "text-sm md:text-[15px]"}`}>
        “{item.review}”
      </p>

      <div className="mt-5 text-sm font-medium text-slate-200">{item.person}</div>
    </motion.div>
  );
}

function ReviewsSection() {
  const featured = reviews[0];
  const secondary = reviews.slice(1, 3);
  const grid = reviews.slice(3);

  return (
    <section id="reviews" className="border-y border-white/10 bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.32em] text-cyan-300">Client sentiment</div>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent">
              Strong proof, presented like a premium brand.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            These examples are fictional placeholders for layout and tone, written to show how convincing,
            premium social proof can be presented on the live site.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal>
            <ReviewCard item={featured} featured />
          </ScrollReveal>

          <StaggerGroup className="grid gap-6">
            {secondary.map((item) => (
              <StaggerItem key={item.company}>
                <ReviewCard item={item} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <StaggerGroup className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {grid.map((item) => (
            <StaggerItem key={item.company}>
              <ReviewCard item={item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="systems" className="relative bg-slate-950 py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.32em] text-cyan-300">Growth engineering systems</div>
          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent">
              Choose the system that matches your stage.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Designed for South African businesses that want premium growth support without guesswork.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.name}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl ${
                  pkg.featured
                    ? "border-cyan-300/40 bg-gradient-to-b from-cyan-400/10 to-blue-600/10 shadow-[0_0_50px_rgba(34,211,238,0.12)]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
                    {pkg.badge}
                  </span>
                  {pkg.featured && <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Best value</span>}
                </div>
                <h3 className="text-2xl font-black text-white">{pkg.name}</h3>
                <p className="mt-3 min-h-[84px] leading-7 text-slate-300">{pkg.description}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{pkg.price}</span>
                  <span className="pb-1 text-slate-400">{pkg.period}</span>
                </div>
                <div className="mt-6 h-px bg-white/10" />
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    pkg.featured
                      ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white"
                      : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Choose this system <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-4 text-left">
        <span className="text-lg font-semibold text-white">{item.question}</span>
        {isOpen ? <Minus className="h-5 w-5 shrink-0 text-cyan-300" /> : <Plus className="h-5 w-5 shrink-0 text-cyan-300" />}
      </button>
      {isOpen && <p className="mt-4 leading-7 text-slate-300">{item.answer}</p>}
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#020816] py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.32em] text-cyan-300">Frequently asked questions</div>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent">
              Clear answers for serious buyers.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The FAQ is designed to reduce hesitation, clarify fit, and make the buying decision feel more informed and lower-friction.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 space-y-4">
          {faqs.map((item, index) => (
            <StaggerItem key={item.question}>
              <FAQItem
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setStatus("Thanks — your request has been captured and is ready to route to info@adverralabs.co.za.");
        form.reset();
      } else {
        setStatus("Submission failed. Please email info@adverralabs.co.za directly.");
      }
    } catch {
      setStatus("Submission failed. Please email info@adverralabs.co.za directly.");
    }
  };

  return (
    <section id="contact" className="relative border-t border-white/10 bg-slate-950 py-24">
      <StaggerGroup className="relative mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <StaggerItem>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-[0.32em] text-cyan-300">Start the project</div>
            <h2 className="mt-4 text-4xl font-black text-white">
              <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent">
                Book a consultation or send a structured request.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Tell us about your business, your market, and the growth outcome you want. We will turn that
              into a focused consultation or next-step recommendation.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="mailto:info@adverralabs.co.za?subject=Consultation%20Request%20-%20Adverra%20Labs"
                className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/60 px-5 py-4 text-slate-200 transition hover:bg-white/[0.06]"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-300" /> Book via email
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/60 px-5 py-4 text-slate-200 transition hover:bg-white/[0.06]"
              >
                <span className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-cyan-300" /> Connect booking calendar
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <form
            name="adverra-contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <input type="hidden" name="form-name" value="adverra-contact" />
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="fullName" placeholder="Your full name" />
              <Field label="Business email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Company" name="company" placeholder="Company name" />
              <Field label="Phone" name="phone" placeholder="Your number" />
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Field label="Preferred service" name="service" placeholder="Growth system or custom scope" />
              <Field label="Budget range" name="budget" placeholder="e.g. R7 000 - R15 000" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">What result do you want?</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Describe your business, audience, current challenge, and the growth result you want."
                className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            >
              Send contact request <Workflow className="h-4 w-4" />
            </button>
            {status && <p className="mt-4 text-sm text-cyan-200">{status}</p>}
          </form>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}

function Field({ label, name, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020816] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Logo size="footer" />
          <div>
            <div className="font-semibold text-white">Adverra Labs</div>
            <div className="text-sm text-slate-400">Growth engineering systems for modern brands.</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <Globe className="h-4 w-4" /> www.adverralabs.co.za
        </div>
      </div>
    </footer>
  );
}

export default function AdverraLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <PageGlow />
      <CursorAura />
      <HeroScene />
      <Capabilities />
      <ProcessSection />
      <ReviewsSection />
      <Packages />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}