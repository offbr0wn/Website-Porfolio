import React from 'react'
import "./socialMedia.scss"
import { faDribbble,faLinkedin,faInstagram ,faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function socialMedia() {
    return (
            <div class="social-container">
                <div className="left">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/off_br0wn/" className="social">
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

                <a href="mailto:shashank201011@gmail.com">Shashank201011@gmail.com</a>
                </div>
            </div>
    )
}
