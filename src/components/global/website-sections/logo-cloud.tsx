'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center+=200',
                    toggleActions: 'play none none none',
                    once: true,
                }
            });

            tl.fromTo(titleRef.current,
                { opacity: 0, y: 30, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }
            );

            tl.fromTo(sliderRef.current,
                { opacity: 0, y: 50, filter: 'blur(15px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2 },
                "<0.3"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-background via-background/95 to-background"
        >
            {/* Background decorativo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern" />
            
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 
                        ref={titleRef}
                        className="text-2xl md:text-3xl font-bold text-foreground mb-4 opacity-0"
                    >
                        Trusted by leading teams worldwide
                    </h2>
                </div>

                {/* Logo Slider */}
                <div 
                    ref={sliderRef}
                    className="relative opacity-0"
                >
                    <div className="relative py-8 md:py-12">
                        <InfiniteSlider
                            speedOnHover={25}
                            speed={45}
                            gap={120}
                        >
                            <div className="flex items-center justify-center px-8">
                                <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                                    <img
                                        className="mx-auto h-8 w-fit dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                        alt="Nvidia Logo"
                                        height="32"
                                        width="auto"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-center px-8">
                                <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        src="https://html.tailus.io/blocks/customers/github.svg"
                                        alt="GitHub Logo"
                                        height="24"
                                        width="auto"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center px-8">
                                <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                                    <img
                                        className="mx-auto h-8 w-fit dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        src="https://html.tailus.io/blocks/customers/nike.svg"
                                        alt="Nike Logo"
                                        height="32"
                                        width="auto"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center px-8">
                                <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                                    <img
                                        className="mx-auto h-7 w-fit dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                        alt="Lemon Squeezy Logo"
                                        height="28"
                                        width="auto"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center px-8">
                                <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        src="https://html.tailus.io/blocks/customers/laravel.svg"
                                        alt="Laravel Logo"
                                        height="24"
                                        width="auto"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center px-8">
                                <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                                    <img
                                        className="mx-auto h-9 w-fit dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        src="https://html.tailus.io/blocks/customers/lilly.svg"
                                        alt="Lilly Logo"
                                        height="36"
                                        width="auto"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-center px-8">
                                <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                                    <img
                                        className="mx-auto h-7 w-fit dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        src="https://html.tailus.io/blocks/customers/openai.svg"
                                        alt="OpenAI Logo"
                                        height="28"
                                        width="auto"
                                    />
                                </div>
                            </div>
                        </InfiniteSlider>

                        {/* Gradient overlays para fade effect */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
                        
                        {/* Progressive blur effects */}
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20"
                            direction="left"
                            blurIntensity={2}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20"
                            direction="right"
                            blurIntensity={2}
                        />
                    </div>
                </div>

                {/* Bottom decorative element */}
                <div className="mt-12 md:mt-16 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-1 bg-gradient-to-r from-transparent via-border to-transparent rounded-full" />
                </div>
            </div>
        </section>
    )
}
