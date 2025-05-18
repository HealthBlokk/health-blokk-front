"use client"

import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"

    // Redirect to login page
    router.push("/login")
    router.refresh()
  }

  return (
    <Button variant="outline" className="w-full justify-start gap-2 text-red-600" onClick={handleLogout}>
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  )
}
