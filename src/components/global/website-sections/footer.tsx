import {
    Dribbble,
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    MessageCircleMore,
    Phone,
    Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
    linkedinLink: 'https://www.linkedin.com/in/iago-pierre-53937b241/',
    githubLink: 'https://github.com/pierrerrrr/sendme',
    about: {
        history: '/company-history',
        team: '/meet-the-team',
        handbook: '/employee-handbook',
        careers: '/careers',
    },
    help: {
        faqs: '/faqs',
        support: '/support',
        livechat: '/live-chat',
    },
    contact: {
        email: 'contato@sendme.com',
        phone: '+55 (11) 9 9999-9999',
        address: 'São Paulo, São Paulo, Brasil',
    },
    company: {
        name: 'senDMe',
        description:
            'Connect, automate, and convert — all through your Instagram.',
        logo: '/logo.webp',
    },
};

const socialLinks = [
    { icon: Github, label: 'GitHub', href: data.githubLink },
    { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
];

// const aboutLinks = [
//   { text: 'Company History', href: data.about.history },
//   { text: 'Meet the Team', href: data.about.team },
//   { text: 'Employee Handbook', href: data.about.handbook },
//   { text: 'Careers', href: data.about.careers },
// ];

// const serviceLinks = [
//   { text: 'Web Development', href: data.services.webdev },
//   { text: 'Web Design', href: data.services.webdesign },
//   { text: 'Marketing', href: data.services.marketing },
//   { text: 'Google Ads', href: data.services.googleads },
// ];

const helpfulLinks = [
    { text: 'Home', href: "/" },
    { text: 'Features', href: "#features" },
    { text: 'Pricing', href: "#pricing", hasIndicator: true },
];

const contactInfo = [
    { icon: Mail, text: data.contact.email },
    { icon: Phone, text: data.contact.phone },
    { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
    return (
        <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
            <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="text-primary flex justify-center gap-2 sm:justify-start">
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#818cf8] via-[#6f7cf5] to-[#818cf8] shadow-lg">
                                        <MessageCircleMore className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r from-pink-500 via-red-500 via-orange-400 to-yellow-300"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-foreground text-lg font-bold">
                                        senDMe
                                    </span>
                                    <span className="text-muted-foreground -mt-1 text-xs">
                                        Connect faster
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
                            {data.company.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium">Helpful Links</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                                    <li key={text}>
                                        <a
                                            href={href}
                                            className={`${hasIndicator
                                                ? 'group flex justify-center gap-1.5 sm:justify-start'
                                                : 'text-secondary-foreground/70 transition'
                                                }`}
                                        >
                                            <span className="text-secondary-foreground/70 transition">
                                                {text}
                                            </span>
                                            {hasIndicator && (
                                                <span className="relative flex size-2">
                                                    <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                                                    <span className="bg-primary relative inline-flex size-2 rounded-full" />
                                                </span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium">Contact Us</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                                    <li key={text}>
                                        <a
                                            className="flex items-center justify-center gap-1.5 sm:justify-start"
                                            href="#"
                                        >
                                            <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                                            {isAddress ? (
                                                <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                                                    {text}
                                                </address>
                                            ) : (
                                                <span className="text-secondary-foreground/70 flex-1 transition">
                                                    {text}
                                                </span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium">Social Media</p>
                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                {socialLinks.map(({ icon: Icon, label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="text-primary hover:text-primary/80 transition"
                                        >
                                            <span className="sr-only">{label}</span>
                                            <Icon className="size-6" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm">
                            <span className="block sm:inline">All rights reserved.</span>
                        </p>

                        <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
                            &copy; 2025 {data.company.name}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
