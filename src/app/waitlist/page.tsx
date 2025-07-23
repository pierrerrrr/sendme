'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Star, ExternalLink, MessageCircleMore, Cable, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header2 from '@/components/global/website-sections/header';

const brico = Bricolage_Grotesque({
    subsets: ['latin'],
});

// Sample users for the waitlist display
const users = [
    { imgUrl: 'https://avatars.githubusercontent.com/u/111780029' },
    { imgUrl: 'https://avatars.githubusercontent.com/u/123104247' },
    { imgUrl: 'https://avatars.githubusercontent.com/u/115650165' },
    { imgUrl: 'https://avatars.githubusercontent.com/u/71373838' },
];

export default function WaitlistPage() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState('#ffffff');

    useEffect(() => {
        setColor(resolvedTheme === 'dark' ? '#ffffff' : '#e60a64');
    }, [resolvedTheme]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Your form submission logic here
        // For now, let's just simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitted(true);
        setIsSubmitting(false);
    };

    return (
        
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
            <div className="relative z-[100] mx-auto max-w-2xl px-4 py-16 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border-primary/10 from-primary/15 to-primary/5 mb-8 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 backdrop-blur-sm"
                >
                    <div className="relative">
                        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[#818cf8] via-[#6f7cf5] to-[#818cf8] shadow-lg">
                            <MessageCircleMore className="h-3 w-3 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r from-pink-500 via-red-500 via-orange-400 to-yellow-300"></div>
                    </div>
                    <span className="text-sm font-medium">senDMe</span>
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                        <ArrowRight className="h-4 w-4" />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={cn(
                        'from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-6xl tracking-tighter text-balance text-transparent sm:text-6xl md:text-6xl lg:text-7xl',
                        brico.className,
                    )}
                >
                    Join the{' '}
                    <span className="bg-primary from-foreground via-primary/80 to-primary/60 bg-gradient-to-r-300 bg-clip-text text-transparent dark:bg-gradient-to-b">
                        Waitlist
                    </span>
                </motion.h1>


                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-muted-foreground mt-2 mb-12 sm:text-lg"
                >
                    Join the waitlist and get early access to senDMe — the smart automation tool that connects leads to what they want, faster and smarter.
                </motion.p>

                <div
                    className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px] bg-gradient-to-br from-primary/20 via-primary/26 to-primary/10"
                ></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-3"
                >
                    <div
                        className={cn(
                            'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md',
                            resolvedTheme === 'dark' ? 'glass' : 'glass2',
                        )}
                    >
                        <Brain className="text-primary mb-2 h-5 w-5" />
                        <span className="text-xl font-bold">Smart AI</span>
                        <span className="text-muted-foreground text-xs">AI-Powered features</span>
                    </div>

                    <div
                        className={cn(
                            'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md',
                            resolvedTheme === 'dark' ? 'glass' : 'glass2',
                        )}
                    >
                        <Code className="text-primary mb-2 h-5 w-5" />
                        <span className="text-xl font-bold">Open Source</span>
                        <span className="text-muted-foreground text-xs">Free for everyone</span>
                    </div>

                    <div
                        className={cn(
                            'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md',
                            resolvedTheme === 'dark' ? 'glass' : 'glass2',
                        )}
                    >
                        <Cable className="text-primary mb-2 h-5 w-5" />
                        <span className="text-xl font-bold">Connections</span>
                        <span className="text-muted-foreground text-xs">Connect leads faster</span>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    onSubmit={handleSubmit}
                    className="mx-auto flex flex-col gap-4 sm:flex-row"
                >
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <>
                                <div className="relative flex-1">
                                    <motion.input
                                        key="email-input"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        className="border-primary/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-primary/30 w-full rounded-xl border bg-white/5 px-6 py-4 backdrop-blur-md transition-all focus:ring-2 focus:outline-none"
                                    />
                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="border-destructive/40 bg-destructive/10 text-destructive mt-2 rounded-xl border px-4 py-1 text-sm sm:absolute"
                                        >
                                            {error}
                                        </motion.p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitted}
                                    className="group text-primary-foreground focus:ring-primary/50 relative overflow-hidden rounded-xl bg-gradient-to-b from-[#818cf8] to-[#6366f1] px-8 py-4 font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,140,248,0.4)] focus:ring-2 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                                        <Sparkles className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                                    </span>
                                    <span className="to-primary absolute inset-0 z-0 bg-gradient-to-r from-[#818cf8] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                                </button>
                            </>
                        ) : (
                            <motion.div
                                key="thank-you-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.6 }}
                                className={cn(
                                    'border-primary/20 from-primary/10 to-primary/10 text-primary flex-1 cursor-pointer rounded-xl border bg-gradient-to-r via-transparent px-6 py-4 font-medium backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] active:brightness-125',
                                    resolvedTheme === 'dark' ? 'glass' : 'glass2',
                                )}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Thanks for joining!{' '}
                                    <Sparkles className="h-4 w-4 animate-pulse" />
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>

                {/* ADICIONAR QUANDO TIVER ALGUEM ESCRITO 
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-10 flex items-center justify-center gap-1"
                >
                    <div className="flex -space-x-3">
                        {users.map((user, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, x: -10 }}
                                animate={{ scale: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                                className="border-background from-primary size-10 rounded-full border-2 bg-gradient-to-r to-rose-500 p-[2px]"
                            >
                                <div className="overflow-hidden rounded-full">
                                    <img
                                        src={user.imgUrl}
                                        alt="Avatar"
                                        className="rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="text-muted-foreground ml-2"
                    >
                        <span className="text-primary font-semibold">100+</span> already
                        joined ✨
                    </motion.span>
                </motion.div> */}
            </div>

            <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
        </main>
    );
}
