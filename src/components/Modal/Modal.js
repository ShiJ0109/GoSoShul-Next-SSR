import React from 'react';
import './Modal.css';
import FontAwesome from 'react-fontawesome';
import Style from './Style.js';
import * as Demo from 'react-awesome-modal';

const Modal = (props) => {
  const { closeModal } = props;

  const closeicon = () => (
    <FontAwesome
      name="times"
      onClick={closeModal}
      style={{
        color: '#000000',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        position: 'absolute',
        top: '0.3rem',
        right: '0.5rem',
      }}
    />
  );

  return (
    <div className="overlay">
      <div className="content">
        { closeicon() }
        {props.children}
      </div>
      <div style={Style.mask} onClick={props.onClickAway ? props.onClickAway : null} />

    </div>
  );
};

export default Modal;
