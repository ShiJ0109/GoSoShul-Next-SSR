import React from 'react';
// import api Requests.
import * as apiRequests from 'services/apiRequsts';
import * as mainRequests from 'services/mainRequests';
import * as userRequests from 'services/userRequests';
// import model
import * as StepFormsModel from 'models/user/StepFormsModel';
// import session
import UserContainer from 'containers/UserContainer';
import ProgressBar from './ProgressBar';
import Donate from './Donate';
import PaymentDetail from './PaymentDetail';
import Tag from './Tag';
import Share from './Share';
import SignupModal from './SignupModal';

class StepForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStat: 'Donate',
      refData: undefined,
      shulLists: [],
      session: false,
      donate: {},
      paymentDetail: {},
      tag: {},
      share: {}
    };
  }

  async componentDidMount() {
    const { session } = this.props.userState;
    // judgement if reftoken is given or not
    const { refToken } = this.props;
    await this.setState({ session, donate: StepFormsModel.DonateModel(session), tag: StepFormsModel.TagModel(session) });
    if (refToken !== undefined) {
      const refRes = await userRequests.GetRef(refToken);
      if (refRes.stat === 'success') {
        const tmpRes = refRes.data.ref;
        const { donate, tag } = this.state;
        this.setState({
          refData: tmpRes,
          donate: {
            ...donate,
            shul_id: tmpRes.shul_id,
            ref: tmpRes.ref_option,
            referrer_id: tmpRes.referrer_user_id,
          },
          tag: {
            ...tag,
            shul_id: tmpRes.shul_id,
          }
        });
      }
    }
    // get shulLists
    const shulListsRes = await apiRequests.GetShulLists({
      ver: 2,
      state: '',
      keyword: ''
    });
    if (shulListsRes.stat === 'success') this.setState({ shulLists: shulListsRes.data.shul_list });
  }

  // callback to move to next page
  handleChange = (formStat) => {
    this.setState({ formStat });
  }

  // function to move to previous page
  handleBack = () => {
    const { formStat } = this.state;
    switch (formStat) {
      case 'PaymentDetail':
        this.setState({ formStat: 'Donate' });
        break;
      case 'Tag':
        this.setState({ formStat: 'PaymentDetail' });
        break;
      case 'Share':
        this.setState({ formStat: 'Tag' });
        break;
      default:
        break;
    }
  }

  // function to set donate state
  handleDonate = (donate) => {
    this.setState({ donate });
  }

  // function to set paymentDetail state
  handlePaymentDetail = (paymentDetail) => {
    this.setState({ paymentDetail });
  }

  // function to set tag state
  handleTag = (tag) => {
    this.setState({ tag });
  }

  // function to fetch donate data
  fetchDonate = async () => {
    return await userRequests.PostDonate(this.state.donate);
  }

  // function to fetch tag data
  fetchTag = async () => {
    return await userRequests.PostTag(this.state.tag);
  }

  render() {
    if (Object.values(this.state.donate).length === 0) return '';
    const { refToken } = this.props;
    return (
      <>
        <header className="header">
          <a
            className="logo "
            href="#"
            onClick={() => { window.location.href = '/'; }}
          >
            <img src="/images/gososhul/green-logo.png" className="stepform-Greenlogo" alt="" />
          </a>
        </header>
        <div style={{ width: '100%' }}>
          <div className="content__inner">
            <div className="container overflow-hidden">
              <div className="multisteps-form">
                <ProgressBar formStat={this.state.formStat} />
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <form className="multisteps-form__form">
                      {
                    (this.state.formStat === 'Donate')
                      ? (
                        <Donate
                          refData={this.state.refData}
                          shulLists={this.state.shulLists}
                          donateProps={this.state.donate}
                          tagProps={this.state.tag}
                          handleStepChange={this.handleChange}
                          handleBack={this.handleBack}
                          handleDonate={this.handleDonate}
                          handleTag={this.handleTag}
                        />
                      ) : ''
                  }
                      {
                    (this.state.formStat === 'PaymentDetail')
                      ? (
                        <PaymentDetail
                          handleBack={this.handleBack}
                          shulLists={this.state.shulLists}
                          donateProps={this.state.donate}
                          handleStepChange={this.handleChange}
                          handleDonate={this.handleDonate}
                        />
                      ) : ''
                  }
                      {
                    (this.state.formStat === 'Tag')
                      ? (
                        <Tag
                          tagProps={this.state.tag}
                          handleBack={this.handleBack}
                          handleStepChange={this.handleChange}
                          handleTag={this.handleTag}
                        />
                      ) : ''
                  }
                      {
                    (this.state.formStat === 'Share')
                      ? (
                        <Share
                          handleBack={this.handleBack}
                        />
                      ) : ''
                  }
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SignupModal
          refToken={refToken}
          handleSession={(session) => {
            const { donate, tag } = this.state;
            this.setState({
              ...this.state,
              session,
              donate: {
                ...donate,
                session,
              },
              tag: {
                ...tag,
                session
              }
            });
          }}
        />
      </>
    );
  }
}

export default UserContainer(StepForms);
