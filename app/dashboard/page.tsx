import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UtensilsCrossed, Apple, AlertTriangle, Menu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { restaurants } from "@/data/restaurants"
import { ingredients } from "@/data/ingredients"
import { allergies } from "@/data/allergies"
import { menuItems } from "@/data/menu-items"

export default function DashboardPage() {
  const stats = [
    {
      title: "Restaurants",
      value: restaurants.length,
      description: "Total restaurants in the system",
      icon: UtensilsCrossed,
      href: "/dashboard/restaurants",
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Menu Items",
      value: menuItems.length,
      description: "Total menu items available",
      icon: Menu,
      href: "/dashboard/menu-items",
      color: "bg-purple-50 text-purple-700",
    },
    {
      title: "Ingredients",
      value: ingredients.length,
      description: "Total ingredients available",
      icon: Apple,
      href: "/dashboard/ingredients",
      color: "bg-green-50 text-green-700",
    },
    {
      title: "Allergies",
      value: allergies.length,
      description: "Total allergy categories",
      icon: AlertTriangle,
      href: "/dashboard/allergies",
      color: "bg-amber-50 text-amber-700",
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:bg-gray-50 transition-colors cursor-pointer h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <CardDescription>{stat.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md">Add New Restaurant</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/restaurants?action=add">
                <Button className="w-full">Add Restaurant</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md">Add New Menu Item</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/menu-items?action=add">
                <Button className="w-full">Add Menu Item</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md">Add New Ingredient</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/ingredients?action=add">
                <Button className="w-full">Add Ingredient</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md">Add New Allergy</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/allergies?action=add">
                <Button className="w-full">Add Allergy</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
