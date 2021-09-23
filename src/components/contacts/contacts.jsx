import './contacts.scss'
// import Wobble from "react-reveal/Fade";
import Fade from "react-reveal/Fade";
export default function contacts() {


    
    return (
        <div className="contact" id="contact">
            <Fade left delay={800} duration ={2000}>   
            <h1>Contact</h1>
            </Fade>
            <Fade bottom cascade  delay={2000} duration ={1000}>
            <div className="container">
                <h3>What's Next ? </h3>

                <div className="left">
                <h2>Get In Touch 👇</h2>

                <p>I’m interested in new  opportunities – especially ambitious or large projects. 
                    If you have any questions, don’t hesitate to click the button 
                    to shoot me an email .</p>
                </div>
                
                <div className="right"> 
               
                    <a href ="mailto:shashank201011@gmail.com">Say Hello To Me ! </a>    
                     
                </div>
                

            </div>        
            </Fade>
        </div> 
    )
}
