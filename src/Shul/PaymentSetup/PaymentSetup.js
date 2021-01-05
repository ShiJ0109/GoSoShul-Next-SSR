import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import { Helmet } from 'react-helmet';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { UserContainer } from 'containers';
import * as stripeRequests from 'services/stripeRequests';
import Modal from 'components/Modal/Modal';
import FollowModal from './FollowModal';

class PaymentSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connecting: false,
      openModal: false,
      followModal: false,
      session: null,
    };
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount() {
    this.setState({
      connecting: false,
      openModal: false,
      followModal: false,
      session: this.props.userState.session,
    });
  }

   handlePost=() => {
     // init stripe refresh url localstorage string
     localStorage.setItem('stripeData', JSON.stringify({
       id: null,
       session: null,
     }));
     this.setState({ connecting: true });
     stripeRequests.stripeConnect(this.state.session);
   }

   render() {
     const { connecting, openModal, followModal } = this.state;
     return (
       <div className="content-wrapper">
         {}
         <Helmet defer={false}>
           <script src="https://js.stripe.com/v3/" />
         </Helmet>
         <div className="content-header">
           <div className="container-fluid">
             <div className="row mb-2" />
           </div>
         </div>
         <div className="container ">
           <div className="row">
             <div className="col-lg-1 col-md-1 col-sm-0" />
             <div className="col-lg-9 col-md-10 col-sm-10  paddingLR-share-mobile">
               <div className="payment-text1">
                 <p>
                   We use Stripe and Plaid as the backbone to safe and secure
                   instant payments. You must follow the instructions below to
                   set up your account to accept and control your funds. It only
                   takes a few minutes and you’ll be all set.
                 </p>
               </div>
             </div>
           </div>
           <div className="data-replaceble">
             <div className="row">
               <div className="col-lg-1 col-md-1 col-sm-0" />
               <div className="col-lg-9 col-md-10 col-sm-10 paddingLR-share-mobile ">
                 <div className="payment-step-text pt-4">
                   <h5>Step 1</h5>
                   <h4>Connect Your Stripe Account</h4>
                   <p>
                     Whether you already have a stripe account or not, this link
                     will walk you through connecting with Gososhul to connect to
                     your new or existing Stripe account so we can process
                     payments and transfer campaign funds to your account.
                     {' '}
                   </p>
                   <div className>
                     <button
                       className="btn greenbtn green1 Pay-newmobile-font payment-btn-width1 waves-effect waves-light"
                       type="submit"
                       disabled={connecting}
                       onClick={this.handlePost}
                     >
                       {connecting
                         ? 'Connecting'
                         : 'Connect Now'}
                     </button>
                   </div>
                 </div>
                 <div className="payment-step-text pt-4">
                   <h5>Step 2</h5>
                   <h4>Activate Non-Profit Rates</h4>
                   <p>
                     We detected that your account is not yet approved for not
                     for profit rates.In order to get the lowest rates and keep
                     the most funds, follow these simple instructions and you’ll
                     be approved within 24 hours.
                     {' '}
                   </p>
                   <div className>
                     <button
                       className="btn greenbtn green1  col-md-6  col-sm-12 waves-effect Pay-newmobile-font waves-light"
                       type="submit"
                       onClick={() => {
                         this.setState({ openModal: true });
                       }}
                     >
                       Send an email to: support@stripe.com
                     </button>
                     {
                       openModal
                       && (
                       <Modal
                         closeModal={() => {
                           this.setState({ openModal: false });
                         }}
                         onClickAway={() => {
                           this.setState({ openModal: false });
                         }}
                       >
                         <App />
                       </Modal>
                       )
                     }
                     <span className="side-text-top">
                       Attach your 501c3 letter and tax id
                     </span>
                   </div>
                 </div>
                 <div className="payment-step-text pt-4">
                   <h5>Step 3</h5>
                   <h4>Activate Instant Check Payments</h4>
                   <p>
                     Follow these instructions to activate instant check payments
                     from your donors bank account, safely and securely. Fees are
                     1% lower on ACH payments.
                     {' '}
                   </p>
                   <div className=" ">
                     <button
                       id="follow-instruction"
                       className="btn greenbtn green1 col-md-3 waves-effect Pay-newmobile-font waves-light"
                       type="submit"
                       onClick={() => {
                         this.setState({ followModal: true });
                       }}
                     >
                       Follow Instruction
                     </button>
                     {
                       followModal
                       && (
                       <Modal
                         closeModal={() => {
                           this.setState({ followModal: false });
                         }}
                         onClickAway={() => {
                           this.setState({ followModal: false });
                         }}
                       >
                         <FollowModal />
                       </Modal>
                       )
                     }
                   </div>
                 </div>
               </div>
             </div>
             <div className="row SpaymtdesMtb1">
               <div className="col-lg-1 col-md-1 col-sm-0" />
               <div className="col-lg-10 col-md-10 col-sm-10 paddingLR-share-mobile">
                 <div className="card">
                   <div className="card-body">
                     <div className="row pt-4">
                       <div className="col-lg-1 col-md-1 col-sm-1">
                         <img
                           src="/dist/img/not-arrow.png"
                           width={24}
                           className
                         />
                       </div>
                       <div className="col-lg-10 col-md-10 col-sm-10 pay-setup-txtapplPadding">
                         <h4 className="application-txt">Application Charges</h4>
                         <p className="app-charg-para1 mb-1">
                           These are the total charges all in with credit card
                           processing fees that will be deducted per transaction.
                           And we’ve built in the options for donors to opt into
                           covering the fees.
                           {' '}
                         </p>
                         <p className="app-charg-para2 mb-0">
                           Instant Check - 2.9% + .30 cents
                         </p>
                         <p className="app-charg-para2 ">
                           Credit/Debit Cards* - 3.9% + .30 cents
                         </p>
                         <p className="app-charg-para1 ">
                           *If you enabled non profit rates as described above.
                           If not there is an additional .7%
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="Container">
           <div className="row">
             <div className="col-md-1" />
             <div className="col-md-10" />
           </div>
         </div>
       </div>
     );
   }
}

const App = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
  // <div>
  //   <div>
  //     <button onClick={exportHtml}>Export HTML</button>
  //   </div>

    <EmailEditor
      ref={emailEditorRef}
      onLoad={onLoad}
    />
  // </div>
  );
};

export default UserContainer(PaymentSetup);
