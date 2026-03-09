import Link from "next/link";
import { LiquidButton } from "@/components/ui/liquid-button";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Briefcase,
  Code2,
  Github,
  Mail,
  User,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <AuroraBackground className="font-sans p-4 pt-28 sm:p-20 lg:pt-32">
      <main className="relative z-10 flex flex-col gap-20 w-full max-w-5xl mx-auto items-center">
        {/* Intro / Hero */}
        <div id="home" className="flex flex-col text-center mt-12 px-4 max-w-3xl">
          <h1 className="text-5xl sm:text-7xl lg:text-[7rem] leading-none font-medium tracking-tighter text-neutral-900 dark:text-neutral-50 mb-6">
            Manu.
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400 font-light tracking-wide mx-auto">
            Crafting digital experiences through elegant code and clean design.
          </p>
        </div>

        {/* BENTO GRID */}
        <div id="projects" className="w-full scroll-mt-32 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">

            {/* 1. About Me - Spans 2x2 */}
            <LiquidGlass
              variant="card"
              intensity="subtle"
              rippleEffect={true}
              stretchOnDrag={false}
              className="md:col-span-2 md:row-span-2 flex flex-col justify-between cursor-pointer group"
              style={{ borderRadius: '24px' }}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-auto">
                  <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold">About</span>
                  <User size={18} className="text-neutral-400 dark:text-neutral-500" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
                    Software Engineer
                  </h2>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-sm">
                    I focus on building refined, accessible web interfaces that merge robust engineering with deliberate, minimal aesthetics.
                  </p>
                </div>
              </div>
            </LiquidGlass>

            {/* 2. My Projects */}
            <Link href="/projects" className="contents">
              <LiquidGlass
                variant="card"
                intensity="strong"
                rippleEffect={true}
                stretchOnDrag={false}
                className="col-span-1 md:col-span-2 row-span-1 flex flex-col justify-between cursor-pointer group"
                style={{ borderRadius: '24px' }}
              >
                <div className="flex items-center justify-between">
                  <Briefcase size={20} className="text-neutral-800 dark:text-neutral-200 transition-transform duration-500 group-hover:-translate-y-1" />
                  <ArrowRight size={18} className="text-neutral-300 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </div>
                <div>
                  <h3 className="text-2xl font-normal tracking-tight text-neutral-900 dark:text-neutral-100 mb-1">Projects</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light">Selected works & experiments</p>
                </div>
              </LiquidGlass>
            </Link>

            {/* 3. Skills */}
            <a href="#skills" className="contents">
              <LiquidGlass
                variant="card"
                intensity="subtle"
                rippleEffect={true}
                stretchOnDrag={false}
                className="col-span-1 row-span-1 flex flex-col justify-between cursor-pointer group"
                style={{ borderRadius: '24px' }}
              >
                <div className="flex justify-between items-start">
                  <Code2 size={20} className="text-neutral-800 dark:text-neutral-200 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-lg font-normal tracking-tight text-neutral-900 dark:text-neutral-100 mb-1">Stack</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs font-light">React, Next.js, TypeScript</p>
                </div>
              </LiquidGlass>
            </a>


            {/* 5. GitHub */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contents">
              <LiquidGlass
                variant="card"
                intensity="strong"
                rippleEffect={true}
                stretchOnDrag={false}
                className="col-span-1 row-span-1 flex flex-col justify-between cursor-pointer group"
                style={{ borderRadius: '24px' }}
              >
                <div className="flex justify-between items-start">
                  <Github size={20} className="text-neutral-800 dark:text-neutral-200 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-lg font-normal tracking-tight text-neutral-900 dark:text-neutral-100 mb-1">GitHub</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs font-light">Open source</p>
                </div>
              </LiquidGlass>
            </a>

            {/* 6. Contact */}
            <Link href="/contact" className="contents">
              <LiquidGlass
                variant="card"
                intensity="strong"
                rippleEffect={true}
                stretchOnDrag={false}
                className="md:col-span-3 col-span-1 row-span-1 flex flex-col md:flex-row justify-between md:items-end cursor-pointer group"
                style={{ borderRadius: '24px' }}
              >
                <div className="mb-4 md:mb-0">
                  <Mail size={20} className="text-neutral-800 dark:text-neutral-200 mb-4 transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="text-3xl font-normal tracking-tight text-neutral-900 dark:text-neutral-100 mb-1">Contact</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light">Let's discuss your next project.</p>
                </div>
                <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </LiquidGlass>
            </Link>

          </div>
        </div>


        {/* Minimal Footer */}
        <section className="w-full py-12 mt-10 text-center opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-sm font-light text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Manuel. All rights reserved.
          </p>
        </section>
      </main>
    </AuroraBackground>
  );
}
