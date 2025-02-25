import React from "react";
import "./Contact.css"
import {useState} from "react";
import { useDispatch } from "react-redux";
import { setnoticetext, setnoticestatus } from "../redux/actions";
import { Helmet } from "react-helmet";
import axios from 'axios';


export default function Contact(){
    const dispatch = useDispatch();
    const [contactData ,setContactData] = useState({
        name:"",
        email: "",
        phone: '',
        message: "",
    })

    const handle_change = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setContactData({...contactData,[name]:value})
    }
    const handle_submit = async(e)=>{
        e.preventDefault()
        try{
            dispatch(setnoticestatus("loading"))
            dispatch(setnoticetext("sending message to austine"))
            
            const response =  await axios.post('/api/send-message', contactData);
            
            if(response.status === 200){
                dispatch(setnoticestatus("success"))
                dispatch(setnoticetext("message sent successfully"))
            }else{
                dispatch(setnoticestatus("error"))
                dispatch(setnoticetext("uknown error occurred"))
            }
            } catch (error) {
                console.error('Error sending message:', error);
                dispatch(setnoticestatus("error"))
                dispatch(setnoticetext("error sending message"))
            }
    }
    const contactSchema = {
        "@context": "http://schema.org",
        "@type": "ContactPage",
        "name": "Contact",
        "description": "Reach me out for any inquiry, request and collaboration. Recieve a response in 12hrs. Lets build something extraordinary",
        "url": "https://austinemark.com/contact",
        "contactPoint": {
            "@type": "contactPoint",
            "telephone": "+254 111343665",
            "ContactType": "Customer Service",
            "email": "info@austinemark.com",
        }
    }
    return(
        <div className="contactContainer">
            <script type="application/ld+json">
            {JSON.stringify(contactSchema)}
            </script>
            <Helmet>
                <title>Contact - Austine Mark</title>
                <meta name="description" content="Get in touch with Austine Mark #lil-musk. Let's discuss your next futuristic and innovative project or collaboration. Reach out today!"/>
                <meta name="keywords" content="austine mark's contact, austine mark phone number,contact web developer, software developer contacts"/>
                <meta property='og:title' content='Contact - Austine Mark'/>
                <meta property="og:description" content="Get in touch with Austine Mark #lil-musk. Let's discuss your next futuristic and innovative project or collaboration. Reach out today!" />
                <meta property='og:url' content="https://austinemark.com/contact"/>
                <meta property="twitter:title" content="Contact - Austine Mark"/>
                <meta property="twitter:description" content="Get in touch with Austine Mark #lil-musk. Let's discuss your next futuristic and innovative project or collaboration. Reach out today!" />
            </Helmet>
            <h2>TELL ME SOMETHING</h2>
            <div className="contactbackground" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/back4.jpg)`}}>
            <div></div></div>
             <div className="firstContact">
                    <p id="emailContact"><img src={`${process.env.PUBLIC_URL}/images/email.png`} alt='icon'/>info@austinemark.com</p>
                    <p id="myLocation"><img src={`${process.env.PUBLIC_URL}/images/location.png`} alt='icon'/>Nairobi, <span>Kenya</span></p>
                    <div className="contactButs">
                    <a href="https://www.linkedin.com/in/austine-mark-abb7282aa">connect on linkedin</a>
                    <a href="https://wa.me/254111343665?text=Hello%20lil_musk%20">whatsapp me</a>
                </div>
                </div>
                
               <form className="contactForm" onSubmit={handle_submit}>
                <h3>Leave a message *required </h3>
                <input type="text" name="name" value={contactData.name} placeholder="your name*" onChange={handle_change} id="inputname" required/>
                <input type="email" name="email" value={contactData.email} placeholder="your email*" onChange={handle_change} id="inputemail" required/>
                <input type="tel" name="phone" value={contactData.phone} placeholder="your phone number" onChange={handle_change} id="inputphone" />
                <textarea name="message" value={contactData.message} placeholder="your message*" onChange={handle_change} id="inputmessage" required></textarea>
                <input type="submit" value={"send"} id="inputsubmit"/>
                </form>
            </div>  
    )
}
// style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/image5.jpg)`}}