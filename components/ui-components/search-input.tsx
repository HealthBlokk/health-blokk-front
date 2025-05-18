"use client"

import type React from "react"
import { useState } from "react"

interface SearchInputProps {
  placeholder?: string
  onSearch?: (value: string) => void
}

export function SearchInput({ placeholder = "Search", onSearch }: SearchInputProps) {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    if (onSearch) {
      onSearch(newValue)
    }
  }

  return (
    <div className="relative">
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
        className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        className="pl-8 w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

