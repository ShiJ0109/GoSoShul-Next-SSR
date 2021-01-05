import React, { useState } from 'react';
import { ChallengeMatch, DoubleUp } from 'components/StepFormComponents';
import {
  Formik, ErrorMessage, Field, FieldArray
} from 'formik';
import * as Yup from 'yup';
import Warning from 'components/Typography/Warning';
// user Requests
import * as userRequests from 'services/userRequests';

const Tag = ({
  tagProps, handleBack, handleStepChange, handleTag
}) => {
  const [tag, setTag] = useState(tagProps);
  return (
    <Formik
      initialValues={tag}
      validationSchema={
        Yup.object({
          tags: Yup.array().of(
            Yup.object().shape({
              first_name: Yup.string().required('First Name is required'),
              last_name: Yup.string().required('Last Name is required'),
              email: Yup.string()
                .required('email is required')
                .email('Enter valid email')
            })
          )
        })
  }
      onSubmit={(values) => {
        handleTag(values);
        handleStepChange('Share');
        userRequests.PostTag(values)
          .then((ret) => {
            if (ret.stat === 'success') handleStepChange('Share');
            else window.alert(ret.error.response.data.status);
          });
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <div
            className="multisteps-form__panel js-active"
            data-animation="scaleIn"
          >
            <h1>{JSON.stringify(errors.tags)}</h1>
            <h1>{JSON.stringify(touched.tags)}</h1>
            <div
              className="multisteps-form__content"
              style={{
                marginTop: '-20px'
              }}
            >
              <div className="row pl-4 step-forms3-Rpadding-mobileview">
                <div className="col-lg-6  col-md-7  col-sm-6">
                  <h5 className=" fnt-2 form4-taghaning ">
                    Choose 2 people you can rely on
                    <br />
                    to join you in this mitzvah...
                  </h5>
                </div>
                <div className="col-lg-6  col-md-5  col-sm-6" />
                <FieldArray
                  name="tags"
                  render={() => {
                    return (
                      <>
                        <div className="col-lg-6  col-md-6  col-sm-6 pr-4 ">
                          <h4 className="frnd-fng1 mb-2 mt-1 "> Friend 1 </h4>
                          <div className="row">
                            <div className="col-lg-6  col-md-6  col-sm-6 ">

                              <div className="form-group position-relative">
                                <label className="lab-colr">First Name</label>
                                <input
                                  name="tags[0].first_name"
                                  id="name1"
                                  type="text"
                                  className="chng-frnd-fd "
                                  placeholder="Enter First Name"
                                  onChange={handleChange}
                                />
                                {
                                (errors.tags)
                                  ? (
                                    <Warning>{ errors.tags[0] && errors.tags[0].first_name}</Warning>
                                  ) : ''
                              }
                              </div>
                            </div>
                            <div className="col-lg-6  col-md-6  col-sm-6 lastnameFormtagpl-2 ">
                              <div className="form-group position-relative">
                                <label className="lab-colr">Last Name</label>
                                <input
                                  name="tags[0].last_name"
                                  onChange={handleChange}
                                  id="name2"
                                  type="text"
                                  className="chng-frnd-fd "
                                  placeholder="Enter Last Name"
                                  onChange={handleChange}
                                />
                                {
                                (errors.tags)
                                  ? (
                                    <Warning>{ errors.tags[0] && errors.tags[0].last_name}</Warning>
                                  ) : ''
                              }
                              </div>
                            </div>
                            <div className="col-lg-12  col-md-12  col-sm-12">
                              <div className="form-group position-relative">
                                <label className="lab-colr">Email</label>
                                <input
                                  name="tags[0].email"
                                  onChange={handleChange}
                                  id="mail"
                                  type="email"
                                  className="chng-frnd-fd"
                                  placeholder="Enter Email"
                                />
                                {
                                (errors.tags)
                                  ? (
                                    <Warning>{errors.tags[0] && errors.tags[0].email}</Warning>
                                  ) : ''
                              }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6  col-md-6  col-sm-6  form4-tag-paddingall  ">
                          <h4 className="frnd-fng1 mb-2 mt-1"> Friend 2 </h4>
                          <div className="row">
                            <div className="col-lg-6  col-md-6  col-sm-6">
                              <div className="form-group position-relative">
                                <label className="lab-colr">First Name</label>
                                <input
                                  name="tags[1].first_name"
                                  onChange={handleChange}
                                  id="name1"
                                  type="text"
                                  className="chng-frnd-fd "
                                  placeholder="Enter First Name"
                                />
                                {
                                (errors.tags)
                                  ? (
                                    <Warning>{ errors.tags[1] && errors.tags[1].first_name}</Warning>
                                  ) : ''
                              }
                              </div>
                            </div>
                            <div className="col-lg-6  col-md-6  col-sm-6 lastnameFormtagpl-2">
                              <div className="form-group position-relative">
                                <label className="lab-colr">Last Name</label>
                                <input
                                  name="tags[1].last_name"
                                  onChange={handleChange}
                                  id="name2"
                                  type="text"
                                  className="chng-frnd-fd "
                                  placeholder="Enter Last Name"
                                />
                                {
                                (errors.tags)
                                  ? (
                                    <Warning>{errors.tags[1] && errors.tags[1].last_name}</Warning>
                                  ) : ''
                              }
                              </div>
                            </div>
                            <div className="col-lg-12  col-md-12  col-sm-12">
                              <div className="form-group position-relative">
                                <label className="lab-colr">Email</label>
                                <input
                                  name="tags[1].email"
                                  onChange={handleChange}
                                  id="mail"
                                  type="email"
                                  className="chng-frnd-fd"
                                  placeholder="Enter Email"
                                />
                                {
                                (errors.tags)
                                  ? (
                                    <Warning>{errors.tags[1] && errors.tags[1].email}</Warning>
                                  ) : ''
                              }
                              </div>
                            </div>
                            {}
                          </div>
                        </div>
                      </>
                    );
                  }}
                />

                <div className="col-lg-6  col-md-6  col-sm-6 pr-4 form4NewPaddingTop ">
                  <ChallengeMatch
                    state={(tag.ref_option === '1')}
                    handleClick={() => {
                      setTag({
                        ...tag,
                        ref_option: (tag.ref_option === '1')
                          ? '0' : '1'
                      });
                      values.ref_option = (tag.ref_option === '1')
                        ? '0' : '1';
                    }}
                  />
                </div>
                <div className="col-lg-6  col-md-6  col-sm-6 form4NewPaddingTBBoth ">
                  <DoubleUp
                    state={(tag.ref_option === '2')}
                    handleClick={() => {
                      setTag({
                        ...tag,
                        ref_option: (tag.ref_option === '2')
                          ? '0' : '2'
                      });
                      values.ref_option = (tag.ref_option === '2')
                        ? '0' : '2';
                    }}
                  />
                </div>
                {}
              </div>
              <div className="button-row d-flex col-12 form3-donatstepthree">
                <button
                  id="go-backprev-btn"
                  className="btn  js-btn-prev "
                  type="button"
                  onClick={() => {
                    handleBack();
                    handleTag(tag);
                  }}
                >
                  <i
                    className="fa fa-caret-left  back-clr-icon"
                    aria-hidden="true"
                  />
           Go Back
                </button>
                <button
                  className="btn nxtbtn-step-green ml-auto "
                  type="button"
                  title="Next"
                  onClick={() => {
                    handleSubmit();
                  }}
                  style={
            {
              color: 'rgb(33, 29, 40)',
              border: '3px solid rgb(85, 190, 33)'
            }
          }
                >
                  Next
                </button>
                <hr
                  className="hr-right-line"
                  style={
          {
            border: '2px solid rgb(85, 190, 33)'
          }
        }
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>

  );
};

export default Tag;
