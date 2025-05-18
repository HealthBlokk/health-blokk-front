export interface AllergyLabel {
  id: string;
  name: string;
  description: string;
}

export const allergyLabels: AllergyLabel[] = [
  {
    id: 'gluten',
    name: 'Gluten-Free',
    description:
      'Suitable for people with celiac disease or gluten sensitivity',
  },
  {
    id: 'dairy',
    name: 'Dairy-Free',
    description: 'No milk, cheese, butter, or other dairy products',
  },
  {
    id: 'egg',
    name: 'Egg-Free',
    description: 'No eggs or products containing eggs',
  },
  {
    id: 'soy',
    name: 'Soy-Free',
    description: 'No soy or products containing soy',
  },
  {
    id: 'peanut',
    name: 'Peanut-Free',
    description: 'No peanuts or products containing peanuts',
  },
  {
    id: 'treenut',
    name: 'Tree Nut-Free',
    description:
      'No tree nuts (almonds, walnuts, etc.) or products containing them',
  },
  {
    id: 'fish',
    name: 'Fish-Free',
    description: 'No fish or products containing fish',
  },
  {
    id: 'shellfish',
    name: 'Shellfish-Free',
    description: 'No shellfish or products containing shellfish',
  },
  {
    id: 'wheat',
    name: 'Wheat-Free',
    description: 'No wheat or products containing wheat',
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian',
    description: 'No meat, but may include dairy, eggs, and honey',
  },
  {
    id: 'vegan',
    name: 'Vegan',
    description:
      'No animal products whatsoever, including dairy, eggs, and honey',
  },
];
