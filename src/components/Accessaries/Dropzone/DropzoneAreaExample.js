import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropzoneArea } from 'material-ui-dropzone';
import axios from 'axios';
import Upload from 'services/Upload';
import cloudinaryParams from 'constants/cloudinaryParams';
import './style.css';

const CLOUDINARY_UPLOAD_PRESET = cloudinaryParams.PRESET;
const CLOUDINARY_UPLOAD_URL = cloudinaryParams.URL;
const CLOUDINARY_API_KEY = cloudinaryParams.API_KEY;
class DropzoneAreaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploadedFileCloudinaryUrl: [],
    };
  }

  handleDrop = (files) => {
    const tempUrl = [];
    // Push all the axios request promise into a single array
    const uploaders = files.map((file, index) => {
      // Initial FormData
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', 'image added');
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
      formData.append('api_key', CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
      formData.append('timestamp', (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post(CLOUDINARY_UPLOAD_URL, formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then((response) => {
        const { data } = response;
        const fileURL = data.secure_url; // You should store this URL for future references in your app
        tempUrl[index] = fileURL;
      });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      this.setState({
        uploadedFileCloudinaryUrl: tempUrl,
      });
      console.log(this.state.uploadedFileCloudinaryUrl);
      this.props.setUrl({ urls: this.state.uploadedFileCloudinaryUrl });
    });
  }

  handleChange(files) {
    const tempUrl = [];

    // upload image files to cloudinary
    files.map((file, index) => {
      const ret = Upload(file);
      tempUrl[index] = ret.fileURL;
      console.log(ret);
    });
    this.setState({
      files, uploadedFileCloudinaryUrl: tempUrl,
    });
    console.log(files);
    console.log(this.state.uploadedFileCloudinaryUrl);
  }

  render() {
    return (
      <DropzoneArea
        className="dropzone"
        initialFiles={this.props.urls}
        onChange={this.handleDrop.bind(this)}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        showPreviewsInDropzone
        filesLimit={this.props.count}
        dropzoneText="Add an image here"
        previewGridProps={{
          ...this.props.gridProps,
          container: {
            alignItems: 'center',
            justify: 'center'
          }
        }}
      />
    );
  }
}

DropzoneAreaExample.propTypes = {
  count: PropTypes.number.isRequired,
  urls: PropTypes.array,
  setUrl: PropTypes.func.isRequired,

};
export default DropzoneAreaExample;
