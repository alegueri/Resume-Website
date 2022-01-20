import React from 'react'
import { Link } from 'react-router-dom'
import './Cardsnew.css';

function CardItemnew(props) {
    return (
        <>
            <li className="cards__item2">
                    <div className="cards__item__info2">
                         <div className = 'topcard'>
                         <h3 classNme = "cardinfo">{props.info} </h3>    
                        </div> 
                        <div className='bottomcard'>
                        <h5 className="cards__item__text2">{props.text}</h5>
                        </div>
        

                    </div>
            </li>
        </>
    )
}
export default CardItemnew
