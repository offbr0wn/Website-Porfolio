import "./port.scss"
import {useEffect, useState } from "react";
import PortfolioList from "../portList/portList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ALL from "../../data";
import Fade from "react-reveal/Fade";
import { faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";



export default function Port() {

    
  
    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [selected,setSelected]= useState("featured");
    const [data,setData]= useState([]);





    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },

        {
          id: "design",
          title: "Design",
        },

    ];

    useEffect(() => {
        switch (selected) {
          case "featured":
            setData(ALL.featuredPortfolio);
            break;
          case "web":
            setData(ALL.webPortfolio);
            break;

          case "design":
            setData(ALL.designPortfolio);
            break;

          default:
            setData(ALL.featuredPortfolio);
        }
      }, [selected]);
      



      



    return (
        <div className="portfolio" id="port">
          <Fade left delay={500}>
           <h1>Portfolio</h1>   
           </Fade>

           <Fade left delay={1000}>
           <ul>
                {list.map((item) => (<PortfolioList title={item.title} active={selected === item.id}  setSelected={setSelected} id={item.id}/>))}
           </ul>
           </Fade>

           <Fade bottom cascade  delay={2000} duration ={1000}>
           <div className="container">
               {data.map((d) =>(
               <div className="item">
                    {
                    d.id === 2 ?
                      <video autoplay loop muted playsInline >
                      <source src={d.img} type="video/mp4"></source>
                      </video>
                      :
                    <img src={d.img} alt=""/>
                    }
                    <h3>{d.title} </h3>
                    <h5>{d.languageUsed}</h5>

                    <div className="projectLinks">

                        {
                        d.id === 3 ? 
                          
                          <a href={d.netLink} ><FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/></a>
                          :
                          <div>
                          <a href={d.gitLink} ><FontAwesomeIcon icon={ faGithubSquare} size="2x" /></a>
                          <a href={d.netLink} ><FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/></a>
                          </div>
                        }
                    </div>
                   
              </div>
               
                ))}
   
           </div>
            
           </Fade>
        </div>
    )
}




