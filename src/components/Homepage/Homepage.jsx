import { Link } from "react-router-dom";

export default function Homepage() {

    return(
       <nav>
            < Link to = "/Artists">Artists</Link> 
            < Link to = "/instruments">instruments</Link> 
            < Link to = "/genres">genres</Link> 

       </nav >  

    )

}