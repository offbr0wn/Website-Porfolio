import React from 'react'
import "./footer.scss"
import { faDribbble,faLinkedin,faInstagram ,faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function footer() {
    return (
        <footer className="footNote">
                
           <div className="left">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/learnbuildteach" className="social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </li>

                        <li>
                                <a href="https://github.com/offbr0wn"
                                className="social">
                                <FontAwesomeIcon icon={ faGithub} size="2x" />
                                </a>
                        </li>
                        <li>
                                <a href="https://linkedin.com/in/shashank-ravikumar"
                                    className="social">
                                    <FontAwesomeIcon icon={ faLinkedin} size="2x" />
                                </a>
                        </li>
                        <li>
                        <a href="https://dribbble.com/off_br0wn"
                                    className="social">
                                    <FontAwesomeIcon icon={ faDribbble} size="2x" />
                                </a>
                        </li>
                    </ul>
                    </div>

           <div className="right">
                <a href="https://github.com/offbr0wn/PorfolioWebsite"><p >Designed & Built by Shashank Ravikumar  <span className="highlights">©2015</span></p></a>
            </div>
            

        </footer>
            
      
    )
}
