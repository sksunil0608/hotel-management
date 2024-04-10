import React from "react";
import Input from "./Input";
import {
  hotelInfo,
  imageInfo,
  paymentInfo,
  slugInfo,
} from "@/lib/hotelFormConstants";

const HotelForm: React.FC = (props: any) => {
  return (
    <div className="w-full lg:max-w-5xl mx-auto p-8">
      <form action="" className="space-y-4">
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
                  //   isValid={fieldIsValid}
                  //   onChange={fieldChangeHandler}
                  //   onBlur={validateFieldHandler}
                  //   value={fieldState.value}
                />
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
                    //   isValid={fieldIsValid}
                    //   onChange={fieldChangeHandler}
                    //   onBlur={validateFieldHandler}
                    //   value={fieldState.value}
                  />
                </div>
              ))}
            </div>
            {/* SHOWING PAYMENT INPUT FILEDS */}
            <div className="...">
              <h3>Fill Payment Information</h3>
              {paymentInfo.map((field) => (
                <div key={field.name}>
                  <Input
                    id={field.name}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    //   isValid={fieldIsValid}
                    //   onChange={fieldChangeHandler}
                    //   onBlur={validateFieldHandler}
                    //   value={fieldState.value}
                  />
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
                    //   isValid={fieldIsValid}
                    //   onChange={fieldChangeHandler}
                    //   onBlur={validateFieldHandler}
                    //   value={fieldState.value}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
