import React from 'react';
import reactLogo from '../assets/react.svg'


const TopBar = (props) => {
  const {children} = props
  const {className} = props

    return (
      
      <div className={className}>
          {children}  
      </div>
    );
  }
  export { TopBar };