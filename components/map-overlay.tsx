"use client"

import { useEffect, useState } from "react"

interface MapOverlayProps {
  show: boolean
}

export default function MapOverlay({ show }: MapOverlayProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !show) return null

  return <div className="fixed inset-0 bg-black/50 z-[1500]" aria-hidden="true" />
}
