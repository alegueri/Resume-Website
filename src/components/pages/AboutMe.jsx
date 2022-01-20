import React, {useState, useEffect} from 'react';
import '../../App.css';
import {Avatar } from "@material-ui/core";
import '../aboutMe.css';
import {Button, BarNew } from '../Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { buildStyles,CircularProgressbar } from 'react-circular-progressbar';
import {Linking} from "react-native";


function AboutMe() {
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

  const avatar1 =  <Avatar 
                imgProps={{style:{borderRadius: "50%"}}}
                src = "images2/AlePic.jpeg" 
                style=
                {{  width: 420, 
                    height: 620,
                    border: '1px solid lightgrey',
                    padding:7,      
                    marginBottom:20     

            }}/>

    const avatar2 =  <Avatar 
    imgProps={{style:{borderRadius: "50%"}}}
    src = "images2/AlePic.jpeg" 
    style=
    {{  width: 220, 
        height: 320,
        border: '1px solid lightgrey',
        padding:7,      
        marginBottom:20     

}}/>      
    const avatar = buttons ? avatar1 : avatar2 

    return (
    
        
      <div className='Outer'> 
          
           <div className="upper2"> 
           <div className ="upperTop"> 
           
                    {avatar} 
                
           </div>
            <div className="upperBottom" style ={{marginBottom: 50}}>
                <Button className='btns' onClick = {() => Linking.openURL('mailto:ale.guerinoni@gmail.com')} buttonStyle ='btn--outline' buttonSize = {buttons ? 'btn--large' : 'btn--medium'} ><i class="fas fa-envelope"></i></Button> 
                <Button className='btns' onClick= {()=>window.open("https://www.linkedin.com/in/alessandraguerinoni","_blank")} buttonStyle ='btn--outline' buttonSize ={buttons ? 'btn--large' : 'btn--medium'}><i class="fab fa-linkedin-in"></i> </Button>
                <Button className='btns' onClick= {()=>window.open("https://github.com/alegueri","_blank")} buttonStyle ='btn--outline' buttonSize ={buttons ? 'btn--large' : 'btn--medium'}><i class="fab fa-github"></i></Button>
                <Button className='btns' onClick= {()=>window.open("https://www.instagram.com/aleguerinoni/","_blank")} buttonStyle ='btn--outline' buttonSize ={buttons ? 'btn--large' : 'btn--medium'}><i class="fab fa-instagram"></i> </Button>
                   
            </div>

           </div> 


           <div className="lower2"> 
                <div className = "firstSection"> 
                            <div className = "aboutWrapper" >
                            <div className="about"> <h1>ABOUT ME</h1> </div> 
                            <div className="aboutInfo"> <p> <span> Hello there, my name is Alessandra Guerinoni! Nice to meet you :) </span> 
                            I am currently studying Mechatronics Engineering at McMaster University, expecting to graduate in April 2022. 

Passionate about innovation, problem solving and creative thinking, particularly fascinated with sectors involving Space, Brain Computer Interface and AI.  

For my free time, I love to spend time with my family and friends, read, learn & play guitar, a fitness enthusiast, with an overall focus of staying mindful throughout the day.

Feel free to look through the remainder of my website. Send me an email if you have any questions or would simply like to get to know me better. 

Let’s tackle our common goal of building a sustainable world with a reliable future.
                            
                            
                            </p>
                                
                            
                            
                             </div>
                            </div> 
                    
                            <div className="personalInfo"> 
                                    
                                    <div className="pInfoTitle"> <h4>Personal Information </h4> </div> 
                                    <div className="titles">

                                             <div className = "infoTitles "> 
                                                    <div className = "listPoints "> <h5> Full Name </h5></div>
                                                    <div className = "listPoints "> <h6>Alessandra Guerinoni</h6></div>
                                             </div>      
                                             <div className = "infoTitles "> 
                                                    <div className = "listPoints "><h5> D.O.B </h5> </div>
                                                    <div className = "listPoints "> <h6>April 19 1998</h6> </div>
                                             </div>   
                                             <div className = "infoTitles "> 
                                                    <div className = "listPoints "> <h5> Location </h5></div>
                                                    <div className = "listPoints "> <h6> Milton, ON </h6></div>
                                             </div> 
                                             <div className = "infoTitles "> 
                                                    <div className = "listPoints "> <h5>Phone Number</h5></div>
                                                    <div className = "listPoints "><h6>(289)-400-6611</h6> </div>
                                             </div> 
                                             <div className = "infoTitles "> 
                                                    <div className = "listPoints "> <h5> Email </h5> </div>
                                                    <div className = "listPoints "> <h6> ale.guerinoni@gmail </h6></div>   
                                             </div>                            
                                                    
 
                                     </div>
                            </div>

                </div> 
                <div className="infoandskills"> 
                   
                    <div className="languages">  
                    
                        <h4>Languages </h4> </div> 
                        <div className ="inlanguages2" >
                           <div className ="bar1"><BarNew  className = "firstBar" percentages = {100} text={"English"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
                           <div className ="bar1"><BarNew  className = "secondBar" percentages = {100} text={"Spanish"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
                           <div className ="bar1" > <BarNew  className = "secondBar" percentages = {50} text={"French"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
                        </div>
                   
                </div>
            </div>


      </div>  


)
}
export default AboutMe