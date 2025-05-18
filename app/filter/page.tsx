'use client';

import MenuItemCard from '@/components/menu-item-card';
import { StyledAllergyLabel } from '@/components/styled-allergy-label';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allergyLabels } from '@/data/allergy-labels';
import { ingredients } from '@/data/ingredients';
import { menuItems } from '@/data/menu-items';
import type { MenuItem } from '@/types/menu';
import { ChevronLeft, Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FilterPage() {
  const [selectedAllergyLabels, setSelectedAllergyLabels] = useState<string[]>(
    []
  );
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const [activeTab, setActiveTab] = useState<string>('allergies');
  const [ingredientSearchQuery, setIngredientSearchQuery] = useState('');

  // Filter menu items when selected allergies or ingredients change
  useEffect(() => {
    let filtered = [...menuItems];

    // Filter by selected allergy labels
    if (selectedAllergyLabels.length > 0) {
      filtered = filtered.filter((item) => {
        // Check if the menu item has allergyLabels and accommodates all selected allergies/diets
        return (
          item.allergyLabels &&
          selectedAllergyLabels.every((allergyId) =>
            item.allergyLabels.includes(allergyId)
          )
        );
      });
    }

    // Filter by selected ingredients
    if (selectedIngredients.length > 0) {
      filtered = filtered.filter((item) => {
        // Check if the menu item contains all selected ingredients
        return selectedIngredients.every((ingredientId) =>
          item.ingredientIds.includes(ingredientId)
        );
      });
    }

    setFilteredItems(filtered);
  }, [selectedAllergyLabels, selectedIngredients]);

  const toggleAllergyLabel = (allergyId: string) => {
    setSelectedAllergyLabels((prev) => {
      if (prev.includes(allergyId)) {
        return prev.filter((id) => id !== allergyId);
      } else {
        return [...prev, allergyId];
      }
    });
  };

  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients((prev) => {
      if (prev.includes(ingredientId)) {
        return prev.filter((id) => id !== ingredientId);
      } else {
        return [...prev, ingredientId];
      }
    });
  };

  const clearFilters = () => {
    setSelectedAllergyLabels([]);
    setSelectedIngredients([]);
  };

  // Filter ingredients based on search query
  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(ingredientSearchQuery.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm border-b py-4 px-6">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center text-sm mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Map
          </Link>
          <h1 className="text-2xl font-bold">Filter Menu Items</h1>
        </div>
      </header>

      <div className="container mx-auto py-6 px-4 pt-28">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="allergies">Filter by Dietary Needs</TabsTrigger>
            <TabsTrigger value="ingredients">Filter by Ingredients</TabsTrigger>
          </TabsList>

          <TabsContent value="allergies">
            <Card>
              <CardHeader>
                <CardTitle>Dietary Restrictions</CardTitle>
                <CardDescription>
                  Select dietary needs to find suitable menu items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">
                    Showing menu items suitable for selected dietary needs
                  </p>
                  {selectedAllergyLabels.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedAllergyLabels([])}
                    >
                      Clear Selections
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {allergyLabels.map((allergy) => (
                    <div
                      key={allergy.id}
                      onClick={() => toggleAllergyLabel(allergy.id)}
                      className="cursor-pointer"
                    >
                      <StyledAllergyLabel
                        id={allergy.id}
                        name={allergy.name}
                        isSelected={selectedAllergyLabels.includes(allergy.id)}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients">
            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
                <CardDescription>
                  Select ingredients you want in your meal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search ingredients..."
                      className="pl-8"
                      value={ingredientSearchQuery}
                      onChange={(e) => setIngredientSearchQuery(e.target.value)}
                    />
                  </div>
                  {selectedIngredients.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2"
                      onClick={() => setSelectedIngredients([])}
                    >
                      Clear Selections
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-2 max-h-60 overflow-y-auto p-2 border rounded-md">
                  {filteredIngredients.map((ingredient) => (
                    <Badge
                      key={ingredient.id}
                      variant={
                        selectedIngredients.includes(ingredient.id)
                          ? 'default'
                          : 'outline'
                      }
                      className="cursor-pointer"
                      onClick={() => toggleIngredient(ingredient.id)}
                    >
                      {ingredient.name}
                    </Badge>
                  ))}
                </div>

                {filteredIngredients.length === 0 && (
                  <p className="text-center text-muted-foreground mt-4">
                    No ingredients found matching your search
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {(selectedAllergyLabels.length > 0 ||
          selectedIngredients.length > 0) && (
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium">Active filters:</span>

              {/* Display selected allergy labels */}
              {selectedAllergyLabels.map((id) => {
                const allergy = allergyLabels.find((a) => a.id === id);
                return allergy ? (
                  <div>
                    <StyledAllergyLabel
                      key={`allergy-${id}`}
                      id={id}
                      name={allergy.name}
                    />
                  </div>
                ) : null;
              })}

              {/* Display selected ingredients */}
              {selectedIngredients.map((id) => {
                const ingredient = ingredients.find((i) => i.id === id);
                return ingredient ? (
                  <Badge
                    key={`ingredient-${id}`}
                    variant="secondary"
                    className="flex items-center gap-1 bg-green-100"
                  >
                    {ingredient.name}
                  </Badge>
                ) : null;
              })}
            </div>
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}

        <Separator className="my-6" />

        <div>
          <h2 className="text-lg font-semibold mb-4">
            {filteredItems.length}{' '}
            {filteredItems.length === 1 ? 'Result' : 'Results'}
          </h2>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No menu items match your filter criteria
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  menuItem={item}
                  showRestaurantName={true}
                  selectedAllergyLabels={selectedAllergyLabels}
                  selectedIngredients={selectedIngredients}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
