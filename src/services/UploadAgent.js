import request from 'superagent';
import cloudinaryParams from 'constants/cloudinaryParams';

const CLOUDINARY_UPLOAD_PRESET = cloudinaryParams.PRESET;
const CLOUDINARY_UPLOAD_URL = cloudinaryParams.URL;

const Upload = (file) => {
  const upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);

  upload.end((err, response) => {
    return {error: err, url: response.body.secure_url};
  });
};

export default Upload;
