"use client";

import { useState } from "react";
import { QuestionCard } from "../ui-components/question-card";
import { SearchInput } from "../ui-components/search-input";
import { OptionTag } from "../ui-components/option-tag";
import { OptionGroup } from "../ui-components/option-group";
import { UploadButton } from "../ui-components/upload-button";

interface AllergiesScreenProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function AllergiesScreen({ onPrevious, onNext }: AllergiesScreenProps) {
  const [searchValue, setSearchValue] = useState("");

  const allergyOptions = [
    "Gluten",
    "Lactose",
    "Walnuts",
    "Eggs",
    "Histamin",
    "Shellfish",
    "Soy",
    "Hanf",
    "Pistachio",
    "Fructose",
    "Cashew",
  ];

  return (
    <QuestionCard
      title="Allergies and Intolerances"
      question="Do you have any known allergies or intolerances?"
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <div className="space-y-4">
        <SearchInput placeholder="Search for allergies" onSearch={setSearchValue} />

        <OptionGroup>
          {allergyOptions.map((option) => (
            <OptionTag key={option} label={option} selected={option === "Gluten"} />
          ))}
        </OptionGroup>
      </div>
    </QuestionCard>
  );
}
