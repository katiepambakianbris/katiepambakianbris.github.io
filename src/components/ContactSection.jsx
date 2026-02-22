import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export const ContactSection = () => {
    return (
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container w-full mx-auto px-6 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span>Touch</span>
                </h2> 

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    something about someone reaching out 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
                    <div className="w-[320px] flex flex-col items-center text-center p-8 rounded-xl
  bg-background/60 backdrop-blur">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/> {' '}
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:k.pambakian@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                k.pambakian@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="w-[320px] flex flex-col items-center text-center p-8 rounded-xl
  bg-background/60 backdrop-blur">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/> {' '}
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <a
                                className="text-muted-foreground hover:text-primary transition-colors">
                                Bristol, England
                            </a>
                        </div>
                    </div>
                    <div className="w-[320px] flex flex-col items-center text-center p-8 rounded-xl
  bg-background/60 backdrop-blur">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary"/> {' '}
                        </div>
                        <div>
                            <h4 className="font-medium">LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/katiepambakian/"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                katiepambakian
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
