"use client"

import { useState } from "react"
import { QuestionCard } from "../ui-components/question-card"
import { SearchInput } from "../ui-components/search-input"
import { OptionCheckbox } from "../ui-components/option-checkbox"

interface GoalsScreenProps {
  onPrevious: () => void
  onNext: () => void
}

export function GoalsScreen({ onPrevious, onNext }: GoalsScreenProps) {
  const [searchValue, setSearchValue] = useState("")

  const goals = [
    { id: "discover", label: "Discover new places to eat" },
    { id: "improve", label: "Improve my overall diet" },
    { id: "manage", label: "Manage allergies or intolerances" },
    { id: "track", label: "Track and optimize my health" },
    { id: "learn", label: "Learn more about my body and its needs" },
  ]

  return (
    <QuestionCard
      title="Goals"
      question="What is your primary goal for using this app?"
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <div className="space-y-4">
        <SearchInput placeholder="Search for goals" onSearch={setSearchValue} />

        <div className="space-y-3 mt-4">
          {goals.map((goal) => (
            <OptionCheckbox key={goal.id} id={goal.id} label={goal.label} />
          ))}
        </div>
      </div>
    </QuestionCard>
  )
}

