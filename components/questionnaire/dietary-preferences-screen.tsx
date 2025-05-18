"use client"

import { useState } from "react"
import { QuestionCard } from "../ui-components/question-card"
import { SearchInput } from "../ui-components/search-input"
import { OptionTag } from "../ui-components/option-tag"
import { OptionGroup } from "../ui-components/option-group"

interface DietaryPreferencesScreenProps {
  onPrevious: () => void
  onNext: () => void
}

export function DietaryPreferencesScreen({ onPrevious, onNext }: DietaryPreferencesScreenProps) {
  const [searchValue, setSearchValue] = useState("")

  const dietaryOptions = ["Gluten", "Lactose", "Walnuts", "Eggs", "Histamin", "Fructose", "Shellfish", "Soy"]

  const avoidOptions = ["Red meat", "Processed foods", "Sugar", "Dairy", "Processed foods", "None"]

  return (
    <QuestionCard
      title="Dietary Preferences"
      question="Do you follow any specific diet?"
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <div className="space-y-6">
        <div>
          <SearchInput placeholder="Search for diets" onSearch={setSearchValue} />

          <OptionGroup>
            {dietaryOptions.map((option) => (
              <OptionTag key={option} label={option} selected={option === "Gluten"} />
            ))}
          </OptionGroup>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm font-medium mb-3">Do you avoid any specific types of food?</p>

          <SearchInput placeholder="Search for foods to avoid" />

          <OptionGroup className="mt-3">
            {avoidOptions.map((option) => (
              <OptionTag key={option} label={option} />
            ))}
          </OptionGroup>
        </div>
      </div>
    </QuestionCard>
  )
}

