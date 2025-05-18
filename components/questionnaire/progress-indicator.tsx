interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-center w-full mb-6">
      <div className="relative w-full max-w-xs flex items-center">
        {/* Line */}
        <div className="absolute h-0.5 bg-gray-200 w-full" />

        {/* Steps */}
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep

          return (
            <div
              key={index}
              className="relative flex items-center justify-center"
              style={{ width: `${100 / totalSteps}%` }}
            >
              <div
                className={`
                  w-4 h-4 rounded-full z-10 transition-all
                  ${isCompleted ? "bg-emerald-500" : isCurrent ? "bg-emerald-500" : "bg-gray-200"}
                  ${isCurrent ? "ring-4 ring-emerald-100" : ""}
                `}
              />

              {/* Connecting line to next step */}
              {index < totalSteps - 1 && (
                <div
                  className={`
                    absolute top-1/2 h-0.5 -translate-y-1/2 left-1/2 w-full
                    ${isCompleted ? "bg-emerald-500" : "bg-gray-200"}
                  `}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

