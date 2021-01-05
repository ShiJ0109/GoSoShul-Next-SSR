import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropzoneDialog } from 'material-ui-dropzone';
import axios from 'axios';
import cloudinaryParams from 'constants/cloudinaryParams';
import './style.css';

const CLOUDINARY_UPLOAD_PRESET = cloudinaryParams.PRESET;
const CLOUDINARY_UPLOAD_URL = cloudinaryParams.URL;
const CLOUDINARY_API_KEY = cloudinaryParams.API_KEY;

export default class DropzoneDialogTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      uploadedFileCloudinaryUrl: '',
    };
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSave(files) {
    // Saving files to state for further use and closing Modal.
    this.setState({
      files,
      open: false
    });
    let tempUrl = '';
    // Initial FormData
    const formData = new FormData();
    formData.append('file', files[0]);
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
      tempUrl = fileURL;
      this.setState({
        uploadedFileCloudinaryUrl: tempUrl,
      });
      console.log(this.state.uploadedFileCloudinaryUrl);
      this.props.setUrl({ url: this.state.uploadedFileCloudinaryUrl });
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <>
        <img
          width={this.props.width}
          height={this.props.height}
          src={this.props.src}
          onClick={this.handleOpen.bind(this)}
        />

        <DropzoneDialog
          initialFiles={this.props.urls}
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviewsInDropzone
          showPreviews={false}
          maxFileSize={5000000}
          filesLimit={1}
          onClose={this.handleClose.bind(this)}
          previewGridProps={{
            ...this.props.gridProps,
            container: {
              alignItems: 'center',
              justify: 'center'
            },
            item: {
              xs: 12,
              md: 12,
            }
          }}
        />
      </>
    );
  }
}
DropzoneDialogTest.propTypes = {
  url: PropTypes.string,
  setUrl: PropTypes.func.isRequired,
};
