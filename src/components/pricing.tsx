'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function Pricing() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center+=150',
                    toggleActions: 'play none none none',
                    once: true,
                }
            });

            tl.fromTo(titleRef.current,
                { opacity: 0, y: 50, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }
            );

            tl.fromTo(descriptionRef.current,
                { opacity: 0, y: 30, filter: 'blur(5px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
                "<0.3"
            );

            tl.fromTo(cardRefs.current,
                { opacity: 0, y: 100, filter: 'blur(10px)' },
                {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 1,
                    stagger: 0.2,
                    delay: 0.1
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-32 text-foreground overflow-hidden">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 ref={titleRef} className="text-center text-4xl font-semibold opacity-0">Pricing that Scales with You</h1>
                    <p ref={descriptionRef} className="text-muted-foreground opacity-0">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">

                    <Card ref={el => (cardRefs.current[0] = el)} className="flex flex-col items-center text-center p-6 rounded-xl opacity-0 card dark:bg-black/20 backdrop-blur-lg text-card-foreground border-border/50 shadow-card-dark-subtle dark:shadow-card-dark-lg">
                        <CardHeader className="pb-3">
                            <CardTitle className="font-bold text-3xl mb-2">Free</CardTitle>
                            <span className="my-3 block text-5xl font-extrabold">R$0,00<span className="text-2xl font-semibold">/mo</span></span>
                            <CardDescription className="text-muted-foreground text-base max-w-[250px] mx-auto">Per editor</CardDescription>

                            <Link href="#" passHref legacyBehavior>
                                <Button className="mt-4 w-full bg-foreground text-background hover:bg-foreground/90 py-3 text-lg font-bold">
                                    Get Started
                                </Button>
                            </Link>
                        </CardHeader>

                        <CardContent className="space-y-4 pt-0">
                            <hr className="border-dashed border-border/30" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Basic Analytics Dashboard', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-foreground">
                                        <Check className="size-3 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card ref={el => (cardRefs.current[1] = el)} className="relative flex flex-col items-center text-center p-6 rounded-xl opacity-0 card dark:bg-black/20 backdrop-blur-lg text-card-foreground border-4 border-primary shadow-card-dark-lg">
                        <CardHeader className="pb-3">
                            <CardTitle className="font-bold text-3xl mb-2">Pro</CardTitle>
                            <span className="my-3 block text-5xl font-extrabold">R$100,00<span className="text-2xl font-semibold">/mo</span></span>
                            <CardDescription className="text-muted-foreground text-base max-w-[250px] mx-auto">Per editor</CardDescription>

                            <Link href="#" passHref legacyBehavior>
                                <Button className="mt-4 w-full bg-foreground text-background hover:bg-foreground/90 py-3 text-lg font-bold">
                                    Get Started
                                </Button>
                            </Link>
                        </CardHeader>

                        <CardContent className="space-y-4 pt-0">
                            <hr className="border-dashed border-border/30" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Free Plan', '5GB Cloud Storage', 'Email and Chat Support', 'Access to Community Forum', 'Single User Access', 'Access to Basic Templates'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-foreground">
                                        <Check className="size-3 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card ref={el => (cardRefs.current[2] = el)} className="flex flex-col items-center text-center p-6 rounded-xl opacity-0 card dark:bg-black/20 backdrop-blur-lg text-card-foreground border-border/50 shadow-card-dark-subtle dark:shadow-card-dark-lg">
                        <CardHeader className="pb-3">
                            <CardTitle className="font-bold text-3xl mb-2">Smart AI</CardTitle>
                            <span className="my-3 block text-5xl font-extrabold">R$149,99<span className="text-2xl font-semibold">/mo</span></span>
                            <CardDescription className="text-muted-foreground text-base max-w-[250px] mx-auto">Per editor</CardDescription>

                            <Link href="#" passHref legacyBehavior>
                                <Button className="mt-4 w-full bg-foreground text-background hover:bg-foreground/90 py-3 text-lg font-bold">
                                    Get Started
                                </Button>
                            </Link>
                        </CardHeader>

                        <CardContent className="space-y-4 pt-0">
                            <hr className="border-dashed border-border/30" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Pro Plan', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-foreground">
                                        <Check className="size-3 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}