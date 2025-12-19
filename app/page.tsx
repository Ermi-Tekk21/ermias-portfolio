import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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
  Star,
  Zap,
  Rocket,
  Download,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python"],
    Frontend: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "ShadCN UI", "Radix UI"],
    Backend: ["Node.js", "Express.js", "Nest.js", "RESTful APIs"],
    Databases: ["MongoDB", "PostgreSQL", "SQL", "NoSQL"],
    "Machine Learning": ["scikit-learn", "pandas", "NumPy", "Supervised Learning"],
    "Cloud & DevOps": ["AWS", "Docker", "CI/CD", "GitHub Actions"],
    Tools: ["Git", "GitHub", "Figma", "Sanity CMS", "Vercel", "Netlify"],
  }

  const webAppProjects = [
    {
      title: "Nutri-Focus: AI-Assisted Ethiopian Nutritional Guide",
      description:
        "Senior project delivering personalized meal recommendations based on Ethiopian cuisine using machine learning models (Random Forest Regressor) with 80% test coverage.",
      tech: ["MERN Stack", "FastAPI", "Random Forest", "AWS", "PostgreSQL", "Pytest"],
      liveUrl: "https://nutrifocusmealplan.duckdns.org/",
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
      title: "YC-Directory",
      description:
        "Modern startup directory platform with SSR/SSG, enabling startup profile creation and discovery with advanced search and filtering.",
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
      title: "OwnBest eCommerce Website",
      description:
        "User-friendly eCommerce platform with responsive design, advanced search, authentication, and secure payment processing.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Chapa"],
      liveUrl: "https://ownbest.netlify.app/",
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
  ]

  const mlAiProjects = [
    {
      title: "Nutri-Focus: AI-Assisted Ethiopian Nutritional Guide",
      description:
        "Senior project delivering personalized meal recommendations based on Ethiopian cuisine using machine learning models (Random Forest Regressor) with 80% test coverage.",
      tech: ["MERN Stack", "FastAPI", "Random Forest", "AWS", "PostgreSQL", "Pytest"],
      liveUrl: "https://ml-backend.duckdns.org/API-DOCS",
      category: "ML & AI",
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

  const uxUiProjects = [
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

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-primary/10 rounded-full text-xs sm:text-sm font-medium text-primary">
                  <Star className="w-3 sm:w-4 h-3 sm:h-4" />
                  Available for new opportunities
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Ermias Teklemarkos
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
                  Software Engineer | Backend Developer | Full-Stack Skills | Exploring Data Science
                </p>
              </div>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Backend-focused Full-Stack Software Engineer with strong experience designing and building scalable server-side logic, high-performance APIs, and reliable database structures.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-sm"
                >
                  <Link href="#contact">
                    <Mail className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    Get In Touch
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="border-2 hover:bg-primary/5 text-xs sm:text-sm">
                  <Link href="#projects">
                    <Rocket className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    View Projects
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="border-2 hover:bg-primary/5 text-xs sm:text-sm">
                  <Link
                    href="https://drive.google.com/file/d/1bCZHzVDTbbvYvMvJengF8ySb4P0Ig1Pb/view?usp=drive_link"
                    target="_blank"
                  >
                    <Download className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    Download CV
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
                <Link
                  href="mailto:ermiasteklemarkos@gmail.com"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
                  ermiasteklemarkos@gmail.com
                </Link>
                <Link
                  href="https://linkedin.com/in/ermias-tekilemarkos"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-3 sm:w-4 h-3 sm:h-4" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/ermi-tekk21"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                  GitHub
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end w-full lg:ml-32 lg:w-auto">
              <div className="relative group w-48 sm:w-64 md:w-80 lg:w-96">
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl sm:blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <Image
                  src="/profile.png"
                  alt="Ermias Teklemarkos"
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  className="relative rounded-full shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
              Backend-focused Full-Stack Software Engineer with strong experience designing and building scalable server-side logic, high-performance APIs, and reliable database structures.
Proficient in Node.js (NestJS, Express) and skilled in architecting microservices supported by event-driven systems using Kafka and RabbitMQ.
Hands-on experience with PostgreSQL, MySQL, MongoDB, and Redis, along with ORMs and tools such as TypeORM, Sequelize, and Prisma for efficient data access.
On the frontend, experienced with Next.js, Tailwind CSS, Redux Toolkit, and Shadcn UI, enabling the development of fast, modern, and responsive interfaces.
Comfortable working with Docker, cloud services like AWS EC2 and S3, and best practices for secure, maintainable deployments.
Currently expanding skills in machine learning, data visualization, and data analysis, driven by a passion for building impactful, scalable, and innovative software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-muted/50 rounded-lg text-xs sm:text-sm">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-muted-foreground" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-muted/50 rounded-lg text-xs sm:text-sm">
                  <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-muted-foreground" />
                  <span>+251 948309786</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-muted/50 rounded-lg text-xs sm:text-sm">
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-muted-foreground" />
                  <span>ermiasteklemarkos@gmail.com</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  Specializations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Full-Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Backend Development & API Design -  (Nodejs(Express, Nestjs), FastAPI, Postgresql, mongodb, typeorm, Micoroservice and more)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Exploring and Leraning Data Scince 
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Cpanel and AWS Cloud Infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Entrepreneurship & Business Strategy
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
<Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                      <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl">Back-End Developer</CardTitle>
                      <CardDescription className="text-sm sm:text-base">Lersha - Green Agro Solution PLC</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs sm:text-sm">
                    Dec 2024 – Feb 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Build and maintain server-side logic, databases, and APIs for both new and existing projects, as well as internal software. I leverage technologies such as Node.js, NestJS, TypeORM, and Sequelize, working with both SQL and MongoDB databases. My expertise includes implementing microservices architecture to enhance scalability and performance.
                  </li>
                </ul>
              </CardContent>
            </Card>

            
            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                      <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl">ALX SE Tutor</CardTitle>
                      <CardDescription className="text-sm sm:text-base">ALX Software Engineering Program</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs sm:text-sm">
                    Dec 2024 – Feb 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Delivered 1-on-1 mentorship to Cohort 22 students through Specialization Portfolio Projects
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Fostered collaborative learning environment in ALX Discord community
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Received Certificate of Achievement and Letter of Recommendation for outstanding contributions
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Recognized for leadership, communication, and dedication to student success
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                      <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl">Software Engineering Intern</CardTitle>
                      <CardDescription className="text-sm sm:text-base">1888EC (LinkFarm Project)</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs sm:text-sm">
                    Jul 2024 – Sep 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Contributed to LinkFarm web application development using React.js integrated with Astro.js
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Implemented state management with Zustand and integrated APIs using Swagger UI
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Utilized ShadCN UI components for polished user interface
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                    Maintained efficient collaboration through GitHub and Slack communication
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Main Education */}
            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                      <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl">BSc in Software Engineering</CardTitle>
                      <CardDescription className="text-sm sm:text-base">Adama Science and Technology University</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs sm:text-sm">
                    Sep 2020 – Jun 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Coursework includes Full-Stack Development, Database Systems, Algorithms, Machine Learning, and
                  Artificial Intelligence.
                </p>
              </CardContent>
            </Card>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* ALX Software Engineering */}
              <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg">ALX Software Engineering Program</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Jan 2023 – Jul 2024</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Successfully completed a 12-month intensive program focusing on software engineering fundamentals
                    and backend development.
                  </p>
                  <Button asChild size="sm" variant="outline" className="w-full text-xs sm:text-sm">
                    <Link href="https://savanna.alxafrica.com/certificates/eJSHf2XsEz" target="_blank">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Certificate
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* ALX Ventures */}
              <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg">ALX Ventures Founders Academy</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">May 2024 – Jul 2024</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Completed a comprehensive program focused on entrepreneurship, innovation, and leadership.
                  </p>
                  <Button asChild size="sm" variant="outline" className="w-full text-xs sm:text-sm">
                    <Link href="https://savanna.alxafrica.com/certificates/hcPHpY72mx" target="_blank">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Certificate
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* National Science Fair */}
              <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg">National Science Fair Competition</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">November 2018</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Certificate of Participation in the National Science Fair Competition organized jointly by the MoE
                    Mathematics and Science Improvement Center, STEM Synergy, UNESCO and the Ministry of Innovation and
                    Technology.
                  </p>
                  <Button asChild size="sm" variant="outline" className="w-full text-xs sm:text-sm">
                    <Link
                      href="https://www.linkedin.com/in/ermias-tekilemarkos/details/certifications/1729429628737/single-media-viewer/?profileId=ACoAAECF_iEBfBQDBf7CMtySAf_u2AhuqyjV_pE"
                      target="_blank"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Certificate
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Advanced Web Development */}
              <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg">Advanced Web Development Bootcamp</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">CSECASTU</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Successfully completed the Advanced Web Development Bootcamp hosted by CSECASTU.
                  </p>
                  <Button asChild size="sm" variant="outline" className="w-full text-xs sm:text-sm">
                    <Link
                      href="https://www.linkedin.com/in/ermias-tekilemarkos/details/certifications/1729430251294/single-media-viewer/?profileId=ACoAAECF_iEBfBQDBf7CMtySAf_u2AhuqyjV_pE"
                      target="_blank"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Certificate
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* ALX SE Achievement - Full Width */}
            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl">
                      ALX SE: Certificate of Achievement & Letter of Recommendation
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Outstanding Contributions as Software Engineering Tutor
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Received a Certificate of Achievement and a Letter of Recommendation for outstanding contributions
                    as a tutor.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                      Provided 1-on-1 mentorship to Cohort 22 students, guiding them through Specialization Portfolio
                      Projects and technical challenges
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 sm:mt-2"></div>
                      Recognized for fostering a collaborative learning environment and demonstrating leadership,
                      technical expertise, and dedication to student success
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button asChild size="sm" className="flex-1 text-xs sm:text-sm">
                    <Link href="https://drive.google.com/file/d/136RIcHt6dUg0B7f6JAiMF1CRTVfJVpBy/view" target="_blank">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Letter of Recommendation
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1 text-xs sm:text-sm">
                    <Link href="https://drive.google.com/file/d/1XJdvb-Bdig6TCQ5l6BBKhT2Vp2EhVjfb/view" target="_blank">
                      <ExternalLink className="w-3 h-3 mr-1" />
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
      <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              A comprehensive toolkit for building modern web applications and AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="border-2 hover:border-primary/20 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs sm:text-sm hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              A showcase of my work across web development, machine learning, and user experience design.
            </p>
          </div>

          {/* Web App Projects */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Code className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Web Applications</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {webAppProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group border-2 hover:border-primary/20 transition-all hover:shadow-xl hover:-translate-y-2"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                      <span className="group-hover:text-primary transition-colors">{project.title}</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs sm:text-sm">
                        {project.category}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      {project.liveUrl && (
                        <Button asChild size="sm" className="flex-1 text-xs sm:text-sm">
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Link>
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
              <h3 className="text-2xl sm:text-3xl font-bold">Machine Learning & AI</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {mlAiProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group border-2 hover:border-primary/20 transition-all hover:shadow-xl hover:-translate-y-2"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                      <span className="group-hover:text-primary transition-colors">{project.title}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs sm:text-sm">
                        {project.category}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      {project.liveUrl && (
                        <Button asChild size="sm" className="flex-1 text-xs sm:text-sm">
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Link>
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
              <h3 className="text-2xl sm:text-3xl font-bold">UX/UI Design</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {uxUiProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group border-2 hover:border-primary/20 transition-all hover:shadow-xl hover:-translate-y-2"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                      <span className="group-hover:text-primary transition-colors">{project.title}</span>
                      <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200 text-xs sm:text-sm">
                        {project.category}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div
                      className="w-full"
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
      <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
            want to connect, feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-sm"
            >
              <Link href="mailto:ermiasteklemarkos@gmail.com">
                <Mail className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="border-2 hover:bg-primary/5 text-xs sm:text-sm">
              <Link href="https://linkedin.com/in/ermias-tekilemarkos">
                <Linkedin className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="border-2 hover:bg-primary/5 text-xs sm:text-sm">
              <Link href="https://github.com/ermi-tekk21">
                <Github className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                GitHub
              </Link>
            </Button>
          </div>

          <Separator className="my-8 sm:my-12" />

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
              Addis Ababa, Ethiopia
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
              +251 948309786
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
