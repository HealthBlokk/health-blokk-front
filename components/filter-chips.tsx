'use client';

import { allergyLabels } from '@/data/allergy-labels';
import type { Restaurant } from '@/types/restaurant';
import { useState } from 'react';
import { StyledAllergyLabel } from './styled-allergy-label';

interface FilterChipsProps {
  onFilterChange: (filtered: Restaurant[], activeFilters: string[]) => void;
  restaurants: Restaurant[];
}

export default function FilterChips({
  onFilterChange,
  restaurants,
}: FilterChipsProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    const newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter((f) => f !== filterId)
      : [...activeFilters, filterId];

    setActiveFilters(newFilters);

    // Apply filtering
    if (newFilters.length === 0) {
      onFilterChange(restaurants, []);
    } else {
      const filtered = restaurants.filter((restaurant) =>
        newFilters.every((filter) => restaurant.allergyLabels.includes(filter))
      );
      onFilterChange(filtered, newFilters);
    }
  };

  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar">
      {allergyLabels.map((allergyLabel) => (
        <StyledAllergyLabel
          key={allergyLabel.id}
          id={allergyLabel.id}
          name={allergyLabel.name}
          isSelected={activeFilters.includes(allergyLabel.id)}
          onClick={() => toggleFilter(allergyLabel.id)}
        />
        // <button
        //   key={allergyLabel.id}
        //   onClick={() => toggleFilter(allergyLabel.id)}
        //   className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
        //     activeFilters.includes(allergyLabel.id)
        //       ? 'bg-green-500 text-white'
        //       : 'bg-green-100 text-green-800'
        //   }`}
        // >
        //   {allergyLabel.name}
        // </button>
      ))}
    </div>
  );
}
