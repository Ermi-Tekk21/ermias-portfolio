'use client'

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Brain,
  Palette,
  GraduationCap,
  Briefcase,
  Award,
  ArrowUpRight,
  Lock,
  Send,
  Play,
  Square,
  Music,
  Home,
  User,
  Layers,
  Cpu,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [mounted, setMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const resumeUrl = "https://drive.google.com/file/d/1l28kgiCx8k1LetniY2NJM--kxrkKPd0b/view?usp=sharing"

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      } else {
        audioRef.current.play().catch(() => { })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const experiences = [
    {
      role: "Back-end Developer",
      company: "EagleLion System Technology",
      date: "06/2026 – Present",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Build fintech microservices for Dashen Bank’s Super App, serving 2M+ subscribers and processing 25M+ transactions worth 250B+ Birr (as of March 2026), along with branch portal systems and Dashen Wallet branch-side configuration.",
        "Implement idempotency to prevent duplicate payments, double-entry accounting, transaction reconciliation, and automated settlements, with secure secret management for credentials.",
        "Design scalable background workers and event pipelines using Kafka and Redis for low-latency transaction processing.",
      ],
      stack: ["Node.js (Express.js, NestJS)", "TypeScript", "Redis", "Kafka", "PostgreSQL", "MongoDB"],
    },
    {
      role: "Software Developer",
      company: "Lersha - Green Agro Solution PLC",
      date: "07/2025 – 08/2026",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Built and maintained backend logic, databases, and APIs across multiple agritech projects, including three systems from scratch.",
        "Designed a microservices architecture using Kong API Gateway, improving scalability and reducing API response times by approximately 40%.",
        "Implemented event-driven communication between services using Kafka and RabbitMQ.",
        "Enforced strict code quality, test coverage, and maintainability using SonarQube.",
      ],
      stack: ["Node.js", "NestJS", "FastAPI", "TypeORM", "PostgreSQL", "Kong", "Kafka", "RabbitMQ"],
    },
    {
      role: "ALX Software Engineering Tutor",
      company: "ALX Africa",
      date: "12/2024 – 02/2025",
      location: "Remote",
      description: [
        "Mentored ALX Software Engineering Cohort 22 students across Ethiopia, Ghana, and South Africa through 5+ one-on-one sessions.",
        "Provided hands-on guidance on full-stack portfolio projects, complex system architecture, and debugging challenges.",
      ],
      stack: ["Mentorship", "Backend Engineering", "System Design", "C / Python"],
    },
    {
      role: "Web Developer Intern",
      company: "1888EC",
      date: "07/2024 – 09/2024",
      location: "Addis Ababa, Ethiopia",
      description: [
        "Built responsive pages for the LinkFarm website using modern component architectures.",
        "Crafted interactive and accessible UI components with Astro.js, React, Tailwind CSS, and ShadCN UI.",
      ],
      stack: ["Astro.js", "React", "Tailwind CSS", "ShadCN UI"],
    },
    {
      role: "Front-end Developer Intern",
      company: "Backos Technologies Plc",
      date: "07/2023 – 09/2023",
      location: "Adama, Ethiopia",
      description: [
        "Developed the e-shop e-commerce platform to deliver an intuitive and responsive online shopping experience.",
        "Built accessible user interfaces using HTML, CSS, Tailwind CSS, and React.",
      ],
      stack: ["HTML", "CSS", "Tailwind CSS", "React"],
    },
  ]

  const projects = [
    {
      title: "Dashen Bank Super App — Scheduled Payments",
      subtitle: "Enterprise Fintech Microservices",
      category: "Fintech & Backend",
      featured: true,
      description:
        "Built backend services for scheduled and recurring payments across Telebirr and M-Pesa wallets on Dashen Bank's Super App serving 2M+ subscribers. Implemented idempotency to prevent duplicate payments, transaction reconciliation, double-entry accounting, and secure secret management with SMS/email notifications.",
      tech: ["Node.js", "NestJS", "Express.js", "TypeScript", "Kafka", "Redis", "PostgreSQL", "MongoDB"],
      internalUse: true,
      badge: "Flagship Fintech",
    },
    {
      title: "Dynamic Credit Scoring Engine",
      subtitle: "Green Agro Solution PLC",
      category: "Fintech & Backend",
      featured: true,
      description:
        "Layered-architecture system enabling lending teams to configure custom dynamic scoring models and evaluate applicants against dynamic criteria for data-driven lending decisions. Delivered 30+ production API endpoints and reduced manual loan processing workload by 80%.",
      tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "SonarQube", "Python"],
      internalUse: true,
      badge: "Enterprise",
    },
    {
      title: "Nutri-Focus: AI Nutritional Guide",
      subtitle: "Personalized Ethiopian Nutrition Platform",
      category: "ML & AI",
      featured: true,
      description:
        "Led design and implementation of the ML component, generating personalized nutrition recommendations from user profile data. Trained on ~2,000 user profiles and ~400 Ethiopian foods, achieving 70-80% model accuracy on test data.",
      tech: ["FastAPI", "Scikit-learn", "Pandas", "NumPy", "Next.js", "AWS Free Tier"],
      liveUrl: "https://nutrifocusmealplan.duckdns.org/",
      apiDocsUrl: "https://ml-backend.duckdns.org/API-DOCS",
      badge: "Machine Learning",
    },
    {
      title: "Call Center Quality Evaluation System",
      subtitle: "Lersha - Green Agro Solution PLC",
      category: "Fintech & Backend",
      featured: false,
      description:
        "Designed, developed, and deployed an internal microservices system to evaluate call agent performance, providing managers with actionable monitoring metrics and productivity insights connected via Kong API Gateway.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Kafka", "SonarQube", "Kong API Gateway"],
      internalUse: true,
      badge: "Microservices",
    },
    {
      title: "Scooter-Sharing System",
      subtitle: "IoT & Mobility Rental Platform",
      category: "Full-Stack Web",
      featured: false,
      description:
        "End-to-end electric scooter rental platform with OTP authentication, KYC verification, QR code unlocking, and destination station returns with admin approval. Seamlessly integrated Telebirr and Chapa payments.",
      tech: ["Express.js", "PostgreSQL", "TypeORM", "Next.js", "Tailwind CSS"],
      badge: "Full Stack",
    },
    {
      title: "Event & Training Management System",
      subtitle: "Internal Platform for Lersha & Partners",
      category: "Fintech & Backend",
      featured: false,
      description:
        "Designed a platform for training coordination, event planning, and management for Lersha and international partners. Integrated with existing microservices via RabbitMQ, boosting coordination and reporting efficiency by 30%.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "RabbitMQ", "SonarQube"],
      internalUse: true,
      badge: "Microservices",
    },
    {
      title: "YC-Directory",
      subtitle: "Startup Showcase & Pitch Directory",
      category: "Full-Stack Web",
      featured: false,
      description:
        "A Y Combinator-inspired startup directory where founders can pitch, discover, and filter emerging startups. Features GitHub OAuth authentication, real-time Sanity CMS integration, and dynamic startup profiles.",
      tech: ["Next.js", "Sanity CMS", "Auth.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://yc-directory-clone-by-ermi.vercel.app/",
      badge: "Web App",
    },
    {
      title: "Fast Proforma",
      subtitle: "Invoice & Auto-Quotation Generator",
      category: "Full-Stack Web",
      featured: false,
      description:
        "Proforma invoice and estimation management software built for auto spare parts shops with instant PDF generation, item catalogue management, and quick preview capabilities.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "ShadCN UI"],
      liveUrl: "https://fast-spare.vercel.app/auth/login",
      badge: "SaaS",
    },
    {
      title: "Sebez Visual Art eCommerce",
      subtitle: "Creative Marketplace Platform",
      category: "Full-Stack Web",
      featured: false,
      description:
        "Full-stack eCommerce platform for visual art products featuring rich user management, storefront browsing, instant Chapa payment gateway integration, and real-time chat functionality.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://sebez-visual-frontend.onrender.com/",
      badge: "eCommerce",
    },
    {
      title: "Ad Ventures",
      subtitle: "Transit & Billboard Advertising",
      category: "Full-Stack Web",
      featured: false,
      description:
        "GPS-based advertising management platform for taxi fleets and digital billboards with responsive dashboard layouts, real-time location metrics, and campaign management.",
      tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
      githubUrl: "https://github.com/Ermi-Tekk21/ad-ventures",
      badge: "Web App",
    },
    {
      title: "Solar Data Explorer",
      subtitle: "Energy Analytics & Visualizer",
      category: "ML & AI",
      featured: false,
      description:
        "Data science platform analyzing and visualizing solar energy potential and irradiation trends across Benin, Sierra Leone, and Togo with interactive exploratory charts.",
      tech: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
      githubUrl: "https://github.com/Ermi-Tekk21/solar-challenge-week1",
      badge: "Data Science",
    },
    {
      title: "Yene-Med UI/UX",
      subtitle: "Pharmacy Navigation & Prescription Delivery",
      category: "UX/UI Design",
      featured: false,
      description:
        "Comprehensive UI/UX design prototype for navigating local pharmacies, searching medications, verifying prescriptions, and booking on-demand deliveries.",
      tech: ["Figma", "UX Research", "Interactive Prototyping", "Design System"],
      figmaEmbed:
        '<iframe style="border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 12px;" class="w-full aspect-[16/9]" src="https://embed.figma.com/design/8tZeMxk82HuL7nPRVP38gP/Pharmacy-app-ui?node-id=0-1&embed-host=share" allowfullscreen></iframe>',
      badge: "Figma Prototype",
    },
    {
      title: "Nutri-Focus UI Design",
      subtitle: "AI Nutritional Guide Design",
      category: "UX/UI Design",
      featured: false,
      description:
        "Cultural-first UX/UI design crafted for the AI-powered Ethiopian nutritional guide, focusing on intuitive macro-nutrient tracking and culturally tailored diet plans.",
      tech: ["Figma", "Design System", "Mobile UX", "User Testing"],
      figmaEmbed:
        '<iframe style="border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 12px;" class="w-full aspect-[16/9]" src="https://embed.figma.com/design/RXFPmQvjcLDQajzgWfsjSc/Untitled?node-id=0-1&embed-host=share" allowfullscreen></iframe>',
      badge: "Figma Prototype",
    },
    {
      title: "Girar Digital Marketing Website",
      subtitle: "Agency Website Design",
      category: "UX/UI Design",
      featured: false,
      description:
        "Modern marketing agency website design featuring conversion-focused landing layouts, portfolio presentation, and typography systems.",
      tech: ["Figma", "Web Design", "Brand Identity", "Responsive Design"],
      figmaEmbed:
        '<iframe style="border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 12px;" class="w-full aspect-[16/9]" src="https://embed.figma.com/design/Oqp9y0XfRF1qOX0njN1rus/Girar-Portfolio?embed-host=share" allowfullscreen></iframe>',
      badge: "Figma Prototype",
    },
    {
      title: "Digital Menu — BeteEnda Restaurant",
      subtitle: "Interactive Digital Hospitality Experience",
      category: "UX/UI Design",
      featured: false,
      description:
        "Interactive digital menu design for BeteEnda restaurant, enhancing guest dining experience with mobile-first layout and intuitive dish categorization.",
      tech: ["Figma", "Menu UX", "Mobile Design", "Interaction Design"],
      figmaEmbed:
        '<iframe style="border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 12px;" class="w-full aspect-[16/9]" src="https://embed.figma.com/design/vWcimE0GlSFHeBZqZ0MGCU/BeteEnda?embed-host=share" allowfullscreen></iframe>',
      badge: "Figma Prototype",
    },
  ]

  const categories = ["All", "Fintech & Backend", "Full-Stack Web", "ML & AI", "UX/UI Design"]

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Go"],
    },
    {
      title: "Backend & Frameworks",
      skills: ["Node.js", "NestJS", "Express.js", "FastAPI", "GoChi", "Next.js", "React.js"],
    },
    {
      title: "Architecture & Distributed Systems",
      skills: ["Microservices", "Event-Driven Architecture", "Kafka", "RabbitMQ", "RESTful APIs", "Idempotency Patterns"],
    },
    {
      title: "Databases & ORMs",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "TypeORM", "SQLAlchemy", "Prisma"],
    },
    {
      title: "DevOps & Cloud Tools",
      skills: ["Docker", "Git / GitHub", "GitHub Actions", "Jenkins", "AWS (EC2, S3)", "Kong API Gateway", "SonarQube", "Swagger"],
    },
    {
      title: "Engineering Practices",
      skills: ["Double-Entry Accounting", "Transaction Reconciliation", "Agile & Scrum", "Test-Driven Development", "Code Quality"],
    },
  ]

  const certifications = [
    {
      title: "ALX Software Engineering Program",
      issuer: "ALX Africa",
      date: "Jan 2023 — Jul 2024",
      description: "12-month intensive program covering backend systems, C, Python, algorithms, databases, and distributed infrastructure.",
      link: "https://savanna.alxafrica.com/certificates/eJSHf2XsEz",
      linkText: "View Certificate",
    },
    {
      title: "ALX SE Tutor Recognition & Letter of Recommendation",
      issuer: "ALX Africa",
      date: "Feb 2025",
      description: "Recognized with a Letter of Recommendation and Certificate for exceptional technical guidance of Cohort 22 students.",
      link: "https://drive.google.com/file/d/136RIcHt6dUg0B7f6JAiMF1CRTVfJVpBy/view",
      secondaryLink: "https://drive.google.com/file/d/1XJdvb-Bdig6TCQ5l6BBKhT2Vp2EhVjfb/view",
      linkText: "Recommendation Letter",
      secondaryLinkText: "Certificate",
    },
    {
      title: "ALX Ventures Founders Academy",
      issuer: "ALX Africa",
      date: "May 2024 — Jul 2024",
      description: "Focused on entrepreneurship, venture building, product-market fit, and technical product leadership.",
      link: "https://savanna.alxafrica.com/certificates/hcPHpY72mx",
      linkText: "View Certificate",
    },
    {
      title: "Advanced Web Development Bootcamp",
      issuer: "CSECASTU",
      date: "2023",
      description: "Advanced training in modern web applications, scalable architectures, and developer tooling.",
      link: "https://www.linkedin.com/in/ermias-tekilemarkos/details/certifications/1729430251294/single-media-viewer/?profileId=ACoAAECF_iEBfBQDBf7CMtySAf_u2AhuqyjV_pE",
      linkText: "View Certificate",
    },
    {
      title: "National Science Fair Competition",
      issuer: "UNESCO & Ministry of Innovation & Technology",
      date: "Nov 2018",
      description: "National-level competition organized by MoE, UNESCO, and the Ministry of Innovation.",
      link: "https://www.linkedin.com/in/ermias-tekilemarkos/details/certifications/1729429628737/single-media-viewer/?profileId=ACoAAECF_iEBfBQDBf7CMtySAf_u2AhuqyjV_pE",
      linkText: "View Certificate",
    },
  ]

  return (
    <div className="relative min-h-screen px-3 sm:px-6 md:px-8">
      {/* Background audio element */}
      <audio
        ref={audioRef}
        src="/Chill Pulse - Office Jam (freetouse.com).mp3"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Main Single-Card Frame inspired by BRIX Templates Simple Portfolio */}
      <div className="max-w-4xl lg:max-w-5xl mx-auto my-4 sm:my-8 bg-white dark:bg-[#151619] rounded-[24px] sm:rounded-[32px] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_2px_24px_rgba(0,0,0,0.04)] dark:shadow-none p-6 sm:p-10 md:p-14 space-y-14 sm:space-y-16">

        {/* HERO SECTION — Clean, Human-made, No gradients */}
        <section id="hero" className="pt-2 sm:pt-4">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 md:gap-10">
            {/* Profile Avatar */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/profile.png"
                  alt="Ermias Teklemarkos"
                  width={256}
                  height={256}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status indicator */}
              <div
                className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#151619]"
                title="Available for opportunities"
              />
            </div>

            {/* Greeting & Headline */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Available for new roles
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Addis Ababa, Ethiopia
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15]">
                Hello, I am Ermias.
                <span className="block text-neutral-600 dark:text-neutral-400 font-medium text-2xl sm:text-3xl md:text-4xl mt-1">
                  A Software Engineer.
                </span>
              </h1>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Backend-focused full-stack software engineer with 2+ years of professional experience building fintech and agritech microservices and RESTful APIs with Node.js and FastAPI.
              </p>

              {/* Action Buttons — Clean, Human-made, No gradients */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="default" className="rounded-full">
                  <Link href="#contact">
                    Contact me
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="default" className="rounded-full">
                  <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    Resume
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                <Button asChild variant="ghost" size="default" className="rounded-full">
                  <Link href="#projects">
                    View work
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                {/* Subtle Music Player */}
                {mounted && (
                  <button
                    onClick={toggleMusic}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors ml-auto sm:ml-0"
                    title={isPlaying ? "Pause music" : "Play subtle background music"}
                  >
                    <Music className={`w-3.5 h-3.5 ${isPlaying ? "music-wiggle-active text-neutral-900 dark:text-white" : ""}`} />
                    <span className="hidden sm:inline">{isPlaying ? "Pause music" : "Office Jam"}</span>
                    {isPlaying ? <Square className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
                    {isPlaying && (
                      <div className="flex items-end h-3 gap-0.5">
                        <div className="wave-bar h-2" />
                        <div className="wave-bar h-3" />
                        <div className="wave-bar h-2" />
                      </div>
                    )}
                  </button>
                )}
              </div>

              {/* Social Quick Links */}
              <div className="flex items-center gap-4 pt-1 text-xs text-neutral-500 dark:text-neutral-400">
                <Link
                  href="https://linkedin.com/in/ermias-tekilemarkos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </Link>
                <span>•</span>
                <Link
                  href="https://github.com/ermi-tekk21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </Link>
                <span>•</span>
                <Link
                  href="mailto:ermiasteklemarkos@gmail.com"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </Link>
                <span>•</span>
                <Link
                  href="https://t.me/Tek_jeremy_x03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  Telegram
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2-COLUMN SECTION: ABOUT ME + PAST EXPERIENCE (matching BRIX Simple Portfolio screenshot) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pt-6 border-t border-neutral-100 dark:border-neutral-800/80">

          {/* LEFT: About Me */}
          <div id="about" className="md:col-span-5 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              About me
            </h2>

            <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                Backend-focused full-stack software engineer with 2+ years of professional experience (plus internships) building fintech and agritech microservices and RESTful APIs with Node.js (NestJS, Express.js) and FastAPI.
              </p>
              <p>
                Experienced with event-driven architecture (Kafka, RabbitMQ), PostgreSQL, MongoDB, Docker-based CI/CD, and building modern frontends with React and Next.js, and currently exploring and learning ML-focused Data Science.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline inline-flex items-center gap-1"
              >
                Get in touch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Past Experience */}
          <div id="experience" className="md:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Work experience
              </h2>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                2+ years professional
              </span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2 border-b border-neutral-100 dark:border-neutral-800/60 pb-5 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {exp.company} • <span className="text-xs text-neutral-500">{exp.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 shrink-0">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-neutral-400 dark:text-neutral-500 mt-1.5 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Micro Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {exp.stack.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-normal"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO / PROJECTS SECTION */}
        <section id="projects" className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Featured projects
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                Fintech services, distributed microservices, web applications, and machine learning.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800/70 rounded-full w-fit">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${activeCategory === cat
                    ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-1">
                        {project.badge}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    {project.internalUse ? (
                      <span
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 inline-flex items-center gap-1 shrink-0"
                        title="Internal Enterprise System"
                      >
                        <Lock className="w-2.5 h-2.5" />
                        Internal
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1 shrink-0">
                        Public
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Figma Embed if UX/UI */}
                  {project.figmaEmbed && (
                    <div
                      className="pt-2 overflow-hidden rounded-xl"
                      dangerouslySetInnerHTML={{ __html: project.figmaEmbed }}
                    />
                  )}
                </div>

                <div className="space-y-3 pt-2">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-600 dark:text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-3 pt-1 text-xs font-medium">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-neutral-100 hover:underline inline-flex items-center gap-1"
                      >
                        Live Demo
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {project.apiDocsUrl && (
                      <Link
                        href={project.apiDocsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-neutral-100 hover:underline inline-flex items-center gap-1"
                      >
                        API Docs
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-neutral-100 hover:underline inline-flex items-center gap-1"
                      >
                        Source Code
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {project.internalUse && !project.liveUrl && (
                      <span className="text-neutral-500 text-[11px]">
                        Enterprise deployment & confidential repo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & TECHNOLOGIES SECTION */}
        <section id="skills" className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Skills & technologies
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Core technologies, system architecture patterns, and engineering practices from production experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/30 space-y-3"
              >
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <section id="education" className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Education & certifications
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Formal software engineering degree and verified certifications.
            </p>
          </div>

          {/* ASTU Degree Card */}
          <div className="p-5 sm:p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  B.Sc. in Software Engineering
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Adama Science & Technology University (ASTU)
                </p>
              </div>
              <span className="text-xs font-medium text-neutral-500">
                09/2021 – 07/2025
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
              Focused on software development, algorithms, data structures, and practical projects in fullstack, backend, and ML engineering.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/30 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {cert.title}
                    </h4>
                    <span className="text-[11px] text-neutral-400 dark:text-neutral-500 shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2 text-xs font-medium">
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 hover:underline inline-flex items-center gap-1"
                  >
                    {cert.linkText}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {cert.secondaryLink && cert.secondaryLinkText && (
                    <Link
                      href={cert.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 hover:underline inline-flex items-center gap-1"
                    >
                      {cert.secondaryLinkText}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION — Simple, Human, Inviting */}
        <section id="contact" className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-6">
          <div className="max-w-xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Let's connect
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I am open to software engineering opportunities, fintech backends, and collaborative engineering projects. Feel free to reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="default" className="rounded-full">
              <Link href="mailto:ermiasteklemarkos@gmail.com">
                <Mail className="w-4 h-4 mr-1.5" />
                Send an email
              </Link>
            </Button>

            <Button asChild variant="outline" size="default" className="rounded-full">
              <Link href="https://linkedin.com/in/ermias-tekilemarkos" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-1.5" />
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="default" className="rounded-full">
              <Link href="https://github.com/ermi-tekk21" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1.5" />
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="default" className="rounded-full">
              <Link href="https://t.me/Tek_jeremy_x03" target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4 mr-1.5" />
                Telegram
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="default" className="rounded-full">
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Direct Details Box */}
          <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex flex-wrap gap-y-2 gap-x-6 text-xs text-neutral-600 dark:text-neutral-400">
            <div>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">Email: </span>
              <a href="mailto:ermiasteklemarkos@gmail.com" className="hover:underline">ermiasteklemarkos@gmail.com</a>
            </div>
            <div>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">Phone: </span>
              <a href="tel:+251948309786" className="hover:underline">+251 948 309 786</a>
            </div>
            <div>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">Location: </span>
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </section>

      </div>

      {/* FLOATING BOTTOM DOCK — Inspired by BRIX Simple Portfolio Template Screenshot */}
      <nav
        aria-label="Floating navigation"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800 shadow-lg shadow-neutral-950/5 rounded-full px-2 sm:px-3 py-1.5 flex items-center gap-1 sm:gap-2 transition-all"
      >
        <Link
          href="#hero"
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Home"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
        </Link>
        <Link
          href="#about"
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="About me"
          aria-label="About me"
        >
          <User className="w-4 h-4" />
        </Link>
        <Link
          href="#experience"
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Work experience"
          aria-label="Work experience"
        >
          <Briefcase className="w-4 h-4" />
        </Link>
        <Link
          href="#projects"
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Featured projects"
          aria-label="Featured projects"
        >
          <Layers className="w-4 h-4" />
        </Link>
        <Link
          href="#skills"
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Skills"
          aria-label="Skills"
        >
          <Cpu className="w-4 h-4" />
        </Link>
        <Link
          href="#education"
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Education & Certifications"
          aria-label="Education & Certifications"
        >
          <GraduationCap className="w-4 h-4" />
        </Link>
        <Link
          href="#contact"
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title="Contact"
          aria-label="Contact"
        >
          <Mail className="w-4 h-4" />
        </Link>

        <div className="w-[1px] h-4 bg-neutral-200 dark:bg-neutral-800 mx-1" />

        {/* Music Player Button in Dock */}
        <button
          onClick={toggleMusic}
          className={`p-2 rounded-full transition-colors ${isPlaying
            ? "text-neutral-950 dark:text-white bg-neutral-100 dark:bg-neutral-800"
            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            }`}
          title={isPlaying ? "Pause music" : "Play subtle background music"}
          aria-label="Play or pause background music"
        >
          <Music className={`w-4 h-4 ${isPlaying ? "music-wiggle-active" : ""}`} />
        </button>
      </nav>
    </div>
  )
}
