/** HOTEL INPUT FIELDS*/
export const hotelInfo = [
    {
        label: 'Hotel Name',
        name: 'hotelName',
        placeholder: 'Enter hotel name',
        value: '',
        type: 'text',
        required: true
    },
    {
        label: 'Email',
        name: 'hotelEmailId',
        placeholder: 'Enter email',
        value: '',
        type: 'email',
        required: true
    },
    {
        label: 'Phone',
        name: 'hotelContactNumber',
        placeholder: 'Enter phone number',
        value: '',
        type: 'tel', required: true
    },
    {
        label: 'Landmark',
        name: 'hotelLandmark',
        placeholder: 'Enter landmark',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Address',
        name: 'hotelAddress',
        placeholder: 'Enter Address',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Starting Price',
        name: 'hotelStartingPrice',
        placeholder: 'Enter starting price',
        value: 0,
        type: 'number', required: true
    },
    {
        label: 'Description',
        name: 'hotelDescription',
        placeholder: 'Enter description',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Star Rating',
        name: 'hotelStarRating',
        placeholder: 'Enter star rating',
        value: 0,
        type: 'number', required: true
    },
    {
        label: 'Image URL',
        name: 'hotelImageUrl',
        placeholder: 'Enter image URL',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Hotel State',
        name: 'hotelState',
        placeholder: 'Enter hotel state',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Hotel City',
        name: 'hotelCity',
        placeholder: 'Enter hotel city',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Hotel Country',
        name: 'hotelCountry',
        placeholder: 'Enter hotel country',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Hotel Region',
        name: 'hotelRegion',
        placeholder: 'Enter hotel region',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Hotel Pincode',
        name: 'hotelPincode',
        placeholder: 'Enter hotel pincode',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Hotel Latitude',
        name: 'hotelLatitude',
        placeholder: 'Enter hotel latitude',
        value: 0,
        type: 'number', required: true
    },
    {
        label: 'Hotel Longitude',
        name: 'hotelLongitude',
        placeholder: 'Enter hotel longitude',
        value: 0,
        type: 'number', required: true
    },
    {
        label: 'Hotel Map URL',
        name: 'hotelMapUrl',
        placeholder: 'Enter hotel map URL',
        value: '',
        type: 'text', required: true
    },
];

/** HOTEL SLUG INPUT FIELDS*/
export const slugInfo = [
    {
        label: 'City',
        name: 'hotelCity',
        placeholder: 'Enter city',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'City Slug',
        name: 'hotelCitySlug',
        placeholder: 'Enter city slug',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Region',
        name: 'hotelRegion',
        placeholder: 'Enter region',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'State',
        name: 'hotelState',
        placeholder: 'Enter state',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Country',
        name: 'hotelCountry',
        placeholder: 'Enter country',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Pincode',
        name: 'hotelPincode',
        placeholder: 'Enter pincode',
        value: '',
        type: 'text', required: true
    },
];

/** HOTEL IMAGE INPUT FIELDS*/
export const imageInfo = [
    {
        label: 'Image URL',
        name: 'imageUrl',
        placeholder: 'Enter image URL',
        value: '',
        type: 'text', required: true
    },
    {
        label: 'Image Title',
        name: 'imageTitle',
        placeholder: 'Enter image title',
        value: '',
        type: 'text', required: true
    },
];


/** PAYMENT OPTION FIELDS*/
export const paymentInfo = [{
    label: 'Payment Options',
    name: 'hotelPaymentOptions',
    placeholder: 'Select payment option',
    value: '',
    type: 'select',
    required: true,
    options: [
        { label: 'Postpaid Payment', value: 'postpaid' },
        { label: 'Prepaid Payment', value: 'prepaid' },
        { label: 'Partial Payment', value: 'partial' },
    ],
}];