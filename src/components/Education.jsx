
import './Education.css';
import CardItemnew from './CardItemnew';
import {Avatar } from "@material-ui/core";
import React, {useState, useEffect} from 'react';

function Education() {

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
    },[]); // runs only on first render 
    window.addEventListener('resize', buttonS);

    const avatar2 =  <Avatar 
    imgProps={{style:{borderRadius: "50%"}}}
    src = "images/aleee2.jpg" 
    style=
    {{  width: 220, 
        height: 320,
        border: '1px solid lightgrey',
        padding:7,      
        marginBottom:20     

    }}/> 
    const avatar1 =  <Avatar 
    imgProps={{style:{borderRadius: "50%"}}}
    src = "images/aleee2.jpg" 
    style=
    {{  width: 320, 
        height: 420,
        border: '1px solid lightgrey',
        padding:7,      
        marginBottom:20     

}}/>

     
const avatar = buttons ? avatar1 : avatar2 
    return (
        <div className = "total" > 
                        <div className="EducationUpper">

                                <div className="EduAvatar">{avatar} </div>






                        <div className = "another" > 
                
                                    <h1> EDUCATION </h1> 
                    
                                
                                    < div className='right1' > 

                                            <div className="textEdu"> <p> <span> Welcome to the Education tab! </span> Studied at McMaster since 2016 in pursuit of my goal and graduate with a Bachelors degree in Mechatronics Engineering.
                                             Fun Fact, in my second year of undergraduate studies, I studied as a software engineer, ultimately changing my path to Mechatronics Engineering. Expected to graduate in April 2022, I can't wait to see what my future will hold</p>
                                            
                                            
                                            </div> 
                                         <div className ="summary" > 
                                            <h2>McMaster University </h2> 
                                            <h3> Bachelor of Engineering - Mechatronics Engineering </h3> 
                                            <div className = "date"> <h5> Sept 2016- April 2022 </h5> </div>
                                            <div className = "gpa"> <h6> 3.9 GPA on 4.0 scale </h6> </div> 
                                                <ul>
                                                <span>Related Courses: </span>Data Structures & Algorithms<span> | </span>Programming Principles<span> | </span>Operating Systems<span> | </span>Databases<span> | </span>Linear Optimization<span> | </span>Analog & Digital Circuits 
                                                </ul>  
                                        </div> 
                                    </div>

                        </div>
                        </div>

            
            <div className = "left1">
                    <h4> AWARDS </h4>
                    <ul className="cards1__items">
                        <CardItemnew info = "Golden Key Award" text = "Given to students in Engineering with cumulative GPA in top 15% of the faculty." /> 
                        <CardItemnew  info = "Future Leader Recognition Award" text = "Given to students who have shown exemplary work during their co-op term" /> 
                        <CardItemnew  info = "Dean's Honour List" text = "Received Dean’s Honour List 2019,2021 (minimum of 9.5 GPA on at least 27 units)." /> 
                        <CardItemnew  info = "McMaster’s Faculty of Engineering Entrance Award" text = "Given to students with a minimum of 3.9 GPA." /> 
                        </ul>
            </div>
            
 
        
        </div>
    )
}

export default Education
