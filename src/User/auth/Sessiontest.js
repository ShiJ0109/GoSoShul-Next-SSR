import React from 'react';
import UserContainer from 'containers/UserContainer';

const Test = ({ userState }) => {
  const { session, error } = userState;
  return (
    <div>
      <h1>{session}</h1>
      <h1>{error}</h1>
    </div>
    
  );
};
export default UserContainer(Test);
