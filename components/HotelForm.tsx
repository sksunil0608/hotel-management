"use client";
import React from "react";
import { useFormik } from "formik";
import { HotelInfoDetails, ImagesList } from "@/types/hotelDetailsTypes";
import { addHotelToFirestore } from "@/app/api/hotelApi";
import { extractImageInfo } from "@/utils/extractImageInfo";

const HotelForm = () => {
  const initialValues = new HotelInfoDetails(); // Initialize form with default values

  const onSubmit = async (values: HotelInfoDetails) => {
    try {
      const hotelSlugsDetails = {
        hotel: values.hotelName,
        hotelCity: values.hotelCity,
        hotelRegion: values.hotelRegion,
        hotelState: values.hotelState,
        hotelCountry: values.hotelCountry,
      };
      const { imageId, imageTitle } = extractImageInfo(values.hotelImageUrl);
      const hotelImagesList = [
        {
          imageId: imageId,
          imageUrl: values.hotelImageUrl,
          imageTitle: imageTitle,
        },
      ];
      const updatedValues: HotelInfoDetails = {
        ...values,
        hotelSlugsDetails: hotelSlugsDetails,
        hotelImagesList: hotelImagesList,
      };

      // Call addHotelToFirestore with updated values
      await addHotelToFirestore(updatedValues);
      console.log("Hotel data submitted successfully!");
      formik.resetForm();
    } catch (error) {
      console.error("Error submitting hotel data:", error);
      // Handle error (e.g., show error message)
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div className="w-full lg:max-w-5xl mx-auto p-8">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Hotel Name */}
          <div>
            <label htmlFor="hotelName" className="input-label">
              Hotel Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelName"
              name="hotelName"
              placeholder="Enter hotel name"
              value={formik.values.hotelName}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Email */}
          <div>
            <label htmlFor="hotelEmailId" className="input-label">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="hotelEmailId"
              name="hotelEmailId"
              placeholder="Enter email"
              value={formik.values.hotelEmailId}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Contact Number */}
          <div>
            <label htmlFor="hotelContactNumber" className="input-label">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="hotelContactNumber"
              name="hotelContactNumber"
              placeholder="Enter phone number"
              value={formik.values.hotelContactNumber}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Landmark */}
          <div>
            <label htmlFor="hotelLandmark" className="input-label">
              Landmark<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelLandmark"
              name="hotelLandmark"
              placeholder="Enter landmark"
              value={formik.values.hotelLandmark}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Address */}
          <div>
            <label htmlFor="hotelAddress" className="input-label">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelAddress"
              name="hotelAddress"
              placeholder="Enter address"
              value={formik.values.hotelAddress}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Starting Price */}
          <div>
            <label htmlFor="hotelStartingPrice" className="input-label">
              Starting Price<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="hotelStartingPrice"
              name="hotelStartingPrice"
              placeholder="Enter starting price"
              value={formik.values.hotelStartingPrice}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Description */}
          <div>
            <label htmlFor="hotelDescription" className="input-label">
              Description<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelDescription"
              name="hotelDescription"
              placeholder="Enter description"
              value={formik.values.hotelDescription}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Star Rating */}
          <div>
            <label htmlFor="hotelStarRating" className="input-label">
              Star Rating<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="hotelStarRating"
              name="hotelStarRating"
              placeholder="Enter star rating"
              value={formik.values.hotelStarRating}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Image URL */}
          <div>
            <label htmlFor="hotelImageUrl" className="input-label">
              Image URL<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelImageUrl"
              name="hotelImageUrl"
              placeholder="Enter image URL"
              value={formik.values.hotelImageUrl}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel State */}
          <div>
            <label htmlFor="hotelState" className="input-label">
              State<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelState"
              name="hotelState"
              placeholder="Enter hotel state"
              value={formik.values.hotelState}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel City */}
          <div>
            <label htmlFor="hotelCity" className="input-label">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelCity"
              name="hotelCity"
              placeholder="Enter hotel city"
              value={formik.values.hotelCity}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Country */}
          <div>
            <label htmlFor="hotelCountry" className="input-label">
              Country<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelCountry"
              name="hotelCountry"
              placeholder="Enter hotel country"
              value={formik.values.hotelCountry}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Region */}
          <div>
            <label htmlFor="hotelRegion" className="input-label">
              Region<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelRegion"
              name="hotelRegion"
              placeholder="Enter hotel region"
              value={formik.values.hotelRegion}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Pincode */}
          <div>
            <label htmlFor="hotelPincode" className="input-label">
              Pincode<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelPincode"
              name="hotelPincode"
              placeholder="Enter hotel pincode"
              value={formik.values.hotelPincode}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Latitude */}
          <div>
            <label htmlFor="hotelLatitude" className="input-label">
              Latitude<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="hotelLatitude"
              name="hotelLatitude"
              placeholder="Enter hotel latitude"
              value={formik.values.hotelLatitude}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Longitude */}
          <div>
            <label htmlFor="hotelLongitude" className="input-label">
              Longitude<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="hotelLongitude"
              name="hotelLongitude"
              placeholder="Enter hotel longitude"
              value={formik.values.hotelLongitude}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          {/* Hotel Map URL */}
          <div>
            <label htmlFor="hotelMapUrl" className="input-label">
              Map URL<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hotelMapUrl"
              name="hotelMapUrl"
              placeholder="Enter hotel map URL"
              value={formik.values.hotelMapUrl}
              onChange={formik.handleChange}
              className="input-box"
              required
            />
          </div>

          <div>
            <select
              id="paymentOptions"
              {...formik.getFieldProps("paymentOptions")}
              className="input-box"
              value={
                formik.values.hotelPaymentOption.postpaidPayment
                  ? "postpaid"
                  : formik.values.hotelPaymentOption.prepaidPayment
                  ? "prepaid"
                  : formik.values.hotelPaymentOption.partialPayment
                  ? "partial"
                  : ""
              }
              onChange={(e) => {
                // Handle onChange event to update formik values
                const selectedValue = e.target.value;
                formik.setFieldValue("hotelPaymentOption", {
                  postpaidPayment: selectedValue === "postpaid",
                  prepaidPayment: selectedValue === "prepaid",
                  partialPayment: selectedValue === "partial",
                });
              }}
            >
              <option value="postpaid">Postpaid Payment</option>
              <option value="prepaid">Prepaid Payment</option>
              <option value="partial">Partial Payment</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={!formik.isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
