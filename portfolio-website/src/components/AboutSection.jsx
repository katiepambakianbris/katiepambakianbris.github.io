import { Book, Code, User } from "lucide-react"
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Profile</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                    <div className="space-y-6">
                        <div className="shrink-0 flex items-center justify-center">
                            <img src="/profile.jpeg"
                                alt="Picture of Katie"
                                className="h-24 w-24 rounded-full object-cover ring-2 ring-primary/30"
                            />
                        </div>

                        {/* <h3 className="text-2xl font-semibold">Computer Science Student aiming for a career in research.</h3> */}
                        <p className="text-muted-foreground">
                            hello there
                        </p>
                        <p className="text-muted-foreground">
                            hello there
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button flex items-center justify-center">
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-200">
                                Download CV
                            </a>

                        </div>

                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4 h-full">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Book className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 item-center text-left">
                                    <h4 className="font-semibold text-lg center">My Research Interests</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4 h-full">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 item-center text-left">
                                    <h4 className="font-semibold text-lg center">My projects</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4 h-full">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 item-center text-left">
                                    <h4 className="font-semibold text-lg center">What I'm up to</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}