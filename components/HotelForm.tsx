"use client";
import React from "react";
import Input from "./Input";

import {
  hotelInfo,
  imageInfo,
  paymentInfo,
  slugInfo,
} from "@/lib/hotelFormConstants";
import { useFormik } from "formik";
import {
  hotelInitialValues,
  hotelValidationSchema,
} from "@/utils/hotelFormValidation";

const HotelForm: React.FC = (props: any) => {
  const validationSchema = hotelValidationSchema();
  const initialValues = hotelInitialValues();

  const onSubmit = () => {
    console.log("Submitted");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="w-full lg:max-w-5xl mx-auto p-8">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* SHOWING HOTEL INPUT FIELDS */}
          <div className="...">
            <h3>Fill Hotel Information</h3>
            {hotelInfo.map((field) => (
              <div key={field.name}>
                <Input
                  id={field.name}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...formik.getFieldProps(field.name)}
                />
                {/* Render error message if field is touched and has validation error */}
                {formik.touched[field.name] && formik.errors[field.name] ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors[field.name]}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="...">
            {/* SHOWING SLUG INPUT FIELDS */}
            <div className="...">
              <h3>Fill Slug Information</h3>
              {slugInfo.map((field) => (
                <div key={field.name}>
                  <Input
                    id={field.name}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    {...formik.getFieldProps(field.name)}
                  />
                  {formik.touched[field.name] && formik.errors[field.name] ? (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors[field.name]}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            {/* SHOWING PAYMENT INPUT FILEDS */}
            <div className="...">
              <h3>Fill Payment Information</h3>
              {paymentInfo.map((field) => (
                <div key={field.name}>
                  <select
                    id={field.name}
                    className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-600"
                    {...formik.getFieldProps(field.name)}
                  >
                    {field.options.map((option) => (
                      <option value="" key={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formik.touched[field.name] && formik.errors[field.name] ? (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors[field.name]}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* SHOWING IMAGE INPUT FIELDS */}
            <div>
              {" "}
              <h3>Hotel Image</h3>
              {imageInfo.map((field) => (
                <div key={field.name}>
                  <Input
                    id={field.name}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    {...formik.getFieldProps(field.name)}
                  />
                  {formik.touched[field.name] && formik.errors[field.name] ? (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors[field.name]}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
