export interface Restaurant {
  id: string;
  name: string;
  address: string;
  description: string;
  latitude: number;
  longitude: number;
  phone: string;
  email: string;
  allergyLabels: string[]; // Array of allergy/diet labels this restaurant accommodates
  image?: string; // Optional image URL for the restaurant
  website?: string; // Optional website URL
  // Optional properties for display
  rating?: number;
  reviewCount?: number;
  cuisine?: string;
  priceRange?: string;
}
