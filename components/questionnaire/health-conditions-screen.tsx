"use client"

import { useState } from "react"
import { QuestionCard } from "../ui-components/question-card"
import { SearchInput } from "../ui-components/search-input"
import { OptionCheckbox } from "../ui-components/option-checkbox"

interface HealthConditionsScreenProps {
  onPrevious: () => void
  onNext: () => void
}

export function HealthConditionsScreen({ onPrevious, onNext }: HealthConditionsScreenProps) {
  const [searchValue, setSearchValue] = useState("")

  const healthConditions = [
    { id: "hypertension", label: "Hypertension", defaultChecked: true },
    { id: "celiac", label: "Celiac disease" },
    { id: "ibs", label: "IBS (Irritable Bowel Syndrome)" },
    { id: "diabetes", label: "Diabetes" },
    { id: "immune", label: "Immune system disorders" },
  ]

  return (
    <QuestionCard
      title="Health Conditions"
      question="Do you have any health conditions that affect your diet?"
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <div className="space-y-4">
        <SearchInput placeholder="Search for conditions" onSearch={setSearchValue} />

        <div className="space-y-3 mt-4">
          {healthConditions.map((condition) => (
            <OptionCheckbox
              key={condition.id}
              id={condition.id}
              label={condition.label}
              checked={condition.defaultChecked}
            />
          ))}
        </div>
      </div>
    </QuestionCard>
  )
}

