'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe, Heart, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs';

// Types for our restaurant data model
interface MenuItem {
  name: string;
  description: string;
  price: number;
  foodType: string;
  intolerances?: string[];
  dietaryPreferences?: string[];
  isPopular?: boolean;
  isChefSpecial?: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface Restaurant {
  id: string;
  name: string;
  rating: number;
  priceRange: string;
  latitude: number;
  longitude: number;
  cuisine: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  openUntil: string;
  menu: MenuCategory[];
}

export default function RestaurantProfile() {
  // const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        setLoading(true);
        // In a real app, this would fetch from the actual endpoint
        // const response = await fetch(`https://xyz.com/restaurant/${id}`);
        // if (!response.ok) throw new Error('Failed to fetch restaurant data');
        // const data = await response.json();

        // For demo purposes, we'll use mock data that matches the image
        const mockRestaurant: Restaurant = {
          id: '1',
          name: 'La Piazza Restaurant',
          rating: 4.8,
          priceRange: '$$$',
          latitude: 40.7128,
          longitude: -74.006,
          cuisine: 'Italian',
          description:
            'Authentic Italian cuisine in the heart of New York City.',
          address: '123 Main Street, New York',
          phone: '555-1234',
          website: 'lapiazza.com',
          openUntil: '10 PM',
          menu: [
            {
              name: 'Appetizers',
              items: [
                {
                  name: 'Bruschetta',
                  description:
                    'Grilled bread rubbed with garlic and topped with tomatoes, olive oil, and herbs',
                  price: 12,
                  foodType: 'appetizer',
                  dietaryPreferences: ['vegetarian'],
                },
                {
                  name: 'Calamari Fritti',
                  description: 'Crispy fried squid served with marinara sauce',
                  price: 16,
                  foodType: 'seafood',
                  dietaryPreferences: ['seafood'],
                },
              ],
            },
            {
              name: 'Main Courses',
              items: [
                {
                  name: 'Spaghetti Carbonara',
                  description:
                    'Classic Roman pasta with eggs, pecorino cheese, guanciale, and black pepper',
                  price: 24,
                  foodType: 'pasta',
                  intolerances: ['gluten'],
                  isPopular: true,
                },
                {
                  name: 'Osso Buco',
                  description:
                    'Braised veal shanks with gremolata and saffron risotto',
                  price: 38,
                  foodType: 'meat',
                  isChefSpecial: true,
                },
              ],
            },
            {
              name: 'Desserts',
              items: [
                {
                  name: 'Tiramisu',
                  description:
                    'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
                  price: 12,
                  foodType: 'dessert',
                },
              ],
            },
          ],
        };

        setRestaurant(mockRestaurant);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        );
        setLoading(false);
      }
    };

    fetchRestaurantData();
  }, []);

  if (loading)
    return (
      <div className="p-8 text-center">Loading restaurant information...</div>
    );
  if (error)
    return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  if (!restaurant)
    return <div className="p-8 text-center">Restaurant not found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header Section */}
      <div className="relative">
        {/* Header Image */}
        <div
          className="w-full h-48 md:h-72 bg-gray-200 relative"
          style={{
            backgroundImage: `url(/images/restaurant-placeholder.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/50 to-transparent p-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/80 text-white cursor-pointer"
                // onClick={() => navigate('/restaurants')}
              >
                <ArrowLeft className="h-5 w-5 bg" />
              </Button>
              <div className="flex-1" />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-red-800 text-white cursor-pointer"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Restaurant Info Bar */}
        <div className="p-4 md:p-6 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">{restaurant.name}</h1>
          <div className="flex items-center mt-1 text-sm">
            <span className="text-gray-700">{restaurant.cuisine}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-700">{restaurant.priceRange}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <span className="text-yellow-500">{restaurant.rating}</span>
              <span className="text-yellow-500 ml-1">★</span>
            </div>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{restaurant.address}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm">
              Open Until {restaurant.openUntil}
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="menu" className="mt-2">
        <TabsList className="w-full justify-start border-b">
          <TabsTrigger value="menu" className="flex-1">
            Menu
          </TabsTrigger>
          <TabsTrigger value="info" className="flex-1">
            Info
          </TabsTrigger>
        </TabsList>

        {/* Menu Tab */}
        <TabsContent value="menu" className="pt-4">
          {restaurant.menu.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-bold mb-4">{category.name}</h2>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col md:flex-row md:justify-between"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="font-medium text-lg">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.dietaryPreferences?.includes('vegetarian') && (
                          <Badge
                            variant="outline"
                            className="bg-orange-50 text-orange-600 border-orange-200"
                          >
                            🌿 Vegetarian
                          </Badge>
                        )}
                        {item.dietaryPreferences?.includes('seafood') && (
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-600 border-blue-200"
                          >
                            🐟 Seafood
                          </Badge>
                        )}
                        {item.isPopular && (
                          <Badge
                            variant="outline"
                            className="bg-red-50 text-red-600 border-red-200"
                          >
                            🔥 Popular
                          </Badge>
                        )}
                        {item.isChefSpecial && (
                          <Badge
                            variant="outline"
                            className="bg-purple-50 text-purple-600 border-purple-200"
                          >
                            ⭐ Chef's Special
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="font-medium">${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Info Tab */}
        <TabsContent value="info" className="p-4">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold mb-2">About</h2>
              <p className="text-gray-700">{restaurant.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{restaurant.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{restaurant.website}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">Location</h2>
              <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Map placeholder</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
