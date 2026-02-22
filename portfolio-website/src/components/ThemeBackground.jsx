import { useEffect, useState } from "react";
import { StarBackground } from "./StarBackground";
import { ShapesBackground } from "./ShapesBackground";

export const ThemeBackground = () => {
    const [isDark, setIsDark] = useState(null);

    useEffect(() => {
        const updateTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        updateTheme();

        const observer = new MutationObserver(updateTheme);

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    if (isDark === null) return null;

    return isDark ? <StarBackground /> : <ShapesBackground />;
}