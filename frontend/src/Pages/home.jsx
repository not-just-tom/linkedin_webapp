import { Link } from "react-router-dom" 
import "./home.css"

export function Home() {
    return(
        <>

            <phil>This is the Home Page</phil>

            
            <input type='text' id='input' name='input' placeholder='Type here to chat!'/>
            

            <outlet/>
        </>
    )
}