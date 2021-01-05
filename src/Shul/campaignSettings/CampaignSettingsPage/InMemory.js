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

const InMemory = ({
  className, inMemoryOf, pollout, shulDashboardState, shulDashboardActions, ...rest
}) => {
  const classes = useStyles();
  const [data, setData] = useState(inMemoryOf);
  // Redux State and Actions
  let { campaign } = shulDashboardState;
  const { handleResetData } = shulDashboardActions;
  useEffect(() => {
    pollout({ key: 'in_memory_of', val: data });
    // modify campaign JSON
    campaign = {
      ...campaign,
      in_memory_of: data
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
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <div className="container">
        <div className="row mt-3">

          <div className="col-lg-1 col-md-0  col-sm-0" />
          <div className="col-lg-9 col-md-10  col-sm-10 inmemorymobviewPLG">
            <div>
              <h4>
                In Memory Of
                {' '}
                <span className="tooltip21" title="Text Here" data-toggle="tooltip"> [?]</span>
              </h4>
            </div>
            <div className=" bg-white  border-LTB cmapTablenewheight">
              <div className="tag-more-table-container tag-more-mob-w-Auto">
                <table id="campaing-table1">
                  <thead>
                    <tr>
                      <th />
                      <th className="tag-more-table-heading">Image</th>
                      <th className="tag-more-table-heading tagtable-align-chnge">English Name</th>
                      <th className="tag-more-table-heading tagtable-align-chnge">Hebrew Name</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {
              data.map((row, index) => (
                <tr>
                  <td className="table-row-number">
                    { index + 1 }
                  </td>
                  <td className="camapign-imgMemory1">
                    <DropzoneDialogTest
                      width={50}
                      height={40}
                      src='/dist/img/Memory.png'
                      urls={[row.image_link]}
                      setUrl={({ url }) => {
                        setData(() => {
                          const ret = data.slice();
                          let changedRow = ret[index];
                          changedRow = { ...changedRow, image_link: url };
                          ret[index] = changedRow;
                          return ret;
                        }); console.log(data);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      className="table-first-last-name-input"
                      helperText="English Name"
                      name="english_name"
                      onChange={(event) => handleChange(event, index)}
                      required
                      value={row.english_name}
                      placeholder="Name"
                    />
                  </td>
                  <td>
                    <input
                      className="table-email-input"
                      name="hebrew_name"
                      onChange={(event) => handleChange(event, index)}
                      required
                      value={row.hebrew_name}
                      placeholder="Hebrew Name"
                    />
                  </td>
                  <td>
                    {/* <Button
                      color="primary"
                      variant="contained"
                      onClick={() => onRemoveItem(index)}
                    > */}
                    <DeleteIcon
                      onClick={() => onRemoveItem(index)}
                    />
                    {/* Remove
                    </Button> */}
                  </td>
                </tr>
              ))
}
                  </tbody>

                  <tfoot>
                    <tr className="tag-more-table-footer">
                      <th />
                      <th className="tag-more-table-add-more-button" onClick={addItem}>
                        + Add More People
                      </th>
                      <th>    </th>
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

InMemory.propTypes = {
  className: PropTypes.string,
  inMemoryOf: PropTypes.array,
  pollout: PropTypes.func.isRequired,
  shulDashboardState: PropTypes.object,
  shulDashboardActions: PropTypes.object,
};

export default ShulDashboardContainer(InMemory);
