import React from 'react'
import './Worksection.css';


function Worksection() {
    return (
        <div className='totalContainer'>
            <div className="title"><h1> WORK EXPERIENCE </h1></div>
            
            <div className = "First">
          
                <div className="contentWrapper">
                    <div className = "titlework "> <h2>PROJECT MANAGER & GOVERNANCE ADMINISTRATOR <span> / Bombardier, Mitsubishi Heavy Industries </span> </h2> </div> 
                    <div className = "date1"> <h5> Sept 2019- Aug 2020 </h5> </div>
                    <div className= "bullets" > 
                    <ul>
                    <li> Organized and chaired monthly meetings with the Senior Director and management, providing status updates on critical projects.</li>
                    <li> Managed over 50 projects. Ensured budget and project schedule adherence, and the corresponding reporting and escalation to
management. Technologies used: Lotus Notes Project Management Software.</li>
                    <li> Created python–oracle adaptation module to enhance workplace efficiency. The module allowed for easy access to Oracle
databases, directly through python. Technologies used: Python, Oracle. </li>  
                    </ul>  
                    </div> 


                </div>
                <div className="imageWrapper"> </div>
             </div>    
            <div className ="Second" >
                <div className="imageWrapper1"></div>
          
                <div className="contentWrapper1">
                <div className = "titlework "> <h2>LEAD COORDINATOR UNIVERSITY COLLABORATION TEAM <span> / Bombardier, Mitsubishi Heavy Industries </span> </h2> </div> 
                    <div className = "date1"> <h5> Sept 2019- Aug 2020 </h5> </div>
                    <div className= "bullets" > 
                    <ul>
                    <li> Primary point of contact between the company and universities, supervising a team of 6 in charge of university collaboration team </li>
                    <li> Collaborated with managers, HR, IT, Universities, and students, hiring 26 new interns </li>
                    <li>  Successfully reduced overhead by 2% by renegotiating contracts with McMaster, Ryerson, and the University of Toronto. These savings
were further distributed by rate increases to student interns.  </li>  
                    </ul>  
                    </div> 
                </div>
            </div> 
            <div className="Third">
            
                <div className="contentWrapper">
                    <div className = "titlework "> <h2>TEACHING ASSISTANT – DISCRETE MATHEMATICS & COMPUTATIONAL THINKING <span> / McMaster Faculty of Engineering </span> </h2> </div> 
                    <div className = "date1"> <h5> JAN 2019 – APRIL 2019 & SEPT 2021 – DEC 2021 </h5> </div>
                    <div className= "bullets" > 
                    <ul>
                    <li> Used problem solving to solidify over 50 student’s understanding of course criteria, specifically by using Haskell Functional Programming &
Computer Science concepts. Technologies used: Haskell, Visual Studio Code, Git, Latex.
 </li>
                    <li> Consulted with students, marked assignments, and prepared two weekly tutorial presentations, leading to class averages: 70% and 87%.  </li>
       
                    </ul>  
                    </div> 

                    
                </div>
                <div className="imageWrapper2"></div>
                </div>
            <div className="Fourth">
        
                <div className="imageWrapper3"></div>
                <div className="contentWrapper1">
                    <div className = "titlework "> <h2>VENTURE CAMP COUNSELLOR<span> / McMaster Faculty of Engineering </span> </h2> </div> 
                    <div className = "date1"> <h5> Sept 2019- Aug 2020 </h5> </div>
                    <div className= "bullets" > 
                    <ul>
                    <li> Introduced Software Engineering concepts to over 250 children. Created projects which involved Python, Arduinos, and web
development to help assist the student’s understanding.  </li>
                    <li> Developed and Presented lectures across Hamilton, introducing S.T.E.M concepts to over 100 students. </li>
                  
                    </ul>  
                    </div> 

                </div>
            </div>
            
        </div>
    )
}

export default Worksection
