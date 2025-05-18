import type { ReactNode } from "react"
import { NavigationButtons } from "./navigation-buttons"

interface QuestionCardProps {
  title: string
  question?: string
  children: ReactNode
  onPrevious?: () => void
  onNext?: () => void
  onMore?: () => void
  isPreviousDisabled?: boolean
  isNextDisabled?: boolean
}

export function QuestionCard({
  title,
  question,
  children,
  onPrevious,
  onNext,
  onMore,
  isPreviousDisabled,
  isNextDisabled,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-md mx-auto h-[600px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {question && <p className="text-sm text-gray-500 mt-2">{question}</p>}
      </div>
      <div className="flex-1 overflow-y-auto p-6">{children}</div>
      <div className="p-6 border-t border-gray-200">
        <NavigationButtons
          onPrevious={onPrevious}
          onNext={onNext}
          onMore={onMore}
          isPreviousDisabled={isPreviousDisabled}
          isNextDisabled={isNextDisabled}
        />
      </div>
    </div>
  )
}

