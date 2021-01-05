import React from 'react';
import {useNavigate} from 'react-router-dom';

const Video = () => {
  const navigate = useNavigate();
  return (
    <div className="watch-video text-center">
      <a
        href="#"
        onClick={()=>{navigate('/shul/register')}}
        className="btn go-btn-1 btn-padding-new Btn-MarginGrp "
      >
        Sign Up Now
      </a>
      <a
        href="#"
        onClick={()=>{navigate('/login')}}
        className="btn go-btn-2  btn-padding-new"
      >
        View Demo
      </a>
    </div>
  );
};

export default Video;
