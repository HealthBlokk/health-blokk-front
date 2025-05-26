'use client';

import AllergyFilterModal from '@/components/allergy-filter-modal';
import FilterChips from '@/components/filter-chips';
import FloatingFilterIndicator from '@/components/floating-filter-indicator';
import MapOverlay from '@/components/map-overlay';
import MobileNav from '@/components/mobile-nav';
import MobileRestaurantList from '@/components/mobile-restaurant-list';
import RestaurantInfoBox from '@/components/restaurant-info-box';
import { Button } from '@/components/ui/button';
import { restaurants as allRestaurants } from '@/data/restaurants';
import { useToast } from '@/hooks/use-toast';
import type { Restaurant } from '@/types/restaurant';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Import map component dynamically to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('@/components/map-component'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <p className="text-lg">Loading map...</p>
    </div>
  ),
});

export default function Home() {
  const { toast } = useToast();
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState<Restaurant[]>(allRestaurants);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(true);
  const [hasAppliedFilter, setHasAppliedFilter] = useState(false);
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isFirstPageLoad, setIsFirstPageLoad] = useState(true);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Mark that we've loaded the page once
    return () => {
      setIsFirstPageLoad(false);
    };
  }, []);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    if (restaurant.id === selectedRestaurant?.id) {
      setSelectedRestaurant(null);
    } else {
      setSelectedRestaurant(restaurant);
    }
  };

  const handleCloseInfoBox = () => {
    setSelectedRestaurant(null);
  };

  const handleFilterApply = (
    restaurants: Restaurant[],
    appliedAllergies: string[]
  ) => {
    setFilteredRestaurants(restaurants);
    setHasAppliedFilter(appliedAllergies.length > 0);
    setSelectedAllergies(appliedAllergies);

    // Only close the modal and mark as not first load if this isn't
    // coming from an automatic filter during first page load
    if (!isFirstPageLoad || restaurants === allRestaurants) {
      setIsFilterModalOpen(false);
      setIsFirstPageLoad(false);
    }

    // Show toast notification with filter results
    if (restaurants.length === 0) {
      toast({
        title: 'No matching restaurants',
        description:
          'No restaurants match your allergy filters. Try selecting fewer allergies.',
        variant: 'destructive',
      });
    } else if (restaurants.length < allRestaurants.length) {
      toast({
        title: 'Restaurants filtered',
        description: `Showing ${restaurants.length} restaurants that match your dietary needs.`,
      });
    } else {
      toast({
        title: 'All restaurants shown',
        description: 'Showing all restaurants.',
      });
    }
  };

  const handleChipFilterChange = (
    filtered: Restaurant[],
    activeFilters: string[]
  ) => {
    setFilteredRestaurants(filtered);
    setSelectedAllergies(activeFilters);
    setHasAppliedFilter(activeFilters.length > 0);
  };

  const handleModalClose = (open: boolean) => {
    // If the modal is being closed
    if (!open) {
      // If no filters have been applied yet, show all restaurants
      if (!hasAppliedFilter) {
        setFilteredRestaurants(allRestaurants);
        setSelectedAllergies([]);
        toast({
          title: 'All restaurants shown',
          description: 'Showing all restaurants on the map.',
        });
      }
      // Always allow closing the modal
      setIsFilterModalOpen(false);
      setIsFirstPageLoad(false);
    } else {
      setIsFilterModalOpen(true);
    }
  };

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  return (
    <main className="flex h-[calc(100vh-135px)] md:min-h-screen flex-col relative top-[58px] md:top-0">
      {/* Map container - full screen on mobile */}
      <div className="absolute inset-0 w-full h-full">
        <MapComponent
          restaurants={filteredRestaurants}
          onSelectRestaurant={handleRestaurantSelect}
          selectedRestaurant={selectedRestaurant}
        />
      </div>

      {/* Desktop header */}
      <header className="fixed top-0 left-0 right-0 z-[999] bg-transparent py-4 px-6 md:flex hidden">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold text-stroke text-white">
            HealthBlokk
          </h1>
          <Button variant="outline" asChild>
            <a href="/filter">Filter Menu Items</a>
          </Button>
        </div>
      </header>

      {/* Mobile filter chips */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-[1000] bg-white bg-opacity-90 backdrop-blur-sm p-4 shadow-md">
          <FilterChips
            onFilterChange={handleChipFilterChange}
            restaurants={allRestaurants}
          />
        </div>
      )}

      {/* Mobile restaurant card preview */}
      {isMobile && (
        <MobileRestaurantList
          restaurants={filteredRestaurants}
          selectedRestaurant={selectedRestaurant}
          onSelectRestaurant={handleRestaurantSelect}
          onCloseSelection={handleCloseInfoBox}
        />
      )}

      {/* Desktop info box */}
      {!isMobile && selectedRestaurant && (
        <RestaurantInfoBox
          restaurant={selectedRestaurant}
          onClose={handleCloseInfoBox}
        />
      )}

      {/* Show floating filter indicator on desktop when appropriate */}
      {hasAppliedFilter && !isFilterModalOpen && !isMobile && (
        <FloatingFilterIndicator
          selectedAllergies={selectedAllergies}
          onExpand={openFilterModal}
        />
      )}

      {/* Mobile navigation */}
      {isMobile && <MobileNav />}

      {/* Only show filter modal on desktop */}
      {!isMobile && (
        <>
          <MapOverlay show={isFilterModalOpen} />
          <AllergyFilterModal
            open={isFilterModalOpen}
            onOpenChange={handleModalClose}
            onFilterApply={handleFilterApply}
            initialSelectedAllergies={selectedAllergies}
            isFirstLoad={isFirstPageLoad}
          />
        </>
      )}

      {hasAppliedFilter && filteredRestaurants.length === 0 && !isMobile && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-10 text-center">
          <p className="mb-4">No restaurants match your allergy filters.</p>
          <Button onClick={openFilterModal}>Adjust Filters</Button>
        </div>
      )}
    </main>
  );
}
