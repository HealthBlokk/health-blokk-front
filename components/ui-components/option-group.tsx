import type { ReactNode } from "react"

interface OptionGroupProps {
  children: ReactNode
  className?: string
}

export function OptionGroup({ children, className = "" }: OptionGroupProps) {
  return <div className={`flex flex-wrap gap-2 mt-4 ${className}`}>{children}</div>
}

