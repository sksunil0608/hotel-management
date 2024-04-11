"use client";
import React, { useEffect, useState } from "react";
import { fetchHotelsFromFirestore } from "../api/hotelApi";
import Link from "next/link";
const Hotels: React.FC = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const fetchedHotels = await fetchHotelsFromFirestore();
        setHotels(fetchedHotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);
  console.log(hotels);
  return (
    <div className="item-center justify-center container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-4">Hotels</h1>
      <div className=" grid grid-cols-1 lg:max-w-3xl lg:mx-auto">
        {hotels.map((hotel) => (
          <Link href={`hotels/${hotel.id}`} key={hotel.hotelName}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden my-10">
              <img
                src={hotel.hotelImageUrl}
                alt={hotel.hotelName}
                className="w-auto h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-purple-500">
                  {hotel.hotelName}
                </h2>
                <p className="text-gray-600 mb-2">{hotel.hotelDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-yellow-500">
                    Rating: {hotel.hotelStarRating} stars
                  </span>
                  <span className="text-sm font-semibold">
                    Price: ${hotel.hotelStartingPrice} per night
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 text-blue-300">
                    Location: {hotel.hotelCity}, {hotel.hotelState},{" "}
                    {hotel.hotelCountry}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
