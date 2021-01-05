import React from 'react';
import AmountSubPage from './AmountSubPage';

const UserDonateModal = () => {
  return (
    <div className="modal fade show" id="exampleModalCenter">
      <div className="modal-dialog modal-dialog-centered  modal-lg">
        <div className="modal-content model-padding-sharep">
          <div className="modal-header borderBottomN">
            <button
              type="button"
              onClick="#"
              className="close close-sopacity-unset"
              data-dismiss="modal"
            >
              <i
                className="fa fa-times-circle"
                aria-hidden="true"
                style={{
                  fontSize: '22px',
                  color: 'red'
                }}
              />
            </button>
          </div>
          <AmountSubPage />
        </div>
      </div>
    </div>
  );
};

export default UserDonateModal;
