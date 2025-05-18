"use client"

import type React from "react"
import { useState } from "react"

interface OptionCheckboxProps {
  id: string
  label: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export function OptionCheckbox({ id, label, checked = false, onChange }: OptionCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked
    setIsChecked(newChecked)
    if (onChange) {
      onChange(newChecked)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleChange}
        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
      />
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  )
}

