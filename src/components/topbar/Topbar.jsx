import "./topbar.scss"
import {PersonPin,MailOutline} from "@material-ui/icons";
import React from 'react'
import {useScroll} from './scrollEffect'
  
// import { useEffect, useState } from 'react'
// import Headroom from "react-headroom";


export default function Topbar({open , setOpen}) {    
    
    const { scrollDirection } = useScroll();  

    const styles = {
      active: {
        visibility: "visible",
        transition: "all 0.5s"
        
      },
      hidden: {
        visibility: "hidden",
        transition: "all 0.5s",
        transform: "translateY(-100%)"

      }
    }


//  console.log(scrollDirection)
        
    return (

        
        
            
                <div className={"topbar " +   (open && "active")} id = "topbar-active"
                style={scrollDirection === "down"  || scrollDirection=== undefined ? styles.active: styles.hidden }
                
                >

               
                     <div className="wrapper">
                <div className="left" >
                    <a href ="#intro" className="logo">
                      <img src="assets/Portfolio Logo.png" alt="" />
                      </a>
                    <div className="itemContainer">
                        <PersonPin className="icon"/>
                        <span>+447858280680</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon"/>
                        
                        <span>shashank201011@gmail.com</span>
                       
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setOpen(!open)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                    </div>
                </div>
                
                </div>
               
                </div>

        
        

        
        
            
       

    );

}


