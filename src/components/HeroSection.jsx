
import React, {useState, useEffect} from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
import Typewriter from 'typewriter-effect';
import {Linking} from "react-native";


function HeroSection() {
    const [buttons, setbuttonS] = useState(true);
    const buttonS= () => { if(window.innerWidth <= 1300) {
                                setbuttonS(false);
                            }
                            else { 
                                setbuttonS(true); 
                                }
                            }; 
    useEffect(()=> {
    buttonS()
    },[]);
    window.addEventListener('resize', buttonS);

    return (

        <div className = 'hero-container'>
            {/*<video src = "/videos/video-2.mp4" autoPlay loop muted /> */ }
         <h3> <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString('<span style="color: white; font-size: 52px;"> Hello I\'m <span><br>') 
                    .pauseFor(0)
                    typewriter.typeString('<span style="color: red; width: 910px;"> Alessandra <br> </span>')
                    typewriter.typeString('<span style="color: red; width: 910px; "> Guerinoni</span>')
                    .start();
                }}/>  </h3> 
 
            <div className="hero-btns">
               <Button className='btns' onClick = {() => Linking.openURL('mailto:ale.guerinoni@gmail.com')} buttonStyle ='btn--outline' buttonSize = {buttons ? 'btn--large' : 'btn--medium'} ><i class="fas fa-envelope"></i></Button> 
                <Button className='btns' onClick= {()=>window.open("https://www.linkedin.com/in/alessandraguerinoni","_blank")} buttonStyle ='btn--outline' buttonSize ={buttons ? 'btn--large' : 'btn--medium'}><i class="fab fa-linkedin-in"></i> </Button>
                <Button className='btns' onClick= {()=>window.open("https://github.com/alegueri","_blank")} buttonStyle ='btn--outline' buttonSize ={buttons ? 'btn--large' : 'btn--medium'}><i class="fab fa-github"></i></Button>
                <Button className='btns' onClick= {()=>window.open("https://www.instagram.com/aleguerinoni/","_blank")} buttonStyle ='btn--outline' buttonSize ={buttons ? 'btn--large' : 'btn--medium'}><i class="fab fa-instagram"></i> </Button>
            </div>
            
        </div>
    )
}

export default HeroSection

