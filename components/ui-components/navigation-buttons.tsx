"use client"

interface NavigationButtonsProps {
  onPrevious?: () => void
  onNext?: () => void
  onMore?: () => void
  isPreviousDisabled?: boolean
  isNextDisabled?: boolean
}

export function NavigationButtons({
  onPrevious,
  onNext,
  onMore,
  isPreviousDisabled = false,
  isNextDisabled = false,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between items-center w-full mt-auto pt-4">
      <button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md border ${
          isPreviousDisabled
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
      >
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
          className="h-4 w-4"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Previous
      </button>

      {onMore && (
        <button onClick={onMore} className="p-1 rounded-md text-gray-500 hover:bg-gray-100">
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
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      )}

      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md border ${
          isNextDisabled
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
      >
        Next
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
          className="h-4 w-4"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  )
}

