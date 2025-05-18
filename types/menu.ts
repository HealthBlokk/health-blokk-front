export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  categoryId: string;
  restaurantId: string;
  ingredientIds: string[];
  allergyLabels: string[]; // Array of allergy/diet labels this menu item accommodates
}
