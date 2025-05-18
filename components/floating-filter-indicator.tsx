"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Maximize2, ChevronUp, ChevronDown } from "lucide-react"
import { allergyLabels } from "@/data/allergy-labels"
import { cn } from "@/lib/utils"

interface FloatingFilterIndicatorProps {
  selectedAllergies: string[]
  onExpand: () => void
}

export default function FloatingFilterIndicator({ selectedAllergies, onExpand }: FloatingFilterIndicatorProps) {
  const [expanded, setExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!mounted) return null

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  const handleExpandClick = () => {
    onExpand()
  }

  // Get allergy names from IDs
  const selectedAllergyNames = selectedAllergies
    .map((id) => {
      const allergy = allergyLabels.find((a) => a.id === id)
      return allergy ? allergy.name : ""
    })
    .filter(Boolean)

  return (
    <div
      className={cn(
        "fixed z-[1200] transition-all duration-300 shadow-lg rounded-lg bg-white",
        expanded ? "w-64" : "w-auto",
        isMobile ? "right-4 bottom-20" : "right-4 bottom-4",
      )}
    >
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">
            {selectedAllergies.length === 0
              ? "No filters"
              : `${selectedAllergies.length} ${selectedAllergies.length === 1 ? "filter" : "filters"} applied`}
          </span>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={toggleExpand}>
            {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleExpandClick}>
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {expanded && selectedAllergies.length > 0 && (
        <div className="px-3 pb-3">
          <div className="flex flex-wrap gap-1 mb-2">
            {selectedAllergyNames.map((name) => (
              <Badge key={name} variant="secondary" className="text-xs">
                {name}
              </Badge>
            ))}
          </div>
          <Button size="sm" className="w-full" onClick={handleExpandClick}>
            Modify Filters
          </Button>
        </div>
      )}
    </div>
  )
}
