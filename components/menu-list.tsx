'use client';

import MenuItemCard from '@/components/menu-item-card';
import { Separator } from '@/components/ui/separator';
import { menuCategories } from '@/data/menu-categories';
import { menuItems } from '@/data/menu-items';
import { useState } from 'react';

interface MenuListProps {
  restaurantId: string;
}

export default function MenuList({ restaurantId }: MenuListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter menu items by restaurant
  const restaurantMenuItems = menuItems.filter(
    (item) => item.restaurantId === restaurantId
  );

  // Filter by search query
  const filteredItems = searchQuery
    ? restaurantMenuItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : restaurantMenuItems;

  return (
    <div>
      {/* <div className="mb-6">
        <Input
          placeholder="Search menu items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div> */}

      {searchQuery ? (
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Search Results ({filteredItems.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} menuItem={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {menuCategories.map((category, index) => {
            const categoryItems = restaurantMenuItems.filter(
              (item) => item.categoryId === category.id
            );

            // Skip rendering empty categories
            if (categoryItems.length === 0) return null;

            return (
              <div key={category.id}>
                {index > 0 && <Separator className="mb-8" />}
                <h2 className="text-xl font-bold mb-6">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryItems.map((item) => (
                    <MenuItemCard key={item.id} menuItem={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
