import React, {useState, useEffect} from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';


function Contact() {

    const [messages,setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7ti998j', 'template_42g5wab', e.target, 'user_SZpfU0aG0v4374IPCh6xp')
        e.target.reset()
        setMessage(true)
    };

    return (
        <div className = "contact" id = "contact">
             <div className="left">
               
             </div>
             <div className="right">
                 <h2>Email Me!:)</h2>

                <form onSubmit = {handleSubmit}> 
                    <input type="text" placeholder="Email" name="from_name" /> 
                    <textarea name = "html_message" placeholder="Message" />
                    <button type="submit" value="Send"> Send</button>
                    {messages && <span>Thanks! I will get back to you soon :)</span>}
                </form>



             </div>
            
        </div> 
    );
};

export default Contact
