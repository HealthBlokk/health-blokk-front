"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
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
import { ingredients } from "@/data/ingredients"
import type { Ingredient } from "@/types/ingredient"

export default function IngredientsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const action = searchParams.get("action")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(action === "add")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentIngredient, setCurrentIngredient] = useState<Ingredient | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filtering ingredients based on search query
  const filteredIngredients = ingredients.filter((ingredient) => {
    if (!ingredient || typeof ingredient.name !== "string") return false
    return ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const handleAddClick = () => {
    setIsAddDialogOpen(true)
    router.push("/dashboard/ingredients?action=add")
  }

  const handleEditClick = (ingredient: Ingredient) => {
    setCurrentIngredient(ingredient)
    setIsEditDialogOpen(true)
  }

  const handleDeleteClick = (ingredient: Ingredient) => {
    setCurrentIngredient(ingredient)
    setIsDeleteDialogOpen(true)
  }

  const closeAddDialog = () => {
    setIsAddDialogOpen(false)
    router.push("/dashboard/ingredients")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Ingredients</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 w-1/3">
          <Input
            placeholder="Search ingredients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleAddClick} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Ingredient
        </Button>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIngredients.map((ingredient) => (
              <TableRow key={ingredient.id}>
                <TableCell className="font-mono text-xs">{ingredient.id}</TableCell>
                <TableCell className="font-medium">{ingredient.name}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditClick(ingredient)}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteClick(ingredient)}>
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

        {filteredIngredients.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">No ingredients found. Try adjusting your search.</div>
        )}

        <div className="flex items-center justify-between px-4 py-2 border-t">
          <div className="text-sm text-muted-foreground">
            Showing {filteredIngredients.length} of {ingredients.length} ingredients
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

      {/* Add Ingredient Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={closeAddDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Ingredient</DialogTitle>
            <DialogDescription>Enter the details for the new ingredient.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right font-medium">
                Name
              </label>
              <Input id="name" placeholder="Ingredient name" className="col-span-3" />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={closeAddDialog}>
              Cancel
            </Button>
            <Button type="submit" onClick={closeAddDialog}>
              Add Ingredient
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Ingredient Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={(open) => !open && setIsEditDialogOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Ingredient</DialogTitle>
            <DialogDescription>Update the details for this ingredient.</DialogDescription>
          </DialogHeader>

          {currentIngredient && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-id" className="text-right font-medium">
                  ID
                </label>
                <Input id="edit-id" value={currentIngredient.id} className="col-span-3" disabled />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-name" className="text-right font-medium">
                  Name
                </label>
                <Input id="edit-name" defaultValue={currentIngredient.name} className="col-span-3" />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={() => setIsEditDialogOpen(false)}>
              Update Ingredient
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
              Are you sure you want to delete the ingredient "{currentIngredient?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsDeleteDialogOpen(false)}>
              Delete Ingredient
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
