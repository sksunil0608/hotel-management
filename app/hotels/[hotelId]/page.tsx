"use client";
// Import necessary modules
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchHotelById } from "@/app/api/hotelApi";

// Define the HotelPage component
const HotelDetailsPage = () => {
  const router = useRouter();
  const { hotelid } = router.query; // Get the hotelid from the URL query

  const [hotel, setHotel] = useState<any>(null); // Use any type temporarily

  useEffect(() => {
    const getHotelDetails = async () => {
      if (hotelid && typeof hotelid === "string") {
        try {
          const fetchedHotel = await fetchHotelById(hotelid);
          setHotel(fetchedHotel);
        } catch (error) {
          console.error("Error fetching hotel:", error);
          // Handle error fetching hotel details
        }
      }
    };

    getHotelDetails();
  }, [hotelid]); // Re-run effect when hotelid changes

  if (!hotel) {
    return <div>Loading...</div>; // Placeholder for loading state
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={hotel.hotelImageUrl}
          alt={hotel.hotelName}
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4 text-purple-500">
            {hotel.hotelName}
          </h2>
          <p className="text-lg text-gray-700 mb-4">{hotel.hotelDescription}</p>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Location:</h3>
            <p className="text-gray-700">
              {hotel.hotelAddress}, {hotel.hotelLandmark}, {hotel.hotelCity},{" "}
              {hotel.hotelState}, {hotel.hotelCountry} - {hotel.hotelPincode}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Details:</h3>
            <p className="text-gray-700">Email: {hotel.hotelEmailId}</p>
            <p className="text-gray-700">Phone: {hotel.hotelContactNumber}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Payment Options:</h3>
            <p className="text-gray-700">
              Prepaid: {hotel.hotelPaymentOption.prepaidPayment ? "Yes" : "No"}
            </p>
            <p className="text-gray-700">
              Postpaid:{" "}
              {hotel.hotelPaymentOption.postpaidPayment ? "Yes" : "No"}
            </p>
            <p className="text-gray-700">
              Partial Payment:{" "}
              {hotel.hotelPaymentOption.partialPayment ? "Yes" : "No"}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Hotel Ratings:</h3>
            <p className="text-gray-700">
              Star Rating: {hotel.hotelStarRating} stars
            </p>
            <p className="text-gray-700">
              Starting Price: ${hotel.hotelStartingPrice} per night
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
