import React from 'react';
import ReactDOM from 'react-dom';

export default class PreviewPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    // STEP 1: create a container <div>
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
  }

  render() {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }

  componentDidMount() {
    const API_URL = 'http://localhost:3000';
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open('campaignpreview', '', 'width=600,height=400,left=200,top=200');

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl);
    const css = [
      'http://localhost:3000/css/bootstrap.min.css',
      'http://localhost:3000/css/magnific-popup.css',
      'http://localhost:3000/css/materialdesignicons.min.css',
      'https://unicons.iconscout.com/release/v2.1.9/css/unicons.css',
      'http://localhost:3000/css/owl.carousel.min.css',
      'http://localhost:3000/css/owl.theme.default.min.css',
      'http://localhost:3000/css/swiper.min.css',
      'http://localhost:3000/css/style.css',
      'http://localhost:3000/css/colors/default.css',
      'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    ];
    const js = [
      `${API_URL}/js/jquery-3.5.1.min.js`,
      `${API_URL}/js/bootstrap.bundle.min.js`,
      `${API_URL}/js/jquery.easing.min.js`,
      `${API_URL}/js/scrollspy.min.js`,
      `${API_URL}/js/jquery.countdown.js`,
      `${API_URL}/js/jquery.magnific-popup.min.js`,
      `${API_URL}/js/magnific.init.js`,
      `${API_URL}/js/typed.js`,
      `${API_URL}/js/typed.init.js`,
      `${API_URL}/js/owl.init.js `,
      `${API_URL}/js/swiper.min.js`,
      `${API_URL}/js/swiper.init.js`,
      `${API_URL}/js/jquery.flexslider-min.js`,
      `${API_URL}/js/flexslider.init.js`,
      `${API_URL}/js/parallax.js `,
      `${API_URL}/js/feather.min.js`,
      `${API_URL}/js/owl.carousel.min.js`,
      `${API_URL}/js/owl.init.js`,
      `${API_URL}/js/swiper.min.js`,
      `${API_URL}/js/swiper.init.js`,
      'https://unicons.iconscout.com/release/v2.1.9/script/monochrome/bundle.js',
      `${API_URL}/js/app.js`,
    ];
    let i = 0;
    const link = this.externalWindow.document.createElement('link');
    const sc = document.createElement('script');
    const head = this.externalWindow.document.getElementsByTagName('head')[0];
    let tmp;
    link.rel = 'stylesheet';
    for (; i < css.length; i++) {
      tmp = link.cloneNode(true);
      tmp.href = css[i];
      head.appendChild(tmp);
    }
    i = 0;
    for (; i < js.length; i++) {
      tmp = sc.cloneNode(true);
      tmp.setAttribute('src', `${API_URL}/js/jquery-3.5.1.min.js`);
      tmp.setAttribute('type', 'text/javascript');
      head.appendChild(tmp);
    }
  }

  componentWillUnmount() {
    // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by closing the window
    this.externalWindow.close();
  }
}
