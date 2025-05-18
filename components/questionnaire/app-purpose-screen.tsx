import { QuestionCard } from "../ui-components/question-card"

interface AppPurposeScreenProps {
  onPrevious: () => void
  onNext: () => void
}

export function AppPurposeScreen({ onPrevious, onNext }: AppPurposeScreenProps) {
  return (
    <QuestionCard title="How HealthBlokk Works" onPrevious={onPrevious} onNext={onNext}>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500">
            <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.2" />
            <path d="M35,35 L65,35 L65,65 L35,65 Z" fill="white" stroke="currentColor" strokeWidth="2" />
            <path d="M45,45 L60,45" stroke="currentColor" strokeWidth="2" />
            <path d="M45,55 L60,55" stroke="currentColor" strokeWidth="2" />
            <path d="M40,45 L40,45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M40,55 L40,55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <p className="text-base mb-6">
          Based on your needs, the app will assist you in living a healthier and happier life!
        </p>

        <div className="w-full max-w-xs border-l-4 border-emerald-500 pl-4 py-2 text-left bg-gray-50 rounded-r-md">
          <p className="text-sm text-gray-500">We'll create a personalized plan based on your health profile.</p>
        </div>
      </div>
    </QuestionCard>
  )
}

