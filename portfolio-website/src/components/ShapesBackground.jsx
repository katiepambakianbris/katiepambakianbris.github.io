import { useEffect, useState } from "react";


export const ShapesBackground = () => {

    const [shapes, setShapes] = useState([]);

    useEffect(() => {
        generateShapes();

        const handleResize = () => {
            generateShapes();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    const SHAPE_TYPES = ["square", "circle", "triangle"];

    const generateShapes = () => {
        const numberOfShapes = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        );
        const newShapes = [];

        for (let i =0; i < numberOfShapes; i++){
            const hue = Math.floor(Math.random() * 360);
            const saturation = 60 + Math.random() * 15;
            const lightness = 75 + Math.random() * 10;

            newShapes.push({
                id: i,
                type: SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)],
                size: Math.random() * 60 + 20, // 20–80px
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.4 + 0.1,
                animationDuration: Math.random() * 15 + 10, // slow spin
                color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
            });
        }
        setShapes(newShapes);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {shapes.map((shape) => {
                if (shape.type === "triangle") {
                    return (
                    <div
                        key={shape.id}
                        className="absolute float shape triangle"
                        style={{
                        left: shape.x + "%",
                        top: shape.y + "%",
                        opacity: shape.opacity,
                        animationDuration: shape.animationDuration + "s",
                        borderBottomColor: shape.color,
                        }}
                    />
                    );
                }

                return (
                    <div
                    key={shape.id}
                    className={`absolute float shape ${shape.type}`}
                    style={{
                        width: shape.size + "px",
                        height: shape.size + "px",
                        left: shape.x + "%",
                        top: shape.y + "%",
                        opacity: shape.opacity,
                        backgroundColor: shape.color,
                        animationDuration: shape.animationDuration + "s",
                    }}
                    />
                );
            })}
        </div>
    );
};