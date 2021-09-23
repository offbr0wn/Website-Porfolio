import React from 'react'
import "./sidebar.scss"
import {useScroll} from '../../components/topbar/scrollEffect'


export default function Sidebar({open , setOpen}) {

    const { scrollDirection } = useScroll();

    const styles = {
        active: {
          visibility: "visible",
          transition: "all 0.5s"
          
        },
        hidden: {
          visibility: "hidden",
          transition: "all 0.5s",
          transform: "translateX(100%)"
  
        }
      }
    return (
        <div className= {"sidebar " + (open && "active")}
        style={scrollDirection === "down"  || scrollDirection=== undefined ? styles.active: styles.hidden }
        >
            <ul>
                <li onClick={()=>setOpen(false)}>
                    <a href= "#intro">HomePage</a>
                </li>

                <li onClick={()=>setOpen(false)}>
                    <a href= "#port">Portfolio</a>
                </li>
                
                <li onClick={()=>setOpen(false)}>
                    <a href= "#testimonials">About Me </a>
                </li>

               

                <li onClick={()=>setOpen(false)}>
                    <a href= "#contact">Contact Me </a>
                </li>
                
                <li onClick={()=>setOpen(false)} className="resumeList">
                    <a href= "assets/CV.pdf" target = "_blank">Resume</a>
                </li>

            </ul>
            
        </div>
    )
}
