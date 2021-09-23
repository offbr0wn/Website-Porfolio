import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/port";
import Testimonials from "./components/testimonials/testimonials";
import Contacts from "./components/contacts/contacts";
import "./app.scss"
import {useState,useEffect} from "react";
import Sidebar from "./components/sidebar/sidebar";
import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
import Reveal from 'react-reveal/Reveal'
import Footer from "./components/footer/footer";
import SocialMedia from "./components/socialMediaComponet/socialMedia";



function App() {
  const [menuOpen , setMenuOpen] = useState( false)
  const [loading,setLoading] =useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const override = css`
    display: flex;
    align-items: center;    
    justify-content: center;
    background-color: #2e2e2e;
    height: 100vh;
    text-align: center;
    width: 100%;
    overflow: hidden;
    animation: spin 2s linear infinite;
    position:fixed;
//     `
const blurFuntion = {

blurActive:{
  filter:"blur(10px)",
 

},

blurHidden:{
  filter:"blur(0px)"
},


}
  useEffect(() => {setLoading(true)
      setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  

console.log(window.innerWidth)
const handleResize = () => {
  if (window.innerWidth < 768) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

useEffect(() => {
  window.addEventListener("resize", handleResize)
})




  return (
    // <Scrollbars    autoHide style={{  minHeight: 0 ,position:'fixed'}}> 
    <div className="loadingScreen">
    {
      
      loading ? 

      
      <SyncLoader color={"#ed143d"} loading={loading} css={override}  size={50} />

   
              
          
      :

      
        <Reveal  effectIn="fadeIn" effectOut="fadeOut" appear>
           
        <div className="app"   >     
          
          <Topbar open= {menuOpen} setOpen = {setMenuOpen}/>
          <Sidebar open= {menuOpen} setOpen = {setMenuOpen}/>
          <SocialMedia/>
          
          
          <div className="sections" style = {isMobile===true && menuOpen===true ? blurFuntion.blurActive: blurFuntion.blurHidden } >
       
         
            <Intro/>
            <Portfolio/>
            {/* <Works/> */}
            <Testimonials/>
            <Contacts/>
            <Footer/>

          </div>
          
          
        </div>
        
       
      
      </Reveal>
     
     

    }
    
    </div>
    // </Scrollbars> 
   
    
  );
}

export default App;
