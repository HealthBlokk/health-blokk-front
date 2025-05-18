import { QuestionCard } from "../ui-components/question-card"

interface WelcomeScreenProps {
  onNext: () => void
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <QuestionCard title="Welcome to HealthBlokk!" onNext={onNext} isPreviousDisabled={true}>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500">
            <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.2" />
            <path
              d="M65,40 C65,40 55,60 50,65 C45,60 35,40 35,40 C35,40 45,35 50,30 C55,35 65,40 65,40 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <p className="text-base mb-6">
          We'd like to learn more about you to offer tailored recommendations for your health journey.
        </p>

        <div className="w-full max-w-xs border-l-4 border-emerald-500 pl-4 py-2 text-left bg-gray-50 rounded-r-md">
          <p className="text-sm text-gray-500">Answer a few questions to help us personalize your experience.</p>
        </div>
      </div>
    </QuestionCard>
  )
}

