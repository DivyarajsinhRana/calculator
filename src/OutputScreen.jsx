
import React from 'react';
  

const OutputScreen = (props) => {
  return (
    <div className="screen">
      <input type="text" readOnly value={props.a}/>
    </div>
  )
} 
export default OutputScreen;