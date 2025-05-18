"use client"

import { Filter, List } from "lucide-react"

interface FilterBarProps {
  onFilterClick: () => void
}

export default function FilterBar({ onFilterClick }: FilterBarProps) {
  return (
    <div className="md:hidden fixed bottom-16 left-0 right-0 z-[900]">
      <div className="flex justify-between px-4 py-2">
        <div className="flex-1 flex justify-center">
          <button
            onClick={onFilterClick}
            className="bg-white rounded-md shadow-md px-6 py-2 flex items-center justify-center"
          >
            <Filter className="h-5 w-5 mr-2" />
            <span className="font-medium">Filter</span>
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <button className="bg-white rounded-md shadow-md px-6 py-2 flex items-center justify-center">
            <List className="h-5 w-5 mr-2" />
            <span className="font-medium">List</span>
          </button>
        </div>
      </div>
    </div>
  )
}
