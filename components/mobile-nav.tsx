import Link from "next/link"
import { Home, Search, Heart, User } from "lucide-react"

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-[999]">
      <div className="flex justify-around items-center py-2">
        <Link href="/" className="flex flex-col items-center p-2 text-green-500">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link href="#" className="flex flex-col items-center p-2 text-gray-500">
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">Explore</span>
        </Link>

        <Link href="#" className="flex flex-col items-center p-2 text-gray-500">
          <Heart className="w-6 h-6" />
          <span className="text-xs mt-1">Favorites</span>
        </Link>

        <Link href="#" className="flex flex-col items-center p-2 text-gray-500">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  )
}
