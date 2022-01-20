

import React, {useState, useEffect} from 'react';
import "../Achievements.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Achievements() {
    const [hoverOn, sethoverOn] = useState(false);
    function HoverOn() { sethoverOn(true);}  
    function HoverOut() { sethoverOn(false);} 
    const [hoverOn1, sethoverOn1] = useState(false);
    function HoverOn1() { sethoverOn1(true);}  
    function HoverOut1() { sethoverOn1(false);} 


    const [hoverOn2, sethoverOn2] = useState(false);
    function HoverOn2() { sethoverOn2(true);}  
    function HoverOut2() { sethoverOn2(false);} 
    const [hoverOn3, sethoverOn3] = useState(false);
    function HoverOn3() { sethoverOn3(true);}  
    function HoverOut3() { sethoverOn3(false);} 

    const [hoverOn4, sethoverOn4] = useState(false);
    function HoverOn4() { sethoverOn4(true);}  
    function HoverOut4() { sethoverOn4(false);} 


    function innerText (props) {
        return (
            <div className="cacaotext">                               
                    <div className="cacaoTitle"> <h6>{props.projectTitle} </h6></div>   
                        <div className="cacaoSlash"><h7>{props.projectSlash} </h7></div>
                        <div className='cacaodate'> <p> {props.date} </p> </div> 
                        <div className ='cacaobullets'> 
                            <ul> 
                                    <li> {props.list1} </li>
                                    <li> {props.list2} </li>                  
                            </ul>
                        </div>
            </div>
    );
};

    return (
               <div className='mainDiv'> 
               <div className="aUpper">
                        
                        <div className="aU1" onMouseEnter={HoverOn} onMouseLeave={HoverOut}> 
                                {hoverOn && innerText({
                                    projectTitle:"Cacao Husk Tea - Tea Business", 
                                    projectSlash:"Calientico, Piseral Inc", 
                                    date:"Aug 2021 - Present",
                                    list1: "Strengthened business acumen by founding a Cacao Husk Tea business, selling tea, ethnically sourced from Peru.",
                                    list2: "Conducted market research/analysis, and managed the financial operations, estimating a 31% profit margin. Technologies Used: Excel." 
                                    }) }
                           
                                <div className='slider' style={{filter: hoverOn && `brightness(35%)`}}>
                                <AwesomeSlider >
                                    <img data-src="./images/cacao2.jpg" />
                                    <img data-src="./images/cacao6.jpg" />
                                </AwesomeSlider>
                                </div>
                        </div>
                         <div className="aU2" onMouseEnter={HoverOn1} onMouseLeave={HoverOut1} >
                                    {hoverOn1 && innerText({
                                    projectTitle:"TriAuto - Capstone Project", 
                                    projectSlash:"McMaster",
                                    date:"Sept 2021 – Present",
                                    list1: "Working with a team of four in developing a fully automated, technically efficient, triage system, designed to enhance and simplify manual processes in a hospital's urgent care standard routine. Technologies Used: React, Node.js, SocketIO.",
                                    list2: "Backend / frontend developer, integrating relational patient databases and user interface, connected via backend server." 
                                    }) }
                                    <div className="aU2Inner"style={{boxShadow: hoverOn1 && `inset 0 0 0 1000px rgba(0,0,0,0.7)`}} ></div>
                         </div>
                </div>

                <div className="aLower">

                <div className="aL1" onMouseEnter={HoverOn2} onMouseLeave={HoverOut2}>
                                    {hoverOn2 && innerText({
                                    projectTitle:"LIT Girls Speaker - Leadership Training Program", 
                                    projectSlash:"Blue Jays Care",
                                    date:"May 2021",
                                    list1: "Inspired over 50 young women to reflect on Engineering as a career path.",
                                    }) }
                                    <div className="aU2Inner"style={{boxShadow: hoverOn2 && `inset 0 0 0 1000px rgba(0,0,0,0.7)`}} ></div>
                    
                     </div>
                <div className="aL2"  onMouseEnter={HoverOn3} onMouseLeave={HoverOut3}>
                    
                                    {hoverOn3 && innerText({
                                    projectTitle:"Outfuel Fuel Expense Tool – Course Project", 
                                    projectSlash:"McMaster",
                                    date:"Jan 2018 – Apr 2018",
                                    list1: "Lead a team of 5 in developing an economic fuel expense tool for consumers.",
                                    list2: "Created the idea for the fuel expense tool. Used java programming, Eclipse IDE, and J-Unit testing to develop app." 
                                    }) }
                                    <div className="aU2Inner"style={{boxShadow: hoverOn3 && `inset 0 0 0 1000px rgba(0,0,0,0.7)`}} ></div>         
                     </div>
                
                <div className="aL3"  onMouseEnter={HoverOn4} onMouseLeave={HoverOut4}> 
                
                
                                    {hoverOn4 && innerText({
                                    projectTitle:"Resume Website", 
                                    date:"Present",
                                    list1: "Developed and designed the creation of this website from scratch. The website is hosted through Amazon S3",
                                    list2: "Used React.js, HTML, CSS and JavaScript for the first time to fully develop this project, top to bottom. The source code can be found on my github. " 
                                    }) }
                                    <div className="aU2Inner"style={{boxShadow: hoverOn4 && `inset 0 0 0 1000px rgba(0,0,0,0.7)`}} ></div> 
                
                </div>


                </div>
               </div>
    )
}
