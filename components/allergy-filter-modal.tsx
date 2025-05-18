"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { allergyLabels } from "@/data/allergy-labels"
import { restaurants } from "@/data/restaurants"
import type { Restaurant } from "@/types/restaurant"

interface AllergyFilterModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onFilterApply: (filteredRestaurants: Restaurant[], selectedAllergies: string[]) => void
  initialSelectedAllergies?: string[]
}

export default function AllergyFilterModal({
  open,
  onOpenChange,
  onFilterApply,
  initialSelectedAllergies = [],
}: AllergyFilterModalProps) {
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>(initialSelectedAllergies)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Update selected allergies when initialSelectedAllergies changes
  useEffect(() => {
    setSelectedAllergies(initialSelectedAllergies)
  }, [initialSelectedAllergies])

  const toggleAllergy = (allergyId: string) => {
    setSelectedAllergies((prev) => {
      if (prev.includes(allergyId)) {
        return prev.filter((id) => id !== allergyId)
      } else {
        return [...prev, allergyId]
      }
    })
  }

  const applyFilter = () => {
    if (selectedAllergies.length === 0) {
      // If no allergies selected, show all restaurants
      onFilterApply(restaurants, [])
      onOpenChange(false)
      return
    }

    // Filter restaurants that accommodate all selected allergies/diets
    const filteredRestaurants = restaurants.filter((restaurant) => {
      // Check if the restaurant accommodates all selected allergies
      return selectedAllergies.every((allergyId) => restaurant.allergyLabels.includes(allergyId))
    })

    onFilterApply(filteredRestaurants, selectedAllergies)
    onOpenChange(false)
  }

  // Group allergy labels by category
  const foodAllergies = allergyLabels.filter((label) => !["vegetarian", "vegan", "gluten"].includes(label.id))

  const specialDiets = allergyLabels.filter((label) => ["vegetarian", "vegan", "gluten"].includes(label.id))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-md z-[2000] p-6 ${isMobile ? "mx-4 max-h-[90vh] overflow-auto" : ""}`}>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Select your diet to get started.</DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-6">
          {/* Food Allergies & Restrictions Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Food Allergies & Restrictions</h3>
            <div className="space-y-3">
              {foodAllergies.map((allergy) => (
                <div key={allergy.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`allergy-${allergy.id}`}
                    checked={selectedAllergies.includes(allergy.id)}
                    onCheckedChange={() => toggleAllergy(allergy.id)}
                  />
                  <label
                    htmlFor={`allergy-${allergy.id}`}
                    className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {allergy.name}
                  </label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <Checkbox id="other-allergy" />
                <label
                  htmlFor="other-allergy"
                  className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Other / Not Listed
                </label>
              </div>
            </div>
          </div>

          {/* Special Diets Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Special Diets</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="diet-vegetarian"
                  checked={selectedAllergies.includes("vegetarian")}
                  onCheckedChange={() => toggleAllergy("vegetarian")}
                />
                <label
                  htmlFor="diet-vegetarian"
                  className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Vegetarian (lacto-ovo)
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="diet-vegan"
                  checked={selectedAllergies.includes("vegan")}
                  onCheckedChange={() => toggleAllergy("vegan")}
                />
                <label
                  htmlFor="diet-vegan"
                  className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Vegan / Plant-based
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="diet-gluten-free"
                  checked={selectedAllergies.includes("gluten")}
                  onCheckedChange={() => toggleAllergy("gluten")}
                />
                <label
                  htmlFor="diet-gluten-free"
                  className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Gluten-Free
                </label>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={applyFilter}
            className={`w-full py-6 text-lg rounded-full ${
              isMobile ? "bg-green-400 hover:bg-green-500 text-black" : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
            variant={isMobile ? "default" : "secondary"}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
