"use client";

import { LiquidGlass } from "@/components/ui/liquid-glass";
import { LiquidButton } from "@/components/ui/liquid-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Copy, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AuroraBackground className="p-4 pt-32 sm:p-20 lg:pt-40 font-sans">
            <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-16">

                {/* Header */}
                <header className="flex flex-col gap-4 max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                        Get in touch
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                        Whether you have a specific project in mind or just want to connect — my inbox is open.
                    </p>
                </header>

                {/* ROW 1: Contact Info Cards (3 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <LiquidGlass
                        variant="card"
                        intensity="subtle"
                        rippleEffect={true}
                        className="flex items-center gap-4 group cursor-pointer"
                        style={{ borderRadius: '20px' }}
                        onClick={() => handleCopy("hello@example.com")}
                    >
                        <div className="w-12 h-12 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 flex items-center justify-center text-neutral-600 dark:text-neutral-300 shrink-0">
                            <Mail size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Email</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light truncate">hello@example.com</p>
                        </div>
                        <button className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0">
                            <Copy size={14} />
                        </button>
                    </LiquidGlass>

                    <LiquidGlass
                        variant="card"
                        intensity="subtle"
                        rippleEffect={true}
                        className="flex items-center gap-4 group"
                        style={{ borderRadius: '20px' }}
                    >
                        <div className="w-12 h-12 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 flex items-center justify-center text-neutral-600 dark:text-neutral-300 shrink-0">
                            <Phone size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Phone</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">+52 123 456 7890</p>
                        </div>
                    </LiquidGlass>

                    <LiquidGlass
                        variant="card"
                        intensity="subtle"
                        rippleEffect={true}
                        className="flex items-center gap-4 group"
                        style={{ borderRadius: '20px' }}
                    >
                        <div className="w-12 h-12 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 flex items-center justify-center text-neutral-600 dark:text-neutral-300 shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Location</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">Worldwide · Remote</p>
                        </div>
                    </LiquidGlass>

                </div>

                {/* ROW 2: Form + Socials (2 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Form - spans 2 columns */}
                    <LiquidGlass
                        variant="panel"
                        intensity="strong"
                        className="md:col-span-2 p-8"
                        style={{ borderRadius: '28px' }}
                    >
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Name + Email in a row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400/50 dark:focus:ring-neutral-600/50 transition-all resize-none text-neutral-900 dark:text-white placeholder:text-neutral-400"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <LiquidButton
                                variant="primary"
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-medium"
                            >
                                <span>Send Message</span>
                                <Send size={16} />
                            </LiquidButton>
                        </form>
                    </LiquidGlass>

                    {/* Socials sidebar */}
                    <div className="flex flex-col gap-4">
                        <LiquidGlass
                            variant="card"
                            intensity="subtle"
                            rippleEffect={true}
                            className="flex flex-col gap-6 flex-1"
                            style={{ borderRadius: '28px' }}
                        >
                            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">Socials</h3>

                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/social hover:bg-white/30 dark:hover:bg-white/5 -mx-2 px-2 py-2 rounded-xl transition-colors">
                                <Github size={20} className="text-neutral-600 dark:text-neutral-400 group-hover/social:text-neutral-900 dark:group-hover/social:text-white transition-colors" />
                                <span className="text-sm font-light text-neutral-600 dark:text-neutral-400 group-hover/social:text-neutral-900 dark:group-hover/social:text-white transition-colors">GitHub</span>
                            </a>

                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/social hover:bg-white/30 dark:hover:bg-white/5 -mx-2 px-2 py-2 rounded-xl transition-colors">
                                <Linkedin size={20} className="text-neutral-600 dark:text-neutral-400 group-hover/social:text-neutral-900 dark:group-hover/social:text-white transition-colors" />
                                <span className="text-sm font-light text-neutral-600 dark:text-neutral-400 group-hover/social:text-neutral-900 dark:group-hover/social:text-white transition-colors">LinkedIn</span>
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/social hover:bg-white/30 dark:hover:bg-white/5 -mx-2 px-2 py-2 rounded-xl transition-colors">
                                <Twitter size={20} className="text-neutral-600 dark:text-neutral-400 group-hover/social:text-neutral-900 dark:group-hover/social:text-white transition-colors" />
                                <span className="text-sm font-light text-neutral-600 dark:text-neutral-400 group-hover/social:text-neutral-900 dark:group-hover/social:text-white transition-colors">Twitter / X</span>
                            </a>
                        </LiquidGlass>

                        {/* Availability badge */}
                        <LiquidGlass
                            variant="floating"
                            intensity="subtle"
                            className="flex items-center gap-3"
                            style={{ borderRadius: '20px' }}
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                            </span>
                            <span className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                                Available for work
                            </span>
                        </LiquidGlass>
                    </div>

                </div>

            </main>
        </AuroraBackground>
    );
}
