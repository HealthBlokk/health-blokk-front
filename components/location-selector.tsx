"use client"

import { ChevronDown, Search } from "lucide-react"

export default function LocationSelector() {
  return (
    <div className="flex justify-between items-center w-full px-4 py-3">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">Vienna</h2>
        <ChevronDown className="ml-1 h-5 w-5" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-green-400 text-black rounded-full px-4 py-2 flex items-center">
          <span className="text-sm font-medium">14:17:40</span>
        </div>
        <button className="p-1">
          <Search className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
