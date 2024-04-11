import * as Yup from "yup";
import { HotelInfoDetails } from "@/types/hotelDetailsTypes";

// Validation schema using Yup
export const hotelValidationSchema = Yup.object().shape({
    hotelName: Yup.string().required("Hotel Name is required"),
    hotelEmailId: Yup.string().email("Invalid email").required("Email is required"),
    hotelContactNumber: Yup.string()
        .matches(/^\+?\d{10,12}$/, "Invalid phone number") // Example regex for 10-12 digit phone number
        .required("Phone number is required"),
    hotelLandmark: Yup.string().required("Landmark is required"),
    hotelAddress: Yup.string().required("Address is required"),
    hotelStartingPrice: Yup.number().required("Starting price is required"),
    hotelDescription: Yup.string().required("Description is required"),
    hotelStarRating: Yup.number().required("Star rating is required"),
    hotelImageUrl: Yup.string().required("Image URL is required"),
    hotelState: Yup.string().required("State is required"),
    hotelCity: Yup.string().required("City is required"),
    hotelCountry: Yup.string().required("Country is required"),
    hotelRegion: Yup.string().required("Region is required"),
    hotelPincode: Yup.string().required("Pincode is required"),
    hotelLatitude: Yup.number().required("Latitude is required"),
    hotelLongitude: Yup.number().required("Longitude is required"),
    hotelMapUrl: Yup.string().required("Map URL is required"),
});

// Initial form values using class instance
export const hotelInitialValues = new HotelInfoDetails();
