import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";


export default function Intro() {
    const textRef = useRef();


    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:50,
          
          strings: ["Developer", "Designer"],});}, []);


    return (
        <div className = "intro " id="intro">
            <div className="left">
                <div className="image">
                <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Brown' alt=""/>

                </div>



            </div>
            <div className="right">
                <div className="wrapper">
                <Fade left delay={800} duration ={2000}>   
                    <h2>Hi There 👋,I'm </h2>
                </Fade>
                <Fade left delay={2000} duration ={2000}>   
                    <h1>Shashank Ravikumar</h1>
                </Fade>
                <Fade top collapse  delay={4000} duration ={3000}>   
                    <h3>Freelance &nbsp;<span ref={textRef}></span></h3>
                </Fade>
                </div>
                <a href="#port"><img src="assets/arrow.png" alt="" /></a>
            </div>
        </div>
    )
}
