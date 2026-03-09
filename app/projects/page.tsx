import { LiquidGlass } from "@/components/ui/liquid-glass";
import { ArrowUpRight, Github } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const projects = [
    {
        title: "EcoDash",
        description: "A comprehensive dashboard for tracking corporate carbon footprints, visualizing energy consumption, and providing AI-driven recommendations for sustainability.",
        tech: ["Next.js", "TailwindCSS", "Recharts", "Prisma"],
        link: "#",
        github: "#",
        year: "2024",
    },
    {
        title: "Lumina Workspace",
        description: "A collaborative real-time canvas for remote teams. Combines whiteboard capabilities with deeply integrated video presence.",
        tech: ["React", "Liveblocks", "WebRTC", "Framer Motion"],
        link: "#",
        github: "#",
        year: "2023",
    },
    {
        title: "Aura UI",
        description: "An open-source component library focused on micro-interactions and high-performance glassmorphism effects for modern web apps.",
        tech: ["TypeScript", "Radix UI", "Tailwind CSS"],
        link: "#",
        github: "#",
        year: "2023",
    },
    {
        title: "Quantum Ledger",
        description: "A minimalist personal finance tracker designed for the aesthetic-oriented user, featuring end-to-end encryption.",
        tech: ["SvelteKit", "Supabase", "Stripe"],
        link: "#",
        github: "#",
        year: "2022",
    }
];

export default function ProjectsPage() {
    return (
        <AuroraBackground className="p-4 pt-32 sm:p-20 lg:pt-40 font-sans">
            <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-16">
                <header className="flex flex-col gap-6">
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">
                        Selected Works
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light max-w-xl">
                        A collection of projects showcasing my approach to engineering and design. From complex data visualizations to refined UI systems.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <LiquidGlass
                            key={idx}
                            variant="card"
                            intensity="subtle"
                            rippleEffect={true}
                            stretchOnDrag={false}
                            className="group flex flex-col justify-between hover:bg-white/40 dark:hover:bg-white/5 transition-colors duration-500 overflow-hidden cursor-pointer"
                            style={{ borderRadius: '24px', padding: 0 }}
                        >
                            {/* Overlapping Images/Cards Area */}
                            <div className="relative h-48 w-full flex items-end justify-center pt-8 pb-4 overflow-hidden border-b border-neutral-200/50 dark:border-neutral-800/50">
                                {/* Background Card Left */}
                                <div className="absolute w-32 h-40 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 -rotate-12 -translate-x-16 translate-y-4 group-hover:-translate-x-20 transition-transform duration-500 ease-out" />
                                {/* Background Card Right */}
                                <div className="absolute w-32 h-40 rounded-xl bg-gradient-to-bl from-blue-500/20 to-cyan-500/20 border border-white/10 rotate-12 translate-x-16 translate-y-4 group-hover:translate-x-20 transition-transform duration-500 ease-out" />

                                {/* Center Main Card */}
                                <div className="relative z-10 w-40 h-48 rounded-xl bg-gradient-to-b from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 border border-white/20 dark:border-white/10 shadow-xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
                                    {/* Placeholder image representation */}
                                    <div className="w-full h-full flex flex-col justify-end p-3">
                                        <div className="w-full h-1/2 bg-neutral-900/5 dark:bg-black/20 rounded-lg backdrop-blur-sm border border-white/10" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col gap-2">
                                <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight line-clamp-1">
                                    {project.title}
                                </h2>

                                {/* Footer with stats */}
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                                        <span className="text-neutral-900 dark:text-neutral-100">{Math.floor(Math.random() * 15) + 2}</span>
                                        <span>components</span>
                                    </div>

                                    <div className="flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500">
                                        <span>{project.year}</span>
                                        <div className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                                        <span>Update</span>
                                    </div>
                                </div>
                            </div>
                        </LiquidGlass>
                    ))}
                </div>
            </main>
        </AuroraBackground>
    );
}
