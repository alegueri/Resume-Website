import React from 'react'
import Worksection from './Worksection'
import Testimonials from './Testimonials'
import Skills from './Skills'
import { Button, Button1, Button2 } from './Button';

function Work() {
    return (
        <div>
            <Worksection /> 
            <Skills /> 
            <Testimonials />
            <div className = "forButtons" > 
              <div className="firstBut"> <Button1 buttonStyle ='btn--outline'> Download Resume </Button1> </div>
              <div className="secondBut"> <Button2 buttonStyle ='btn--outline'> Download References </Button2> </div>            </div> 
        </div>
    )
}

export default Work
