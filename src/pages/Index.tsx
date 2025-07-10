import { Badge } from "@/components/ui/badge";
import {
    Github,
    Linkedin,
    Mail,
    Code,
    Palette,
    Smartphone,
    Globe,
    ArrowRight,
    Download,
    MapPin,
    Calendar,
    Zap,
    Rocket,
    Star,
    Instagram,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedText from "@/components/AnimatedText";
import GlowingButton from "@/components/GlowingButton";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";

const Index = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/Kabeer_Ghai_Resume.docx"; // Actual path to file
        link.download = "Kabeer_Ghai_Resume.docx"; // Optional: filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("CV download initiated");
    };

    const handleContactClick = () => {
        window.location.href = "mailto:kabeer@example.com";
    };

    const handleScheduleCall = () => {
        window.open("https://calendly.com/kabeerghai01/30min", "_blank");
    };

    const skills = [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "CSS/SCSS", level: 85, icon: "🎨" },
        { name: "UI/UX Design", level: 80, icon: "✨" },
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "Figma", level: 85, icon: "🎯" },
    ];

    const projects = [
        {
            title: "Cranberri",
            description:
                "A Student led Web Development company specializing in creating stunning websites and applications with a focus on user experience and performance.",
            technologies: ["React", "TypeScript", "Tailwind"],
            image: "/cranberri.png",
            demoUrl: "https://cranbeeri.in",
        },
        {
            title: "Foodyum",
            description:
                "A corporate food services company' portfolio website showcasing their services, client testimonials, contact information and GST details in a pleasing aesthetic.",
            technologies: ["React", "JavaScript XML", "Tailwind"],
            image: "/foodyum.png",
            demoUrl: "https://indore-plants.vercel.app",
        },
        {
            title: "Intervuwalla",
            description:
                "An E-commerce store + portfolio website for there courses, workshops and a professional business showcase.",
            technologies: ["React", "API", "Tailwind", "TypeScript", "Razorpay"],
            image: "/intervuwalla.png",
            demoUrl: "https://intervuwalla.com",
        },
    ];

    const animatedTitles = [
        "Frontend Developer",
        "UI/UX Designer",
        "Creative Coder",
        "Digital Artist",
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <ParticleBackground />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 animate-gradient" />

                {/* Floating geometric shapes */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-20 left-20 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float" />
                    <div
                        className="absolute top-40 right-32 w-16 h-16 bg-primary/20 rounded-full animate-float"
                        style={{ animationDelay: "1s" }}
                    />
                    <div
                        className="absolute bottom-32 left-40 w-12 h-12 border-2 border-accent/40 animate-float"
                        style={{ animationDelay: "2s" }}
                    />
                    <div
                        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-primary/20 rounded-full animate-float"
                        style={{ animationDelay: "0.5s" }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-6xl mx-auto">
                        <div className="mb-12 relative">
                            <div className="relative inline-block">
                                <img
                                    src="/image.png"
                                    alt="Kabeer Ghai"
                                    className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-primary/50 shadow-2xl animate-glow relative z-10"
                                />
                                <div className="absolute inset-0 w-40 h-40 rounded-full mx-auto animate-pulse bg-primary/20 blur-xl" />
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 relative z-10">
                            <span
                                className="text-white"
                                style={{
                                    textShadow:
                                        "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))",
                                }}
                            >
                                Kabeer Ghai
                            </span>
                        </h1>

                        <div className="text-2xl md:text-4xl mb-12 h-16 flex items-center justify-center relative z-10 text-primary shadow-[0_0_5px_var(--primary),_0_0_10px_var(--primary)]">
                            <AnimatedText
                                texts={animatedTitles}
                                className="font-semibold"
                            />
                        </div>

                        <p className="text-lg md:text-xl mb-16 text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-10">
                            Crafting{" "}
                            <span className="text-primary font-semibold">
                                extraordinary digital experiences
                            </span>{" "}
                            with cutting-edge technologies. Passionate about{" "}
                            <span className="text-accent font-semibold">
                                innovative design
                            </span>{" "}
                            and{" "}
                            <span className="text-primary font-semibold">
                                clean code
                            </span>
                            .
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 relative z-10">
                            <GlowingButton
                                size="lg"
                                className="text-lg px-12 py-4"
                                onClick={() => scrollToSection("projects")}
                            >
                                <Rocket className="mr-2 h-6 w-6" />
                                View My Work
                                <ArrowRight className="ml-2 h-6 w-6" />
                            </GlowingButton>

                            <GlowingButton
                                size="lg"
                                variant="outline"
                                className="text-lg px-12 py-4"
                                onClick={handleDownloadCV}
                            >
                                <Download className="mr-2 h-6 w-6" />
                                Download CV
                            </GlowingButton>
                        </div>

                        <div className="flex justify-center gap-6 mb-32 relative z-10">
                            {[
                                {
                                    icon: Github,
                                    href: "https://github.com/kabverse",
                                    label: "GitHub",
                                },
                                {
                                    icon: Linkedin,
                                    href: "https://linkedin.com/in/kabeerghai",
                                    label: "LinkedIn",
                                },
                                {
                                    icon: Mail,
                                    href: "mailto:kabeerghai01@example.com",
                                    label: "Email",
                                },
                                {
                                    icon: Instagram,
                                    href: "https://instagram.com/kabeer.ghai",
                                    label: "Instagram",
                                },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 group hover:scale-110"
                                >
                                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 inset-x-0 mx-auto w-max animate-bounce group">
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                            Scroll to explore
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                About Me
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="glass-card p-8 rounded-2xl">
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                        I'm a passionate{" "}
                                        <span className="text-primary font-semibold">
                                            frontend developer
                                        </span>{" "}
                                        and{" "}
                                        <span className="text-accent font-semibold">
                                            UI/UX designer
                                        </span>{" "}
                                        with a keen eye for detail and a love
                                        for creating exceptional digital
                                        experiences. With expertise in modern
                                        web technologies and design principles,
                                        I bring ideas to life through clean,
                                        efficient code and intuitive interfaces.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        When I'm not coding, you'll find me
                                        exploring new design trends,
                                        contributing to open-source projects, or
                                        sharing knowledge with the developer
                                        community.
                                    </p>
                                </div>

                                <div className="flex items-center gap-8 text-sm">
                                    <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        <span>Based in India</span>
                                    </div>
                                    <div className="flex items-center gap-3 glass-card p-4 rounded-xl">
                                        <Calendar className="h-5 w-5 text-accent" />
                                        <span>Available for freelance</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Code,
                                        title: "Frontend Development",
                                        desc: "React, JavaScript, TypeScript",
                                        color: "text-primary",
                                    },
                                    {
                                        icon: Palette,
                                        title: "UI/UX Design",
                                        desc: "Figma, Adobe Creative Suite",
                                        color: "text-accent",
                                    },
                                    {
                                        icon: Smartphone,
                                        title: "Responsive Design",
                                        desc: "Mobile-first approach",
                                        color: "text-primary",
                                    },
                                    {
                                        icon: Zap,
                                        title: "Performance Optimization",
                                        desc: "Fast, efficient applications",
                                        color: "text-accent",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="flex items-center gap-6 glass-card p-6 rounded-2xl group hover:bg-primary/5 transition-all duration-300"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        <div
                                            className={`p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <item.icon
                                                className={`h-8 w-8 ${item.color}`}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Skills & Expertise
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="glass-card p-6 rounded-2xl group hover:bg-primary/5 transition-all duration-500"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">
                                                {skill.icon}
                                            </span>
                                            <span className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="text-sm text-muted-foreground font-mono">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="relative w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Featured Projects
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
                                Discover some of my latest work that showcases
                                creativity, technical expertise, and attention
                                to detail.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    style={{
                                        animationDelay: `${index * 0.2}s`,
                                    }}
                                    className="animate-fade-in"
                                >
                                    <ProjectCard {...project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
                <div className="absolute inset-0 animate-gradient" />

                {/* Floating elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <Star className="absolute top-20 left-20 w-6 h-6 text-primary/30 animate-pulse" />
                    <Star
                        className="absolute top-40 right-32 w-4 h-4 text-accent/40 animate-pulse"
                        style={{ animationDelay: "1s" }}
                    />
                    <Star
                        className="absolute bottom-32 left-40 w-5 h-5 text-primary/20 animate-pulse"
                        style={{ animationDelay: "2s" }}
                    />
                    <Star
                        className="absolute bottom-20 right-20 w-7 h-7 text-accent/30 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Let's Create Something Amazing
                        </h2>
                        <p className="text-2xl mb-16 text-muted-foreground leading-relaxed">
                            Ready to bring your{" "}
                            <span className="text-primary font-semibold">
                                vision to life
                            </span>
                            ? Let's collaborate and build something{" "}
                            <span className="text-accent font-semibold">
                                extraordinary
                            </span>{" "}
                            together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                            <GlowingButton
                                size="lg"
                                className="text-xl px-16 py-6"
                                onClick={handleContactClick}
                            >
                                <Mail className="mr-3 h-6 w-6" />
                                Start a Project
                                <ArrowRight className="ml-3 h-6 w-6" />
                            </GlowingButton>

                            <GlowingButton
                                size="lg"
                                variant="outline"
                                className="text-xl px-16 py-6"
                                onClick={handleScheduleCall}
                            >
                                <Calendar className="mr-3 h-6 w-6" />
                                Schedule a Call
                            </GlowingButton>
                        </div>

                        <div className="glass-card p-8 rounded-3xl inline-block">
                            <p className="text-lg text-muted-foreground mb-4">
                                Available for freelance projects and
                                collaborations
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-green-400 font-semibold">
                                    Currently Available
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 relative border-t border-primary/20">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">
                            &copy; 2025 Kabeer Ghai. Crafted with{" "}
                            <span className="text-primary">❤️</span> and lots of{" "}
                            <span className="text-accent">☕</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Built with React, TypeScript, and Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
