'use client';

import AverageRatingDisplay from '@/components/average-rating-display';
import MenuList from '@/components/menu-list';
import RestaurantLocationMap from '@/components/restaurant-location-map';
import ReviewForm from '@/components/review-form';
import ReviewList from '@/components/review-list';
import SharePopup from '@/components/share-popup';
import { StyledAllergyLabel } from '@/components/styled-allergy-label';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allergyLabels } from '@/data/allergy-labels';
import { restaurants } from '@/data/restaurants';
import { getRestaurantReviews } from '@/lib/api-mock';
import type { Restaurant } from '@/types/restaurant';
import type { Review } from '@/types/review';
import { ArrowLeft, Globe, Heart, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RestaurantPage() {
  const params = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [baseUrl, setBaseUrl] = useState('');
  const [newReview, setNewReview] = useState<Review | undefined>(undefined);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [isBrowser, setIsBrowser] = useState(false);

  // Set isBrowser flag to true once component mounts in browser
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Handle restaurant data
  useEffect(() => {
    // Find restaurant by ID
    const id = params?.id as string;
    const foundRestaurant = restaurants.find((r) => r.id === id);
    setRestaurant(foundRestaurant || null);

    // Fetch reviews for this restaurant
    if (foundRestaurant) {
      fetchReviews(foundRestaurant.id);
    }
  }, [params]);

  // Handle browser-specific operations
  useEffect(() => {
    if (isBrowser) {
      try {
        // Get base URL for sharing
        setBaseUrl(window.location.origin);
      } catch (error) {
        console.error('Error accessing window:', error);
        // Fallback value if window access fails
        setBaseUrl('https://healthblokk.netlify.app');
      }
    }
  }, [isBrowser]);

  const fetchReviews = async (restaurantId: string) => {
    try {
      setLoadingReviews(true);
      const data = await getRestaurantReviews(restaurantId);
      setReviews(data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    } finally {
      setLoadingReviews(false);
    }
  };

  const handleReviewSubmitted = (review: Review) => {
    setNewReview(review);
    // Also update the reviews array for the average rating calculation
    setReviews((prevReviews) => [review, ...prevReviews]);
  };

  if (!restaurant) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p>Restaurant not found</p>
        <Button asChild className="mt-4">
          <Link href="/">Back to Map</Link>
        </Button>
      </div>
    );
  }

  // Get allergy label names from IDs
  const allergies = restaurant.allergyLabels.map((id) => {
    const label = allergyLabels.find((a) => a.id === id);
    return label ?? { id, name: id };
  });

  // Get restaurant image or use placeholder
  const restaurantImage =
    restaurant.image ||
    `/placeholder.svg?height=400&width=1200&query=restaurant ${restaurant.name}`;

  // Use a safe URL string for sharing
  const shareUrl = baseUrl
    ? `${baseUrl}/restaurant/${restaurant.id}`
    : `/restaurant/${restaurant.id}`;

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="relative">
        {/* Header Image */}
        <div className="w-full h-48 md:h-72 bg-gray-200 relative">
          <Image
            src={restaurantImage}
            alt={restaurant.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/50 to-transparent p-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/80 text-white cursor-pointer"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div className="flex-1" />
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/50 text-white cursor-pointer"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                {isBrowser && (
                  <SharePopup
                    url={shareUrl}
                    title={`${restaurant.name} | HealthBlokk`}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        {/* Restaurant Info Bar */}
        <div className="p-4 md:px-6 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">{restaurant.name}</h1>
          <div className="flex items-center mt-1 text-sm">
            {/* <span className="text-gray-700">{restaurant.cuisine}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-700">{restaurant.priceRange}</span>
            <span className="mx-2">•</span> */}
            <div className="flex items-center">
              {loadingReviews ? (
                <Skeleton className="h-4 w-24" />
              ) : (
                <AverageRatingDisplay reviews={reviews} />
              )}
            </div>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{restaurant.address}</span>
          </div>

          {restaurant.allergyLabels.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {allergies.map((allergyLabel, index) => (
                <div key={allergyLabel.id}>
                  <StyledAllergyLabel
                    key={index}
                    id={allergyLabel.id}
                    name={allergyLabel.name}
                  />
                </div>
                // <Badge key={index} variant="outline">
                //   {name}
                // </Badge>
              ))}
            </div>
          )}

          {/* <div className="flex items-center justify-between mt-2">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm">
              Open Until {restaurant.openingHours.close}
            </div>
          </div> */}
        </div>
        {/* Content Tabs */}
        <Tabs defaultValue="menu" className="mt-2">
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="menu" className="flex-1">
              Menu
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">
              Reviews{' '}
              {!loadingReviews && reviews.length > 0 && `(${reviews.length})`}
            </TabsTrigger>
            <TabsTrigger value="info" className="flex-1">
              Info
            </TabsTrigger>
          </TabsList>

          {/* Menu Tab */}
          <TabsContent value="menu" className="pt-4">
            <MenuList restaurantId={restaurant.id} />
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="pt-4">
            <div className="grid md:grid-cols-[2fr_1fr] gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Customer Reviews</h2>
                  {!loadingReviews && reviews.length > 0 && (
                    <AverageRatingDisplay
                      reviews={reviews}
                      className="hidden sm:flex"
                    />
                  )}
                </div>
                <ReviewList
                  restaurantId={restaurant.id}
                  newReview={newReview}
                />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Write a Review</CardTitle>
                    <CardDescription>
                      Share your experience at {restaurant.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ReviewForm
                      restaurantId={restaurant.id}
                      onReviewSubmitted={handleReviewSubmitted}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Info Tab */}
          <TabsContent value="info" className="p-4">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold mb-2">About</h2>
                <p className="text-gray-700">{restaurant.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="">
                  <div>
                    <h2 className="text-lg font-bold mb-2">Dietary Options</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      This restaurant offers options suitable for the dietary
                      needs listed above.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold mb-2">Contact</h2>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{restaurant.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{restaurant.email}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{restaurant.address}</span>
                      </div>
                      {restaurant.website && (
                        <div className="flex items-center">
                          <Globe className="h-5 w-5 mr-2 text-gray-500" />
                          <span>{restaurant.website}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-2">Location</h2>
                  <RestaurantLocationMap restaurant={restaurant} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {/* <div>
                  <h2 className="text-lg font-bold mb-2">Hours</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      <span>
                        Open: {restaurant.openingHours.open} -{' '}
                        {restaurant.openingHours.close}
                      </span>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* QR Code Display at the bottom */}
        {/* <div className="p-4 flex justify-center">
          <QRCodeDisplay
            url={`${baseUrl}/restaurant/${restaurant.id}`}
            restaurantName={restaurant.name}
          />
        </div> */}
      </div>
    </div>
  );
}
