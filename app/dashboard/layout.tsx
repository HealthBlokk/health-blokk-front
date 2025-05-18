import type React from "react"
import Link from "next/link"
import { LayoutGrid, UtensilsCrossed, Apple, AlertTriangle, Home, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import LogoutButton from "@/components/logout-button"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
    { href: "/dashboard/restaurants", label: "Restaurants", icon: UtensilsCrossed },
    { href: "/dashboard/menu-items", label: "Menu Items", icon: Menu },
    { href: "/dashboard/ingredients", label: "Ingredients", icon: Apple },
    { href: "/dashboard/allergies", label: "Allergies", icon: AlertTriangle },
  ]

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-100 border-r">
        <div className="p-4 border-b bg-white flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t space-y-2">
            <Link href="/">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Back to App
              </Button>
            </Link>
            <LogoutButton />
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        <div className="h-full p-6">{children}</div>
      </main>
    </div>
  )
}
