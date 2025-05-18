"use client"

import { useState } from "react"

interface UploadButtonProps {
  label: string
  onUpload?: (file: File) => void
}

export function UploadButton({ label, onUpload }: UploadButtonProps) {
  const [isUploading, setIsUploading] = useState(false)

  const handleClick = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement
      if (target.files && target.files.length > 0) {
        setIsUploading(true)

        // Simulate upload process
        setTimeout(() => {
          setIsUploading(false)
          if (onUpload) {
            onUpload(target.files![0])
          }
        }, 1500)
      }
    }
    input.click()
  }

  return (
    <button
      className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center justify-center"
      onClick={handleClick}
      disabled={isUploading}
    >
      {isUploading ? "Uploading..." : label}
      {!isUploading && (
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
          className="ml-2 h-4 w-4"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      )}
    </button>
  )
}

