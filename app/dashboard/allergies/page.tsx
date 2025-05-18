"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { allergies } from "@/data/allergies"
import { ingredients } from "@/data/ingredients"
import type { Allergy } from "@/data/allergies"

export default function AllergiesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const action = searchParams.get("action")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(action === "add")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentAllergy, setCurrentAllergy] = useState<Allergy | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filtering allergies based on search query
  const filteredAllergies = allergies.filter(
    (allergy) =>
      allergy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      allergy.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAddClick = () => {
    setIsAddDialogOpen(true)
    router.push("/dashboard/allergies?action=add")
  }

  const handleEditClick = (allergy: Allergy) => {
    setCurrentAllergy(allergy)
    setIsEditDialogOpen(true)
  }

  const handleDeleteClick = (allergy: Allergy) => {
    setCurrentAllergy(allergy)
    setIsDeleteDialogOpen(true)
  }

  const closeAddDialog = () => {
    setIsAddDialogOpen(false)
    router.push("/dashboard/allergies")
  }

  // Get ingredient names from their IDs
  const getIngredientNames = (ingredientIds: string[]) => {
    return ingredientIds.map((id) => {
      const ingredient = ingredients.find((ing) => ing.id === id)
      return ingredient ? ingredient.name : id
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Allergies</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 w-1/3">
          <Input
            placeholder="Search allergies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleAddClick} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Allergy
        </Button>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Forbidden Ingredients</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAllergies.map((allergy) => (
              <TableRow key={allergy.id}>
                <TableCell className="font-mono text-xs">{allergy.id}</TableCell>
                <TableCell className="font-medium">{allergy.name}</TableCell>
                <TableCell>{allergy.description}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {getIngredientNames(allergy.forbiddenIngredientIds).map((name, index) => (
                      <Badge key={index} variant="secondary">
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
                      <DropdownMenuItem onClick={() => handleEditClick(allergy)}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteClick(allergy)}>
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

        {filteredAllergies.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">No allergies found. Try adjusting your search.</div>
        )}

        <div className="flex items-center justify-between px-4 py-2 border-t">
          <div className="text-sm text-muted-foreground">
            Showing {filteredAllergies.length} of {allergies.length} allergies
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

      {/* Add Allergy Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={closeAddDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Allergy</DialogTitle>
            <DialogDescription>Enter the details for the new allergy.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right font-medium">
                Name
              </label>
              <Input id="name" placeholder="Allergy name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right font-medium">
                Description
              </label>
              <Input id="description" placeholder="Allergy description" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <label htmlFor="forbidden" className="text-right font-medium mt-2">
                Forbidden Ingredients
              </label>
              <div className="col-span-3">
                <p className="text-sm text-muted-foreground mb-2">
                  Select ingredients that should be excluded for this allergy
                </p>
                <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border rounded-md">
                  {ingredients.map((ingredient) => (
                    <Badge key={ingredient.id} variant="outline" className="cursor-pointer hover:bg-secondary">
                      {ingredient.name}
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
              Add Allergy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Allergy Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={(open) => !open && setIsEditDialogOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Allergy</DialogTitle>
            <DialogDescription>Update the details for this allergy.</DialogDescription>
          </DialogHeader>

          {currentAllergy && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-id" className="text-right font-medium">
                  ID
                </label>
                <Input id="edit-id" value={currentAllergy.id} className="col-span-3" disabled />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-name" className="text-right font-medium">
                  Name
                </label>
                <Input id="edit-name" defaultValue={currentAllergy.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-description" className="text-right font-medium">
                  Description
                </label>
                <Input id="edit-description" defaultValue={currentAllergy.description} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <label htmlFor="edit-forbidden" className="text-right font-medium mt-2">
                  Forbidden Ingredients
                </label>
                <div className="col-span-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Select ingredients that should be excluded for this allergy
                  </p>
                  <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border rounded-md">
                    {ingredients.map((ingredient) => (
                      <Badge
                        key={ingredient.id}
                        variant={
                          currentAllergy.forbiddenIngredientIds.includes(ingredient.id) ? "secondary" : "outline"
                        }
                        className="cursor-pointer hover:bg-secondary"
                      >
                        {ingredient.name}
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
              Update Allergy
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
              Are you sure you want to delete the allergy "{currentAllergy?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(false)}>
              Delete Allergy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
