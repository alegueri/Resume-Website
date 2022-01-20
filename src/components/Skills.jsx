import React, {useState, useEffect} from 'react';
import {Button, BarNew } from './Button';
import './Skills.css';

function Skills() {
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
        <div className = "skillsSection" style = {{display: 'flex', flexDirection: 'column', height:'68vh'}} >
            <div className = "title1" > <h1> Skills </h1> </div>
            <div className ="upperLang" >
            <div className ="barr1"><BarNew  className = "firstBar" percentages = {80} text={"Python"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
            <div className ="barr1"><BarNew  className = "secondBar" percentages = {70} text={"Java"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
            <div className ="barr1" > <BarNew  className = "secondBar" percentages = {50} text={"C++"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
            <div className ="barr1" > <BarNew  className = "secondBar" percentages = {80} text={"Haskell"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
            <div className ="barr1" > <BarNew  className = "secondBar" percentages = {60} text={"HTML/CSS"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>

            </div>
                <div className ="lowerLang" >
                <div className ="barr1" > <BarNew  className = "secondBar" percentages = {50} text={"Javascript"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
                <div className ="barr1" > <BarNew  className = "secondBar" percentages = {80} text={"MATLAB"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
                <div className ="barr1" > <BarNew  className = "secondBar" percentages = {60} text={"VBA"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
                <div className ="barr1" > <BarNew  className = "secondBar" percentages = {80} text={"SQL"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
                <div className ="barr1" > <BarNew  className = "secondBar" percentages = {60} text={"Latex"} width ={200} height ={200} buttons1={buttons}> </BarNew> </div>
            </div>
        </div>
    )
}

export default Skills
