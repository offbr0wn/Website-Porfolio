
import "./portList.scss"
// import Fade from 'react-reveal/Fade';

export default function portfo({title,active ,setSelected,id}) {
   
    return (       
      
      <li className={active ? "portList active" :"portList"} onClick={()=> setSelected(id)}>            
          {title}                
      </li>  
    )
    
};
