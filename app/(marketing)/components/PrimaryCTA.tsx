'use client'

import Link from 'next/link'
import Button from '@/app/components/shared/ui/Button'

interface PrimaryCTAProps {
  className?: string
  fullWidth?: boolean
}

export function PrimaryCTA({ className = '', fullWidth = false }: PrimaryCTAProps) {
  return (
    <Link href="https://qpp.fahrlygo.de/account/get-signup-link">
      <Button variant="primary" fullWidth={fullWidth} className={className}>
        <span className="md:hidden">Jetzt testen</span>
        <span className="hidden md:inline">Kostenlos testen</span>
      </Button>
    </Link>
  )
}

