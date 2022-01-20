import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';
import Axios from "axios"; 
import FileDownload from "js-file-download";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren }from 'react-circular-progressbar';
import ChangingProgressProvider from "./ChangingProgressProvider";


import 'react-circular-progressbar/dist/styles.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium','btn--large'];

export const Button =(  {children, type, onClick, onPress, buttonStyle, buttonSize}  ) => { 
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 
        const checkButtonSize = SIZES.includes (buttonSize) ? buttonSize : SIZES[0];

        return (
            
                <button
                 className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                 onClick ={onClick} // make this equal to whatever it was passed as aparameter 
                 onPress = {onPress}
                 type = {type}
                >
                    {children}
                </button>
                
        )


};
export const Button1 =(  {children, type, onClick, buttonStyle, buttonSize}  ) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 
    const checkButtonSize = SIZES.includes (buttonSize) ? buttonSize : SIZES[0];

    return (
           <a href="./AlessandraGuerinoni_Resume.pdf" download><button
             className={`btn ${checkButtonStyle} ${checkButtonSize}`}
             onClick ={onClick} 
             type = {type}
            >

                {children}
            </button> </a>
    
    )




};
export const Button2 =(  {children, type, onClick, buttonStyle, buttonSize}  ) => { 
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 
  const checkButtonSize = SIZES.includes (buttonSize) ? buttonSize : SIZES[0];

  return (
         <a href="./ReferenceLetters.zip" download><button
           className={`btn ${checkButtonStyle} ${checkButtonSize}`}
           onClick ={onClick} 
           type = {type}
          >

              {children}
          </button> </a>
  
  )




};

export const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "grey", fontSize: "45px" }} />
      </div>
    );
  };
  
 export const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "grey", fontSize: "45px" }} />
      </div>
    );
  };


export const BarNew = ({className, text, percentages, buttons1}) => {
    return (
        <div className={className} style={{width: "55%", height: "75%", boxShadow: "0 6px 20px rgb(0,0,0,0.7)"}}>
           <ChangingProgressProvider values = {[0, percentages]}>
              {percentage => ( <CircularProgressbar 
                        value ={percentage} 
                        text = {text} 
                        background = "true"
                        strokeWidth={5} 
                        backgroundPadding = {5}
                        styles={buildStyles({
                            textColor: "#003147",
                            pathColor: "#003147",
                            textSize: "14px",  
                            trailColor: "#E8E8E8",
                            pathTransition: percentage === percentages? "stroke-dashoffset 0.5s ease 0s" : "stroke-dashoffset 0.5s ease 0s",
                            backgroundColor: "lightgrey"
                        })}
                        
                        /> )}
            </ChangingProgressProvider> 
        </div> 
    ); 
};

