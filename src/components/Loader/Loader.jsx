import { RotatingLines } from 'react-loader-spinner';
import React from 'react';

const Loader = () => { 
    return (
<div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <RotatingLines
      strokeColor="teal"
      strokeWidth="5"
      animationDuration="0.75"
      width="296"
      visible={true}
    />
  </div>    )
}
export default Loader;