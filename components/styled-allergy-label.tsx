import { cn } from '@/lib/utils';
import {
  Egg,
  Fish,
  Flame,
  Leaf,
  Milk,
  Nut,
  Salad,
  Star,
  Wheat,
} from 'lucide-react';
import type React from 'react';

interface StyledAllergyLabelProps {
  id: string;
  name: string;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function StyledAllergyLabel({
  id,
  name,
  className,
  isSelected,
  onClick,
}: StyledAllergyLabelProps) {
  // Define label styles based on allergy ID
  const labelStyles: Record<
    string,
    { bg: string; text: string; icon: React.ReactNode }
  > = {
    vegetarian: {
      bg: 'bg-orange-50 border-orange-200',
      text: 'text-orange-600',
      icon: <Leaf className="h-4 w-4" />,
    },
    vegan: {
      bg: 'bg-green-50 border-green-200',
      text: 'text-green-600',
      icon: <Salad className="h-4 w-4" />,
    },
    gluten: {
      bg: 'bg-amber-50 border-amber-200',
      text: 'text-amber-600',
      icon: <Wheat className="h-4 w-4" />,
    },
    dairy: {
      bg: 'bg-blue-50 border-blue-200',
      text: 'text-blue-600',
      icon: <Milk className="h-4 w-4" />,
    },
    egg: {
      bg: 'bg-yellow-50 border-yellow-200',
      text: 'text-yellow-600',
      icon: <Egg className="h-4 w-4" />,
    },
    fish: {
      bg: 'bg-sky-50 border-sky-200',
      text: 'text-sky-600',
      icon: <Fish className="h-4 w-4" />,
    },
    shellfish: {
      bg: 'bg-sky-50 border-sky-200',
      text: 'text-sky-600',
      icon: <Fish className="h-4 w-4" />,
    },
    peanut: {
      bg: 'bg-amber-50 border-amber-200',
      text: 'text-amber-600',
      icon: <Nut className="h-4 w-4" />,
    },
    treenut: {
      bg: 'bg-amber-50 border-amber-200',
      text: 'text-amber-600',
      icon: <Nut className="h-4 w-4" />,
    },
    // Special labels
    popular: {
      bg: 'bg-rose-50 border-rose-200',
      text: 'text-rose-600',
      icon: <Flame className="h-4 w-4" />,
    },
    special: {
      bg: 'bg-purple-50 border-purple-200',
      text: 'text-purple-600',
      icon: <Star className="h-4 w-4" />,
    },
  };

  // Default style if no specific style is found
  const style = labelStyles[id] || {
    bg: 'bg-gray-50 border-gray-200',
    text: 'text-gray-600',
    icon: <Leaf className="h-4 w-4 text-gray-500" />,
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs whitespace-nowrap w-full',
        style.bg,
        style.text,
        className,
        isSelected ? 'bg-green-500 text-white border-green-500' : ''
      )}
      onClick={onClick}
    >
      {style.icon}
      <span>{name}</span>
    </div>
  );
}
