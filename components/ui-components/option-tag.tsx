"use client"

import { useState } from "react"

interface OptionTagProps {
  label: string
  selected?: boolean
  onClick?: () => void
}

export function OptionTag({ label, selected = false, onClick }: OptionTagProps) {
  const [isSelected, setIsSelected] = useState(selected)

  const handleClick = () => {
    setIsSelected(!isSelected)
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
        isSelected ? "bg-emerald-50 border-emerald-200 text-emerald-600" : "bg-white border-gray-300 hover:bg-gray-50"
      }`}
    >
      {isSelected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1.5 h-3.5 w-3.5"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {label}
    </button>
  )
}

