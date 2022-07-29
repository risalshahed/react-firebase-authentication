import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height: '500px'}}>
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default Loading;