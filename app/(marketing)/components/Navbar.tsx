'use client'

import { useState } from 'react'
import { fahrlyCopy } from '../fahrlyCopy'
import { PrimaryCTA } from './PrimaryCTA'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050509]/80 backdrop-blur-sm border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="text-slate-100 font-semibold text-lg hover:text-slate-200 transition-colors"
          >
            {fahrlyCopy.navbar.brand}
          </a>

          {/* Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {fahrlyCopy.navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-slate-100 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://qpp.fahrlygo.de/account/login"
              className="text-slate-300 hover:text-slate-100 text-sm"
            >
              {fahrlyCopy.navbar.login}
            </a>
            <PrimaryCTA />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="https://qpp.fahrlygo.de/account/login"
              className="text-slate-300 hover:text-slate-100 text-sm"
            >
              {fahrlyCopy.navbar.login}
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
              className="p-2 text-slate-300 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 mb-4 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur p-4 space-y-4">
            {fahrlyCopy.navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-200 hover:text-slate-100 text-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <PrimaryCTA className="w-full" />
          </div>
        )}
      </div>
    </nav>
  )
}

