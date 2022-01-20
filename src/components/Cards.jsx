import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className = 'cards'>
            <h1> Check out these EPIC Destinations! </h1>
            <div className="cards__container">
            <div className="cards_wrapper">
                <ul className="cards__items">
                <CardItem src ="images/img-9.jpg" text = "Explore this and that inside amazon jungle" label = 'Adventure' path='/Contact'/> 
                <CardItem src ="images/img-2.jpg" text = "Travel through the islands" label = 'Adventure' path='/resume'/> 
                </ul>
                <ul className="cards__items">
                <CardItem src ="images/img-9.jpg" text = "Explore this and that inside amazon jungle" label = 'Adventure' path='/resume'/> 
                <CardItem src ="images/img-2.jpg" text = "Travel through the islands" label = 'Adventure' path='/resume'/> 
                <CardItem src ="images/img-2.jpg" text = "Travel through the islands" label = 'Adventure' path='/resume'/> 
                </ul>
            </div>

            </div>
        </div>
    )
}

export default Cards
