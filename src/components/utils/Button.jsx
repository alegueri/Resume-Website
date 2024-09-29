import React from 'react'
import '../styles/Button.css';


import 'react-circular-progressbar/dist/styles.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium','btn--large'];


export const Button =(  {children, type, onClick, buttonStyle, buttonSize, file}  ) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 
    const checkButtonSize = SIZES.includes (buttonSize) ? buttonSize : SIZES[0];

    const BUTTON =  <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick ={onClick} 
                >
                {children}
                </button>

    const isFileAvailable = file && file.trim() !== '';
    return (   
    <>
      {isFileAvailable ? (
        <a href={file} download>
          {BUTTON}
        </a>
      ) : (
        BUTTON
      )}
    </>
    )

};
