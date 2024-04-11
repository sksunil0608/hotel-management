// Function to extract imageId and imageTitle from imageURL
export const extractImageInfo = (imageUrl: string): { imageId: string; imageTitle: string } => {
    const url = new URL(imageUrl);
    const pathSegments = url.pathname.split('/');
    const filenameWithExtension = pathSegments[pathSegments.length - 1]; // Get the last segment of the path
    const filename = filenameWithExtension.split('.')[0]; // Get filename without extension

    return {
        imageId: filenameWithExtension, // You can use filenameWithExtension or any other value as the imageId
        imageTitle: filename, // Use filename as the imageTitle
    };
};