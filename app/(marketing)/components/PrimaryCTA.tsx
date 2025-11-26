'use client'

import Link from 'next/link'

interface PrimaryCTAProps {
  className?: string
}

export function PrimaryCTA({ className = '' }: PrimaryCTAProps) {
  return (
    <Link
      href="https://qpp.fahrlygo.de/account/get-signup-link"
      className={`inline-flex items-center justify-center rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-[#050509] hover:bg-slate-200 transition-colors ${className}`}
    >
      Kostenlos testen
    </Link>
  )
}

