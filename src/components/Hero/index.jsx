import React, { useEffect, useState } from 'react';
import hero1 from "../../../assests/Hero/hero-1.jpeg";
import hero2 from "../../../assests/Hero/hero-2.jpeg";
import hero3 from "../../../assests/Hero/hero-3.jpeg";

const images = [hero1, hero2, hero3];

const Hero = () => {

    const [current, setCurrent] = useState(0);

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000); // change every 3 sec

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Images */}
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt=""
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000
                    ${index === current ? "opacity-100" : "opacity-0"}
                    `}
                />
            ))}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-4">
                    ALIF.Modren Essentials
                </h1>
                <button
                    onClick={() => {
                        document.getElementById("new-arrival").scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="relative overflow-hidden border border-white text-white px-11 py-3 rounded-md group cursor-pointer"
                >
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>

                    <span className="relative z-10 font-bold uppercase tracking-wide group-hover:text-black transition">
                        Shop the Collection
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Hero;