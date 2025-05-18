"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Plus, Pencil, Trash2, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { restaurants } from "@/data/restaurants"
import { allergyLabels } from "@/data/allergy-labels"
import type { Restaurant } from "@/types/restaurant"

export default function RestaurantsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const action = searchParams.get("action")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(action === "add")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filtering restaurants based on search query
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAddClick = () => {
    setIsAddDialogOpen(true)
    router.push("/dashboard/restaurants?action=add")
  }

  const handleEditClick = (restaurant: Restaurant) => {
    setCurrentRestaurant(restaurant)
    setIsEditDialogOpen(true)
  }

  const handleDeleteClick = (restaurant: Restaurant) => {
    setCurrentRestaurant(restaurant)
    setIsDeleteDialogOpen(true)
  }

  const closeAddDialog = () => {
    setIsAddDialogOpen(false)
    router.push("/dashboard/restaurants")
  }

  // Get allergy label names from IDs
  const getAllergyLabelNames = (allergyIds: string[]) => {
    return allergyIds.map((id) => {
      const label = allergyLabels.find((a) => a.id === id)
      return label ? label.name : id
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Restaurants</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 w-1/3">
          <Input
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleAddClick} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Restaurant
        </Button>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Dietary Options</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRestaurants.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell className="font-medium">{restaurant.name}</TableCell>
                <TableCell>{restaurant.address}</TableCell>
                <TableCell>{restaurant.phone}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {getAllergyLabelNames(restaurant.allergyLabels).map((name, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {name}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditClick(restaurant)}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteClick(restaurant)}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredRestaurants.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">No restaurants found. Try adjusting your search.</div>
        )}

        <div className="flex items-center justify-between px-4 py-2 border-t">
          <div className="text-sm text-muted-foreground">
            Showing {filteredRestaurants.length} of {restaurants.length} restaurants
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add Restaurant Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={closeAddDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Restaurant</DialogTitle>
            <DialogDescription>Enter the details for the new restaurant.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right font-medium">
                Name
              </label>
              <Input id="name" placeholder="Restaurant name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="address" className="text-right font-medium">
                Address
              </label>
              <Input id="address" placeholder="Restaurant address" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="phone" className="text-right font-medium">
                Phone
              </label>
              <Input id="phone" placeholder="Phone number" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right font-medium">
                Email
              </label>
              <Input id="email" placeholder="Email address" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right font-medium">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Restaurant description"
                className="col-span-3 border rounded-md p-2"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="lat" className="text-right font-medium">
                Latitude
              </label>
              <Input id="lat" type="number" placeholder="Latitude" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="lng" className="text-right font-medium">
                Longitude
              </label>
              <Input id="lng" type="number" placeholder="Longitude" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <label htmlFor="allergyLabels" className="text-right font-medium mt-2">
                Dietary Options
              </label>
              <div className="col-span-3">
                <p className="text-sm text-muted-foreground mb-2">
                  Select dietary options this restaurant accommodates
                </p>
                <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border rounded-md">
                  {allergyLabels.map((label) => (
                    <Badge key={label.id} variant="outline" className="cursor-pointer hover:bg-secondary">
                      {label.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={closeAddDialog}>
              Cancel
            </Button>
            <Button type="submit" onClick={closeAddDialog}>
              Add Restaurant
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Restaurant Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={(open) => !open && setIsEditDialogOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Restaurant</DialogTitle>
            <DialogDescription>Update the details for {currentRestaurant?.name}.</DialogDescription>
          </DialogHeader>

          {currentRestaurant && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-name" className="text-right font-medium">
                  Name
                </label>
                <Input id="edit-name" defaultValue={currentRestaurant.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-address" className="text-right font-medium">
                  Address
                </label>
                <Input id="edit-address" defaultValue={currentRestaurant.address} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-phone" className="text-right font-medium">
                  Phone
                </label>
                <Input id="edit-phone" defaultValue={currentRestaurant.phone} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-email" className="text-right font-medium">
                  Email
                </label>
                <Input id="edit-email" defaultValue={currentRestaurant.email} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-description" className="text-right font-medium">
                  Description
                </label>
                <textarea
                  id="edit-description"
                  defaultValue={currentRestaurant.description}
                  className="col-span-3 border rounded-md p-2"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-lat" className="text-right font-medium">
                  Latitude
                </label>
                <Input id="edit-lat" type="number" defaultValue={currentRestaurant.latitude} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-lng" className="text-right font-medium">
                  Longitude
                </label>
                <Input id="edit-lng" type="number" defaultValue={currentRestaurant.longitude} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <label htmlFor="edit-allergyLabels" className="text-right font-medium mt-2">
                  Dietary Options
                </label>
                <div className="col-span-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Select dietary options this restaurant accommodates
                  </p>
                  <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border rounded-md">
                    {allergyLabels.map((label) => (
                      <Badge
                        key={label.id}
                        variant={currentRestaurant.allergyLabels.includes(label.id) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-secondary"
                      >
                        {label.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={() => setIsEditDialogOpen(false)}>
              Update Restaurant
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={(open) => !open && setIsDeleteDialogOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {currentRestaurant?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(false)}>
              Delete Restaurant
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
