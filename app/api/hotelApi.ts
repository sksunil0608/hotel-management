import { collection, addDoc } from "firebase/firestore";
import { db } from "../fireBaseConfig";
import { HotelInfoDetails } from "@/types/hotelDetailsTypes";

export const addHotelToFirestore = async (hotelData: HotelInfoDetails) => {
    try {
        const hotelsCollectionRef = collection(db, "hotels");

        const serializedData = {
            ...hotelData,
            hotelSlugsDetails: { ...hotelData.hotelSlugsDetails }, // Serialize nested object
            hotelImagesList: [...hotelData.hotelImagesList], // Serialize array of objects
        };
        const docRef = await addDoc(hotelsCollectionRef, serializedData);

        console.log("Hotel added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding hotel to Firestore:", error);
        throw error;
    }
}