"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LiquidGlass } from "./liquid-glass"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-2 md:top-6 w-full z-50 px-4 sm:px-6 lg:px-8 flex justify-center transition-all duration-300">
            <div className="w-full max-w-3xl">
                <LiquidGlass
                    variant="floating"
                    intensity={isScrolled ? "strong" : "subtle"}
                    stretchOnDrag={false}
                    className={cn(
                        "w-full rounded-2xl md:rounded-full px-4 md:px-8 transition-all duration-500",
                        isScrolled ? "py-2" : "py-3"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo / Name */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/"
                                className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-50 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                Manu.dev
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-2 md:space-x-8">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                        </nav>
                    </div>
                </LiquidGlass>
            </div>
        </header>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-all duration-200 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-white/10 dark:hover:bg-white/10 px-3 py-2 rounded-full"
        >
            {children}
        </Link>
    )
}
