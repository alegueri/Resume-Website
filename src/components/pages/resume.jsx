import React from 'react'
import '../../App.css'
import Education from '../Education'
import Work from '../Work'
import CardItem from '../CardItem'
import '../resume.css';

function resume() {
                    
    return (
    <>
    <div className = 'cards'>
            <div className="cards__container">
            <div className="cards_wrapper">
                <ul className="cards__items">
                <CardItem src ="images/AIEducation.png" text = "Education" label = 'Adventure' path='/Education'/> 
                <CardItem src ="images/workhome.png" text = "Work Experience" label = 'Adventure' path='/Work'/> 
                </ul>
            </div>
            </div>
        </div>
    </>
)}

export default resume;