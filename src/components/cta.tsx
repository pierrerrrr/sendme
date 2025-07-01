import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const Cta = () => {
    return (
        <section className="bg-blue-400 dark:bg-blue-700 py-16 md:py-32 text-foreground">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <h2 className='text-white-foreground font-bold text-4xl lg:text-5xl mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.
                </h2>
                <p className="text-lg mb-12 text-white-foreground">
                    Lorem ipsum dolor sit amet.
                </p>
                <div className="flex justify-center items-center gap-6">
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco no WhatsApp">
                        <div className="flex items-center justify-center size-16 rounded-full border-2 border-white bg-green-500 text-white">
                            <Phone className="size-8 fill-white" />
                        </div>
                    </Link>
                    <Link href="mailto:" aria-label="Envie um email">
                        <div className="flex items-center justify-center size-16 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
                            <Mail className="size-8" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;