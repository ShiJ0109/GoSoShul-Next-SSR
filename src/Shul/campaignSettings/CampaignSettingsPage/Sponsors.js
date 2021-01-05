import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  makeStyles,
} from '@material-ui/core';
import { ShulDashboardContainer } from 'containers';
import DeleteIcon from '@material-ui/icons/Delete';
import DropzoneDialogTest from 'components/Accessaries/Dropzone/DropzoneDialogTest';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sponsors = ({
  className, sponsors, pollout, shulDashboardState, shulDashboardActions, ...rest
}) => {
  const classes = useStyles();
  const [data, setData] = useState(sponsors);
  // Redux State and Actions
  let { campaign } = shulDashboardState;
  const { handleResetData } = shulDashboardActions;
  useEffect(() => {
    pollout({ key: 'sponsors', val: data });
    // modify campaign JSON
    campaign = {
      ...campaign,
      sponsors: data
    };
    // call Redux reset Data
    handleResetData({
      key: 'campaign',
      value: campaign
    });
  }, [data]);

  const emptyVal = {
    image_link: '',
    english_name: '',
    hebrew_name: '',
  };
  const onRemoveItem = (i) => {
    setData(() => {
      const list = data.filter((row, index) => index !== i);
      return list;
    });
    console.log(data);
  };
  const addItem = () => {
    setData(() => {
      const list = data;
      return list.concat(emptyVal);
    });
  };
  const handleChange = (event, index) => {
    setData(() => {
      const ret = data.slice();
      let changedRow = ret[index];
      changedRow = { ...changedRow, [event.target.name]: event.target.value };
      ret[index] = changedRow;
      return ret;
    });
    console.log(data);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-1 col-md-0  col-sm-0" />
          <div className="col-lg-9 col-md-10  col-sm-10 inmemorymobviewPLG">
            <div>
              <h4>
                Sponsors
                {' '}
                <span className="tooltip21"> [?]</span>
              </h4>
            </div>
            <div className=" bg-white  border-LTB ">
              <div className="tag-more-table-container">
                <table id="campaing-table2">
                  <thead>
                    <tr>
                      <th />
                      <th className="tag-more-table-heading">
                        Logo
                      </th>
                      <th className="tag-more-table-heading tagtable-align-chnge">
                        Url
                      </th>
                      <th className="tag-more-table-heading" />
                    </tr>
                  </thead>
                  <tbody>
                    {
              data.map((row, index) => (
                <tr>
                  <td className="table-row-number">
                    {index + 1}
                  </td>
                  <td className="camapign-imgMemory2">
                    <DropzoneDialogTest
                      width={80}
                      height={34}
                      src='/dist/img/Sponsors.png'
                      urls={[row.logo_link]}
                      setUrl={({ url }) => {
                        setData(() => {
                          const ret = data.slice();
                          let changedRow = ret[index];
                          changedRow = { ...changedRow, logo_link: url };
                          ret[index] = changedRow;
                          return ret;
                        }); console.log(data);
                      }}
                    />

                  </td>
                  <td>
                    <input
                      className="table-url-input"
                      type
                      helperText="Url"
                      name="url"
                      onChange={(event) => handleChange(event, index)}
                      required
                      value={row.url}
                      placeholder="Enter Url"
                    />
                  </td>
                  <td>
                    <DeleteIcon
                      onClick={() => onRemoveItem(index)}
                    />
                  </td>
                </tr>
              ))
}
                  </tbody>
                  <tfoot>
                    <tr className="tag-more-table-footer">
                      <th />
                      <th className="tag-more-table-add-more-button" onClick={addItem}>
                        + Add More Sponsors
                      </th>
                      <th />
                      <th>    </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

Sponsors.propTypes = {
  className: PropTypes.string,
  sponsors: PropTypes.array,
  pollout: PropTypes.func.isRequired,
  shulDashboardState: PropTypes.object,
  shulDashboardActions: PropTypes.object,
};

export default ShulDashboardContainer(Sponsors);
