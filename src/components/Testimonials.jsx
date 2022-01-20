import React from 'react';
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { PreviousBtn, NextBtn } from './Button';

export const Packet =(  {imgName, textTest, name, positionOf}  ) => { 


    return (
        
           <div style={{
               display:'flex',
               alignItems:'center',
               flexDirection:'column',
               textAlign: 'center',
               color: 'grey'
               }}> 
            
                <p style= {{ 
                    fontStyle: "italic ",
                    marginTop: 25,
                    fontSize: 22
                    }}> 
                   {textTest}
                   
                   </p>
                <p style= {{ 
                    marginTop: 25}} > <span style = {{fontWeight: 700, color: "green"}}>   {name}   </span> <span style = {{fontStyle: "italic"}}>{positionOf} </span> </p>
            </div> 
    )
};

function Testimonials() {

    return (
        <div className = "testimonial"
        
        
        style ={{display:'flex',
        justifyContent:"center",
        marginTop:50
        }}> 
        <div className="testss" style ={{width: '50%', textAlign: 'center'}}>
            <h1 style={{
                marginBottom: 20,
                color: "grey",
                }}>
                    
                    TESTIMONIALS</h1> 
            <Slider prevArrow={<PreviousBtn />} nextArrow = {<NextBtn />} dots> 
                 <Packet name = "Robert Duffield, " positionOf = " Head, Aftermaket Customer and Product Support, MHIRJ" textTest="I found Alessandra to always be professional, dependable, well respected and capable beyond her years" /> 
                <Packet name = "Mohammad K Khan, " positionOf = " Manager Maintenance & Publications Services, MHIRJ" textTest="It was a pleasure having Alessandra on our team. Alessandra was always pleasant, helpful and eager to learn. More so, she did not stop at hurdles on her way, rather found a way to circumvent them" /> 
                <Packet name = "Maroon Sara,  " positionOf = " Manager Program Investment Office, MHIRJ" textTest="If Ms. Guerinoni's performance in our firm is a good indication of her future performance, she would be an extremely valuable asset to your company" /> 
                
            </Slider>
        </div>
        </div> 
    )
};

export default Testimonials
