import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  Brain,
  Palette,
  GraduationCap,
  Briefcase,
  Award,
  ExternalLink,
  Zap,
  Rocket,
  Download,
  Lock,
  Send,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Go"],
    "Software Architecture": ["Microservices", "Monolithic", "Client-Server"],
    "Frameworks/Libraries": ["Node.js (NestJS, Express.js)", "FastAPI", "Next.js", "React.js"],
    "Tools/DevOps": ["Docker", "Git/ GitHub", "Swagger", "GitHub Actions", "Jenkins", "AWS (EC2, S3)"],
    "Databases and ORM": ["PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Prisma", "SQLAlchemy"],
    Methodologies: ["Waterfall", "Agile", "Scrum"],
  }

  const webAppProjects: any[] = [
    {
      title: "Dynamic Credit Scoring Engine",
      description:
        "Internal platform for Green Agro Solution PLC. A layered architecture system that enables the configuration of custom scoring models, evaluation of applicants against dynamic criteria, and data-driven lending decisions. With more than 30 API Endpoints, minimizing 80% workload compared to working with a hard-coded existing credit scoring tool.",
      tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "SonarQube"],
      internalUse: true,
      category: "Web App",
    },
    {
      title: "Event and Training Management System",
      description:
        "Internal platform for Lersha – Green Agro Solution PLC and international partners, designed for training coordination, event planning, and management. Implements a microservices architecture to streamline event coordination and reporting by 30%.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "RabbitMQ", "SonarQube"],
      internalUse: true,
      category: "Microservices",
    },
    {
      title: "Call Center Quality Evaluation System",
      description:
        "Designed, developed, and deployed an internal software system to evaluate call agent performance at Lersha - Green Agro Solution, improving monitoring and productivity insights.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Kafka", "SonarQube", "Kong API Gateway"],
      internalUse: true,
      category: "Microservices",
    },
    {
      title: "Nutri-Focus: AI-Assisted Ethiopian Nutritional Guide",
      description:
        "A platform that provides personalized meal recommendations based on Ethiopian cuisine using machine learning models (Random Forest Regressor) with 80% test coverage.",
      tech: ["Next js", "Nest js and FastAPI", "SQLAlchemy", "ML: Scikit-learn, Random Forest, Pandas, NumPy", "AWS EC2"],
      internalUse: false,
      liveUrl: "https://nutrifocusmealplan.duckdns.org/",
      category: "Web App",
    },
    {
      title: "YC-Directory",
      description:
        "A startup directory platform where entrepreneurs can submit, discover, and explore startups. Built as a Y Combinator-inspired clone with real-time content management, GitHub authentication, and dynamic startup profiles.",
      tech: ["Next.js", "Sanity", "Auth.js", "Tailwind CSS", "ShadCN UI"],
      liveUrl: "https://yc-directory-clone-by-ermi.vercel.app/",
      category: "Web App",
    },
    {
      title: "Fast Proforma",
      description:
        "Proforma invoice management system for car spare parts shop with PDF generation and preview capabilities.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "ShadCN UI"],
      liveUrl: "https://fast-spare.vercel.app/auth/login",
      category: "Web App",
    },
    {
      title: "Sebez Visual Art eCommerce Website",
      description:
        "Full-stack eCommerce platform for visual art products with user management, Chapa payment integration, and chat functionality.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://sebez-visual-frontend.onrender.com/",
      category: "Web App",
    },
    {
      title: "Ad Ventures",
      description:
        "GPS-based advertising platform for taxis and billboards with focus on user experience, responsive web layouts, and real-time data processing.",
      tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
      githubUrl: "https://github.com/Ermi-Tekk21/ad-ventures",
      category: "Web App",
    },
    {
      title: "Scooter-Sharing System",
      description:
        "Users can easily rent electric scooters by logging in with OTP, completing KYC, scanning a scooter QR to start a ride, and ending the ride at a destination station with admin approval. Payments are processed via Telebirr or Chapa.",
      tech: ["ExpressJS", "PostgreSQL", "TypeORM", "NextJS", "Tailwind CSS"],
      category: "Web App",
    },
  ]

  const mlAiProjects: any[] = [
    {
      title: "Nutri-Focus: AI-Assisted Ethiopian Nutritional Guide",
      description:
        "Led project design and implementation, developing the ML component using FastAPI, Scikit-learn, Pandas NumPy, and AWS Free Tier with ~2,000 user profiles and ~400 Ethiopian foods.",
      tech: ["FastAPI", "Scikit-learn", "Pandas", "NumPy", "AWS Free Tier"],
      category: "ML & AI",
      liveUrl: "https://ml-backend.duckdns.org/API-DOCS",
    },
    {
      title: "Solar Data Explorer",
      description:
        "Analyze and visualize solar energy potential and usage data for Benin, Sierra Leone, and Togo. Provides insights into solar energy trends and facilitates comparisons across these countries using advanced data analysis techniques.",
      tech: ["Python", "Jupyter Notebook", "Streamlit", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
      githubUrl: "https://github.com/Ermi-Tekk21/solar-challenge-week1",
      category: "ML & AI",
    },
  ]

  const uxUiProjects: any[] = [
    {
      title: "Yene-Med",
      description:
        "A comprehensive platform for navigating pharmacies, drug searching, online payment, prescription verification, delivery services and more.",
      tech: ["Figma", "UX Research", "UI Design", "Prototyping"],
      figmaEmbed:
        '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" class="w-full aspect-[16/9]" src="https://embed.figma.com/design/8tZeMxk82HuL7nPRVP38gP/Pharmacy-app-ui?node-id=0-1&embed-host=share" allowfullscreen></iframe>',
      category: "UX/UI",
    },
    {
      title: "Nutri-Focus UI Design",
      description:
        "Assisted in UX/UI design using Figma for the AI-powered nutritional guide, enhancing user experience and cultural relevance for Ethiopian cuisine.",
      tech: ["Figma", "UX Research", "UI Design", "User Testing"],
      figmaEmbed:
        '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" class="w-full aspect-[16/9]" src="https://embed.figma.com/design/RXFPmQvjcLDQajzgWfsjSc/Untitled?node-id=0-1&embed-host=share" allowfullscreen></iframe>',
      category: "UX/UI",
    },
    {
      title: "Girar Digital Marketing Website",
      description:
        "Complete website design for a digital marketing agency, focusing on modern aesthetics and conversion optimization.",
      tech: ["Figma", "Web Design", "Brand Identity", "Responsive Design"],
      figmaEmbed:
        '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" class="w-full aspect-[16/9]" src="https://embed.figma.com/design/Oqp9y0XfRF1qOX0njN1rus/Girar-Portfolio?embed-host=share" allowfullscreen></iframe>',
      category: "UX/UI",
    },
    {
      title: "Digital Menu - BeteEnda Restaurant",
      description:
        "Interactive digital menu design for BeteEnda restaurant, enhancing customer experience with modern UI/UX principles.",
      tech: ["Figma", "Menu Design", "Interactive Design", "Mobile-First"],
      figmaEmbed:
        '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" class="w-full aspect-[16/9]" src="https://embed.figma.com/design/vWcimE0GlSFHeBZqZ0MGCU/BeteEnda?embed-host=share" allowfullscreen></iframe>',
      category: "UX/UI",
    },
  ]

  const experiences = [
    {
      role: "Software Engineer (Back-end Developer)",
      company: "Lersha - Green Agro Solution PLC",
      date: "07/2025 – Present",
      description: [
        "Developed and maintained backend logic, databases, and APIs for multiple projects, including two new software systems using Node.js, NestJS, FastAPI, TypeORM, PostgreSQL, Kafka, RabbitMQ, SonarQube and Kong API Gateway.",
        "Implemented microservices architecture that significantly improved scalability and reduced response times several-fold."
      ]
    },
    {
      role: "ALX Software Engineering Tutor",
      company: "ALX Africa",
      date: "12/2024 – 02/2025",
      description: [
        "Volunteered to deliver over five individualized mentorship sessions to ALX SE Cohort 22 students across Africa (Ethiopia, Ghana, and South Africa).",
        "Facilitated hands-on guidance on Specialization Portfolio Projects and complex technical problems."
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "1888EC",
      date: "07/2024 – 09/2024",
      description: [
        "Interned at 1888EC as a Front-End Web Developer, contributing to the LinkFarm website.",
        "Leveraged Astro.js, React, Tailwind CSS, and ShadCN UI to craft responsive, interactive, and user-friendly web applications."
      ]
    },
    {
      role: "Front-end Developer",
      company: "Backos Technologies Plc",
      date: "07/2023 – 09/2023",
      description: [
        "Interned at Backos, developing the e-commerce website e-shop to strengthen web development skills.",
        "Utilized HTML, CSS, Tailwind CSS, and React to build a responsive, functional, and user-friendly online shopping platform."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center py-24 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.05),transparent)]"></div>

        <div className="absolute top-10 left-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center justify-between max-w-7xl mx-auto relative z-10 w-full">

            {/* LEFT */}
            <div className="space-y-6 text-center lg:text-left">

              {/* Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-green-500/10 rounded-full text-xs sm:text-sm font-medium text-green-400 backdrop-blur font-mono">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for Work
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-900 sm:bg-gradient-to-r sm:from-green-400 sm:via-blue-500 sm:to-purple-500 font-mono drop-shadow-lg sm:drop-shadow-none">
                {"<Ermi_Tek />"}
              </h1>

              {/* Title */}
              <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium font-mono">
                $ Software Engineer | Backend-Focused Full-Stack Developer ⚡
              </p>

              {/* Tech Stack */}
              <p className="text-xs sm:text-sm text-green-500 font-mono opacity-80">
                {"-- Node.js(NestJS & ExpressJS) | FastAPI | RabbitMQ and Kafka"}<br />
                {"-- PostgreSQL | Docker | React | Next.js"}
              </p>


              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">

                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-xs sm:text-sm font-mono"
                >
                  <Link href="#contact">
                    <Mail className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    Let's Build
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border border-green-500/30 text-green-400 hover:bg-green-500/10 text-xs sm:text-sm font-mono"
                >
                  <Link href="#projects">
                    <Rocket className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    See Work
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 text-xs sm:text-sm font-mono"
                >
                  <Link
                    href="https://drive.google.com/file/d/1wz3VXbYfBKaWXc-_rTtE4ib-IXuhcAh3/view?usp=sharing"
                    target="_blank"
                  >
                    <Download className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    Resume
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border border-blue-400/30 text-blue-400 hover:bg-blue-400/10 text-xs sm:text-sm font-mono"
                >
                  <Link
                    href="https://t.me/Tek_jeremy_x03"
                    target="_blank"
                  >
                    <Send className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    Join "Lets Share"
                  </Link>
                </Button>
              </div>

              {/* Social */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4">

                <Link
                  href="mailto:ermiasteklemarkos@gmail.com"
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-green-400 transition-colors font-mono"
                >
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
                  Email
                </Link>

                <Link
                  href="https://linkedin.com/in/ermias-tekilemarkos"
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-blue-400 transition-colors font-mono"
                >
                  <Linkedin className="w-3 sm:w-4 h-3 sm:h-4" />
                  LinkedIn
                </Link>

                <Link
                  href="https://github.com/ermi-tekk21"
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-purple-400 transition-colors font-mono"
                >
                  <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                  GitHub
                </Link>

                <Link
                  href="https://t.me/Tek_jeremy_x03"
                  target="_blank"
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-blue-400 transition-colors font-mono"
                >
                  <Send className="w-3 sm:w-4 h-3 sm:h-4" />
                  Telegram
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end w-full lg:w-auto">
              <div className="relative group w-48 sm:w-64 md:w-80 lg:w-96">

                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-green-500 to-purple-600 rounded-full blur-xl sm:blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>

                <Image
                  src="/profile.png"
                  alt="Ermias Teklemarkos"
                  width={900}
                  height={900}
                  className="relative rounded-full aspect-square object-cover shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/10 group-hover:scale-105 transition-transform duration-300 w-full"
                />
              </div>
            </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#080e1f] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.05),transparent)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-green-400">
              {"<About_Me />"}
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-mono leading-relaxed">
              Backend-focused full-stack engineer with 3+ years of experience building scalable microservices and RESTful APIs.
              Strong in Node.js (NestJS, Express), FastAPI, and event-driven architectures.
              <br /><br />
              Experienced in designing scalable systems using relational and NoSQL databases, CI/CD pipelines, and Docker-based deployments.
              Also building modern frontends with React, Next.js, and Tailwind — currently exploring ML-driven data science.
            </p>

            {/* subtle terminal line */}
            <p className="text-xs text-green-500 font-mono opacity-70">
              {"// clean code • scalable systems • real-world impact"}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

            {/* Contact */}
            <Card className="border border-green-500/20 bg-black/60 backdrop-blur hover:border-green-400/40 transition-all hover:shadow-[0_0_25px_rgba(0,255,150,0.1)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-mono text-green-400">
                  <MapPin className="w-5 h-5" />
                  $ contact_info
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4 font-mono text-sm">

                <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg text-gray-400">
                  <MapPin className="w-4 h-4" />
                  Addis Ababa, Ethiopia
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg text-gray-400">
                  <Phone className="w-4 h-4" />
                  +251 948309786
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg text-gray-400">
                  <Mail className="w-4 h-4" />
                  ermiasteklemarkos@gmail.com
                </div>

              </CardContent>
            </Card>

            {/* Specializations */}
            <Card className="border border-purple-500/20 bg-black/60 backdrop-blur hover:border-purple-400/40 transition-all hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-mono text-purple-400">
                  <Zap className="w-5 h-5" />
                  $ specializations
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 text-sm font-mono text-gray-400">

                  <li className="flex items-start gap-2">
                    <span className="text-green-400">{">"}</span>
                    Full-Stack Development
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-green-400">{">"}</span>
                    Backend Systems & API Design (Node.js, NestJS, FastAPI, Microservices)
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-green-400">{">"}</span>
                    Database Design (PostgreSQL, MongoDB, TypeORM)
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-green-400">{">"}</span>
                    Cloud & DevOps (Docker, CI/CD, AWS, cPanel)
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-green-400">{">"}</span>
                    Exploring Machine Learning & Data Science
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-green-400">{">"}</span>
                    Entrepreneurship & Product Thinking
                  </li>

                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-green-400">
              {"<Experience />"}
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border border-green-500/20 bg-black/60 backdrop-blur hover:border-green-400/40 transition-all hover:shadow-[0_0_25px_rgba(0,255,150,0.1)]">

                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">

                    <div className="flex items-center gap-4">
                      <Briefcase className="w-6 h-6 text-green-400" />
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-mono text-white">
                          {exp.role}
                        </CardTitle>
                        <CardDescription className="text-gray-400 font-mono">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>

                    <span className="text-xs sm:text-sm text-green-500 font-mono">
                      {exp.date}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-400 font-mono">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-400">{">"}</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </CardContent>

              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#080e1f] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-purple-400">
              {"<Education_&_Certifications />"}
            </h2>
            <p className="text-gray-500 font-mono text-sm mt-2">
              {"// continuous learning • growth • impact"}
            </p>
          </div>

          <div className="space-y-8">

            {/* Main Degree */}
            <Card className="border border-purple-500/20 bg-black/60 backdrop-blur hover:border-purple-400/40 transition-all">

              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">

                  <div className="flex items-center gap-4">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-mono text-white">
                        BSc in Software Engineering
                      </CardTitle>
                      <CardDescription className="text-gray-400 font-mono">
                        Adama Science and Technology University
                      </CardDescription>
                    </div>
                  </div>

                  <span className="text-sm text-purple-400 font-mono">
                    Sep 2020 — Jun 2025
                  </span>

                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">
                  {"// Core Focus"}
                  <br />
                  Full-Stack Development • Database Systems • Algorithms • Machine Learning • Artificial Intelligence
                </p>
              </CardContent>

            </Card>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* ALX Software Engineering */}
              <Card className="border border-green-500/20 bg-black/60 backdrop-blur hover:border-green-400/40 transition-all">

                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-green-400" />
                    <div>
                      <CardTitle className="text-base sm:text-lg font-mono text-white">
                        ALX Software Engineering Program
                      </CardTitle>
                      <CardDescription className="text-gray-400 font-mono text-sm">
                        Jan 2023 — Jul 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-400 font-mono">
                    Completed a 12-month intensive program focused on backend engineering,
                    system design, and real-world software development.
                  </p>

                  <Button asChild size="sm" variant="outline" className="w-full font-mono border-green-500/30 text-green-400">
                    <Link href="https://savanna.alxafrica.com/certificates/eJSHf2XsEz" target="_blank">
                      View Certificate
                    </Link>
                  </Button>
                </CardContent>

              </Card>

              {/* ALX Ventures */}
              <Card className="border border-purple-500/20 bg-black/60 backdrop-blur hover:border-purple-400/40 transition-all">

                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-400" />
                    <div>
                      <CardTitle className="text-base sm:text-lg font-mono text-white">
                        ALX Ventures Founders Academy
                      </CardTitle>
                      <CardDescription className="text-gray-400 font-mono text-sm">
                        May 2024 — Jul 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-400 font-mono">
                    Focused on entrepreneurship, product thinking, and leadership in building impactful ventures.
                  </p>

                  <Button asChild size="sm" variant="outline" className="w-full font-mono border-purple-500/30 text-purple-400">
                    <Link href="https://savanna.alxafrica.com/certificates/hcPHpY72mx" target="_blank">
                      View Certificate
                    </Link>
                  </Button>
                </CardContent>

              </Card>

              {/* National Science Fair */}
              <Card className="border border-yellow-500/20 bg-black/60 backdrop-blur hover:border-yellow-400/40 transition-all">

                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <div>
                      <CardTitle className="text-base sm:text-lg font-mono text-white">
                        National Science Fair Competition
                      </CardTitle>
                      <CardDescription className="text-gray-400 font-mono text-sm">
                        November 2018
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-400 font-mono">
                    Participated in a national-level competition organized by MoE, UNESCO, and Ministry of Innovation.
                  </p>

                  <Button asChild size="sm" variant="outline" className="w-full font-mono border-yellow-500/30 text-yellow-400">
                    <Link href="https://www.linkedin.com/in/ermias-tekilemarkos/details/certifications/1729429628737/single-media-viewer/?profileId=ACoAAECF_iEBfBQDBf7CMtySAf_u2AhuqyjV_pE" target="_blank">
                      View Certificate
                    </Link>
                  </Button>
                </CardContent>

              </Card>

              {/* Web Bootcamp */}
              <Card className="border border-blue-500/20 bg-black/60 backdrop-blur hover:border-blue-400/40 transition-all">

                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-400" />
                    <div>
                      <CardTitle className="text-base sm:text-lg font-mono text-white">
                        Advanced Web Development Bootcamp
                      </CardTitle>
                      <CardDescription className="text-gray-400 font-mono text-sm">
                        CSECASTU
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-400 font-mono">
                    Completed advanced training in modern web development practices and tools.
                  </p>

                  <Button asChild size="sm" variant="outline" className="w-full font-mono border-blue-500/30 text-blue-400">
                    <Link href="https://www.linkedin.com/in/ermias-tekilemarkos/details/certifications/1729430251294/single-media-viewer/?profileId=ACoAAECF_iEBfBQDBf7CMtySAf_u2AhuqyjV_pE" target="_blank">
                      View Certificate
                    </Link>
                  </Button>
                </CardContent>

              </Card>

            </div>

            {/* Achievement (Highlight Card) */}
            <Card className="border border-yellow-500/30 bg-black/70 backdrop-blur hover:border-yellow-400/50 transition-all shadow-[0_0_30px_rgba(255,200,0,0.1)]">

              <CardHeader>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-yellow-400" />

                  <div>
                    <CardTitle className="text-lg sm:text-xl font-mono text-white">
                      ALX SE Achievement — Tutor Recognition
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-mono">
                      Certificate of Achievement & Letter of Recommendation
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 font-mono text-sm text-gray-400">

                <p>
                  Recognized for outstanding contribution as a Software Engineering Tutor.
                </p>

                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-yellow-400">{">"}</span>
                    Mentored students through portfolio projects and real-world engineering challenges
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400">{">"}</span>
                    Demonstrated leadership, collaboration, and deep technical guidance
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="sm" className="flex-1 font-mono bg-yellow-500 text-black hover:bg-yellow-400">
                    <Link href="https://drive.google.com/file/d/136RIcHt6dUg0B7f6JAiMF1CRTVfJVpBy/view" target="_blank">
                      View Recommendation
                    </Link>
                  </Button>

                  <Button asChild size="sm" variant="outline" className="flex-1 font-mono border-yellow-500/40 text-yellow-400">
                    <Link href="https://drive.google.com/file/d/1XJdvb-Bdig6TCQ5l6BBKhT2Vp2EhVjfb/view" target="_blank">
                      View Certificate
                    </Link>
                  </Button>
                </div>

              </CardContent>

            </Card>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-green-400">
              {"<Tech_Stack />"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border border-green-500/20 bg-black/60 backdrop-blur">

                <CardHeader>
                  <CardTitle className="font-mono text-green-400 text-lg">
                    $ {category.toLowerCase()}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="text-xs font-mono text-gray-400 border border-green-500/20 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </CardContent>

              </Card>
            ))}

          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#080e1f]">

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-purple-400">
              {"<Featured_Projects />"}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2 font-mono">
              A showcase of work across web development, machine learning, and UX/UI design.
            </p>
          </div>

          {/* Web App Projects */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Code className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white">Web Applications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {webAppProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group border border-blue-500/20 bg-black/60 backdrop-blur hover:border-blue-400/40 hover:shadow-xl hover:-translate-y-2 transition-all"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-2 text-base sm:text-lg font-mono text-white">
                      <span className="group-hover:text-blue-400 transition-colors">{project.title}</span>
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.2)] tracking-wide uppercase">
                        {project.category}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-xs sm:text-sm leading-relaxed font-mono">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      {project.liveUrl && (
                        <Button asChild size="sm" className="w-full text-sm font-mono py-2">
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="w-full text-sm font-mono py-2">
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.internalUse && (
                        <Button variant="secondary" size="sm" className="w-full text-sm font-mono py-2 cursor-default hover:bg-secondary">
                          <Lock className="w-4 h-4 mr-2" />
                          Company Internal
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ML & AI Projects */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white">Machine Learning & AI</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {mlAiProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group border border-green-500/20 bg-black/60 backdrop-blur hover:border-green-400/40 hover:shadow-xl hover:-translate-y-2 transition-all"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-2 text-base sm:text-lg font-mono text-white">
                      <span className="group-hover:text-green-400 transition-colors">{project.title}</span>
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 shadow-[0_0_8px_rgba(34,197,94,0.2)] tracking-wide uppercase">
                        {project.category}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-xs sm:text-sm leading-relaxed font-mono">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      {project.liveUrl && (
                        <Button asChild size="sm" className="w-full text-sm font-mono py-2">
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="w-full text-sm font-mono py-2">
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.internalUse && (
                        <Button variant="secondary" size="sm" className="w-full text-sm font-mono py-2 cursor-default hover:bg-secondary">
                          <Lock className="w-4 h-4 mr-2" />
                          Company Internal
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* UX/UI Projects */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl">
                <Palette className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white">UX/UI Design</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {uxUiProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group border border-pink-500/20 bg-black/60 backdrop-blur hover:border-pink-400/40 hover:shadow-xl hover:-translate-y-2 transition-all"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-2 text-base sm:text-lg font-mono text-white">
                      <span className="group-hover:text-pink-400 transition-colors">{project.title}</span>
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30 shadow-[0_0_8px_rgba(236,72,153,0.2)] tracking-wide uppercase">
                        {project.category}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-xs sm:text-sm leading-relaxed font-mono">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div
                      className="w-full rounded-lg overflow-hidden border border-gray-700"
                      dangerouslySetInnerHTML={{ __html: project.figmaEmbed }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#080e1f] text-center">

        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-green-400 mb-6">
          {"<Let's_Build />"}
        </h2>

        <p className="text-gray-400 font-mono max-w-2xl mx-auto mb-10">
          Open to opportunities, collaborations, and building impactful systems.
          Let’s create something meaningful.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Button variant="outline" asChild className="border-green-500 text-green-400 font-mono">
            <Link href="https://linkedin.com/in/ermias-tekilemarkos">
              LinkedIn
            </Link>
          </Button>
          <Button asChild className="bg-green-500 text-black font-mono">
            <Link href="mailto:ermiasteklemarkos@gmail.com">
              Send Email
            </Link>
          </Button>

          <Button variant="outline" asChild className="border-green-500 text-green-400 font-mono">
            <Link href="https://github.com/ermi-tekk21">
              GitHub
            </Link>
          </Button>

        </div>

      </section>
    </div>
  )
}
