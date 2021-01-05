import axios from 'axios';
import cloudinaryParams from 'constants/cloudinaryParams';

const CLOUDINARY_UPLOAD_PRESET = cloudinaryParams.PRESET;
const CLOUDINARY_UPLOAD_URL = cloudinaryParams.URL;
const CLOUDINARY_API_KEY = cloudinaryParams.API_KEY;

const Upload = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('tags', 'codeinfuse, medium, gist');
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
  formData.append('api_key', CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
  formData.append('timestamp', (Date.now() / 1000) || 0);

  // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
  return axios.post(CLOUDINARY_UPLOAD_URL, formData, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  }).then((response) => {
    const { data } = response;
    const fileURL = data.secure_url; // You should store this URL for future references in your app
    return {fileURL};
  });
};

export default Upload;
