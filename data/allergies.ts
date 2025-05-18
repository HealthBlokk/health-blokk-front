export interface Allergy {
  id: string
  name: string
  description: string
  forbiddenIngredientIds: string[]
}

export const allergies: Allergy[] = [
  {
    id: "a1",
    name: "Gluten",
    description: "Allergy to proteins found in wheat, barley, and rye",
    forbiddenIngredientIds: ["i13", "i39", "i19", "i25"], // Flour, Bread, Pasta, Noodles
  },
  {
    id: "a2",
    name: "Dairy",
    description: "Allergy to milk and milk products",
    forbiddenIngredientIds: ["i11", "i17", "i20", "i30", "i32", "i37"], // Cheese, Butter, Cream, Sour Cream, Blue Cheese, Mozzarella
  },
  {
    id: "a3",
    name: "Shellfish",
    description: "Allergy to crustaceans like shrimp, crab, and lobster",
    forbiddenIngredientIds: ["i12", "i14", "i18"], // Squid, Shrimp, Lobster
  },
  {
    id: "a4",
    name: "Nuts",
    description: "Allergy to tree nuts and peanuts",
    forbiddenIngredientIds: ["i24", "i52"], // Peanut, Tahini (made from sesame)
  },
  {
    id: "a5",
    name: "Eggs",
    description: "Allergy to eggs and egg products",
    forbiddenIngredientIds: ["i26"], // Egg
  },
  {
    id: "a6",
    name: "Fish",
    description: "Allergy to finned fish like salmon and tuna",
    forbiddenIngredientIds: ["i16"], // Salmon
  },
  {
    id: "a7",
    name: "Soy",
    description: "Allergy to soybeans and soy products",
    forbiddenIngredientIds: ["i7", "i44"], // Tofu, Tofu chunks
  },
]
