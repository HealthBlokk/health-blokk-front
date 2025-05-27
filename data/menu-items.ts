import type { MenuItem } from '@/types/menu';

export const menuItems: MenuItem[] = [
  // Zum Wohl (r1) - Appetizers
  {
    id: 'm1',
    name: 'Gluten-Free Bread Basket',
    description:
      'Assortment of freshly baked gluten-free breads with herb butter',
    price: 6.5,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r1',
    ingredientIds: ['i40', 'i17', 'i42'], // Herbs, Butter, Gluten-free flour
    allergyLabels: ['gluten', 'wheat', 'vegetarian'],
  },
  {
    id: 'm2',
    name: 'Austrian Potato Salad',
    description: 'Traditional potato salad with vinegar, oil, and fresh herbs',
    price: 5.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r1',
    ingredientIds: ['i28', 'i40', 'i43'], // Potato, Herbs, Vinegar
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },

  // Zum Wohl (r1) - Main Courses
  {
    id: 'm3',
    name: 'Gluten-Free Wiener Schnitzel',
    description:
      'Traditional Austrian schnitzel made with gluten-free breadcrumbs, served with potato salad',
    price: 18.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r1',
    ingredientIds: ['i23', 'i28', 'i42', 'i26'], // Chicken, Potato, Gluten-free flour, Egg
    allergyLabels: ['gluten', 'wheat'],
  },
  {
    id: 'm4',
    name: 'Vegan Goulash',
    description:
      'Plant-based version of the classic Hungarian stew with gluten-free dumplings',
    price: 16.5,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r1',
    ingredientIds: ['i44', 'i34', 'i8', 'i42'], // Tofu chunks, Onion, Bell Pepper, Gluten-free flour
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm5',
    name: 'House-Brewed Gluten-Free Beer',
    description: 'Craft beer made with alternative grains, brewed in-house',
    price: 4.9,
    categoryId: 'c4', // Beverages
    restaurantId: 'r1',
    ingredientIds: ['i45', 'i46'], // Rice malt, Hops
    allergyLabels: ['gluten', 'wheat', 'vegan'],
  },

  // Café Grüner Salon (r2) - Appetizers/Breakfast
  {
    id: 'm6',
    name: 'Vegan Breakfast Platter',
    description:
      'Assortment of plant-based spreads, gluten-free bread, and fresh fruit',
    price: 12.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r2',
    ingredientIds: ['i42', 'i4', 'i47', 'i48'], // Gluten-free flour, Avocado, Fresh fruit, Plant-based spreads
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm7',
    name: 'Gluten-Free Pancakes',
    description: 'Fluffy pancakes served with maple syrup and fresh berries',
    price: 9.5,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r2',
    ingredientIds: ['i42', 'i47', 'i49'], // Gluten-free flour, Fresh fruit, Maple syrup
    allergyLabels: ['gluten', 'wheat', 'vegetarian'],
  },

  // Café Grüner Salon (r2) - Main Courses
  {
    id: 'm8',
    name: 'Avocado Toast',
    description:
      'Gluten-free toast topped with smashed avocado, cherry tomatoes, and microgreens',
    price: 10.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r2',
    ingredientIds: ['i42', 'i4', 'i2', 'i50'], // Gluten-free flour, Avocado, Tomato, Microgreens
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm9',
    name: 'Quinoa Bowl',
    description:
      'Protein-rich bowl with quinoa, roasted vegetables, and tahini dressing',
    price: 13.5,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r2',
    ingredientIds: ['i51', 'i8', 'i21', 'i52'], // Quinoa, Bell Pepper, Carrot, Tahini
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm10',
    name: 'Oat Milk Latte',
    description: 'Specialty coffee made with organic oat milk',
    price: 4.2,
    categoryId: 'c4', // Beverages
    restaurantId: 'r2',
    ingredientIds: ['i53', 'i54'], // Coffee, Oat milk
    allergyLabels: ['dairy', 'egg', 'fish', 'shellfish', 'vegan'],
  },

  // Allergiker Café (r3) - Appetizers
  {
    id: 'm11',
    name: 'Allergen-Free Soup of the Day',
    description: 'Daily rotating soup free from common allergens',
    price: 5.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r3',
    ingredientIds: ['i28', 'i21', 'i34', 'i40'], // Potato, Carrot, Onion, Herbs
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm12',
    name: 'Rice Cracker Plate',
    description: 'Crispy rice crackers served with allergen-free dips',
    price: 6.5,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r3',
    ingredientIds: ['i10', 'i4', 'i55'], // Rice, Avocado, Chickpeas
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },

  // Allergiker Café (r3) - Main Courses
  {
    id: 'm13',
    name: 'Allergen-Free Sandwich',
    description:
      'Gluten-free bread with choice of allergen-free fillings and side salad',
    price: 9.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r3',
    ingredientIds: ['i42', 'i1', 'i2', 'i23'], // Gluten-free flour, Lettuce, Tomato, Chicken
    allergyLabels: ['gluten', 'wheat'],
  },
  {
    id: 'm14',
    name: 'Rice Noodle Stir Fry',
    description:
      'Stir-fried rice noodles with vegetables and allergen-free sauce',
    price: 12.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r3',
    ingredientIds: ['i10', 'i8', 'i21', 'i34'], // Rice, Bell Pepper, Carrot, Onion
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm15',
    name: 'Coconut Rice Pudding',
    description:
      'Creamy dessert made with coconut milk and topped with cinnamon',
    price: 6.9,
    categoryId: 'c3', // Desserts
    restaurantId: 'r3',
    ingredientIds: ['i10', 'i56', 'i57'], // Rice, Coconut milk, Cinnamon
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },

  // ausnahmsweise (r4) - Desserts
  {
    id: 'm16',
    name: 'Vegan Chocolate Cake',
    description: 'Rich, moist chocolate cake made without eggs or dairy',
    price: 5.9,
    categoryId: 'c3', // Desserts
    restaurantId: 'r4',
    ingredientIds: ['i42', 'i58', 'i56', 'i59'], // Gluten-free flour, Dark chocolate, Coconut milk, Coconut sugar
    allergyLabels: ['gluten', 'dairy', 'egg', 'wheat', 'vegan'],
  },
  {
    id: 'm17',
    name: 'Berry Cheesecake',
    description: 'Creamy vegan cheesecake with seasonal berry topping',
    price: 6.5,
    categoryId: 'c3', // Desserts
    restaurantId: 'r4',
    ingredientIds: ['i42', 'i60', 'i47', 'i56'], // Gluten-free flour, Cashews, Fresh fruit, Coconut milk
    allergyLabels: ['gluten', 'dairy', 'egg', 'wheat', 'vegan'],
  },
  {
    id: 'm18',
    name: 'Apple Strudel',
    description: 'Traditional Austrian dessert made vegan and gluten-free',
    price: 5.5,
    categoryId: 'c3', // Desserts
    restaurantId: 'r4',
    ingredientIds: ['i42', 'i47', 'i57', 'i59'], // Gluten-free flour, Fresh fruit, Cinnamon, Coconut sugar
    allergyLabels: ['gluten', 'dairy', 'egg', 'wheat', 'vegan'],
  },
  {
    id: 'm19',
    name: 'Matcha Latte',
    description: 'Green tea latte made with almond milk',
    price: 4.5,
    categoryId: 'c4', // Beverages
    restaurantId: 'r4',
    ingredientIds: ['i61', 'i62'], // Matcha powder, Almond milk
    allergyLabels: ['dairy', 'vegan'],
  },

  // GlutenFreeX (r5) - Bakery Items
  {
    id: 'm20',
    name: 'Artisan Gluten-Free Bread',
    description: 'Freshly baked loaf with crispy crust and soft interior',
    price: 6.9,
    categoryId: 'c1', // Appetizers (using this for bakery items)
    restaurantId: 'r5',
    ingredientIds: ['i42', 'i63', 'i64'], // Gluten-free flour, Seeds, Yeast
    allergyLabels: ['gluten', 'wheat', 'vegetarian', 'vegan'],
  },
  {
    id: 'm21',
    name: 'Gluten-Free Croissants',
    description: 'Buttery, flaky pastries that rival traditional croissants',
    price: 3.5,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r5',
    ingredientIds: ['i42', 'i17', 'i64'], // Gluten-free flour, Butter, Yeast
    allergyLabels: ['gluten', 'wheat', 'vegetarian'],
  },
  {
    id: 'm22',
    name: 'Cinnamon Rolls',
    description: 'Soft, sweet rolls with cinnamon filling and vanilla glaze',
    price: 4.2,
    categoryId: 'c3', // Desserts
    restaurantId: 'r5',
    ingredientIds: ['i42', 'i57', 'i59', 'i64'], // Gluten-free flour, Cinnamon, Coconut sugar, Yeast
    allergyLabels: ['gluten', 'wheat', 'vegetarian'],
  },
  {
    id: 'm23',
    name: 'Fruit Tart',
    description:
      'Gluten-free pastry shell filled with custard and topped with fresh fruit',
    price: 5.9,
    categoryId: 'c3', // Desserts
    restaurantId: 'r5',
    ingredientIds: ['i42', 'i47', 'i26', 'i17'], // Gluten-free flour, Fresh fruit, Egg, Butter
    allergyLabels: ['gluten', 'wheat', 'vegetarian'],
  },

  // TIAN (r6) - Gourmet Vegan
  {
    id: 'm24',
    name: 'Seasonal Vegetable Tartare',
    description:
      'Finely diced seasonal vegetables with herbs and edible flowers',
    price: 16.0,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r6',
    ingredientIds: ['i8', 'i21', 'i40', 'i50'], // Bell Pepper, Carrot, Herbs, Microgreens
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm25',
    name: 'Truffle Risotto',
    description:
      'Creamy arborio rice with seasonal truffles and wild mushrooms',
    price: 24.0,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r6',
    ingredientIds: ['i10', 'i9', 'i65', 'i40'], // Rice, Mushroom, Truffle, Herbs
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm26',
    name: 'Vegetable Garden',
    description:
      'Artistic arrangement of seasonal vegetables with soil-like crumble and herb emulsion',
    price: 22.0,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r6',
    ingredientIds: ['i21', 'i8', 'i28', 'i40'], // Carrot, Bell Pepper, Potato, Herbs
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm27',
    name: 'Chocolate Sphere',
    description:
      'Chocolate dome with berry compote and warm sauce poured tableside',
    price: 14.0,
    categoryId: 'c3', // Desserts
    restaurantId: 'r6',
    ingredientIds: ['i58', 'i47', 'i56'], // Dark chocolate, Fresh fruit, Coconut milk
    allergyLabels: ['gluten', 'dairy', 'egg', 'wheat', 'vegan'],
  },

  // Harvest Café Bistrot (r7)
  {
    id: 'm28',
    name: 'Hearty Lentil Soup',
    description:
      'Warming soup with red lentils, vegetables, and aromatic spices',
    price: 6.5,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r7',
    ingredientIds: ['i66', 'i21', 'i34', 'i40'], // Lentils, Carrot, Onion, Herbs
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm29',
    name: 'Harvest Bowl',
    description:
      'Seasonal roasted vegetables with quinoa, hummus, and tahini dressing',
    price: 13.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r7',
    ingredientIds: ['i51', 'i55', 'i21', 'i52'], // Quinoa, Chickpeas, Carrot, Tahini
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm30',
    name: 'Tempeh Sandwich',
    description:
      'Marinated tempeh with avocado, tomato, and sprouts on sourdough bread',
    price: 11.5,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r7',
    ingredientIds: ['i67', 'i4', 'i2', 'i39'], // Tempeh, Avocado, Tomato, Bread
    allergyLabels: ['dairy', 'egg', 'fish', 'shellfish', 'vegan'],
  },
  {
    id: 'm31',
    name: 'Berry Smoothie',
    description: 'Refreshing blend of mixed berries, banana, and plant milk',
    price: 5.9,
    categoryId: 'c4', // Beverages
    restaurantId: 'r7',
    ingredientIds: ['i47', 'i68', 'i54'], // Fresh fruit, Banana, Oat milk
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },

  // Veggiezz (r8)
  {
    id: 'm32',
    name: 'Beyond Burger',
    description:
      'Plant-based patty with vegan cheese, lettuce, tomato, and special sauce',
    price: 13.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r8',
    ingredientIds: ['i69', 'i70', 'i1', 'i2'], // Beyond meat, Vegan cheese, Lettuce, Tomato
    allergyLabels: ['dairy', 'egg', 'fish', 'shellfish', 'vegan'],
  },
  {
    id: 'm33',
    name: 'Buddha Bowl',
    description:
      'Colorful bowl with rice, roasted vegetables, tofu, and miso dressing',
    price: 12.5,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r8',
    ingredientIds: ['i10', 'i8', 'i7', 'i71'], // Rice, Bell Pepper, Tofu, Miso
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm34',
    name: 'Sweet Potato Fries',
    description: 'Crispy fries served with vegan aioli',
    price: 5.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r8',
    ingredientIds: ['i72', 'i73'], // Sweet potato, Vegan mayo
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm35',
    name: 'Green Detox Smoothie',
    description: 'Spinach, apple, cucumber, and ginger with a hint of lemon',
    price: 6.5,
    categoryId: 'c4', // Beverages
    restaurantId: 'r8',
    ingredientIds: ['i74', 'i75', 'i3', 'i15'], // Spinach, Apple, Cucumber, Lemon
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },

  // Swing Kitchen (r9)
  {
    id: 'm36',
    name: 'Vienna Burger',
    description:
      'Signature vegan patty with crispy onions, lettuce, and Swing sauce',
    price: 9.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r9',
    ingredientIds: ['i69', 'i34', 'i1', 'i73'], // Beyond meat, Onion, Lettuce, Vegan mayo
    allergyLabels: ['dairy', 'egg', 'fish', 'shellfish', 'vegan'],
  },
  {
    id: 'm37',
    name: 'Schnitzel Burger',
    description:
      'Crispy plant-based schnitzel with coleslaw and vegan tartar sauce',
    price: 10.5,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r9',
    ingredientIds: ['i44', 'i22', 'i73', 'i39'], // Tofu chunks, Cabbage, Vegan mayo, Bread
    allergyLabels: ['dairy', 'egg', 'fish', 'shellfish', 'vegan'],
  },
  {
    id: 'm38',
    name: 'Crispy Nuggets',
    description: 'Plant-based nuggets with choice of dipping sauce',
    price: 6.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r9',
    ingredientIds: ['i44', 'i42', 'i73'], // Tofu chunks, Gluten-free flour, Vegan mayo
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm39',
    name: 'Chocolate Shake',
    description:
      'Creamy vegan milkshake made with oat milk and organic chocolate',
    price: 5.5,
    categoryId: 'c4', // Beverages
    restaurantId: 'r9',
    ingredientIds: ['i58', 'i54', 'i59'], // Dark chocolate, Oat milk, Coconut sugar
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },

  // Loving Hut (r10)
  {
    id: 'm40',
    name: 'Pho Noodle Soup',
    description:
      'Vietnamese-style soup with rice noodles, tofu, and fresh herbs',
    price: 11.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r10',
    ingredientIds: ['i25', 'i7', 'i40', 'i76'], // Noodles, Tofu, Herbs, Bean sprouts
    allergyLabels: ['gluten', 'dairy', 'egg', 'fish', 'shellfish', 'vegan'],
  },
  {
    id: 'm41',
    name: 'Spring Rolls',
    description:
      'Fresh rice paper rolls with vegetables, tofu, and peanut dipping sauce',
    price: 7.5,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r10',
    ingredientIds: ['i10', 'i7', 'i21', 'i24'], // Rice, Tofu, Carrot, Peanut
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  {
    id: 'm42',
    name: 'Pad Thai',
    description:
      'Stir-fried rice noodles with tofu, vegetables, and crushed peanuts',
    price: 12.5,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r10',
    ingredientIds: ['i25', 'i7', 'i76', 'i24'], // Noodles, Tofu, Bean sprouts, Peanut
    allergyLabels: ['dairy', 'egg', 'fish', 'shellfish', 'vegan'],
  },
  {
    id: 'm43',
    name: 'Mango Sticky Rice',
    description: 'Sweet coconut rice with fresh mango and sesame seeds',
    price: 6.9,
    categoryId: 'c3', // Desserts
    restaurantId: 'r10',
    ingredientIds: ['i10', 'i56', 'i77', 'i78'], // Rice, Coconut milk, Mango, Sesame
    allergyLabels: [
      'gluten',
      'dairy',
      'egg',
      'soy',
      'peanut',
      'treenut',
      'fish',
      'shellfish',
      'wheat',
      'vegan',
    ],
  },
  // Granò – La Pizzeria 100% Glutenfree
  {
    id: 'm44',
    name: 'Coccoli Classici (for 2)',
    description:
      'Eine Spezialität aus Florenz, bestehend aus köstlichen frittierten Bällchen, begleitet von einer Auswahl an Mortadella, Salami und Käse',
    price: 26.0, // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r11',
    ingredientIds: ['i13', 'i11', 'i35', 'i42'], // Gluten-free flour, Cheese, Salami, Mortadella
    allergyLabels: ['gluten'],
  },

  // Appetizers
  {
    id: 'm45',
    name: 'Coccoli Vegetariani (for 2)',
    description:
      'Eine Spezialität aus Florenz, bestehend aus köstlichen frittierten Bällchen, begleitet von einer Auswahl an Gemüse und Käse',
    price: 24.0, // CHF
    categoryId: 'c1',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i11', 'i2', 'i8', 'i9'], // Gluten-free flour, Cheese, Tomato, Bell Pepper, Mushroom
    allergyLabels: ['gluten', 'vegetarian'],
  },
  {
    id: 'm46',
    name: 'Salad of the Day',
    description: 'Etwas zur Erfrischung des Mundes.',
    price: 7.5, // CHF
    categoryId: 'c1',
    restaurantId: 'r11',
    ingredientIds: ['i1', 'i2', 'i3', 'i43'], // Lettuce, Tomato, Cucumber, Vinegar
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan'],
  },

  // Main Courses
  {
    id: 'm47',
    name: 'Marinara',
    description:
      'Für kräftige Menschen. Mit Tomatensauce, Oregano und Knoblauch. Viel Knoblauch.',
    price: 20.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i6', 'i95'], // Gluten-free flour, Tomato, Garlic, Oregano
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan'],
  },
  {
    id: 'm48',
    name: 'Margherita',
    description: 'Der grosse Klassiker, was sonst?',
    price: 22.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i37', 'i5'], // Gluten-free flour, Tomato, Mozzarella, Basil
    allergyLabels: ['gluten', 'vegetarian'],
  },
  {
    id: 'm49',
    name: 'Napoli',
    description:
      'Der schmackhafte König der Pizzen. Mit einer milden Tomatensauce, frischem Mozzarella, bestreut mit Kapern und Sardellen aus dem offenen Meer.',
    price: 27.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i37', 'i92', 'i82'], // Gluten-free flour, Tomato, Mozzarella, Capers, Anchovies
    allergyLabels: ['gluten'],
  },
  {
    id: 'm50',
    name: 'Bufalina',
    description:
      'Die Königin aller Pizzen und ein grosser Klassiker. Mit Tomatensauce, frischem Mozzarella di Bufala direkt aus Neapel und einem Hauch Basilikum.',
    price: 27.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i37', 'i5'], // Gluten-free flour, Tomato, Mozzarella (buffalo), Basil
    allergyLabels: ['gluten', 'vegetarian'],
  },
  {
    id: 'm51',
    name: 'Vegetariana',
    description:
      'Eine schmackhafte vegetarische Variante mit frittierten Auberginen, Zucchini und Paprika.',
    price: 27.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i37', 'i79', 'i80', 'i8'], // Gluten-free flour, Tomato, Mozzarella, Eggplant, Zucchini, Bell Pepper
    allergyLabels: ['gluten', 'vegetarian'],
  },
  {
    id: 'm52',
    name: 'Rucola e Grana',
    description:
      'Eine klassische Margherita, die direkt nach dem Backen mit Rucola und Grana-Käse belegt wird.',
    price: 27.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i37', 'i81', 'i11'], // Gluten-free flour, Tomato, Mozzarella, Arugula, Cheese (grana)
    allergyLabels: ['gluten', 'vegetarian'],
  },
  {
    id: 'm53',
    name: 'Zucchine e Acciughe',
    description:
      'Eine wunderbare weisse Pizza mit einem Boden aus Bufala-Mozzarella, belegt mit Zucchini und Sardellen.',
    price: 29.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i37', 'i80', 'i82'], // Gluten-free flour, Mozzarella, Zucchini, Anchovies
    allergyLabels: ['gluten'],
  },
  {
    id: 'm54',
    name: 'Finocchiona',
    description:
      'Gourmet-Pizza mit einer köstlichen Salami mit Fenchelsamen garniert. (Je nach Verfügbarkeit)',
    price: 29.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i37', 'i88', 'i93'], // Gluten-free flour, Tomato, Mozzarella, Salami, Fennel seeds
    allergyLabels: ['gluten'],
  },
  {
    id: 'm55',
    name: 'Nduja',
    description:
      "Ein grossartiger zeitgenössischer Klassiker, bei dem rote Paprika auf die'Nduja trifft, eine würzige Wurst aus Kalabrien.",
    price: 31.0, // CHF
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i37', 'i90', 'i8'], // Gluten-free flour, Tomato, Mozzarella, Nduja, Bell Pepper
    allergyLabels: ['gluten'],
  },
  {
    id: 'm56',
    name: 'Salsiccia e Friarielli',
    description:
      'Diese klassische neapolitanische Pizza vereint den Geschmack von Wurst und den von Friarielli, einer wilden Brokkoliart. (Je nach Verfügbarkeit)',
    price: 31.0,
    categoryId: 'c2',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i2', 'i37', 'i89', 'i91'], // Gluten-free flour, Tomato, Mozzarella, Sausage, Friarielli
    allergyLabels: ['gluten'],
  },

  // Desserts
  {
    id: 'm57',
    name: 'Biancomangiare',
    description:
      'Dieses Dessert aus Sizilien wird mit Mandelmilch zubereitet und ist sehr erfrischend. Serviert mit Honig und Pistazien (vegane Variante erhältlich).',
    price: 8.0, // CHF
    categoryId: 'c3',
    restaurantId: 'r11',
    ingredientIds: ['i62', 'i94', 'i83'], // Almond milk, Honey, Pistachios
    allergyLabels: ['gluten', 'dairy', 'egg'], // Tree nuts present
  },
  {
    id: 'm58',
    name: 'Tiramisu',
    description:
      'Das wohl klassischste Dessert für eine Pizzeria kommt aus Veneto und braucht keine Präsentation.',
    price: 10.0, // CHF
    categoryId: 'c3',
    restaurantId: 'r11',
    ingredientIds: ['i86', 'i53', 'i85', 'i20', 'i26'], // Ladyfingers, Coffee, Mascarpone, Cream, Egg
    allergyLabels: ['gluten'], // Contains dairy and eggs
  },
  {
    id: 'm59',
    name: 'Cantucci e Vin Santo',
    description:
      'Eine klassische Süssigkeit aus der Toskana: harte Mandelkekse zum Eintauchen in einen süssen Wein.',
    price: 10.0, // CHF
    categoryId: 'c3',
    restaurantId: 'r11',
    ingredientIds: ['i42', 'i84', 'i26', 'i87'], // Gluten-free flour, Almonds, Egg, Wine
    allergyLabels: ['gluten'], // Contains tree nuts and eggs
  },
  // Rice Up! Asian Fusion
  {
    id: 'm60',
    name: 'Rice Up! Bowl',
    description:
      'A bowl featuring jasmine rice, chicken meatballs, broccoli, green curry, Asian pickles slaw, herb salad, and season topping.',
    price: 19.5, // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r12',
    ingredientIds: ['i97', 'i98', 'i99', 'i100', 'i101', 'i102', 'i103'], // Jasmine Rice, Chicken Meatballs, Broccoli, Green Curry, Asian Pickles Slaw, Herb Salad, Season Topping
    allergyLabels: ['gluten', 'dairy'], // Gluten and lactose free
  },
  {
    id: 'm61',
    name: 'Tofu Cashew Bowl',
    description:
      'A bowl featuring red rice, marinated tofu, seasonal vegetables, satay sauce, Asian pickles slaw, herb salad, and season topping.',
    price: 19.5, // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r12',
    ingredientIds: [
      'i104',
      'i105',
      'i106',
      'i107',
      'i101',
      'i102',
      'i103',
      'i60',
    ], // Red Rice, Marinated Tofu, Season Veggie, Satay Sauce, Asian Pickles Slaw, Herb Salad, Season Topping, Cashews
    allergyLabels: ['gluten', 'dairy', 'vegetarian'], // Gluten and lactose free, vegetarian
  },
  {
    id: 'm62',
    name: 'planted. Bowl',
    description:
      'A bowl featuring leaf salad, planted.chicken Teriyaki, sweet corn, tamarind sweet & sour sauce, Asian pickles slaw, herb salad, and crushed peanuts.',
    price: 19.5, // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r12',
    ingredientIds: ['i111', 'i108', 'i109', 'i110', 'i101', 'i102', 'i112'], // Leaf Salad, planted.chicken Teriyaki, Sweet Corn, Tamarind Sweet & Sour, Asian Pickles Slaw, Herb Salad, Crushed Peanuts
    allergyLabels: ['gluten', 'dairy', 'vegetarian'], // Gluten and lactose free, plant-based meat
  },
  {
    id: 'm63',
    name: 'Chicken Satay Bowl',
    description:
      'A bowl featuring chilled rice noodles, grilled chicken satay (CH), green beans, red curry, Asian pickles slaw, herb salad, and Thai chilies.',
    price: 19.5, // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r12',
    ingredientIds: ['i113', 'i114', 'i115', 'i116', 'i101', 'i102', 'i117'], // Chilled Rice Noodles, Grilled Chicken Satay, Green Beans, Red Curry, Asian Pickles Slaw, Herb Salad, Thai Chilies
    allergyLabels: ['gluten', 'dairy'], // Gluten and lactose free
  },
  // Zufreeden Glutenfree Café & Bakery
  {
    id: 'm64',
    name: 'Belgische Waffeln',
    description:
      'Belgische Waffeln. Erhältlich an Samstagen, bis sie weg sind!',
    price: '',
    categoryId: 'c3', // Desserts
    restaurantId: 'r13',
    ingredientIds: ['i26', 'i60', 'i20'], // Eggs, Cashews (representing nuts), Cream (representing milk)
    allergyLabels: ['gluten', 'egg'], // Gluten-free but contains eggs and milk (not lactose-free)
  },
  {
    id: 'm65',
    name: 'New York Cheesecake',
    description:
      'New York Cheesecake. Erhältlich an Samstagen, bis sie weg sind!',
    price: '',
    categoryId: 'c3', // Desserts
    restaurantId: 'r13',
    ingredientIds: ['i26', 'i20', 'i7'], // Eggs, Cream, Tofu (representing soy)
    allergyLabels: ['gluten', 'egg', 'soy'], // Gluten-free but contains eggs, soy, and milk (not lactose-free)
  },
  {
    id: 'm66',
    name: 'Sonntagszopf 400g',
    description:
      'Traditional Swiss braided bread. Erhältlich an Samstagen, bis sie weg sind!',
    price: '7.50', // CHF
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i26'], // Gluten-free flour, Eggs
    allergyLabels: ['gluten', 'egg'], // Gluten-free but contains eggs
  },

  // Sandwiches
  {
    id: 'm67',
    name: 'Schinken Käse Sandwich',
    description: 'Ham and cheese sandwich. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i121', 'i11', 'i78'], // Gluten-free flour (for bread), Ham, Cheese, Sesame
    allergyLabels: ['gluten', 'dairy', 'sesame'], // Gluten-free, lactose-free
  },
  {
    id: 'm68',
    name: 'Salami Sandwich',
    description: 'Salami sandwich. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i88'], // Gluten-free flour (for bread), Salami
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm69',
    name: 'Pesto Poulet Sandwich',
    description:
      'Chicken with pesto sandwich. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i5', 'i23', 'i78'], // Gluten-free flour (for bread), Basil (for pesto), Chicken, Sesame
    allergyLabels: ['gluten', 'dairy', 'sesame'], // Gluten-free, dairy-free
  },
  {
    id: 'm70',
    name: 'Curry Poulet Sandwich',
    description: 'Chicken curry sandwich. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i23', 'i27', 'i26', 'i78'], // Gluten-free flour (for bread), Chicken, Curry Paste, Eggs, Sesame
    allergyLabels: ['gluten', 'dairy', 'egg', 'sesame'], // Gluten-free, dairy-free
  },
  {
    id: 'm71',
    name: 'Schnitzel Sandwich',
    description:
      'Schnitzel sandwich with mustard. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i23', 'i26'], // Gluten-free flour (for bread & schnitzel coating), Chicken, Eggs
    allergyLabels: ['gluten', 'dairy', 'egg'], // Gluten-free, dairy-free
  },
  {
    id: 'm72',
    name: 'Gegrillter Käse Sandwich',
    description: 'Grilled cheese sandwich. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i11', 'i26', 'i78'], // Gluten-free flour (for bread), Cheese, Eggs, Sesame
    allergyLabels: ['gluten', 'egg', 'sesame', 'vegetarian'], // Gluten-free
  },
  {
    id: 'm73',
    name: 'Brie Sandwich',
    description: 'Brie cheese sandwich. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i11'], // Gluten-free flour (for bread), Cheese (brie)
    allergyLabels: ['gluten', 'dairy', 'vegetarian'], // Gluten-free, lactose-free
  },
  {
    id: 'm74',
    name: 'Eiersalat Sandwich',
    description: 'Egg salad sandwich. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i26'], // Gluten-free flour (for bread), Eggs
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegetarian'], // Gluten-free, dairy-free
  },
  {
    id: 'm75',
    name: 'Vegan Camembert Sandwich',
    description:
      'Vegan camembert sandwich. Die Sandwiches variieren täglich. Wir haben immer mindestens eine vegane Option im Angebot.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i70', 'i60'], // Gluten-free flour (for bread), Vegan cheese, Cashews
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan', 'treenut'], // Gluten-free, dairy-free, egg-free
  },
  {
    id: 'm76',
    name: 'Vegan Lachs Sandwich',
    description:
      'Vegan salmon sandwich. Die Sandwiches variieren täglich. Wir haben immer mindestens eine vegane Option im Angebot.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i21', 'i15'], // Gluten-free flour (for bread), Carrot, Lemon (typical vegan salmon ingredients)
    allergyLabels: ['gluten', 'dairy', 'egg', 'fish', 'vegan'], // Gluten-free, dairy-free, egg-free, fish-free
  },
  {
    id: 'm77',
    name: 'Vegan Curry Kichererbsen Sandwich',
    description:
      'Vegan curry chickpea sandwich. Die Sandwiches variieren täglich. Wir haben immer mindestens eine vegane Option im Angebot.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i55', 'i27'], // Gluten-free flour (for bread), Chickpeas, Curry Paste
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan'], // Gluten-free, dairy-free, egg-free
  },
  {
    id: 'm78',
    name: 'Pizza Brot Sandwich',
    description: 'Pizza bread sandwich. Die Sandwiches variieren täglich.',
    price: '',
    categoryId: 'c1', // Appetizers/Sandwiches
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i2', 'i6'], // Gluten-free flour (for bread), Tomato, Garlic
    allergyLabels: ['gluten', 'dairy', 'vegetarian'], // Gluten-free, lactose-free
  },

  // Quiches and Tarts
  {
    id: 'm79',
    name: 'Spinat, Zwiebeln & Käse Wähe',
    description: 'Spinach, onion and cheese quiche.',
    price: '',
    categoryId: 'c2', // Main Courses
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i74', 'i34', 'i11', 'i26'], // Gluten-free flour, Spinach, Onions, Cheese, Eggs
    allergyLabels: ['gluten', 'egg', 'vegetarian'], // Gluten-free
  },
  {
    id: 'm80',
    name: 'Chäschüechli',
    description: 'Traditional Swiss cheese quiche.',
    price: '',
    categoryId: 'c2', // Main Courses
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i11', 'i26'], // Gluten-free flour, Cheese, Eggs
    allergyLabels: ['gluten', 'egg'], // Gluten-free
  },
  {
    id: 'm81',
    name: 'Früchtwähe',
    description: 'Fruit tart with nuts.',
    price: '',
    categoryId: 'c3', // Desserts
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i26', 'i47', 'i60'], // Gluten-free flour, Eggs, Fresh fruit, Cashews (representing nuts)
    allergyLabels: ['gluten', 'egg', 'treenut'], // Gluten-free
  },

  // Cakes
  {
    id: 'm82',
    name: 'Schoggikuchen',
    description:
      'Chocolate cake with nuts. Unser tägliches Kuchenangebot kann zwischen folgenden Angeboten variieren!',
    price: '',
    categoryId: 'c3', // Desserts
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i26', 'i58', 'i60'], // Gluten-free flour, Eggs, Dark chocolate, Cashews (representing nuts)
    allergyLabels: ['gluten', 'egg', 'treenut'], // Gluten-free
  },
  {
    id: 'm83',
    name: 'Pfirsichkuchen',
    description:
      'Peach cake. Unser tägliches Kuchenangebot kann zwischen folgenden Angeboten variieren!',
    price: '',
    categoryId: 'c3', // Desserts
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i26', 'i47'], // Gluten-free flour, Eggs, Fresh fruit (representing peaches)
    allergyLabels: ['gluten', 'egg'], // Gluten-free
  },
  {
    id: 'm84',
    name: 'Zitronen Mohnkuchen',
    description:
      'Lemon poppy seed cake. Unser tägliches Kuchenangebot kann zwischen folgenden Angeboten variieren!',
    price: '',
    categoryId: 'c3', // Desserts
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i26', 'i15', 'i63'], // Gluten-free flour, Eggs, Lemon, Seeds (representing poppy seeds)
    allergyLabels: ['gluten', 'egg'], // Gluten-free
  },
  {
    id: 'm85',
    name: 'Marmorkuchen',
    description:
      'Marble cake. Unser tägliches Kuchenangebot kann zwischen folgenden Angeboten variieren!',
    price: '',
    categoryId: 'c3', // Desserts
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i26', 'i58'], // Gluten-free flour, Eggs, Dark chocolate
    allergyLabels: ['gluten', 'egg'], // Gluten-free
  },

  // Breakfast
  {
    id: 'm86',
    name: 'Birchermuesli',
    description: 'Traditional Swiss Bircher muesli.',
    price: '',
    categoryId: 'c1', // Breakfast (using Appetizers category)
    restaurantId: 'r13',
    ingredientIds: ['i51', 'i47', 'i63', 'i54'], // Quinoa (as base), Fresh fruit, Seeds, Oat milk
    allergyLabels: ['gluten', 'dairy'], // Gluten-free, lactose-free
  },

  // Bread
  {
    id: 'm87',
    name: 'Buchweizenbrötli',
    description: 'Vegan buckwheat roll.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i51'], // Gluten-free flour, Quinoa (representing buckwheat)
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan'], // Gluten-free, dairy-free, egg-free
  },
  {
    id: 'm88',
    name: 'Dunkles Körnerbrötli',
    description: 'Vegan dark grain roll with sesame.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i63', 'i78'], // Gluten-free flour, Seeds, Sesame
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan', 'sesame'], // Gluten-free, dairy-free, egg-free
  },
  {
    id: 'm89',
    name: 'Ciabatta',
    description: 'Vegan ciabatta bread.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i64'], // Gluten-free flour, Yeast
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan'], // Gluten-free, dairy-free, egg-free
  },
  {
    id: 'm90',
    name: 'Semmeli',
    description: 'Vegan bread roll.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i64'], // Gluten-free flour, Yeast
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan'], // Gluten-free, dairy-free, egg-free
  },
  {
    id: 'm91',
    name: 'Schoggibrötli',
    description: 'Chocolate roll containing soy.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i58', 'i7'], // Gluten-free flour, Dark chocolate, Tofu (representing soy)
    allergyLabels: ['gluten', 'soy'], // Gluten-free, contains soy
  },
  {
    id: 'm92',
    name: 'Baguette',
    description: 'Vegan baguette (white bread).',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i64'], // Gluten-free flour, Yeast
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan'], // Gluten-free, dairy-free, egg-free
  },
  {
    id: 'm93',
    name: 'Brezeli',
    description: 'Traditional pretzel.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i64'], // Gluten-free flour, Yeast
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm94',
    name: 'Butterbrezeli',
    description: 'Butter pretzel.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i17', 'i64'], // Gluten-free flour, Butter, Yeast
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm95',
    name: 'Zöpfli',
    description: 'Mini Swiss braided bread.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i26', 'i64'], // Gluten-free flour, Eggs, Yeast
    allergyLabels: ['gluten', 'egg'], // Gluten-free, contains eggs
  },
  {
    id: 'm96',
    name: 'Ruchbrot',
    description: 'Vegan rustic bread.',
    price: '',
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i64', 'i63'], // Gluten-free flour, Yeast, Seeds
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan'], // Gluten-free, dairy-free, egg-free
  },
  {
    id: 'm97',
    name: 'Körnerbrot 815g',
    description: 'Vegan grain bread with sesame. 815g.',
    price: '', // CHF
    categoryId: 'c1', // Appetizers/Bread
    restaurantId: 'r13',
    ingredientIds: ['i42', 'i78', 'i63', 'i64'], // Gluten-free flour, Sesame, Seeds, Yeast
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegan', 'sesame'], // Gluten-free, dairy-free, egg-free
  },
  // Risotteria Melotti Roma
  // STARTERS
  {
    id: 'm98',
    name: 'Arancini made with Rice served with Sauce',
    description:
      'Rice arancini (fried rice balls) served with sauce. 100% gluten free.',
    price: '8.00', // € (Euro)
    categoryId: 'c1', // Appetizers/Starters
    restaurantId: 'r14',
    ingredientIds: ['i155'], // Rice
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm99',
    name: 'Fried Rice dough with veronese Soppressa',
    description:
      'Fried rice dough served with veronese soppressa sausage. 100% gluten free.',
    price: '10.00', // €
    categoryId: 'c1', // Appetizers/Starters
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i157'], // Rice, Soppressa
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm100',
    name: 'Truffled "Nero Beppino" black Rice-flour Polenta Stick with Sauce',
    description:
      'Black rice-flour polenta stick with truffle and sauce. 100% gluten free.',
    price: '9.00', // €
    categoryId: 'c1', // Appetizers/Starters
    restaurantId: 'r14',
    ingredientIds: ['i156', 'i158', 'i159'], // Rice flour, Truffle, Polenta
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm101',
    name: 'Soft Rice-flour Polenta with Shrimps and Basil Oil',
    description:
      'Soft rice-flour polenta served with shrimps and basil oil. 100% gluten free.',
    price: '12.00', // €
    categoryId: 'c1', // Appetizers/Starters
    restaurantId: 'r14',
    ingredientIds: ['i156', 'i159', 'i14', 'i5'], // Rice flour, Polenta, Shrimp, Basil
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm102',
    name: 'Tris of toasted Rice-flour Bread with Cacio e Pepe, Amatriciana, Carbonara',
    description:
      'Three types of toasted rice-flour bread with different sauces: Cacio e Pepe, Amatriciana, and Carbonara. 100% gluten free.',
    price: '10.00', // €
    categoryId: 'c1', // Appetizers/Starters
    restaurantId: 'r14',
    ingredientIds: ['i156', 'i160', 'i161', 'i162', 'i169', 'i164'], // Rice flour, Cacio e Pepe sauce, Amatriciana sauce, Carbonara sauce, Pecorino, Pancetta
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm103',
    name: 'Cold Cuts of Salame, Pancetta, Prosciutto and Cheese from Verona served with Rice Polenta',
    description:
      'Selection of cold cuts including salami, pancetta, prosciutto, and cheese from Verona, served with rice polenta. 100% gluten free.',
    price: '16.00', // €
    categoryId: 'c1', // Appetizers/Starters
    restaurantId: 'r14',
    ingredientIds: ['i88', 'i164', 'i163', 'i159', 'i155', 'i171'], // Salami, Pancetta, Prosciutto, Polenta, Rice, Monte Veronese cheese
    allergyLabels: ['gluten'], // Gluten-free
  },

  // RISOTTOS
  {
    id: 'm104',
    name: "Risotto all'Isolana nel Pentolino",
    description:
      'Risotto with minced Pork and Veal, Cinnamon and Rosemary. 100% gluten free.',
    price: '16.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i165', 'i166', 'i167', 'i168'], // Rice, Pork, Veal, Cinnamon, Rosemary
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm105',
    name: 'Risotto with Pecorino cheese and black Pepper',
    description:
      'Risotto with Pecorino cheese and black pepper. 100% gluten free.',
    price: '13.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i169'], // Rice, Pecorino
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm106',
    name: 'Risotto with Valpolicella-Amarone wine',
    description: 'Risotto with Valpolicella-Amarone wine. 100% gluten free.',
    price: '17.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i170'], // Rice, Valpolicella-Amarone wine
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm107',
    name: 'Risotto with Bacon, Tomato sauce and Pecorino cheese',
    description:
      'Risotto with bacon, tomato sauce, and Pecorino cheese. 100% gluten free.',
    price: '14.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i29', 'i2', 'i169'], // Rice, Bacon, Tomato, Pecorino
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm108',
    name: 'Risotto with Rosemary and Monte Veronese cheese',
    description:
      'Risotto with rosemary and Monte Veronese cheese. 100% gluten free.',
    price: '15.50', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i168', 'i171'], // Rice, Rosemary, Monte Veronese cheese
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm109',
    name: 'Risotto with mixed Mushrooms',
    description: 'Risotto with mixed mushrooms. 100% gluten free.',
    price: '15.50', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i172', 'i9'], // Rice, Mushrooms, Mushroom (from existing ingredients)
    allergyLabels: ['gluten', 'vegetarian'], // Gluten-free, Vegetarian
  },
  {
    id: 'm110',
    name: 'Risotto with Asparagus',
    description: 'Risotto with asparagus. 100% gluten free.',
    price: '16.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i173'], // Rice, Asparagus
    allergyLabels: ['gluten', 'vegetarian'], // Gluten-free, Vegetarian
  },
  {
    id: 'm111',
    name: 'Risotto with Lamb Ragout and Pecorino cheese',
    description:
      'Risotto with lamb ragout and Pecorino cheese. 100% gluten free.',
    price: '18.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i174', 'i169'], // Rice, Lamb, Pecorino
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm112',
    name: 'Risotto with Duck Ragù, Orange and toasted Pine nuts',
    description:
      'Risotto with duck ragù, orange, and toasted pine nuts. 100% gluten free.',
    price: '17.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i175', 'i176', 'i177'], // Rice, Duck, Orange, Pine nuts
    allergyLabels: ['gluten', 'treenut'], // Gluten-free, contains tree nuts
  },
  {
    id: 'm113',
    name: 'Risotto with Leeks, Gorgonzola cheese and chopped Hazelnut',
    description:
      'Risotto with leeks, Gorgonzola cheese, and chopped hazelnut. 100% gluten free.',
    price: '16.50', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i178', 'i179', 'i180'], // Rice, Leeks, Gorgonzola, Hazelnut
    allergyLabels: ['gluten', 'treenut'], // Gluten-free, contains tree nuts
  },
  {
    id: 'm114',
    name: 'Lillà Rice Risotto with Vanilla Butter and Shrimps',
    description:
      'Lillà rice risotto with vanilla butter and shrimps. 100% gluten free.',
    price: '18.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i181', 'i182', 'i17', 'i14'], // Lillà Rice, Vanilla, Butter, Shrimp
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm115',
    name: 'Risotto with Saffron and Beef Stew',
    description: 'Risotto with saffron and beef stew. 100% gluten free.',
    price: '17.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i183', 'i184'], // Rice, Saffron, Beef
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm116',
    name: 'Risotto with Pecorino cheese, black Pepper and Bacon with Artichoke',
    description:
      'Risotto with Pecorino cheese, black pepper, bacon, and artichoke. 100% gluten free.',
    price: '16.50', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i169', 'i29', 'i185'], // Rice, Pecorino, Bacon, Artichoke
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm117',
    name: 'Risotto with Pistachio cream and Stracciatella cheese',
    description:
      'Risotto with pistachio cream and Stracciatella cheese. 100% gluten free.',
    price: '17.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i186', 'i187', 'i83'], // Rice, Pistachio cream, Stracciatella cheese, Pistachios
    allergyLabels: ['gluten', 'treenut'], // Gluten-free, contains tree nuts
  },
  {
    id: 'm118',
    name: 'Risotto with fresh Fish of the day',
    description: 'Risotto with fresh fish of the day. 100% gluten free.',
    price: '20.00', // €
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i188'], // Rice, Fresh fish
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm119',
    name: 'Risotto of the day',
    description:
      'Daily special risotto. 100% gluten free. Products marked with (*) refer to high-quality raw material frozen or deep-frozen.',
    price: '', // Price not specified
    categoryId: 'c2', // Main Courses
    restaurantId: 'r14',
    ingredientIds: ['i155'], // Rice
    allergyLabels: ['gluten'], // Gluten-free
  },

  // DESSERTS
  {
    id: 'm120',
    name: 'Rice and Coconut Truffles with Pistachio-flavoured Ricotta cheese cream + Glass of Recioto wine',
    description:
      'Rice and coconut truffles with pistachio-flavoured ricotta cheese cream, served with a glass of Recioto wine. 100% gluten free.',
    price: '10.00', // €
    categoryId: 'c3', // Desserts
    restaurantId: 'r14',
    ingredientIds: ['i155', 'i189', 'i83', 'i190', 'i191'], // Rice, Coconut, Pistachios, Ricotta, Recioto wine
    allergyLabels: ['gluten', 'treenut'], // Gluten-free, contains tree nuts
  },
  {
    id: 'm121',
    name: 'Rice-flour Sbrisolona with Zabaione cream',
    description:
      'Traditional sbrisolona crumble cake made with rice flour, served with zabaione cream. 100% gluten free.',
    price: '7.00', // €
    categoryId: 'c3', // Desserts
    restaurantId: 'r14',
    ingredientIds: ['i156', 'i192', 'i193', 'i26'], // Rice flour, Sbrisolona, Zabaione, Eggs
    allergyLabels: ['gluten', 'egg'], // Gluten-free, contains eggs
  },
  {
    id: 'm122',
    name: 'White Chocolate Rice-flour Brownie with Strawberries',
    description:
      'White chocolate brownie made with rice flour, served with strawberries. 100% gluten free.',
    price: '7.00', // €
    categoryId: 'c3', // Desserts
    restaurantId: 'r14',
    ingredientIds: ['i156', 'i194', 'i195'], // Rice flour, White chocolate, Strawberries
    allergyLabels: ['gluten'], // Gluten-free
  },
  {
    id: 'm123',
    name: 'Tiramisù with Melotti Plum Cake made with Rice flour',
    description:
      'Tiramisu made with Melotti plum cake, which is made with rice flour. 100% gluten free.',
    price: '7.00', // €
    categoryId: 'c3', // Desserts
    restaurantId: 'r14',
    ingredientIds: ['i156', 'i196', 'i20', 'i53', 'i26'], // Rice flour, Plum cake, Cream, Coffee, Eggs
    allergyLabels: ['gluten', 'egg'], // Gluten-free, contains eggs
  },
  {
    id: 'm124',
    name: 'MiniRice-flour Cake with Dark Chocolate - lactose free',
    description:
      'Mini cake made with rice flour and dark chocolate. 100% gluten free and lactose free.',
    price: '7.00', // €
    categoryId: 'c3', // Desserts
    restaurantId: 'r14',
    ingredientIds: ['i156', 'i58'], // Rice flour, Dark chocolate
    allergyLabels: ['gluten', 'dairy'], // Gluten-free, lactose-free
  },
  {
    id: 'm125',
    name: 'Cake made with Rice flour, Bananas and Honey',
    description:
      'Cake made with rice flour, bananas, and honey. 100% gluten free.',
    price: '7.00', // €
    categoryId: 'c3', // Desserts
    restaurantId: 'r14',
    ingredientIds: ['i156', 'i197', 'i94'], // Rice flour, Banana, Honey
    allergyLabels: ['gluten'], // Gluten-free
  },
  // BEETNUT
  // BREAKFAST CLASSICS
  {
    id: 'm153',
    name: 'Berry Porridge',
    description:
      'Oat flakes, almond milk, vanilla, cinnamon, wild berry compote, roasted almonds and poppy seeds, flower powder, beetroot.',
    price: '10.50', // CHF
    categoryId: 'c1', // Breakfast (using Appetizers category)
    restaurantId: 'r16',
    ingredientIds: [
      'i246',
      'i62',
      'i250',
      'i251',
      'i252',
      'i253',
      'i254',
      'i255',
      'i256',
    ],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm154',
    name: 'Apfel Tonka Porridge',
    description:
      'Oat flakes, almond milk, vanilla, cinnamon, apple-tonka chutney, hazelnut crunch, cinnamon.',
    price: '10.50', // CHF
    categoryId: 'c1', // Breakfast (using Appetizers category)
    restaurantId: 'r16',
    ingredientIds: ['i246', 'i62', 'i250', 'i251', 'i257', 'i258', 'i251'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm155',
    name: 'Classic Pancakes',
    description:
      'Vegan pancakes, almond butter, caramelized walnuts, apple-tonka compote, maple syrup.',
    price: '16.50', // CHF
    categoryId: 'c1', // Breakfast (using Appetizers category)
    restaurantId: 'r16',
    ingredientIds: ['i249', 'i250', 'i260', 'i261', 'i257', 'i49'], // flour, plant milk, almond butter, caramelized walnuts, apple-tonka compote, maple syrup
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm156',
    name: 'Choco Berry Pancakes',
    description:
      'Vegan pancakes, wild berry compote, chocolate sauce, hazelnut crunch, roasted poppy seeds.',
    price: '17.50', // CHF
    categoryId: 'c1', // Breakfast (using Appetizers category)
    restaurantId: 'r16',
    ingredientIds: ['i249', 'i250', 'i252', 'i241', 'i258', 'i254'], // flour, plant milk, wild berry compote, chocolate, hazelnut crunch, poppy seeds
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },

  // SALADS
  {
    id: 'm157',
    name: 'Soba Salat',
    description:
      'Soba noodles, spinach, cucumber, radish, marinated fennel, marinated cherries, edamame, chives, coriander, sesame, tamari vinaigrette.',
    price: '24.00', // CHF
    categoryId: 'c1', // Salads (using Appetizers category)
    restaurantId: 'r16',
    ingredientIds: [
      'i25',
      'i74',
      'i3',
      'i146',
      'i145',
      'i47',
      'i270',
      'i271',
      'i272',
      'i78',
      'i257',
      'i261',
      'i258',
    ], // noodles, spinach, cucumber, radish, fennel, fruit, edamame, chives, coriander, sesame, soy sauce, vinegar, olive oil
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm158',
    name: 'Power Green',
    description:
      'Kale, spinach, quinoa, cucumber, radish, sprouts, edamame, broccoli, avocado, pomegranate, sunflower seeds, garden cress.',
    price: '22.00', // CHF
    categoryId: 'c1', // Salads (using Appetizers category)
    restaurantId: 'r16',
    ingredientIds: [
      'i74',
      'i74',
      'i51',
      'i3',
      'i146',
      'i76',
      'i270',
      'i143',
      'i4',
      'i301',
      'i63',
      'i299',
      'i258',
      'i261',
      'i262',
    ], // kale, spinach, quinoa, cucumber, radish, sprouts, edamame, broccoli, avocado, pomegranate, seeds, garden cress, olive oil, vinegar, herbs
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm159',
    name: 'Beetnut Salat',
    description:
      'Spinach, beluga lentils, marinated fennel, radish, red cabbage, apple slices, caramelized walnuts.',
    price: '20.00', // CHF
    categoryId: 'c1', // Salads (using Appetizers category)
    restaurantId: 'r16',
    ingredientIds: [
      'i74',
      'i66',
      'i145',
      'i146',
      'i22',
      'i75',
      'i261',
      'i258',
      'i261',
      'i259',
    ], // spinach, lentils, fennel, radish, cabbage, apple, walnuts, olive oil, vinegar, salt
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },

  // BOWLS
  {
    id: 'm160',
    name: 'Buddha Style',
    description:
      'Rice mix, kale, broccoli, carrots, shiitake mushrooms, sprouts, marinated red cabbage, spring onions, cashews, sesame, teriyaki sauce.',
    price: '20.00', // CHF
    categoryId: 'c2', // Main Courses (Bowls)
    restaurantId: 'r16',
    ingredientIds: [
      'i155',
      'i74',
      'i143',
      'i255',
      'i256',
      'i22',
      'i280',
      'i60',
      'i78',
      'i257',
      'i49',
    ], // rice, kale, broccoli, carrots, shiitake, cabbage, spring onions, cashews, sesame, soy sauce, maple syrup
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm161',
    name: 'Delighted by Gandhi',
    description:
      'Rice mix, kale, sweet potato, fennel, zucchini, beluga lentils, green beans, marinated fennel, cashews.',
    price: '20.00', // CHF
    categoryId: 'c2', // Main Courses (Bowls)
    restaurantId: 'r16',
    ingredientIds: [
      'i155',
      'i74',
      'i72',
      'i145',
      'i80',
      'i66',
      'i115',
      'i145',
      'i60',
      'i257',
      'i258',
      'i262',
    ], // rice, kale, sweet potato, fennel, zucchini, lentils, green beans, fennel, cashews, soy sauce, olive oil, herbs
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm162',
    name: 'Beetnut Poké',
    description:
      'Cauliflower rice, seaweed, marinated beets, sprouts, pickled carrots, edamame, spring onions, avocado, sesame, togarashi.',
    price: '24.00', // CHF
    categoryId: 'c2', // Main Courses (Bowls)
    restaurantId: 'r16',
    ingredientIds: [
      'i22',
      'i278',
      'i256',
      'i76',
      'i255',
      'i270',
      'i280',
      'i4',
      'i78',
      'i281',
      'i257',
      'i258',
      'i261',
    ], // cauliflower, seaweed, beets, sprouts, carrots, edamame, spring onions, avocado, sesame, spices, soy sauce, olive oil, vinegar
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm163',
    name: 'By the Inkas',
    description:
      'Kale, quinoa, sweet potatoes, green peppers, red beans, tomatoes, onions, cilantro, avocado, corn tortilla chips, coriander.',
    price: '23.00', // CHF
    categoryId: 'c2', // Main Courses (Bowls)
    restaurantId: 'r16',
    ingredientIds: [
      'i74',
      'i51',
      'i72',
      'i8',
      'i294',
      'i2',
      'i34',
      'i272',
      'i4',
      'i254',
      'i272',
    ], // kale, quinoa, sweet potatoes, peppers, beans, tomatoes, onions, cilantro, avocado, corn chips, coriander
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm164',
    name: 'Rise & Shine Bowl',
    description:
      'Kale, quinoa, beluga lentils, marinated beets, broccoli with togarashi seasoning, hemp seeds, avocado, garden cress.',
    price: '20.00', // CHF
    categoryId: 'c2', // Main Courses (Bowls)
    restaurantId: 'r16',
    ingredientIds: [
      'i74',
      'i51',
      'i66',
      'i256',
      'i143',
      'i281',
      'i63',
      'i4',
      'i299',
      'i258',
      'i262',
    ], // kale, quinoa, lentils, beets, broccoli, spices, seeds, avocado, garden cress, olive oil, herbs
    allergyLabels: ['dairy', 'vegan'],
  },

  // SUPPEN (SOUPS)
  {
    id: 'm165',
    name: 'Getrüffelte Blumenkohl Pastinaken Suppe + Salat',
    description:
      'Cauliflower, parsnip, pomegranate seeds, hemp seeds, cress - 330ml.',
    price: '15.00', // CHF
    categoryId: 'c2', // Main Courses (Soups)
    restaurantId: 'r16',
    ingredientIds: [
      'i22',
      'i300',
      'i301',
      'i63',
      'i299',
      'i258',
      'i259',
      'i260',
    ], // cauliflower, parsnip, pomegranate, hemp seeds, cress, olive oil, salt, pepper
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm166',
    name: 'Tomaten Dal Suppe + Salat',
    description: 'Lentils, tomatoes, onions, coconut milk.',
    price: '15.00', // CHF
    categoryId: 'c2', // Main Courses (Soups)
    restaurantId: 'r16',
    ingredientIds: ['i66', 'i2', 'i34', 'i56', 'i259', 'i260', 'i262'], // lentils, tomatoes, onions, coconut milk, salt, pepper, herbs
    allergyLabels: ['dairy', 'vegan'],
  },

  // TOASTS
  {
    id: 'm167',
    name: 'Choco Banana',
    description:
      '2 slices toasted spelt bread, chocolate-nut spread, banana, chocolate sauce, cacao nibs.',
    price: '12.50', // CHF
    categoryId: 'c1', // Appetizers (Toasts)
    restaurantId: 'r16',
    ingredientIds: ['i39', 'i306', 'i68', 'i241', 'i307'], // bread, chocolate-nut spread, banana, chocolate, cacao nibs
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm168',
    name: 'Smashed Avocado-Kale',
    description:
      '2 slices toasted spelt bread, avocado, kale, tomatoes, chives, garden cress.',
    price: '15.50', // CHF
    categoryId: 'c1', // Appetizers (Toasts)
    restaurantId: 'r16',
    ingredientIds: ['i39', 'i4', 'i74', 'i2', 'i271', 'i299'], // bread, avocado, kale, tomatoes, chives, garden cress
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm169',
    name: 'Fake Tuna',
    description:
      '2 slices toasted spelt bread, chickpeas, seaweed, cucumber, radish, capers, zaatar, hemp seeds, dill.',
    price: '15.50', // CHF
    categoryId: 'c1', // Appetizers (Toasts)
    restaurantId: 'r16',
    ingredientIds: [
      'i39',
      'i55',
      'i278',
      'i3',
      'i146',
      'i152',
      'i313',
      'i63',
      'i314',
    ], // bread, chickpeas, seaweed, cucumber, radish, capers, zaatar, hemp seeds, dill
    allergyLabels: ['dairy', 'fish', 'vegan'],
  },
  {
    id: 'm170',
    name: 'Apple Almond',
    description:
      '2 slices toasted spelt bread, almond butter, apple slices, cinnamon, coconut flakes, beetroot.',
    price: '12.50', // CHF
    categoryId: 'c1', // Appetizers (Toasts)
    restaurantId: 'r16',
    ingredientIds: ['i39', 'i260', 'i75', 'i251', 'i189', 'i256'], // bread, almond butter, apple, cinnamon, coconut, beetroot
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },

  // SMOOTHIES
  {
    id: 'm171',
    name: 'Maca Muscolo',
    description:
      'Banana, cinnamon, vanilla, peanut butter, maple syrup, flaxseed, cacao nibs, oat flakes, maca, almond milk - 400 ml.',
    price: '13.00', // CHF
    categoryId: 'c4', // Beverages (Smoothies)
    restaurantId: 'r16',
    ingredientIds: [
      'i68',
      'i251',
      'i250',
      'i24',
      'i49',
      'i318',
      'i307',
      'i246',
      'i316',
      'i62',
    ], // banana, cinnamon, vanilla, peanut butter, maple syrup, flaxseed, cacao nibs, oats, maca, almond milk
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },
  {
    id: 'm172',
    name: 'Alerta Verda',
    description:
      'Apple, pineapple, ginger, cucumber, lemon juice, wheatgrass, spinach, kale, coconut water - 400ml.',
    price: '14.00', // CHF
    categoryId: 'c4', // Beverages (Smoothies)
    restaurantId: 'r16',
    ingredientIds: [
      'i75',
      'i323',
      'i326',
      'i3',
      'i15',
      'i328',
      'i74',
      'i74',
      'i329',
    ], // apple, pineapple, ginger, cucumber, lemon, wheatgrass, spinach, kale, coconut water
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm173',
    name: 'Açai Kakao',
    description:
      'Banana, blueberries, açai, dates, chia seeds, raw cocoa, almond milk - 400ml.',
    price: '14.00', // CHF
    categoryId: 'c4', // Beverages (Smoothies)
    restaurantId: 'r16',
    ingredientIds: ['i68', 'i320', 'i319', 'i247', 'i331', 'i248', 'i62'], // banana, blueberries, açai, dates, chia seeds, cocoa powder, almond milk
    allergyLabels: ['dairy', 'vegan'],
  },

  // SMOOTHIE BOWLS
  {
    id: 'm174',
    name: 'Klassika Açai Bowl',
    description:
      'Açai, blueberries, almond milk or apple juice, pomegranate, banana, coconut, granola, pineapple, agave.',
    price: '17.00', // CHF
    categoryId: 'c3', // Desserts (Smoothie Bowls)
    restaurantId: 'r16',
    ingredientIds: [
      'i319',
      'i320',
      'i62',
      'i321',
      'i301',
      'i68',
      'i189',
      'i322',
      'i323',
      'i324',
    ], // açai, blueberries, almond milk, apple juice, pomegranate, banana, coconut, granola, pineapple, agave
    allergyLabels: ['dairy', 'vegan'],
  },

  // TREATS
  {
    id: 'm175',
    name: 'Noshball / Löwenkuss',
    description: 'Energy ball made with dates, nuts, and cocoa.',
    price: '4.50', // CHF
    categoryId: 'c3', // Desserts (Treats)
    restaurantId: 'r16',
    ingredientIds: ['i246', 'i247', 'i248', 'i253'], // oats, dates, cocoa powder, nuts
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm176',
    name: 'Brownie',
    description:
      'Vegan brownie made with cocoa powder, flour, and plant-based ingredients.',
    price: '6.00', // CHF
    categoryId: 'c3', // Desserts (Treats)
    restaurantId: 'r16',
    ingredientIds: ['i248', 'i249', 'i250', 'i49'], // cocoa powder, flour, plant milk, maple syrup
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm177',
    name: 'Raw Passionfruit Cheesecake',
    description:
      'Raw vegan cheesecake made with cashew cream and passionfruit.',
    price: '6.50', // CHF
    categoryId: 'c3', // Desserts (Treats)
    restaurantId: 'r16',
    ingredientIds: ['i251', 'i252', 'i247', 'i60'], // passionfruit, cashew cream, dates, cashews
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm178',
    name: 'Bananenbrot',
    description: 'Banana bread made with ripe bananas, flour, and cinnamon.',
    price: '6.50', // CHF
    categoryId: 'c3', // Desserts (Treats)
    restaurantId: 'r16',
    ingredientIds: ['i68', 'i249', 'i251', 'i49'], // banana, flour, cinnamon, maple syrup
    allergyLabels: ['dairy', 'vegan'],
  },

  // BRUNCH SPECIAL
  {
    id: 'm179',
    name: 'Bagel with Vegan Scramble',
    description:
      'Bagel, spinach, tofu, nutritional yeast, spices, coconut flakes, garden cress with side salad.',
    price: '19.50', // CHF
    categoryId: 'c1', // Breakfast (Brunch Special)
    restaurantId: 'r16',
    ingredientIds: [
      'i39',
      'i74',
      'i7',
      'i253',
      'i262',
      'i189',
      'i299',
      'i1',
      'i2',
    ], // bagel, spinach, tofu, nutritional yeast, herbs, coconut, garden cress, lettuce, tomato
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm180',
    name: 'Huevos Rancheros',
    description:
      'Beans, sweet potato, fried egg, avocado, kale, tomatoes, onions, chili, chives, garden cress, corn tortilla chips.',
    price: '22.00', // CHF
    categoryId: 'c1', // Breakfast (Brunch Special)
    restaurantId: 'r16',
    ingredientIds: [
      'i55',
      'i72',
      'i26',
      'i4',
      'i74',
      'i2',
      'i34',
      'i151',
      'i271',
      'i299',
      'i254',
    ], // beans, sweet potato, egg, avocado, kale, tomatoes, onions, chili, chives, garden cress, corn chips
    allergyLabels: ['dairy', 'vegetarian'],
  },
  // Menu items for restaurant r17 (Dihei)
  // BREAKFAST & BRUNCH
  {
    id: 'm181',
    name: 'Birchermüesli',
    description:
      'With apples, nuts, raspberries, homemade bread and whipped cream.',
    price: '8.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i246', 'i75', 'i253', 'i303', 'i39', 'i20'], // oats, apples, nuts, raspberry compote, bread, cream
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm182',
    name: 'Porridge',
    description:
      'With raspberry compote, sour cream, nuts and honey. Gluten-free, but may contain traces.',
    price: '10.00', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i246', 'i303', 'i263', 'i253', 'i94'], // oats, raspberry compote, sour cream, nuts, honey
    allergyLabels: ['vegetarian', 'gluten'],
  },
  {
    id: 'm183',
    name: 'Porridge vegan',
    description:
      'With raspberry compote, nuts and maple syrup. Gluten-free, but may contain traces.',
    price: '10.00', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i246', 'i303', 'i253', 'i49'], // oats, raspberry compote, nuts, maple syrup
    allergyLabels: ['dairy', 'vegan', 'gluten'],
  },
  {
    id: 'm184',
    name: 'Granola vegan',
    description:
      'Vegan yogurt, gluten-free granola with nuts, maple syrup and dried fruits. Gluten-free, but may contain traces.',
    price: '15.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i301', 'i302', 'i253', 'i49', 'i300'], // vegan yogurt, gluten-free granola, nuts, maple syrup, dried fruits
    allergyLabels: ['dairy', 'vegan', 'gluten', 'treenut'],
  },
  {
    id: 'm185',
    name: "Z'Morge Dihei",
    description:
      'Croissant, 1 piece of homemade bread, butter, homemade jam, mini yogurt (honey on request). Available vegan/gluten-free on request.',
    price: '9.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i264', 'i39', 'i17', 'i265', 'i266', 'i94'], // croissant, bread, butter, jam, yogurt, honey
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm186',
    name: "Fitness Z'Morge",
    description:
      '2 pieces of homemade bread, vegetable spread, dried fruits, nuts, homemade jam, margarine, 2dl freshly squeezed orange juice. Vegan, gluten-free on request.',
    price: '19.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i39', 'i268', 'i300', 'i253', 'i265', 'i299', 'i267'], // bread, vegetable spread, dried fruits, nuts, jam, margarine, orange juice
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm187',
    name: 'Vegie Omelette',
    description:
      'With spinach, mushrooms, onion jam and cheese, served with salad and homemade bread.',
    price: '19.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i26', 'i74', 'i269', 'i270', 'i11', 'i1', 'i39'], // eggs, spinach, mushrooms, onion jam, cheese, lettuce, bread
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm188',
    name: 'Speck Omelette',
    description:
      'With bacon, spinach, onion jam and cheese, served with salad and homemade bread.',
    price: '21.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i26', 'i29', 'i74', 'i270', 'i11', 'i1', 'i39'], // eggs, bacon, spinach, onion jam, cheese, lettuce, bread
    allergyLabels: [],
  },
  {
    id: 'm189',
    name: 'Dihei Kater',
    description:
      'Large portion of potato wedges topped with cheese, fried egg, bacon, a small sausage and herb cream.',
    price: '25.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i271', 'i11', 'i282', 'i29', 'i272', 'i273'], // potato wedges, cheese, fried egg, bacon, sausage, herb cream
    allergyLabels: [],
  },
  {
    id: 'm190',
    name: 'Pancakes with Cheesecake Cream',
    description:
      'Pancakes with cheesecake cream, raspberry compote and sablé crumble.',
    price: '24.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i249', 'i26', 'i274', 'i303', 'i275'], // flour, eggs, cheesecake cream, raspberry compote, sablé crumble
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm191',
    name: 'Pancakes with Bacon',
    description: 'Pancakes with bacon, ricotta and maple syrup.',
    price: '25.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i249', 'i26', 'i29', 'i245', 'i49'], // flour, eggs, bacon, ricotta, maple syrup
    allergyLabels: [],
  },
  {
    id: 'm192',
    name: 'Pancakes with Smoked Salmon',
    description:
      'Pancakes with smoked salmon, avocado mash, herb cream, cress and a little salad.',
    price: '26.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i249', 'i26', 'i276', 'i4', 'i273', 'i299', 'i1'], // flour, eggs, smoked salmon, avocado, herb cream, cress, lettuce
    allergyLabels: [],
  },
  {
    id: 'm193',
    name: 'Nutella French Toast',
    description:
      'French toast with Nutella, cinnamon sugar and grilled banana.',
    price: '24.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r17',
    ingredientIds: ['i39', 'i26', 'i277', 'i278', 'i68'], // bread, eggs, Nutella, cinnamon sugar, banana
    allergyLabels: ['vegetarian', 'treenut'],
  },

  // MAIN DISHES (Z'ÄSSE)
  {
    id: 'm194',
    name: 'Bagel with Pulled Chicken',
    description:
      'Bagel with pulled chicken, BBQ sauce, avocado, bacon, parmesan and cress, served with salad and potato wedges. Option: on gluten-free toast instead of bagel.',
    price: '26.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r17',
    ingredientIds: [
      'i284',
      'i285',
      'i286',
      'i4',
      'i29',
      'i287',
      'i299',
      'i1',
      'i271',
    ], // bagel, pulled chicken, BBQ sauce, avocado, bacon, parmesan, cress, lettuce, potato wedges
    allergyLabels: [],
  },
  {
    id: 'm195',
    name: 'Bagel with Smoked Salmon',
    description:
      'Bagel with smoked salmon, sour cream-honey-dill-mustard sauce and cress, served with salad and scrambled eggs or potato wedges. Option: on gluten-free toast instead of bagel.',
    price: '26.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r17',
    ingredientIds: [
      'i284',
      'i276',
      'i263',
      'i94',
      'i314',
      'i127',
      'i299',
      'i1',
      'i281',
      'i271',
    ], // bagel, smoked salmon, sour cream, honey, dill, mustard, cress, lettuce, scrambled eggs, potato wedges
    allergyLabels: [],
  },
  {
    id: 'm196',
    name: 'Bagel with Grilled Vegetables',
    description:
      'Bagel with grilled vegetables, vegetable spread, confit tomatoes, pine nuts and onion jam, served with potato wedges and salad. Option: on gluten-free toast instead of bagel.',
    price: '23.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r17',
    ingredientIds: [
      'i284',
      'i288',
      'i268',
      'i289',
      'i290',
      'i270',
      'i271',
      'i1',
    ], // bagel, grilled vegetables, vegetable spread, confit tomatoes, pine nuts, onion jam, potato wedges, lettuce
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm197',
    name: 'Dihei Brunch Brioche',
    description:
      'Bacon, avocado mash, confit tomatoes, fried egg and cress with brioche burger bun, served with salad and potato wedges.',
    price: '26.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r17',
    ingredientIds: ['i29', 'i4', 'i289', 'i282', 'i299', 'i293', 'i1', 'i271'], // bacon, avocado, confit tomatoes, fried egg, cress, brioche, lettuce, potato wedges
    allergyLabels: [],
  },
  {
    id: 'm198',
    name: 'Grilled Cheese Sandwich',
    description:
      'Brioche toast filled with grilled cheese, ham, onion jam and pickles, topped with a fried egg, served with potato wedges and salad.',
    price: '26.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r17',
    ingredientIds: [
      'i293',
      'i11',
      'i279',
      'i270',
      'i294',
      'i282',
      'i271',
      'i1',
    ], // brioche, cheese, ham, onion jam, pickles, fried egg, potato wedges, lettuce
    allergyLabels: [],
  },
  {
    id: 'm199',
    name: 'Hausgemachte Quiche',
    description:
      'Homemade quiche, changes daily, see board, served with salad.',
    price: '21.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r17',
    ingredientIds: ['i295', 'i1'], // quiche, lettuce
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm200',
    name: 'Grosser Gemischter Salat',
    description: 'Large mixed salad with seasonal vegetables.',
    price: '19.50', // CHF
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r17',
    ingredientIds: ['i1', 'i2', 'i3'], // lettuce, tomato, cucumber and other seasonal vegetables
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm201',
    name: 'Tagessuppe',
    description:
      'Soup of the day (vegan), served with salad and homemade bread.',
    price: '15.00', // CHF
    categoryId: 'c2', // Main Courses/Soup
    restaurantId: 'r17',
    ingredientIds: ['i1', 'i39'], // (soup ingredients vary), lettuce, bread
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm202',
    name: 'Wedges',
    description: 'Vegan potato wedges, small or large portion.',
    price: '7.00/12.00', // CHF
    categoryId: 'c1', // Appetizers/Sides
    restaurantId: 'r17',
    ingredientIds: ['i271'], // potato wedges
    allergyLabels: ['dairy', 'vegan'],
  },

  // DESSERTS AND PASTRIES
  {
    id: 'm203',
    name: 'Buttergipfeli',
    description: 'Butter croissant.',
    price: '2.50', // CHF
    categoryId: 'c1', // Appetizers/Pastries
    restaurantId: 'r17',
    ingredientIds: ['i264', 'i17'], // croissant, butter
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm204',
    name: 'Hausgemachte Brownies',
    description: 'Homemade brownies.',
    price: '5.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r17',
    ingredientIds: ['i249', 'i26', 'i248', 'i17'], // flour, eggs, cocoa powder, butter
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm205',
    name: 'Diverse Hausgemachte Kuchen',
    description:
      'Various homemade cakes (also vegan and gluten-free options), with option of whipped cream (+1.00).',
    price: '7.00 - 8.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r17',
    ingredientIds: ['i249', 'i26', 'i17'], // flour, eggs, butter (ingredients vary)
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm206',
    name: 'DI-HIGH TEA: Scones',
    description:
      'Two fresh-baked scones with homemade lemon curd, jam and tea kettle of your choice. Available daily from 15:00 to 17:00 (takes about 25 minutes).',
    price: '15.50', // CHF
    categoryId: 'c3', // Desserts/High Tea
    restaurantId: 'r17',
    ingredientIds: ['i297', 'i298', 'i265'], // scone, lemon curd, jam
    allergyLabels: ['vegetarian'],
  },
  // Menu items for restaurant r18
  // SALAD BOWLS
  {
    id: 'm207',
    name: 'Belugan Date',
    description:
      'Mixed leaf salad, arugula, lentils, feta, cherry tomatoes, pomegranate, avocado, roasted cashews, balsamic dressing, date syrup.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i306',
      'i81',
      'i66',
      'i287',
      'i2',
      'i301',
      'i4',
      'i60',
      'i38',
      'i341',
    ],
    allergyLabels: ['vegetarian', 'treenut'],
  },
  {
    id: 'm208',
    name: 'Carrot Lox Poké',
    description:
      'Warm quinoa, warm lentils, edamame, cucumber, mango, Rüebli salmon from Wild Foods, avocado, roasted cashews, spring onions, lime zest, French dressing.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i51',
      'i66',
      'i270',
      'i3',
      'i77',
      'i310',
      'i4',
      'i60',
      'i280',
      'i346',
      'i311',
    ],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm209',
    name: '#FOODPORN',
    description:
      'Whole grain flaxseed dough, beet-cashew sauce, sauteed mushrooms, zucchini, red onions, pomegranate, arugula, mixed seeds.',
    price: '20.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: ['i329', 'i330', 'i9', 'i80', 'i34', 'i301', 'i81', 'i63'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm210',
    name: "Green 'n Mango",
    description:
      'Mixed leaf salad, kale, chicken, cottage cheese, cucumber, cherry tomatoes, mango, avocado, roasted cashews, sweet mustard dressing.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i306',
      'i307',
      'i23',
      'i308',
      'i3',
      'i2',
      'i77',
      'i4',
      'i60',
      'i309',
    ],
    allergyLabels: ['treenut'],
  },
  {
    id: 'm211',
    name: 'Venice Beach',
    description:
      'Kale, spinach, parmesan, egg, raw ham, cherry tomatoes, avocado, corn, red onions, walnuts, sweet mustard dressing.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i307',
      'i74',
      'i287',
      'i26',
      'i322',
      'i2',
      'i4',
      'i333',
      'i34',
      'i153',
      'i309',
    ],
    allergyLabels: ['treenut'],
  },
  {
    id: 'm212',
    name: 'Capri Chicken',
    description:
      'Spinach, mixed leaf salad, chicken, cherry tomatoes, cucumber, buffalo mozzarella, edamame, red onions, basil, mixed seeds, lemon dressing.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i74',
      'i306',
      'i23',
      'i2',
      'i3',
      'i316',
      'i270',
      'i34',
      'i5',
      'i63',
      'i15',
    ],
    allergyLabels: [],
  },
  {
    id: 'm213',
    name: 'Breeze Niçoise',
    description:
      'Mixed leaf salad, arugula, cucumber, cherry tomatoes, olives, MSC tuna, edamame, egg, red onions, French dressing.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i306',
      'i81',
      'i3',
      'i2',
      'i153',
      'i328',
      'i270',
      'i26',
      'i34',
      'i311',
    ],
    allergyLabels: [],
  },
  {
    id: 'm214',
    name: 'Adam & Eve',
    description:
      'Kale, spinach, feta, quinoa, avocado, apple, broccoli, cucumber, pomegranate, mixed seeds, balsamic dressing.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i307',
      'i74',
      'i287',
      'i51',
      'i4',
      'i75',
      'i143',
      'i3',
      'i301',
      'i63',
      'i38',
    ],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm215',
    name: 'Taste of Tulum',
    description:
      'Kale, spinach, corn, quinoa, black beans, feta, cherry tomatoes, cucumber, red onions, avocado, coriander, lime zest, lemon dressing.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i307',
      'i74',
      'i333',
      'i51',
      'i312',
      'i287',
      'i2',
      'i3',
      'i34',
      'i4',
      'i338',
      'i346',
      'i15',
    ],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm216',
    name: 'BBQ Salad',
    description:
      'Mixed leaf salad, corn, black beans, roasted bell peppers, cherry tomatoes, red onions, plant-based pulled BBQ, roasted cashews, BBQ sauce, sweet mustard dressing.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i306',
      'i333',
      'i312',
      'i313',
      'i2',
      'i34',
      'i314',
      'i60',
      'i286',
      'i309',
    ],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm217',
    name: 'The Oriental',
    description:
      "Warm quinoa, warm lentils, double cherry tomatoes, roasted bell peppers, cucumber, red onions, feta, pomegranate, mint, basil, za'atar, lemon dressing.",
    price: '23.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r18',
    ingredientIds: [
      'i51',
      'i66',
      'i2',
      'i313',
      'i3',
      'i34',
      'i287',
      'i301',
      'i335',
      'i5',
      'i336',
      'i15',
    ],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm218',
    name: 'Side Salad',
    description:
      'Mixed leaf salad, spinach, cherry tomatoes, cucumber, mixed seeds, balsamic dressing.',
    price: '8.00', // CHF (assumed)
    categoryId: 'c1', // Appetizers/Side Salads
    restaurantId: 'r18',
    ingredientIds: ['i306', 'i74', 'i2', 'i3', 'i63', 'i38'],
    allergyLabels: ['dairy', 'vegan'],
  },

  // PIZZAS
  {
    id: 'm219',
    name: 'Smokey Devil',
    description:
      'Multigrain dough, tomato sauce, buffalo mozzarella, smoked salami, red onions, Pimientos del Padron, smoked paprika.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i2', 'i316', 'i317', 'i34', 'i318', 'i319'],
    allergyLabels: [],
  },
  {
    id: 'm220',
    name: 'Salami',
    description:
      'Multigrain dough, tomato sauce, Flor di Latte, smoked salami.',
    price: '21.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i2', 'i320', 'i317'],
    allergyLabels: [],
  },
  {
    id: 'm221',
    name: 'Aloha',
    description:
      'Multigrain dough, tomato sauce, Flor di Latte, Alpine bacon, marinated pineapple, spring onions, pink pepper.',
    price: '22.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i2', 'i320', 'i321', 'i326', 'i280', 'i327'],
    allergyLabels: [],
  },
  {
    id: 'm222',
    name: 'Artemis Chicken',
    description:
      'Multigrain dough, plant-based crème fraîche from New Roots, feta, spinach, kale, chicken, red onions, pomegranate, lime zest.',
    price: '24.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: [
      'i315',
      'i324',
      'i325',
      'i287',
      'i74',
      'i307',
      'i23',
      'i34',
      'i301',
      'i346',
    ],
    allergyLabels: [],
  },
  {
    id: 'm223',
    name: 'The Tuna',
    description:
      'Multigrain dough, tomato sauce, Flor di Latte, MSC tuna, red onions, capers, arugula.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i2', 'i320', 'i328', 'i34', 'i152', 'i81'],
    allergyLabels: [],
  },
  {
    id: 'm224',
    name: 'Smoked Carrot Lox',
    description:
      'Multigrain dough, plant-based crème fraîche from New Roots, red onions, Rüebli salmon from Wild Foods, capers, dill, lime zest.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: [
      'i315',
      'i324',
      'i325',
      'i34',
      'i310',
      'i152',
      'i314',
      'i346',
    ],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm225',
    name: 'White Mushroom',
    description:
      'Multigrain dough, plant-based crème fraîche from New Roots, red onions, sauteed mushrooms, chanterelles, thyme.',
    price: '24.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i324', 'i325', 'i34', 'i9', 'i323'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm226',
    name: 'Planted BBQ',
    description:
      'Multigrain dough, tomato sauce, Flor di Latte, plant-based pulled BBQ, Pimientos del Padron, corn, red onions, smoked paprika, BBQ sauce.',
    price: '24.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: [
      'i315',
      'i2',
      'i320',
      'i314',
      'i318',
      'i333',
      'i34',
      'i319',
      'i286',
    ],
    allergyLabels: [],
  },
  {
    id: 'm227',
    name: 'Miss Caprese',
    description:
      'Multigrain dough, parmesan, marinated cherry tomatoes, buffalo mozzarella, basil, balsamic cream.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i287', 'i2', 'i316', 'i5', 'i347'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm228',
    name: 'Veggie Garden',
    description:
      'Low carb dough with broccoli, tomato sauce, roasted eggplant, zucchini, cherry tomatoes, roasted bell peppers, corn, olive oil, basil.',
    price: '23.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: [
      'i331',
      'i143',
      'i2',
      'i332',
      'i80',
      'i313',
      'i333',
      'i334',
      'i5',
    ],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm229',
    name: 'Margherita',
    description: 'Multigrain dough, tomato sauce, Flor di Latte, basil.',
    price: '19.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i2', 'i320', 'i5'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm230',
    name: 'Mamarita',
    description: 'Multigrain dough, tomato sauce, buffalo mozzarella, basil.',
    price: '21.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i2', 'i316', 'i5'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm231',
    name: 'Damn Ham',
    description:
      'Multigrain dough, tomato sauce, Flor di Latte, sauteed mushrooms, Alpine bacon, raw ham, thyme.',
    price: '24.00', // CHF (assumed)
    categoryId: 'c2', // Main Courses/Pizzas
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i2', 'i320', 'i9', 'i321', 'i322', 'i323'],
    allergyLabels: [],
  },

  // NIBBLES
  {
    id: 'm232',
    name: 'Apéro Plättli mit Käse',
    description:
      'Feta, parmesan, avocado, olives, roasted cashews, cherry tomatoes, cucumber, basil, served with garlic flatbread.',
    price: '20.50', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: [
      'i287',
      'i287',
      'i4',
      'i153',
      'i60',
      'i2',
      'i3',
      'i5',
      'i339',
    ],
    allergyLabels: ['vegetarian', 'treenut'],
  },
  {
    id: 'm233',
    name: 'Apéro Plättli mit Fleisch und Käse',
    description:
      'Salami, raw ham, feta, olives, roasted cashews, cherry tomatoes, cucumber, basil, served with garlic flatbread.',
    price: '22.50', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: [
      'i88',
      'i322',
      'i287',
      'i153',
      'i60',
      'i2',
      'i3',
      'i5',
      'i339',
    ],
    allergyLabels: ['treenut'],
  },
  {
    id: 'm234',
    name: 'Pizza Bite Marinara',
    description: 'Small marinara pizza bites.',
    price: '6.00', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: ['i315', 'i2', 'i6', 'i5'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm235',
    name: 'Oliven',
    description: 'Olives.',
    price: '5.50', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: ['i153'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm236',
    name: 'Marinierter Feta',
    description: 'Marinated feta, optionally with olives or cherry tomatoes.',
    price: '6.50', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: ['i340', 'i153', 'i2'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm237',
    name: 'Pimientos de Padron',
    description: 'Roasted Padrón peppers.',
    price: '6.00', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: ['i318'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm238',
    name: 'Parmesanbröckli mit Crema di Balsamico',
    description: 'Parmesan crumbles with balsamic cream.',
    price: '7.00', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: ['i342', 'i347'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm239',
    name: 'Datteln mit Alpsteinspeck',
    description: 'Dates with Alpine bacon.',
    price: '7.00', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: ['i247', 'i321'],
    allergyLabels: [],
  },
  {
    id: 'm240',
    name: 'Garlic Flatbread',
    description: 'Garlic flatbread with option to add cashew dip (+3.50).',
    price: '5.00', // CHF
    categoryId: 'c1', // Appetizers/Nibbles
    restaurantId: 'r18',
    ingredientIds: ['i339', 'i6', 'i330'],
    allergyLabels: ['dairy', 'vegan'],
  },

  // SWEET TREATS
  {
    id: 'm241',
    name: 'Kuchen',
    description:
      'Cake selection, varying daily. The team will be happy to provide more information.',
    price: '6.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r18',
    ingredientIds: ['i348'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm242',
    name: 'Sweet Bite',
    description:
      'Sweet bites in two varieties: Choco Banana or Apple Cinnamon.',
    price: '7.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r18',
    ingredientIds: ['i343', 'i68', 'i75', 'i251'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm243',
    name: 'Nanimale Gelati',
    description:
      'Gelato in various flavors: Chocolate, Pistachio, Raspberry, or Mango Passion Fruit.',
    price: '5.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r18',
    ingredientIds: ['i344', 'i248', 'i83', 'i303', 'i77', 'i251'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm244',
    name: 'Frische Früchte',
    description: 'Fresh fruits: Mango or Pineapple.',
    price: '5.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r18',
    ingredientIds: ['i345', 'i77', 'i323'],
    allergyLabels: ['dairy', 'vegan'],
  },
  // Menu items for restaurant r20 (ANOAH - Plant based)
  {
    id: 'm245',
    name: 'Fancy Fenchel',
    description:
      'Fennel salad, orange fillets, fried shallots, blood orange gel, pumpkin seeds, bronze fennel.',
    price: '', // Price not specified
    categoryId: 'c1', // Appetizers
    restaurantId: 'r20',
    ingredientIds: ['i349', 'i350', 'i351', 'i352', 'i353', 'i354'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm246',
    name: 'Das Gemüse mit Stiel',
    description:
      'White asparagus, green asparagus, wild asparagus, hollandaise sauce, smoked almonds, chimichurri.',
    price: '', // Price not specified
    categoryId: 'c1', // Appetizers
    restaurantId: 'r20',
    ingredientIds: ['i355', 'i356', 'i357', 'i358', 'i359', 'i360'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm247',
    name: 'Haut Dich aus den Socken Bowl',
    description:
      'Sushi rice, carrot tartare, fermented kale, wasabi mayo, shichimi, cucumber.',
    price: '', // Price not specified
    categoryId: 'c2', // Main Courses (Bowl)
    restaurantId: 'r20',
    ingredientIds: ['i361', 'i362', 'i363', 'i364', 'i365', 'i3'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm248',
    name: 'Purple Rain',
    description:
      'Red cabbage risotto, kimchi, soy yogurt, caramelized hazelnuts, vegan parmesan.',
    price: '', // Price not specified
    categoryId: 'c2', // Main Courses
    restaurantId: 'r20',
    ingredientIds: ['i366', 'i367', 'i368', 'i369', 'i370'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut', 'soy'],
  },
  {
    id: 'm249',
    name: 'BBQ Mushroom',
    description:
      'Portobello steak, wild garlic cream, pepper sauce, celery sticks, leek ash oil, Valle-Maggia pepper.',
    price: '', // Price not specified
    categoryId: 'c2', // Main Courses
    restaurantId: 'r20',
    ingredientIds: ['i371', 'i372', 'i373', 'i374', 'i375', 'i376'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm250',
    name: 'Frühlingsgefühle',
    description:
      'Lime biscuit, pistachio cream, strawberries, meringue drops, elderberry powder, vermouth gel.',
    price: '', // Price not specified
    categoryId: 'c3', // Desserts
    restaurantId: 'r20',
    ingredientIds: ['i377', 'i378', 'i379', 'i380', 'i381', 'i382'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  // Menu items for restaurant r22 (Vegitat - Turkish-inspired vegan restaurant)
  // CIGKÖFTE ITEMS
  {
    id: 'm251',
    name: 'Cigköfte Wrap',
    description:
      'Vegan bulgur-spice paste prepared with lettuce, tomatoes, parsley, onion, pickled cucumbers, pomegranate sauce and spice mix sauce.',
    price: '18.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i383',
      'i384',
      'i385',
      'i386',
      'i1',
      'i2',
      'i40',
      'i34',
      'i389',
      'i387',
      'i388',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm252',
    name: 'Cigköfte XL Wrap',
    description:
      'Extra large vegan bulgur-spice paste prepared with lettuce, tomatoes, parsley, onion, pickled cucumbers, pomegranate sauce and spice mix sauce.',
    price: '22.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i383',
      'i384',
      'i385',
      'i386',
      'i1',
      'i2',
      'i40',
      'i34',
      'i389',
      'i387',
      'i388',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm253',
    name: 'Cigköfte Burger',
    description:
      'Vegan bulgur-spice paste burger prepared with lettuce, tomatoes, parsley, onion, pickled cucumbers, pomegranate sauce and spice mix sauce.',
    price: '18.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i383',
      'i384',
      'i385',
      'i386',
      'i1',
      'i2',
      'i40',
      'i34',
      'i389',
      'i387',
      'i388',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm254',
    name: 'Cigköfte XL Portion (500gr)',
    description:
      '500g of vegan bulgur-spice paste served with lettuce, lemon, yufka flatbread, pomegranate sauce and spice mix sauce.',
    price: '33.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i383',
      'i384',
      'i385',
      'i386',
      'i1',
      'i15',
      'i390',
      'i387',
      'i388',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm255',
    name: 'Cigköfte Portion (250gr)',
    description:
      '250g of vegan bulgur-spice paste served with lettuce, lemon, yufka flatbread, pomegranate sauce and spice mix sauce.',
    price: '22.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i383',
      'i384',
      'i385',
      'i386',
      'i1',
      'i15',
      'i390',
      'i387',
      'i388',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm256',
    name: 'Sushi-Ci',
    description:
      'Vegitat presents: Sushi-Ci, the ultimate takeaway experience where Anatolian spices meet Japanese refinement.',
    price: '26.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: ['i383', 'i384', 'i385', 'i386', 'i361'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm257',
    name: 'Cigköfte Avocado Wrap',
    description:
      'Fresh lavash bread, creamy avocado, crispy vegetables and a hint of lemon. 100% vegan and delicious.',
    price: '20.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i383',
      'i384',
      'i385',
      'i386',
      'i391',
      'i4',
      'i1',
      'i2',
      'i15',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },

  // VEGAN DÖNER & WRAPS
  {
    id: 'm258',
    name: 'Vegan Döner Taschenbrot',
    description:
      'Seitan-based vegan döner in pocket bread, prepared with spicy paste, chickpea paste, lettuce, tomatoes, onion, red cabbage, arugula, corn and parsley.',
    price: '19.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i392',
      'i393',
      'i394',
      'i1',
      'i2',
      'i34',
      'i395',
      'i81',
      'i333',
      'i40',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm259',
    name: 'Vegan Döner Wrap',
    description:
      'Seitan-based vegan döner wrap, prepared with spicy paste, chickpea paste, lettuce, tomatoes, onion, red cabbage, arugula, corn and green lentils.',
    price: '19.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i392',
      'i393',
      'i394',
      'i1',
      'i2',
      'i34',
      'i395',
      'i81',
      'i333',
      'i396',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm260',
    name: 'Kichererbsen Wrap',
    description:
      'Chickpea wrap prepared with spicy paste, chickpea paste, lettuce, tomatoes, onions, red cabbage, arugula, corn and green lentils.',
    price: '18.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i394',
      'i393',
      'i1',
      'i2',
      'i34',
      'i395',
      'i81',
      'i333',
      'i396',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm261',
    name: 'Freestyle Wrap',
    description:
      'Wrap prepared with spicy paste, chickpea paste, lettuce, tomatoes, onions, red cabbage, arugula, corn, green lentils, tempeh, jackfruit, lentil kofte, cigköfte and seitan.',
    price: '22.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i393',
      'i394',
      'i1',
      'i2',
      'i34',
      'i395',
      'i81',
      'i333',
      'i396',
      'i397',
      'i398',
      'i399',
      'i383',
      'i392',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'soy'],
  },
  {
    id: 'm262',
    name: 'Jackfruit Wrap',
    description: 'Wrap with jackfruit filling.',
    price: '19.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: ['i398', 'i1', 'i2', 'i34'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm263',
    name: 'Tempeh Wrap',
    description:
      'Tempeh wrap with lupine. Enjoy our delicious tempeh wrap, filled with hearty marinated and fried tempeh and protein-rich lupine.',
    price: '19.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: ['i397', 'i400', 'i1', 'i2', 'i34'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'soy'],
  },

  // BOWLS
  {
    id: 'm264',
    name: 'Vegan Jackfruit Bowl',
    description:
      'Prepared with lettuce, tomatoes, onions, red cabbage, green lentils, corn, chickpea paste, parsley and arugula.',
    price: '23.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i398',
      'i1',
      'i2',
      'i34',
      'i395',
      'i396',
      'i333',
      'i394',
      'i40',
      'i81',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm265',
    name: 'Tempeh Bowl',
    description:
      'Prepared with lettuce, tomatoes, onions, red cabbage, green lentils, corn, chickpea paste, parsley and arugula.',
    price: '23.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i397',
      'i1',
      'i2',
      'i34',
      'i395',
      'i396',
      'i333',
      'i394',
      'i40',
      'i81',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'soy'],
  },
  {
    id: 'm266',
    name: 'Cigköfte Bowl',
    description:
      'Prepared with lettuce, tomatoes, onions, red cabbage, green lentils, corn, chickpea paste, parsley and arugula.',
    price: '23.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i383',
      'i384',
      'i385',
      'i386',
      'i1',
      'i2',
      'i34',
      'i395',
      'i396',
      'i333',
      'i394',
      'i40',
      'i81',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm267',
    name: 'Vegan Döner Bowl',
    description:
      'Prepared with lettuce, tomatoes, onions, red cabbage, green lentils, corn, chickpea paste, parsley and arugula.',
    price: '23.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i392',
      'i1',
      'i2',
      'i34',
      'i395',
      'i396',
      'i333',
      'i394',
      'i40',
      'i81',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm268',
    name: 'Freestyle Bowl',
    description:
      'Prepared with lettuce, tomatoes, onions, red cabbage, green lentils, corn, chickpea paste, parsley, arugula, tempeh, jackfruit, lentil kofte, cigköfte and seitan.',
    price: '26.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r22',
    ingredientIds: [
      'i1',
      'i2',
      'i34',
      'i395',
      'i396',
      'i333',
      'i394',
      'i40',
      'i81',
      'i397',
      'i398',
      'i399',
      'i383',
      'i392',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan', 'soy', 'treenut'],
  },
  {
    id: 'm269',
    name: 'Vegan Avocado Salat',
    description:
      'Fresh avocado combined with crispy vegetables and a light, aromatic sauce. A creamy, healthy salad that pampers you with every bite.',
    price: '20.50', // CHF
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r22',
    ingredientIds: ['i4', 'i1', 'i2', 'i3'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },

  // DESSERTS & SNACKS
  {
    id: 'm270',
    name: 'Vegan Tiramisu',
    description:
      'Our heavenly vegan tiramisu: Layer by layer a delight, with a light, creamy base and a hint of aromatic coffee powder. A classic Italian dessert dream, now 100% plant-based.',
    price: '10.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r22',
    ingredientIds: ['i401', 'i413'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm271',
    name: 'Vegan Baklava Portion (3 Stück)',
    description:
      'An oriental classic in vegan perfection: Crispy layers of delicate dough, filled with finely chopped pistachios and refined with a touch of sweet syrup. A treat that melts in your mouth.',
    price: '8.90', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r22',
    ingredientIds: ['i402', 'i411', 'i412'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut'],
  },
  {
    id: 'm272',
    name: 'Vegan Chocolate Chip Chocolate Cookie',
    description: 'Gluten-free, Chocolate Chip Chocolate cookie.',
    price: '9.30', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r22',
    ingredientIds: ['i403', 'i418'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'gluten'],
  },
  {
    id: 'm273',
    name: "Puffy's Coconut Cream Cookie",
    description: 'Gluten-free coconut cream cookie.',
    price: '9.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r22',
    ingredientIds: ['i404', 'i406'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'gluten'],
  },
  {
    id: 'm274',
    name: 'Vegan Chocolate Chip Walnut Cookie',
    description:
      'Contains: wheat gluten, coconut oil, walnuts, soy, sweet lupine flour.',
    price: '9.30', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r22',
    ingredientIds: ['i403', 'i405', 'i406', 'i153', 'i7', 'i407'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut', 'soy'],
  },
  {
    id: 'm275',
    name: 'Nussegge',
    description: 'Flour, soy milk, hazelnuts.',
    price: '6.90', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r22',
    ingredientIds: ['i408', 'i249', 'i409', 'i258'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'treenut', 'soy'],
  },
  {
    id: 'm276',
    name: 'Schocko Banana Cake',
    description: 'Sugar-free, with cinnamon, vegan chocolate and oat flakes.',
    price: '7.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r22',
    ingredientIds: ['i410', 'i68', 'i251', 'i418', 'i248'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm277',
    name: 'Veganes Beeren-Schoko Porridge',
    description:
      'Creamy oat porridge, cooked with oat drink and refined with fresh blueberries, strawberries and red berries. Topped with vegan dark chocolate, chia and flax seeds... a nutrient-rich treat for any time of day.',
    price: '6.90', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r22',
    ingredientIds: [
      'i415',
      'i248',
      'i416',
      'i417',
      'i379',
      'i418',
      'i331',
      'i318',
    ],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },

  // SPECIAL ITEMS
  {
    id: 'm278',
    name: 'Veganici',
    description:
      'İçli Köfte reinterpreted: Our vegan variant, Veganici, consists of a spicy filling of soy mince, wrapped in a delicate bulgur coat. Crispy on the outside, juicy on the inside... an authentic delight.',
    price: '3.40', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r22',
    ingredientIds: ['i419', 'i420', 'i383'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'soy'],
  },
  {
    id: 'm279',
    name: 'Veganici 3er Pack',
    description:
      'İçli Köfte reinterpreted: Our vegan variant, Veganici, consists of a spicy filling of soy mince, wrapped in a delicate bulgur coat. Crispy on the outside, juicy on the inside... an authentic delight.',
    price: '8.90', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r22',
    ingredientIds: ['i419', 'i420', 'i383'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'soy'],
  },
  {
    id: 'm280',
    name: 'Jackfruit Balls 4er Pack (Glutenfrei)',
    description:
      'Juicy, spiced jackfruit, formed into delicious balls and perfectly baked. A hearty, plant-based highlight that will delight you with every bite.',
    price: '7.90', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r22',
    ingredientIds: ['i421', 'i398', 'i384'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'gluten'],
  },
  {
    id: 'm281',
    name: 'Jackfruit Balls 10er Pack (Glutenfrei)',
    description:
      'Juicy, spiced jackfruit, formed into delicious balls and perfectly baked. A hearty, plant-based highlight that will delight you with every bite.',
    price: '15.90', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r22',
    ingredientIds: ['i421', 'i398', 'i384'],
    allergyLabels: ['dairy', 'egg', 'vegan', 'gluten'],
  },
  {
    id: 'm282',
    name: 'Vegan Couscous (Kısır)',
    description:
      'Fluffy couscous, perfectly prepared.. light and versatile, ideal as a side dish or main course. If desired, you can add lemon and pomegranate syrup to refine the taste.',
    price: '7.90', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r22',
    ingredientIds: ['i422', 'i15', 'i387'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm283',
    name: 'Vegan Dolma 2er Pack',
    description:
      'Dried peppers and eggplant, filled with an aromatic mixture of rice or bulgur. A traditional dish that is perfectly rounded off with spices and herbs.',
    price: '8.90', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r22',
    ingredientIds: ['i423', 'i424', 'i425', 'i155', 'i383', 'i384', 'i40'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm284',
    name: 'Vegan Dolma 3er Pack',
    description:
      'Dried peppers and eggplant, filled with an aromatic mixture of rice or bulgur. A traditional dish that is perfectly rounded off with spices and herbs.',
    price: '10.90', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r22',
    ingredientIds: ['i423', 'i424', 'i425', 'i155', 'i383', 'i384', 'i40'],
    allergyLabels: ['dairy', 'egg', 'vegan'],
  },
  {
    id: 'm285',
    name: 'Hiltl Oliven-Dörrtomatenbrot mit Rucolapesto',
    description:
      'Hiltl olive-dried tomato bread with rucola pesto. Pistachios, basil, lemon.',
    price: '7.00', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r26',
    ingredientIds: ['i426', 'i427', 'i428', 'i83', 'i5', 'i15'],
    allergyLabels: ['dairy', 'vegan', 'treenut'], // g (gluten), n (nuts) -> vegan, treenut
  },
  {
    id: 'm286',
    name: 'Saisonale Tagessuppe',
    description:
      'Seasonal soup of the day. Our service team is happy to provide information.',
    price: '12.00', // CHF
    categoryId: 'c1', // Appetizers/Soups
    restaurantId: 'r26',
    ingredientIds: ['i429'],
    allergyLabels: ['vegetarian'], // Could be vegan, depends on daily preparation
  },
  {
    id: 'm287',
    name: 'Grillierter grüner Spargel japanische Art',
    description:
      'Grilled green asparagus Japanese style. Teriyaki sauce, panko crumbs, garden cress.',
    price: '16.00', // small / "29.00", // large with sushi rice
    categoryId: 'c1', // Appetizers
    restaurantId: 'r26',
    ingredientIds: ['i430', 'i431', 'i432', 'i433'],
    allergyLabels: ['dairy', 'vegan', 'sesame', 'soy'], // v (vegan), g (gluten), s (sesame), o (soy)
  },
  {
    id: 'm288',
    name: 'Spargel-Mascarpone-Risotto',
    description:
      'Asparagus-mascarpone risotto. Pesto, Italian hard cheese, pistachios.',
    price: '30.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i430', 'i434', 'i435', 'i83', 'i484'],
    allergyLabels: ['treenut', 'vegetarian'], // m (milk), n (nuts) -> vegetarian, treenut
  },
  {
    id: 'm289',
    name: 'Spargelteller mit Sauce Hollandaise',
    description:
      'Asparagus plate with hollandaise sauce. White and green asparagus, new potatoes, parsley.',
    price: '32.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i430', 'i437', 'i436', 'i438', 'i40'],
    allergyLabels: ['egg', 'vegetarian'], // e (eggs), m (milk) -> egg, vegetarian
  },
  {
    id: 'm290',
    name: 'Eton Mess mit Erdbeeren',
    description:
      'Eton Mess with strawberries. Vanilla ice cream, whipped cream, meringue.',
    price: '14.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r26',
    ingredientIds: ['i379', 'i439', 'i20', 'i440'],
    allergyLabels: ['egg', 'vegetarian'], // e (eggs), m (milk) -> egg, vegetarian
  },
  {
    id: 'm291',
    name: 'Crispy Mushroom Wings',
    description:
      'Peking style sauce, chili peppers, chives, lime, roasted sesame.',
    price: '17.00', // CHF
    categoryId: 'c1', // Appetizers
    restaurantId: 'r26',
    ingredientIds: ['i9', 'i441', 'i442', 'i271', 'i15', 'i443'],
    allergyLabels: ['dairy', 'vegan', 'sesame', 'soy'], // v (vegan), g (gluten), o (soy), s (sesame)
  },
  {
    id: 'm292',
    name: 'Hiltl Tatar',
    description: 'Organic egg, pickles, toast bread, butter or margarine.',
    price: '20.00', // CHF / "33.00" // Large with fries
    categoryId: 'c1', // Appetizers
    restaurantId: 'r26',
    ingredientIds: ['i444', 'i26', 'i445', 'i446', 'i17'],
    allergyLabels: ['egg', 'vegetarian', 'soy'], // v* (vegan optional), e* (egg optional), g* (gluten optional), m* (milk optional), s* (sesame optional), o (soy)
  },
  {
    id: 'm293',
    name: 'Korean Style Cauliflower',
    description:
      'Baked cauliflower, pickles, coriander, Korean BBQ sauce, lime. As main course with sticky rice.',
    price: '17.00', // small / "31.00", // large
    categoryId: 'c1', // Appetizers
    restaurantId: 'r26',
    ingredientIds: ['i447', 'i445', 'i272', 'i448', 'i15', 'i449'],
    allergyLabels: ['dairy', 'vegan', 'soy', 'sesame'], // v (vegan), t (mustard), r (celery), o (soy), s* (sesame optional)
  },
  {
    id: 'm294',
    name: 'Thai Papaya Salad',
    description: 'Green papaya, planted. satay skewers, peanuts, coriander.',
    price: '19.00', // small / "29.00", // large
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r26',
    ingredientIds: ['i450', 'i451', 'i24', 'i272'],
    allergyLabels: ['dairy', 'vegan', 'peanut', 'soy'], // v (vegan), d (peanuts), o (soy)
  },
  {
    id: 'm295',
    name: 'Crispy Tofu Salad',
    description: 'Seasonal salads, Hiltl salad sauce, mango-apple chutney.',
    price: '19.00', // small / "29.00", // large
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r26',
    ingredientIds: ['i1', 'i7', 'i452'],
    allergyLabels: ['dairy', 'vegan', 'soy'], // v (vegan), g (gluten), t (mustard), o (soy)
  },
  {
    id: 'm296',
    name: 'Caesar Salad',
    description:
      'Lettuce, organic egg, hard cheese, planted marinated, croutons.',
    price: '24.00', // CHF
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r26',
    ingredientIds: ['i453', 'i26', 'i454', 'i455', 'i456'],
    allergyLabels: ['egg', 'vegetarian'], // g* (gluten optional), t (mustard), e (eggs), m (milk)
  },
  {
    id: 'm297',
    name: 'Warmes Naan mit Gurken-Ingwer-Raita',
    description:
      'Warm naan with cucumber-ginger raita. Soy yogurt, coriander, olive oil.',
    price: '7.00', // CHF
    categoryId: 'c1', // Appetizers/Breads
    restaurantId: 'r26',
    ingredientIds: ['i457', 'i458', 'i459', 'i272', 'i133'],
    allergyLabels: ['dairy', 'vegan', 'soy'], // v (vegan), g (gluten), o (soy)
  },
  {
    id: 'm298',
    name: 'UrDinkel-Brot mit Rüeblifrischkäse',
    description:
      'Spelt bread with carrot cream cheese. Black pepper, dill, lemon.',
    price: '7.00', // CHF
    categoryId: 'c1', // Appetizers/Breads
    restaurantId: 'r26',
    ingredientIds: ['i460', 'i461', 'i462', 'i314', 'i15'],
    allergyLabels: ['dairy', 'vegan', 'sesame', 'treenut'], // v (vegan), g (gluten), s (sesame), n (nuts)
  },
  {
    id: 'm299',
    name: 'Indische Thali-Platte',
    description:
      'Dal, aloo, paneer, eggplant curry, basmati rice, naan, ginger-raita.',
    price: '34.00', // per person
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: [
      'i463',
      'i464',
      'i465',
      'i466',
      'i467',
      'i468',
      'i457',
      'i458',
    ],
    allergyLabels: ['vegetarian'], // Staff provides specific allergen info
  },
  {
    id: 'm300',
    name: 'Riz Colonial',
    description:
      'Sweet curry or spicy madras sauce, mushrooms, cashews, fruits, basmati rice. Whipped cream or vegan whipped cream.',
    price: '32.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i469', 'i470', 'i9', 'i60', 'i471', 'i468', 'i20'],
    allergyLabels: ['vegetarian', 'treenut', 'soy'], // v* (vegan optional), m* (milk optional), n* (nuts optional), o (soy)
  },
  {
    id: 'm301',
    name: 'Banane Madras',
    description:
      'Madras sauce, mango, cashews, papadam, basmati rice. Whipped cream or vegan whipped cream.',
    price: '32.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i470', 'i77', 'i60', 'i472', 'i468', 'i20'],
    allergyLabels: ['vegetarian', 'treenut', 'soy'], // v* (vegan optional), m* (milk optional), o* (soy optional), n* (nuts optional)
  },
  {
    id: 'm302',
    name: 'Palak Paneer',
    description:
      'Indian fresh cheese, spinach, date chutney, basmati rice, naan.',
    price: '32.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i466', 'i74', 'i473', 'i468', 'i457'],
    allergyLabels: ['vegetarian'], // g* (gluten optional), m (milk), u (sulfites)
  },
  {
    id: 'm303',
    name: 'Green Thai Curry',
    description:
      'Eggplant, green beans, planted., coconut milk, lime, coriander, basmati rice.',
    price: '33.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i467', 'i474', 'i455', 'i475', 'i15', 'i272', 'i468'],
    allergyLabels: ['dairy', 'vegan'], // v (vegan), z (onion), k (garlic), 1 (slightly spicy)
  },
  {
    id: 'm304',
    name: 'Red Thai Curry',
    description:
      'Bamboo shoots, oyster mushrooms, eggplant, lime, coconut milk, basmati rice.',
    price: '33.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i476', 'i477', 'i467', 'i15', 'i475', 'i468'],
    allergyLabels: ['dairy', 'vegan', 'soy'], // v (vegan), o (soy), z (onion), 2 (spicy)
  },
  {
    id: 'm305',
    name: 'Rösti mit Gemüse',
    description:
      'Seasonal vegetables, Café de Paris. With fried egg +2.–, with mountain cheese or vegan alternative +3.–',
    price: '27.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i478', 'i3', 'i479', 'i26', 'i480'],
    allergyLabels: ['vegetarian'], // v* (vegan optional)
  },
  {
    id: 'm306',
    name: 'Gnocchi mit Safran-Velouté',
    description:
      'Baby spinach, dried tomato, sautéed mushroom mix, peas, almonds.',
    price: '33.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i19', 'i481', 'i482', 'i427', 'i483', 'i140', 'i84'],
    allergyLabels: ['dairy', 'vegan', 'treenut'], // v (vegan), n* (nuts optional), u (sulfites)
  },
  {
    id: 'm307',
    name: 'Spaghetti mit Hiltl Pesto',
    description: 'Basil, olive oil, pine nuts.',
    price: '27.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i19', 'i484', 'i5', 'i133', 'i485'],
    allergyLabels: ['vegetarian', 'treenut'], // g (gluten), m (milk), n (nuts), k (garlic)
  },
  {
    id: 'm308',
    name: 'Spaghetti mit Hiltl Bolognese',
    description: 'Soy mince, tomato, celery, carrot, leek.',
    price: '27.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i19', 'i486', 'i487', 'i2', 'i21', 'i488'],
    allergyLabels: ['dairy', 'vegan', 'soy'], // v (vegan), g (gluten), o (soy), r (celery)
  },
  {
    id: 'm309',
    name: 'Hiltl Cordon Bleu',
    description:
      'Seitan, mountain cheese, Zurich or sweet potato fries. With seasonal vegetables +5.–',
    price: '34.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i489', 'i480', 'i490', 'i491'],
    allergyLabels: ['vegetarian', 'egg', 'soy'], // v* (vegan optional), g (gluten), t (mustard), e* (egg optional), o (soy), m* (milk optional)
  },
  {
    id: 'm310',
    name: 'Züri Geschnetzeltes',
    description:
      'Mushrooms, planted., white wine, rösti, whipped cream or vegan whipped cream.',
    price: '36.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i492', 'i455', 'i493', 'i478', 'i20'],
    allergyLabels: ['vegetarian', 'soy'], // w (can be made vegan), o (soy), r (celery), m* (milk optional)
  },
  {
    id: 'm311',
    name: 'Grilliertes planted. Steak',
    description:
      'Chimichurri, Maldon sea salt, Zurich or sweet potato fries. With seasonal vegetables +5.–',
    price: '34.00', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: ['i494', 'i495', 'i496', 'i490', 'i491'],
    allergyLabels: ['dairy', 'vegan', 'soy'], // v (vegan), o (soy), k (garlic), z (onion)
  },
  {
    id: 'm312',
    name: 'Hiltl Burger',
    description:
      'Brioche bun, baby lettuce, tomato, red onion, burger sauce, spiced ketchup, Zurich or sweet potato fries. Upgrade: with cheese or vegan alternative +3.–, with vegan bacon +2.–, with fried egg +2.–, with truffle fries +5.50',
    price: '31.00', // CHF (base price)
    categoryId: 'c2', // Main Courses
    restaurantId: 'r26',
    ingredientIds: [
      'i497',
      'i498',
      'i2',
      'i499',
      'i500',
      'i501',
      'i490',
      'i491',
      'i11',
      'i502',
      'i26',
      'i503',
    ],
    allergyLabels: ['dairy', 'vegan', 'sesame'], // v (vegan), g (gluten), t (mustard), s (sesame), z (onion)
  },
  {
    id: 'm313',
    name: 'Truffle Fries',
    description: 'Zurich fries, truffle sauce, truffle, chives, hazelnuts.',
    price: '11.00', // CHF
    categoryId: 'c1', // Appetizers/Sides
    restaurantId: 'r26',
    ingredientIds: ['i503', 'i490', 'i504', 'i505', 'i271', 'i258'],
    allergyLabels: ['dairy', 'vegan', 'treenut', 'soy'], // v (vegan), g (gluten), o (soy), n* (nuts optional)
  },
  {
    id: 'm314',
    name: 'Tiramisu',
    description: 'Biscuit, organic egg, mascarpone, amaretto.',
    price: '11.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r26',
    ingredientIds: ['i506', 'i26', 'i507', 'i508'],
    allergyLabels: ['egg', 'vegetarian'], // a (alcohol), e (eggs), g (gluten), m (milk)
  },
  {
    id: 'm315',
    name: 'Crèmeschnitte',
    description: 'Classic since 1960, puff pastry, vanilla.',
    price: '11.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r26',
    ingredientIds: ['i510', 'i511', 'i250'],
    allergyLabels: ['vegetarian'], // v* (vegan optional), g (gluten), m* (milk optional)
  },
  {
    id: 'm316',
    name: 'Hot Brownie mit Vanille-Glace',
    description:
      'Confiseur chocolate sauce, walnuts, whipped cream or vegan whipped cream.',
    price: '14.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r26',
    ingredientIds: ['i512', 'i513', 'i153', 'i439', 'i20'],
    allergyLabels: ['vegetarian', 'egg', 'treenut', 'soy'], // v* (vegan optional), e* (egg optional), g (gluten), m* (milk optional), n (nuts), o (soy)
  },
  {
    id: 'm317',
    name: 'Panna Cotta',
    description: 'Vanilla, coconut, raspberry coulis.',
    price: '12.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r26',
    ingredientIds: ['i516', 'i250', 'i56', 'i517'],
    allergyLabels: ['dairy', 'vegan'], // v (vegan)
  },
  {
    id: 'm318',
    name: 'Churro mit Vanille-Parfait und Dulce de Leche',
    description: 'Vanilla espuma, cinnamon sugar, lemon.',
    price: '15.00', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r26',
    ingredientIds: ['i518', 'i519', 'i520', 'i521', 'i522', 'i15'],
    allergyLabels: ['egg', 'vegetarian'], // g (gluten), e (eggs), m (milk)
  },
  // Menu items for restaurant r27
  // BOWLS
  {
    id: 'm319',
    name: 'Protein Bowl',
    description:
      'Quinoa, beetroot hummus, sweet potato, avocado, tofu, broccoli, salad, cashew dressing, 5-seed crunch.',
    price: '22.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r27',
    ingredientIds: [
      'i51',
      'i523',
      'i524',
      'i4',
      'i7',
      'i143',
      'i1',
      'i525',
      'i526',
    ],
    allergyLabels: ['dairy', 'vegan', 'soy', 'treenut'],
  },
  {
    id: 'm320',
    name: 'Salad Bowl',
    description:
      'Salad, avocado, cucumber, red cabbage, eggplant, bell pepper, vinaigrette, mixed nuts.',
    price: '19.90', // CHF
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r27',
    ingredientIds: ['i1', 'i4', 'i3', 'i527', 'i332', 'i528', 'i529', 'i530'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm321',
    name: 'Daal Bowl',
    description:
      'Red lentils, rice, coconut yogurt, mango, coconut chips, pomegranate, coriander.',
    price: '23.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r27',
    ingredientIds: ['i531', 'i155', 'i532', 'i77', 'i533', 'i301', 'i272'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm322',
    name: 'Peanut Tikka Masala',
    description:
      'Peanut tikka curry, rice, coconut yogurt, coriander, lime, peanut crunch.',
    price: '24.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r27',
    ingredientIds: ['i534', 'i155', 'i532', 'i272', 'i15', 'i535'],
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },
  {
    id: 'm323',
    name: 'Side Salad',
    description: 'Salad, cucumber, vinaigrette, 5-seed crunch.',
    price: '8.40', // CHF
    categoryId: 'c1', // Appetizers/Sides
    restaurantId: 'r27',
    ingredientIds: ['i1', 'i3', 'i529', 'i526'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm324',
    name: 'Daal Soup',
    description: 'Red lentils, coconut yogurt, coconut chips, coriander.',
    price: '11.50', // CHF
    categoryId: 'c1', // Appetizers/Soups
    restaurantId: 'r27',
    ingredientIds: ['i531', 'i532', 'i533', 'i272'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm325',
    name: 'Yogurt & Granola',
    description:
      'Coconut yogurt, strawberry-rhubarb compote, granola, pomegranate.',
    price: '10.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r27',
    ingredientIds: ['i532', 'i536', 'i322', 'i301'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm326',
    name: 'Power Porridge',
    description: 'Mango, coconut chips, cocoa nibs.',
    price: '10.90', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r27',
    ingredientIds: ['i248', 'i77', 'i533', 'i537'], // Adding oats (i248) as base ingredient
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm327',
    name: 'Original Açaí',
    description: 'Açaí, granola, peanut crunch, pomegranate, banana.',
    price: '17.90', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r27',
    ingredientIds: ['i319', 'i322', 'i535', 'i301', 'i68'],
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },
  {
    id: 'm328',
    name: 'Powerhouse Açaí',
    description: 'Açaí, coconut chips, 5-seed crunch, mango, blueberries.',
    price: '17.90', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r27',
    ingredientIds: ['i319', 'i533', 'i526', 'i77', 'i538'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm329',
    name: 'Avocado Toast',
    description:
      '5-grain sourdough bread, almond butter, avocado, mango sauce, pomegranate, 5-seed crunch, microgreens.',
    price: '13.90', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r27',
    ingredientIds: ['i539', 'i540', 'i4', 'i541', 'i301', 'i526', 'i542'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm330',
    name: 'Avocado Sandwich',
    description:
      '5-grain sourdough bread, fresh cheese, avocado, cucumber, salad.',
    price: '11.90', // CHF
    categoryId: 'c1', // Breakfast/Lunch
    restaurantId: 'r27',
    ingredientIds: ['i539', 'i543', 'i4', 'i3', 'i1'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm331',
    name: 'Hummus Sandwich',
    description:
      '5-grain sourdough bread, beetroot hummus, red cabbage, eggplant, bell pepper, cucumber, salad.',
    price: '11.90', // CHF
    categoryId: 'c1', // Breakfast/Lunch
    restaurantId: 'r27',
    ingredientIds: ['i539', 'i523', 'i527', 'i332', 'i528', 'i3', 'i1'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm332',
    name: 'Savoury Waffles',
    description:
      'Fresh cheese, microgreens, 5-seed crunch, carrot lox, avocado, cucumber.',
    price: '15.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r27',
    ingredientIds: ['i543', 'i542', 'i526', 'i544', 'i4', 'i3'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm333',
    name: 'Rhubarb & Yogurt Waffles',
    description:
      'Strawberry-rhubarb compote, coconut yogurt, blueberries, 5-seed crunch.',
    price: '15.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r27',
    ingredientIds: ['i536', 'i532', 'i538', 'i526'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm334',
    name: 'Banana & Chocolate Waffles',
    description:
      'Banana, dark chocolate, pomegranate, peanut crunch, maple syrup.',
    price: '17.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r27',
    ingredientIds: ['i68', 'i546', 'i301', 'i535', 'i545'],
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },
  // PASTRIES
  {
    id: 'm335',
    name: 'Bananenbrot',
    description:
      'Banana bread with banana, hazelnuts, poppy seeds, dark chocolate, and tahini.',
    price: '4.90', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r27',
    ingredientIds: ['i68', 'i548', 'i549', 'i546', 'i550'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm336',
    name: 'Matcha-Cherry Cake',
    description: 'Cake with matcha, ginger, lime, and sour cherries.',
    price: '4.90', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r27',
    ingredientIds: ['i551', 'i552', 'i15', 'i553'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm337',
    name: 'Rüebli-Erdnuss Muffin',
    description: 'Muffin with carrot, peanuts, cinnamon, and lemon.',
    price: '4.90', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r27',
    ingredientIds: ['i21', 'i24', 'i555', 'i15'],
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },
  {
    id: 'm338',
    name: 'Zitronen-Mohn Muffin',
    description: 'Muffin with poppy seeds, fresh cheese, vanilla, and lemon.',
    price: '4.90', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r27',
    ingredientIds: ['i549', 'i543', 'i250', 'i15'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm339',
    name: 'Nut-Chocolate Cookie',
    description:
      'Cookie with almonds, hazelnuts, walnuts, dark chocolate, flaxseed, and pepper.',
    price: '4.50', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r27',
    ingredientIds: ['i84', 'i548', 'i558', 'i546', 'i559', 'i560'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm340',
    name: 'Spiced Granola Cookie',
    description:
      'Cookie with cashews, cranberries, oat flakes, ginger, cardamom, coconut flakes, and pumpkin seeds.',
    price: '4.50', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r27',
    ingredientIds: ['i60', 'i562', 'i248', 'i552', 'i563', 'i564', 'i565'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  // Menu items for restaurant r28 (same as r27 but with a different restaurant ID)
  // BOWLS
  {
    id: 'm341',
    name: 'Protein Bowl',
    description:
      'Quinoa, beetroot hummus, sweet potato, avocado, tofu, broccoli, salad, cashew dressing, 5-seed crunch.',
    price: '22.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r28',
    ingredientIds: [
      'i51',
      'i523',
      'i524',
      'i4',
      'i7',
      'i143',
      'i1',
      'i525',
      'i526',
    ],
    allergyLabels: ['dairy', 'vegan', 'soy', 'treenut'],
  },
  {
    id: 'm342',
    name: 'Salad Bowl',
    description:
      'Salad, avocado, cucumber, red cabbage, eggplant, bell pepper, vinaigrette, mixed nuts.',
    price: '19.90', // CHF
    categoryId: 'c1', // Appetizers/Salads
    restaurantId: 'r28',
    ingredientIds: ['i1', 'i4', 'i3', 'i527', 'i332', 'i528', 'i529', 'i530'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm343',
    name: 'Daal Bowl',
    description:
      'Red lentils, rice, coconut yogurt, mango, coconut chips, pomegranate, coriander.',
    price: '23.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r28',
    ingredientIds: ['i531', 'i155', 'i532', 'i77', 'i533', 'i301', 'i272'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm344',
    name: 'Peanut Tikka Masala',
    description:
      'Peanut tikka curry, rice, coconut yogurt, coriander, lime, peanut crunch.',
    price: '24.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r28',
    ingredientIds: ['i534', 'i155', 'i532', 'i272', 'i15', 'i535'],
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },
  {
    id: 'm345',
    name: 'Side Salad',
    description: 'Salad, cucumber, vinaigrette, 5-seed crunch.',
    price: '8.40', // CHF
    categoryId: 'c1', // Appetizers/Sides
    restaurantId: 'r28',
    ingredientIds: ['i1', 'i3', 'i529', 'i526'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm346',
    name: 'Daal Soup',
    description: 'Red lentils, coconut yogurt, coconut chips, coriander.',
    price: '11.50', // CHF
    categoryId: 'c1', // Appetizers/Soups
    restaurantId: 'r28',
    ingredientIds: ['i531', 'i532', 'i533', 'i272'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm347',
    name: 'Yogurt & Granola',
    description:
      'Coconut yogurt, strawberry-rhubarb compote, granola, pomegranate.',
    price: '10.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r28',
    ingredientIds: ['i532', 'i536', 'i322', 'i301'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm348',
    name: 'Power Porridge',
    description: 'Mango, coconut chips, cocoa nibs.',
    price: '10.90', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r28',
    ingredientIds: ['i248', 'i77', 'i533', 'i537'], // Adding oats (i248) as base ingredient
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm349',
    name: 'Original Açaí',
    description: 'Açaí, granola, peanut crunch, pomegranate, banana.',
    price: '17.90', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r28',
    ingredientIds: ['i319', 'i322', 'i535', 'i301', 'i68'],
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },
  {
    id: 'm350',
    name: 'Powerhouse Açaí',
    description: 'Açaí, coconut chips, 5-seed crunch, mango, blueberries.',
    price: '17.90', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r28',
    ingredientIds: ['i319', 'i533', 'i526', 'i77', 'i538'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm351',
    name: 'Avocado Toast',
    description:
      '5-grain sourdough bread, almond butter, avocado, mango sauce, pomegranate, 5-seed crunch, microgreens.',
    price: '13.90', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r28',
    ingredientIds: ['i539', 'i540', 'i4', 'i541', 'i301', 'i526', 'i542'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm352',
    name: 'Avocado Sandwich',
    description:
      '5-grain sourdough bread, fresh cheese, avocado, cucumber, salad.',
    price: '11.90', // CHF
    categoryId: 'c1', // Breakfast/Lunch
    restaurantId: 'r28',
    ingredientIds: ['i539', 'i543', 'i4', 'i3', 'i1'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm353',
    name: 'Hummus Sandwich',
    description:
      '5-grain sourdough bread, beetroot hummus, red cabbage, eggplant, bell pepper, cucumber, salad.',
    price: '11.90', // CHF
    categoryId: 'c1', // Breakfast/Lunch
    restaurantId: 'r28',
    ingredientIds: ['i539', 'i523', 'i527', 'i332', 'i528', 'i3', 'i1'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm354',
    name: 'Savoury Waffles',
    description:
      'Fresh cheese, microgreens, 5-seed crunch, carrot lox, avocado, cucumber.',
    price: '15.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r28',
    ingredientIds: ['i543', 'i542', 'i526', 'i544', 'i4', 'i3'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm355',
    name: 'Rhubarb & Yogurt Waffles',
    description:
      'Strawberry-rhubarb compote, coconut yogurt, blueberries, 5-seed crunch.',
    price: '15.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r28',
    ingredientIds: ['i536', 'i532', 'i538', 'i526'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm356',
    name: 'Banana & Chocolate Waffles',
    description:
      'Banana, dark chocolate, pomegranate, peanut crunch, maple syrup.',
    price: '17.50', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r28',
    ingredientIds: ['i68', 'i546', 'i301', 'i535', 'i545'],
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },

  // PASTRIES
  {
    id: 'm357',
    name: 'Bananenbrot',
    description:
      'Banana bread with banana, hazelnuts, poppy seeds, dark chocolate, and tahini.',
    price: '4.90', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r28',
    ingredientIds: ['i68', 'i548', 'i549', 'i546', 'i550'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm358',
    name: 'Matcha-Cherry Cake',
    description: 'Cake with matcha, ginger, lime, and sour cherries.',
    price: '4.90', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r28',
    ingredientIds: ['i551', 'i552', 'i15', 'i553'],
    allergyLabels: ['dairy', 'vegan'],
  },
  {
    id: 'm359',
    name: 'Rüebli-Erdnuss Muffin',
    description: 'Muffin with carrot, peanuts, cinnamon, and lemon.',
    price: '4.90', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r28',
    ingredientIds: ['i21', 'i24', 'i555', 'i15'],
    allergyLabels: ['dairy', 'vegan', 'peanut'],
  },
  {
    id: 'm360',
    name: 'Zitronen-Mohn Muffin',
    description: 'Muffin with poppy seeds, fresh cheese, vanilla, and lemon.',
    price: '4.90', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r28',
    ingredientIds: ['i549', 'i543', 'i250', 'i15'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm361',
    name: 'Nut-Chocolate Cookie',
    description:
      'Cookie with almonds, hazelnuts, walnuts, dark chocolate, flaxseed, and pepper.',
    price: '4.50', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r28',
    ingredientIds: ['i84', 'i548', 'i558', 'i546', 'i559', 'i560'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },
  {
    id: 'm362',
    name: 'Spiced Granola Cookie',
    description:
      'Cookie with cashews, cranberries, oat flakes, ginger, cardamom, coconut flakes, and pumpkin seeds.',
    price: '4.50', // CHF
    categoryId: 'c3', // Desserts/Pastries
    restaurantId: 'r28',
    ingredientIds: ['i60', 'i562', 'i248', 'i552', 'i563', 'i564', 'i565'],
    allergyLabels: ['dairy', 'vegan', 'treenut'],
  },

  // Café Deli (r40) - Breakfast & Light Meals
  {
    id: 'm363',
    name: 'Swiss Birchermüesli',
    description:
      'Traditional Swiss muesli with oats, fresh fruits, nuts, and yogurt.',
    price: '8.50', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r40',
    ingredientIds: ['i248', 'i47', 'i84', 'i532'],
    allergyLabels: ['dairy', 'treenut', 'vegetarian'],
  },
  {
    id: 'm364',
    name: 'Croissant with Butter & Jam',
    description:
      'Fresh buttery croissant served with Swiss butter and homemade jam.',
    price: '4.20', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r40',
    ingredientIds: ['i42', 'i17', 'i49'],
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegetarian'],
  },
  {
    id: 'm365',
    name: 'Avocado Toast',
    description:
      'Sourdough bread topped with fresh avocado, cherry tomatoes, and herbs.',
    price: '9.80', // CHF
    categoryId: 'c1', // Breakfast
    restaurantId: 'r40',
    ingredientIds: ['i539', 'i4', 'i2', 'i40'],
    allergyLabels: ['gluten', 'vegetarian'],
  },
  {
    id: 'm366',
    name: 'Quiche Lorraine',
    description: 'Traditional Swiss quiche with bacon, cheese, and herbs.',
    price: '12.50', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r40',
    ingredientIds: ['i26', 'i18', 'i19', 'i40'],
    allergyLabels: ['gluten', 'dairy', 'egg'],
  },
  {
    id: 'm367',
    name: 'Caesar Salad',
    description:
      'Fresh romaine lettuce with parmesan, croutons, and Caesar dressing.',
    price: '11.90', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r40',
    ingredientIds: ['i1', 'i19', 'i42', 'i26'],
    allergyLabels: ['gluten', 'dairy', 'egg'],
  },
  {
    id: 'm368',
    name: 'Club Sandwich',
    description:
      'Triple-decker sandwich with chicken, bacon, lettuce, tomato, and mayo.',
    price: '13.80', // CHF
    categoryId: 'c2', // Main Courses
    restaurantId: 'r40',
    ingredientIds: ['i42', 'i23', 'i18', 'i1', 'i2'],
    allergyLabels: ['gluten', 'dairy', 'egg'],
  },
  {
    id: 'm369',
    name: 'Espresso',
    description: 'Strong Swiss coffee served in traditional espresso cup.',
    price: '3.20', // CHF
    categoryId: 'c4', // Beverages
    restaurantId: 'r40',
    ingredientIds: ['i53'],
    allergyLabels: [],
  },
  {
    id: 'm370',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam, dusted with cocoa.',
    price: '4.50', // CHF
    categoryId: 'c4', // Beverages
    restaurantId: 'r40',
    ingredientIds: ['i53', 'i16'],
    allergyLabels: ['dairy'],
  },
  {
    id: 'm371',
    name: 'Hot Chocolate',
    description:
      'Rich Swiss hot chocolate made with premium cocoa and steamed milk.',
    price: '5.20', // CHF
    categoryId: 'c4', // Beverages
    restaurantId: 'r40',
    ingredientIds: ['i537', 'i16'],
    allergyLabels: ['dairy'],
  },
  {
    id: 'm372',
    name: 'Apple Strudel',
    description: 'Traditional Austrian apple strudel with vanilla sauce.',
    price: '6.80', // CHF
    categoryId: 'c3', // Desserts
    restaurantId: 'r40',
    ingredientIds: ['i42', 'i47', 'i555', 'i250'],
    allergyLabels: ['gluten', 'dairy', 'egg', 'vegetarian'],
  },

  // Mint 11 (r41) - STARTER
  {
    id: 'm373',
    name: 'Edamame',
    description: 'Fresh steamed edamame beans',
    price: 5.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i566'],
    allergyLabels: ['soy'],
  },
  {
    id: 'm374',
    name: 'Baked spring rolls with chicken',
    description: 'Crispy baked spring rolls filled with seasoned chicken',
    price: 7.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i567', 'i23', 'i568'],
    allergyLabels: ['gluten', 'egg', 'dairy', 'treenut'],
  },
  {
    id: 'm375',
    name: 'Baked spring rolls vegetarian',
    description: 'Crispy baked spring rolls with vegetable filling',
    price: 7.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i567', 'i569', 'i568'],
    allergyLabels: ['gluten', 'egg', 'dairy', 'treenut', 'vegetarian'],
  },
  {
    id: 'm376',
    name: 'Summer rolls',
    description:
      'Fresh rice paper rolls with cucumber, mango, salad mix, coriander, glass noodles',
    price: 8.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i570', 'i571', 'i572', 'i573', 'i574', 'i575'],
    allergyLabels: ['dairy', 'vegetarian'],
  },
  {
    id: 'm377',
    name: 'Summer rolls - Vegetarian with avocado',
    description:
      'Fresh rice paper rolls with avocado, cucumber, mango, salad mix, coriander, glass noodles',
    price: 8.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i570', 'i4', 'i571', 'i572', 'i573', 'i574', 'i575'],
    allergyLabels: ['dairy', 'vegetarian'],
  },
  {
    id: 'm378',
    name: 'Summer rolls - With shrimps',
    description:
      'Fresh rice paper rolls with shrimps, cucumber, mango, salad mix, coriander, glass noodles',
    price: 10.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i570', 'i576', 'i571', 'i572', 'i573', 'i574', 'i575'],
    allergyLabels: ['dairy', 'shellfish'],
  },
  {
    id: 'm379',
    name: 'Summer rolls - With chicken',
    description:
      'Fresh rice paper rolls with chicken, cucumber, mango, salad mix, coriander, glass noodles',
    price: 9.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i570', 'i23', 'i571', 'i572', 'i573', 'i574', 'i575'],
    allergyLabels: ['dairy'],
  },
  {
    id: 'm380',
    name: 'Ma-La Szechuan-style tofu',
    description: 'Spicy Szechuan-style tofu with special sauce',
    price: 6.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i44', 'i577', 'i578'],
    allergyLabels: ['soy', 'treenut', 'egg', 'vegan'],
  },
  {
    id: 'm381',
    name: 'Szechuan-style Ma-La Wantan - Chicken',
    description: 'Spicy Szechuan-style dumplings filled with chicken',
    price: 7.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i579', 'i23', 'i577'],
    allergyLabels: ['gluten', 'egg', 'treenut'],
  },
  {
    id: 'm382',
    name: 'Szechuan-style Ma-La Wantan - Prawns',
    description: 'Spicy Szechuan-style dumplings filled with prawns',
    price: 9.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i579', 'i576', 'i577'],
    allergyLabels: ['gluten', 'egg', 'treenut', 'shellfish'],
  },
  {
    id: 'm383',
    name: 'Xiaolongbao',
    description: 'Steamed dumplings filled with beef',
    price: 7.5,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i579', 'i580'],
    allergyLabels: ['gluten'],
  },
  {
    id: 'm384',
    name: 'Gyoza with chicken',
    description: 'Pan-fried dumplings with chicken filling',
    price: 6.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i579', 'i23'],
    allergyLabels: ['gluten', 'treenut'],
  },
  {
    id: 'm385',
    name: 'Gyoza vegetarian',
    description: 'Pan-fried dumplings with vegetable filling',
    price: 6.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i579', 'i569'],
    allergyLabels: ['gluten', 'treenut', 'vegetarian'],
  },
  {
    id: 'm386',
    name: 'Gyoza with chicken (10 pieces)',
    description: 'Pan-fried dumplings with chicken filling - 10 pieces',
    price: 12.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i579', 'i23'],
    allergyLabels: ['gluten', 'treenut'],
  },
  {
    id: 'm387',
    name: 'Gyoza vegetarian (10 pieces)',
    description: 'Pan-fried dumplings with vegetable filling - 10 pieces',
    price: 12.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i579', 'i569'],
    allergyLabels: ['gluten', 'treenut', 'vegetarian'],
  },
  {
    id: 'm388',
    name: 'Bao bun - Chicken',
    description: 'Steamed bun with spicy chicken filling',
    price: 6.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i581', 'i23', 'i577'],
    allergyLabels: ['gluten', 'soy', 'treenut'],
  },
  {
    id: 'm389',
    name: 'Bao bun - Beef',
    description: 'Steamed bun with spicy beef filling',
    price: 6.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i581', 'i580', 'i577'],
    allergyLabels: ['gluten', 'soy', 'treenut'],
  },
  {
    id: 'm390',
    name: 'Dim sum mix',
    description: 'Mixed dim sums with prawns & chicken - 8 pieces',
    price: 11.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i579', 'i576', 'i23', 'i582'],
    allergyLabels: ['gluten', 'shellfish', 'treenut', 'dairy'],
  },
  {
    id: 'm391',
    name: 'Korean prawn pancakes',
    description: 'Pancakes with shrimps, potatoes, carrots, zucchini, onion',
    price: 13.9,
    categoryId: 'c1', // Appetizers
    restaurantId: 'r41',
    ingredientIds: ['i576', 'i28', 'i21', 'i583', 'i34', 'i584'],
    allergyLabels: ['gluten', 'treenut', 'dairy', 'shellfish'],
  },

  // Mint 11 (r41) - RAMEN / UDON
  {
    id: 'm392',
    name: 'Heasanmul prawns with vegetables',
    description: 'Spicy noodle soup with prawns and vegetables',
    price: 23.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i585', 'i576', 'i586', 'i587'],
    allergyLabels: ['gluten', 'egg', 'dairy', 'shellfish'],
  },
  {
    id: 'm393',
    name: 'Soegogi beef with vegetables',
    description: 'Spicy noodle soup with beef and vegetables',
    price: 20.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i585', 'i580', 'i586', 'i588'],
    allergyLabels: ['gluten', 'egg', 'soy'],
  },
  {
    id: 'm394',
    name: 'Dalk chicken with vegetables',
    description: 'Spicy noodle soup with chicken and vegetables',
    price: 18.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i585', 'i23', 'i586'],
    allergyLabels: ['gluten', 'egg'],
  },
  {
    id: 'm395',
    name: 'Yachae vegetarian',
    description: 'Spicy vegetarian noodle soup with vegetables',
    price: 16.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i585', 'i586'],
    allergyLabels: ['gluten', 'egg', 'vegetarian'],
  },

  // Mint 11 (r41) - PHỞ
  {
    id: 'm396',
    name: 'Phở Bò Beef',
    description:
      'Traditional Vietnamese soup with rice ribbon noodles, beef, traditional spices, bean sprouts, spring onions & herbs',
    price: 20.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i589', 'i580', 'i590', 'i591', 'i592', 'i40'],
    allergyLabels: ['gluten', 'dairy'],
  },
  {
    id: 'm397',
    name: 'Phở Gà Chicken',
    description:
      'Traditional Vietnamese soup with rice ribbon noodles, chicken, traditional spices, bean sprouts, spring onions & herbs',
    price: 18.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i589', 'i23', 'i590', 'i591', 'i592', 'i40'],
    allergyLabels: ['dairy'],
  },
  {
    id: 'm398',
    name: 'Phở Ăn Chay Vegetarian',
    description:
      'Traditional Vietnamese vegetarian soup with rice ribbon noodles, traditional spices, bean sprouts, spring onions & herbs',
    price: 16.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i589', 'i590', 'i591', 'i592', 'i40'],
    allergyLabels: ['dairy', 'vegetarian'],
  },

  // Mint 11 (r41) - CULINARY CHARMS
  {
    id: 'm399',
    name: 'Mint11 Chicken',
    description: 'Chicken with Thai sauce, salad mix, herbs & pan bread',
    price: 22.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i23', 'i593', 'i572', 'i40', 'i594'],
    allergyLabels: ['gluten', 'dairy', 'treenut'],
  },
  {
    id: 'm400',
    name: 'Bun bar with chicken skewer',
    description:
      'Glass noodles, salad mix, peanuts, fried onions & lime dressing',
    price: 22.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i574', 'i572', 'i24', 'i595', 'i596', 'i23'],
    allergyLabels: ['egg', 'dairy', 'treenut', 'peanut'],
  },
  {
    id: 'm401',
    name: 'Thai curry soup pot - Chicken',
    description:
      'Spicy curry soup with chicken, coconut milk, wok vegetables & rice noodles',
    price: 22.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i23', 'i597', 'i598', 'i589'],
    allergyLabels: ['gluten', 'dairy'],
  },
  {
    id: 'm402',
    name: 'Thai curry soup pot - Vegetarian',
    description:
      'Spicy vegetarian curry soup with coconut milk, wok vegetables & rice noodles',
    price: 22.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i597', 'i598', 'i589'],
    allergyLabels: ['gluten', 'dairy', 'vegetarian'],
  },
  {
    id: 'm403',
    name: 'Tomyam gung with prawns',
    description:
      'Sour and spicy soup with prawns, chili, lemongrass, vegetables, jasmine rice',
    price: 26.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i576', 'i599', 'i600', 'i586', 'i10'],
    allergyLabels: ['dairy', 'shellfish'],
  },
  {
    id: 'm404',
    name: 'Red curry chicken',
    description:
      'Spicy red curry with chicken, coconut milk, wok vegetables & jasmine rice',
    price: 22.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i23', 'i601', 'i597', 'i598', 'i10'],
    allergyLabels: ['dairy'],
  },
  {
    id: 'm405',
    name: 'Red curry duck',
    description:
      'Spicy red curry with duck, coconut milk, wok vegetables & jasmine rice',
    price: 22.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i602', 'i601', 'i597', 'i598', 'i10'],
    allergyLabels: ['dairy'],
  },
  {
    id: 'm406',
    name: 'Red Curry Vegetable',
    description: 'Spicy red curry with vegetables and jasmine rice (tofu +€2)',
    price: 20.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i601', 'i598', 'i10'],
    allergyLabels: ['dairy', 'vegetarian'],
  },
  {
    id: 'm407',
    name: 'Chicken with home-style wok vegetables',
    description: 'Stir-fried chicken with wok vegetables and jasmine rice',
    price: 20.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i23', 'i598', 'i10'],
    allergyLabels: ['soy', 'treenut'],
  },
  {
    id: 'm408',
    name: 'Cashew nut chicken',
    description:
      'Fried chicken with wok vegetables, cashew nuts & jasmine rice',
    price: 20.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i23', 'i598', 'i60', 'i10'],
    allergyLabels: ['shellfish', 'soy', 'treenut'],
  },
  {
    id: 'm409',
    name: 'Ma-La Beef',
    description: 'Stir-fried beef with special spicy sauce & jasmine rice',
    price: 22.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i580', 'i577', 'i10'],
    allergyLabels: ['gluten', 'soy', 'treenut'],
  },

  // Mint 11 (r41) - THE POWER OF ASIA BOWL
  {
    id: 'm410',
    name: 'Korean beef bibimbap bowl',
    description:
      'Beef, kimchi, quinoa, avocado, broccoli, salad mix, green soybeans',
    price: 23.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i580', 'i603', 'i51', 'i4', 'i604', 'i572', 'i605'],
    allergyLabels: ['gluten', 'dairy', 'soy', 'treenut'],
  },
  {
    id: 'm411',
    name: 'Salmon Bowl',
    description:
      'Salmon fillet, avocado, quinoa, kimchi, green soybeans, salad mix, seaweed',
    price: 25.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i606', 'i4', 'i51', 'i603', 'i605', 'i572', 'i607'],
    allergyLabels: ['gluten', 'dairy', 'soy', 'treenut', 'fish'],
  },
  {
    id: 'm412',
    name: 'Vegetable Bowl',
    description:
      'Quinoa, avocado, salad mix, wok vegetables, green soybeans & mango (tofu +€2)',
    price: 20.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i51', 'i4', 'i572', 'i598', 'i605', 'i608'],
    allergyLabels: ['gluten', 'soy', 'treenut', 'vegetarian'],
  },
  {
    id: 'm413',
    name: 'Gyoza noodle bowl - Chicken',
    description:
      'Noodles with fried chicken gyoza, salad mix, herbs in spicy Szechuan style',
    price: 17.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i585', 'i579', 'i23', 'i572', 'i40', 'i577'],
    allergyLabels: ['gluten', 'egg', 'treenut'],
  },
  {
    id: 'm414',
    name: 'Gyoza noodle bowl - Vegetarian',
    description:
      'Noodles with fried vegetarian gyoza, salad mix, herbs in spicy Szechuan style',
    price: 17.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i585', 'i579', 'i569', 'i572', 'i40', 'i577'],
    allergyLabels: ['gluten', 'egg', 'treenut', 'vegetarian'],
  },
  {
    id: 'm415',
    name: 'Prawn bowl',
    description:
      'Fried prawns with avocado, quinoa, kimchi, green soybeans, salad mix & seaweed',
    price: 24.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i576', 'i4', 'i51', 'i603', 'i605', 'i572', 'i607'],
    allergyLabels: ['gluten', 'dairy', 'soy', 'treenut', 'shellfish'],
  },

  // Mint 11 (r41) - SALAD
  {
    id: 'm416',
    name: 'Beef salad with herbs & spicy dressing',
    description: 'Fresh beef salad with aromatic herbs and spicy dressing',
    price: 13.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i580', 'i40', 'i609', 'i572'],
    allergyLabels: ['egg', 'soy', 'treenut'],
  },
  {
    id: 'm417',
    name: 'Thai avocado prawn salad',
    description: 'Spicy salad with prawns, avocado, quinoa, and mango',
    price: 15.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i576', 'i4', 'i51', 'i608', 'i572'],
    allergyLabels: ['dairy', 'treenut', 'shellfish'],
  },
  {
    id: 'm418',
    name: 'Thai glass noodle salad with herbs',
    description: 'Refreshing glass noodle salad with fresh herbs',
    price: 6.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i574', 'i40'],
    allergyLabels: ['dairy', 'soy', 'treenut', 'vegetarian'],
  },
  {
    id: 'm419',
    name: 'Thai glass noodle salad with prawns',
    description: 'Glass noodle salad with prawns and fresh herbs',
    price: 6.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i574', 'i576', 'i40'],
    allergyLabels: ['dairy', 'soy', 'treenut', 'shellfish'],
  },
  {
    id: 'm420',
    name: 'Mixed salad with fresh mango strips',
    description: 'Fresh mixed salad topped with sweet mango strips',
    price: 13.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i572', 'i608'],
    allergyLabels: ['soy', 'treenut', 'vegetarian'],
  },
  {
    id: 'm421',
    name: 'Kimchi salad',
    description: 'Traditional Korean fermented cabbage salad',
    price: 6.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i603'],
    allergyLabels: ['dairy', 'treenut', 'vegetarian'],
  },
  {
    id: 'm422',
    name: 'Avocado mango salad',
    description: 'Fresh salad with creamy avocado and sweet mango',
    price: 9.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i4', 'i608', 'i572'],
    allergyLabels: ['vegetarian'],
  },
  {
    id: 'm423',
    name: 'Thai chicken breast strips salad',
    description: 'Salad with grilled chicken breast strips and Thai dressing',
    price: 8.9,
    categoryId: 'c2', // Main Courses
    restaurantId: 'r41',
    ingredientIds: ['i23', 'i572', 'i609'],
    allergyLabels: ['dairy', 'soy', 'treenut'],
  },
];
