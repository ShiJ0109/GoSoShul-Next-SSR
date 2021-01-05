import React, { Component, useEffect } from 'react';
import { GetCampaignDeadline } from 'services/mainRequests';

class ScrollClock extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.startDate = false;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
    // this.startDate = new Date("2020-10-02 00:00:00");
    GetCampaignDeadline()
      .then((ret) => {
        console.log(ret);
        if (ret.stat === 'success') this.startDate = new Date(ret.data.deadline);
        console.log(this.startDate);
      });
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this;
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      return;
    }
    this.setState({
      days, hours, minutes, seconds, expired: false
    });
  };

  render() {
    const {
      days, hours, minutes, seconds, expired
    } = this.state;
    if (expired) {
      return <div className="expired">Expired :(</div>;
    }
    if (this.startDate == false) return null;
    return (
      <div id="clock" className="mb-4 overflow-hidden d-flex text-center">
        <p className="mb-0 ml-3 mr-3 d-flex">
          <span className="d-block  position-relative clock-box-title-color">
            D
          </span>
          <span
            id="hours"
            className="d-block position-relative clock-box-color"
          >
            {days}
          </span>
        </p>
        <p className="mb-0 ml-3 mr-3 d-flex">
          <span className="d-block  position-relative clock-box-title-color">
            H
          </span>
          <span
            id="minutes"
            className="d-block position-relative clock-box-color"
          >
            {hours}
          </span>
        </p>
        <p className="mb-0 ml-3 mr-3 d-flex">
          <span className="d-block  position-relative clock-box-title-color">
            M
          </span>
          <span
            id="seconds"
            className="d-block position-relative clock-box-color"
          >
            {minutes}
          </span>
        </p>
        {/* <p className="mb-0 ml-3 mr-3 d-flex">
          <span
            id="seconds"
            className="d-block  position-relative clock-box-title-color"
          >
            {seconds}
          </span>
          <span className="indicator position-relative d-block">
            SECONDS
          </span>
        </p> */}
      </div>
    );
  }
}
export default ScrollClock;
