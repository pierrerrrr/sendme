'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Brain, Cable, ChartLine, Code, DraftingCompass, FileText, Layers, Link, Mail, Palette, TableColumnsSplit, Zap } from 'lucide-react';

interface BentoGridItemProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
    title,
    description,
    icon,
    className,
    size = 'small',
}: BentoGridItemProps) => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring' as const, damping: 25 },
        },
    };

    return (
        <motion.div
            variants={variants}
            className={cn(
                'group border-primary/10 bg-background hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
                className,
            )}
        >
            <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

            <div className="text-primary/5 group-hover:text-primary/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
                {icon}
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                    <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
                        {icon}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
                    <p className="text-muted-foreground text-sm">{description}</p>
                </div>
            </div>
            <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
        </motion.div>
    );
};

const items = [
    {
        title: 'Instant and Intelligent Connections',
        description:
            'Connect leads directly to the right products, influencers, or stores with precise automations, saving time and boosting conversions.',
        icon: <Cable className="size-6" />,
        size: 'large' as const,
    },
    {
        title: 'AI-Powered Automated Responses',
        description:
            'Deliver a personalized experience with AI-driven messages that understand and respond to your audience naturally and efficiently.',
        icon: <Brain className="size-6" />,
        size: 'small' as const,
    },
    {
        title: 'Dynamic Audience Segmentation',
        description: 'Automatically identify followers’ interests, behaviors, and preferences to send highly targeted and relevant messages.',
        icon: <TableColumnsSplit className="size-6" />,
        size: 'medium' as const,
    },
    {
        title: 'Direct Product Links in DMs',
        description: "Turn followers into customers by sending direct links to products or stores via DM, right when they need them.",
        icon: <Link className="size-6" />,
        size: 'medium' as const,
    },
    {
        title: 'Open-Source',
        description: 'As an open-source project, you can adapt, contribute to, and scale the platform to fit your or your client’s specific needs.',
        icon: <Code className="size-6" />,
        size: 'small' as const,
    },
    {
        title: 'Performance and Engagement Focused',
        description:
            'Boost engagement, reduce response time, and scale your Instagram communication in a strategic and measurable way.',
        icon: <ChartLine className="size-6" />,
        size: 'large' as const,
    },
];

export default function FeaturesSection() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-12" id='features'>
            <div>
                <div className="relative mx-auto max-w-2xl sm:text-center">
                    <div className="relative z-10">
                        <h3 className="mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
                            Why senDMe stands out
                        </h3>
                        <p className="text-foreground/60 mt-3">
                            senDMe isn’t just another Instagram automation tool — it’s a smart, AI-driven platform built to connect leads with products, influencers, and stores faster and more effectively. Discover how our powerful features help you boost engagement, save time, and grow your business effortlessly.
                        </p>
                    </div>
                    <div
                        className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px] bg-gradient-to-br from-primary/20 via-primary/26 to-primary/10"
                    ></div>
                </div>
                <hr className="bg-foreground/30 mx-auto mt-5 mb-8 h-px w-1/2" />
                <motion.div
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            size={item.size}
                            className={cn(
                                item.size === 'large'
                                    ? 'col-span-4'
                                    : item.size === 'medium'
                                        ? 'col-span-3'
                                        : 'col-span-2',
                                'h-full',
                            )}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
