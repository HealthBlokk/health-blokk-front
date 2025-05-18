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
import { menuItems } from "@/data/menu-items"
import { restaurants } from "@/data/restaurants"
import { allergyLabels } from "@/data/allergy-labels"
import type { MenuItem } from "@/types/menu"

export default function MenuItemsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const action = searchParams.get("action")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(action === "add")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuItem | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filtering menu items based on search query
  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAddClick = () => {
    setIsAddDialogOpen(true)
    router.push("/dashboard/menu-items?action=add")
  }

  const handleEditClick = (menuItem: MenuItem) => {
    setCurrentMenuItem(menuItem)
    setIsEditDialogOpen(true)
  }

  const handleDeleteClick = (menuItem: MenuItem) => {
    setCurrentMenuItem(menuItem)
    setIsDeleteDialogOpen(true)
  }

  const closeAddDialog = () => {
    setIsAddDialogOpen(false)
    router.push("/dashboard/menu-items")
  }

  // Get restaurant name from ID
  const getRestaurantName = (restaurantId: string) => {
    const restaurant = restaurants.find((r) => r.id === restaurantId)
    return restaurant ? restaurant.name : restaurantId
  }

  // Get allergy label names from IDs - safely handle undefined allergyLabels
  const getAllergyLabelNames = (allergyIds: string[] = []) => {
    return allergyIds.map((id) => {
      const label = allergyLabels.find((a) => a.id === id)
      return label ? label.name : id
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Menu Items</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 w-1/3">
          <Input
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleAddClick} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Menu Item
        </Button>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Restaurant</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Dietary Options</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMenuItems.map((menuItem) => (
              <TableRow key={menuItem.id}>
                <TableCell className="font-medium">{menuItem.name}</TableCell>
                <TableCell>{getRestaurantName(menuItem.restaurantId)}</TableCell>
                <TableCell>${menuItem.price.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {menuItem.allergyLabels &&
                      getAllergyLabelNames(menuItem.allergyLabels).map((name, index) => (
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
                      <DropdownMenuItem onClick={() => handleEditClick(menuItem)}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteClick(menuItem)}>
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

        {filteredMenuItems.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">No menu items found. Try adjusting your search.</div>
        )}

        <div className="flex items-center justify-between px-4 py-2 border-t">
          <div className="text-sm text-muted-foreground">
            Showing {filteredMenuItems.length} of {menuItems.length} menu items
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

      {/* Add Menu Item Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={closeAddDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Menu Item</DialogTitle>
            <DialogDescription>Enter the details for the new menu item.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right font-medium">
                Name
              </label>
              <Input id="name" placeholder="Menu item name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right font-medium">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Menu item description"
                className="col-span-3 border rounded-md p-2"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="price" className="text-right font-medium">
                Price
              </label>
              <Input id="price" type="number" step="0.01" placeholder="Price" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="restaurant" className="text-right font-medium">
                Restaurant
              </label>
              <select id="restaurant" className="col-span-3 border rounded-md p-2">
                <option value="">Select a restaurant</option>
                {restaurants.map((restaurant) => (
                  <option key={restaurant.id} value={restaurant.id}>
                    {restaurant.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <label htmlFor="allergyLabels" className="text-right font-medium mt-2">
                Dietary Options
              </label>
              <div className="col-span-3">
                <p className="text-sm text-muted-foreground mb-2">Select dietary options this menu item accommodates</p>
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
              Add Menu Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Menu Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={(open) => !open && setIsEditDialogOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Menu Item</DialogTitle>
            <DialogDescription>Update the details for {currentMenuItem?.name}.</DialogDescription>
          </DialogHeader>

          {currentMenuItem && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-name" className="text-right font-medium">
                  Name
                </label>
                <Input id="edit-name" defaultValue={currentMenuItem.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-description" className="text-right font-medium">
                  Description
                </label>
                <textarea
                  id="edit-description"
                  defaultValue={currentMenuItem.description}
                  className="col-span-3 border rounded-md p-2"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-price" className="text-right font-medium">
                  Price
                </label>
                <Input
                  id="edit-price"
                  type="number"
                  step="0.01"
                  defaultValue={currentMenuItem.price}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-restaurant" className="text-right font-medium">
                  Restaurant
                </label>
                <select
                  id="edit-restaurant"
                  defaultValue={currentMenuItem.restaurantId}
                  className="col-span-3 border rounded-md p-2"
                >
                  {restaurants.map((restaurant) => (
                    <option key={restaurant.id} value={restaurant.id}>
                      {restaurant.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <label htmlFor="edit-allergyLabels" className="text-right font-medium mt-2">
                  Dietary Options
                </label>
                <div className="col-span-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Select dietary options this menu item accommodates
                  </p>
                  <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border rounded-md">
                    {allergyLabels.map((label) => (
                      <Badge
                        key={label.id}
                        variant={
                          currentMenuItem.allergyLabels && currentMenuItem.allergyLabels.includes(label.id)
                            ? "default"
                            : "outline"
                        }
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
              Update Menu Item
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
              Are you sure you want to delete the menu item "{currentMenuItem?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(false)}>
              Delete Menu Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
