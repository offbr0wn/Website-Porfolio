import './testimonials.scss'
import Fade from "react-reveal/Fade";
export default function Footer() {



    
    return (
        <div className="testimonials" id="testimonials" >
            <div className="container">    
            <Fade right delay={500}>         
                <h1>About Me </h1>
            </Fade>
                <div className="wrapper">

                <Fade left cascade delay={1000} duration ={1000}>
                    <div className="left">
                        <h2>Who Am I ?</h2>




                        <div>
                            <p>Hello! 👋, My name is Shashank a Computer Science Graduate  from University of East Anglia, I enjoy creating 
                                 and designing things that live on the internet. My interest in web development started back in 2017 when I decided 
                                to try editing custom elements within websites, this which lead me to explore the creative side of web design</p>

                            <p>From a personal level, I am highly-motivated, result oriented, self-driven, 
                                hard-working, fast learner and constantly seeking to improve my skills!</p>

                            <p> I have the ability to adapt to any type of team environment,and get along with others 
                                when working in a group setting. I am passionate about coding and solving problems through codec 🙂, 
                                and <span> i am excited to work</span> alongside other amazing programmers and learn so much more!. </p>

                                <p>Listed below are some languages and design tools im proficient in : </p>
                        </div>
                        <ul>
                            <h3>Programming :</h3>
                            <li>HTML</li>
                            <li>CSS/Sass</li>                            
                            <li>React</li>
                            <li>Python </li>
                            <li>Java</li>
                            <li>Github</li>
                        </ul>
                        <ul>
                            <h3>Design:</h3>
                            <li>Adobe XD</li>
                            <li>Photoshop</li>                            
                            <li>Illustrator</li>
                            <li>Premiere pro</li>
                            <li>Figma</li>
                            
                        </ul>

                    </div>
                    </Fade>
                    
                    <Fade right cascade  delay={2000} duration ={2000}> 
                    <div className="right"> 
                        <div className="imageSection">
                            {/* <div className="imageSection"> */}
                            <img src="./assets/Profile.png" alt="" />
                            <figcaption>"Hover over me 👆"</figcaption>
                            {/* </div> */}
                        </div>
                    </div>
                    </Fade>
                </div>
                    
            </div>
        </div>
    )
}
