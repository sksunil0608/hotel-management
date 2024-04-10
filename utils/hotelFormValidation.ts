import * as Yup from 'yup';
import {
    hotelInfo,
    slugInfo,
    paymentInfo,
    imageInfo,
} from "@/lib/hotelFormConstants";

// Define a function to build validation schema based on field configurations
export const hotelValidationSchema = () => {
    const schema: { [key: string]: any } = {};

    // Add validation rules for hotelInfo fields
    hotelInfo.forEach((field) => {
        let fieldSchema = Yup.string(); // Default to string validation

        if (field.type === 'email') {
            fieldSchema = fieldSchema.email('Invalid email format');
        } else if (field.type === 'number') {
            fieldSchema = fieldSchema
                .typeError(`${field.label} must be a valid number`)
                .test('is-number', `${field.label} must be a number`, (value: any) => {
                    return /^\d+$/.test(value); // Check if value is a valid number
                });
        }

        if (field.required) {
            fieldSchema = fieldSchema.required(`${field.label} is required`);
        }

        schema[field.name] = fieldSchema;
    });

    // Add validation rules for slugInfo fields
    slugInfo.forEach((field) => {
        schema[field.name] = Yup.string().required(`${field.label} is required`);
    });

    // Add validation rules for paymentInfo fields
    paymentInfo.forEach((field) => {
        schema[field.name] = Yup.string().required(`${field.label} is required`);
    });

    // Add validation rules for imageInfo fields
    imageInfo.forEach((field) => {
        schema[field.name] = Yup.string().required(`${field.label} is required`);
    });

    return Yup.object().shape(schema);
};

// Define a function to build initial values object
export const hotelInitialValues = () => {
    const initialValues: { [key: string]: any } = {};

    // Populate initial values for hotelInfo fields
    hotelInfo.forEach((field) => {
        initialValues[field.name] = field.value || '';
    });

    // Populate initial values for slugInfo fields
    slugInfo.forEach((field) => {
        initialValues[field.name] = field.value || '';
    });

    // Populate initial values for paymentInfo fields
    paymentInfo.forEach((field) => {
        initialValues[field.name] = field.value || '';
    });

    // Populate initial values for imageInfo fields
    imageInfo.forEach((field) => {
        initialValues[field.name] = field.value || '';
    });

    return initialValues;
};
