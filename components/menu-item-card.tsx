import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { allergyLabels } from '@/data/allergy-labels';
import { restaurants } from '@/data/restaurants';
import type { MenuItem } from '@/types/menu';
import { StyledAllergyLabel } from './styled-allergy-label';

interface MenuItemCardProps {
  menuItem: MenuItem;
  showRestaurantName?: boolean;
  selectedAllergyLabels?: string[];
  selectedIngredients?: string[];
}

export default function MenuItemCard({
  menuItem,
  showRestaurantName = false,
  selectedAllergyLabels = [],
  selectedIngredients = [],
}: MenuItemCardProps) {
  // Get restaurant name if needed
  const restaurant = showRestaurantName
    ? restaurants.find((r) => r.id === menuItem.restaurantId)
    : null;

  // Get allergy label objects from IDs - safely handle undefined allergyLabels
  const allergyLabelObjects = menuItem.allergyLabels
    ? menuItem.allergyLabels.map((id) => {
        const label = allergyLabels.find((a) => a.id === id);
        return label ? { id, name: label.name } : { id, name: id };
      })
    : [];

  // Add special labels if needed (for demo purposes)
  if (menuItem.name.toLowerCase().includes('special')) {
    allergyLabelObjects.push({ id: 'special', name: "Chef's Special" });
  }
  if (menuItem.name.toLowerCase().includes('popular') || Math.random() > 0.7) {
    allergyLabelObjects.push({ id: 'popular', name: 'Popular' });
  }

  return (
    <Card className="border-0 shadow-none p-4">
      <CardHeader className="p-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{menuItem.name}</CardTitle>
            {showRestaurantName && restaurant && (
              <CardDescription className="mt-1">
                {restaurant.name}
              </CardDescription>
            )}
          </div>
          {/* <div className="text-lg font-medium">
            ${menuItem.price ? menuItem.price.toFixed(2) : '0.00'}
          </div> */}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-slate-600 mb-3">{menuItem.description}</p>

        {/* Display allergy labels with new styling */}
        {allergyLabelObjects.length > 0 ? (
          <div className="flex gap-2 mb-2 overflow-auto">
            {allergyLabelObjects.slice(0, 3).map((label, index) => (
              <div key={`${label.id}-${index}`}>
                <StyledAllergyLabel id={label.id} name={label.name} />
              </div>
            ))}
            {allergyLabelObjects.length > 3 && (
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                ...
              </span>
            )}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
