import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { ShapesBackground } from "../components/ShapesBackground";
import { ThemeBackground } from "../components/ThemeBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { UpTo } from "../components/UpTo";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* background effects */}
            <ThemeBackground />
            {/* NavBar */}
            <NavBar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                {/* <UpTo /> */}
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};