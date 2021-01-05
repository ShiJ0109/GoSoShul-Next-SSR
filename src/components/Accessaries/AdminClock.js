import React, { Component, useEffect } from 'react';
import { GetCampaignDeadline } from 'services/mainRequests';

class Clock extends Component {
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
    this.startDate = new Date(this.props.deadline);

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
      <div id="clock" className="clock-shul-dashboardP overflow-hidden text-center float-right">
        <p className="clock-para-dashboardM d-inline-block">
          <span
            id="hours"
            className="d-block position-relative clock-box-color"
          >
            {days}
          </span>
          <span className="indicator position-relative d-block clock-font-color">
            DAYS
          </span>
        </p>
        <p className="clock-para-dashboardM d-inline-block">
          <span
            id="minutes"
            className="d-block position-relative clock-box-color"
          >
            {' '}
            {hours}
          </span>
          <span className="indicator position-relative d-block">
            HOURS
          </span>
        </p>
        <p className="clock-para-dashboardM d-inline-block">
          <span
            id="seconds"
            className="d-block position-relative clock-box-color"
          >
            {minutes}
          </span>
          <span className="indicator position-relative d-block">
            MINUTES
          </span>
        </p>
        {/* <p className="clock-para-dashboardM d-inline-block">
          <span
            id="seconds"
            className="d-block position-relative clock-box-color"
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
export default Clock;
