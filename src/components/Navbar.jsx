import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'; 
import { Button, Button1 } from './Button';
import'./Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false); //creates to function at same time ? 
    const [button, setButton] = useState(true);



    const handleClick = () => setClick(!click); // function sets the click reverse the useState
    //  changes state from whatever it was to whatever you want to change it to. 
    const closeMobileMenu = () =>setClick(false);

    const showButton = () => { if(window.innerWidth <= 960) {
                                    setButton(false);
                                }
                                else { 
                                    setButton(true); 
                                }
                            }; 
    useEffect(()=> {
        showButton()
    },[]);
    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                    <Link to="/" className ="navbar-logo" onClick = {closeMobileMenu}>

                    <i className="fas fa-robot"> </i>  AG

                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        <i className={click ? 'fas fa-times' :'fas fa-bars'} /> 

                    </div>
                    <ul className ={click ? 'nav-menu active' : 'nav-menu'}>  
                                {/* allows nav menu to disappear  */}
                        <li  className="nav-item">
                            <Link to ='/' className ='nav-links' onClick={closeMobileMenu}>  Home  </Link>
                        </li>
                        <li  className="nav-item">
                            <Link to ='/aboutme' className ='nav-links' onClick={closeMobileMenu}> About Me  </Link>
                        </li>
                        <li  className="nav-item">
                            <Link to ='/resume' className ='nav-links' onClick={closeMobileMenu}>   Resume   </Link>
                        </li>
                        <li  className="nav-item">
                            <Link to ='/achievements' className ='nav-links' onClick={closeMobileMenu}>  Achievements  </Link>
                        </li>   
                        <li  className="nav-item">
                            <Link to ='/Contact' className ='nav-links' onClick={closeMobileMenu}> Contact </Link>
                        </li>   
                        <li  className="nav-item">
                            <a href="./AlessandraGuerinoni_Resume.pdf" className ='nav-links-mobile' onClick={closeMobileMenu} download> Download Resume </a>
                        </li>                                      
                    </ul>
                    {button && <Button1 buttonStyle ='btn--outline'> Download Resume</Button1> }  
                    {/* && returns what is after, children of button 
                    from before choooses the buttonstyle from whatever we input it in Button,jsx*/}
             </div>
        </nav>
        
        </>
    );
}

export default Navbar;
