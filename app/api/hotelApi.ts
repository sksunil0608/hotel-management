import { collection, addDoc, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
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

export const fetchHotelsFromFirestore = async () => {
    const hotelsCollectionRef = collection(db, "hotels");

    try {
        const querySnapshot = await getDocs(hotelsCollectionRef);
        const hotels = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return hotels;
    } catch (error) {
        console.error("Error fetching hotels:", error);
        throw error;
    }
};


export const fetchHotelById = async (hotelId: string) => {
    const hotelDocRef = doc(db, "hotels", hotelId);

    try {
        const docSnapshot = await getDoc(hotelDocRef);
        if (docSnapshot.exists()) {
            return { id: docSnapshot.id, ...docSnapshot.data() };
        } else {
            throw new Error("Hotel not found");
        }
    } catch (error) {
        console.error(`Error fetching hotel ${hotelId}:`, error);
        throw error;
    }
};

export const updateHotelDetails = async (hotelId: string, updatedData: Partial<HotelInfoDetails>) => {
    const hotelDocRef = doc(db, "hotels", hotelId);

    try {
        await updateDoc(hotelDocRef, updatedData);
        console.log(`Hotel ${hotelId} details updated successfully`);
    } catch (error) {
        console.error(`Error updating hotel ${hotelId} details:`, error);
        throw error;
    }
};