import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export const UpTo = () => {
    return (
        <section>
            <div className="w-[320px] flex flex-col items-center text-center p-8 rounded-xl bg-background/60 backdrop-blur">
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
        </section>
    )
}