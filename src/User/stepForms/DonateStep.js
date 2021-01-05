import React from 'react';
import { useParams } from 'react-router-dom';
import StepForms from './StepForms';

const DonateStep = () => {
  const { ref } = useParams();
  return (<StepForms refToken={ref} />);
return <h1>{ref}</h1>
};

export default DonateStep;
