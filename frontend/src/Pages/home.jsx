import { Link } from "react-router-dom" 

export function Home() {
    return(
        <>
            <h1>This is the Home Page</h1>

            <outlet/>
        </>
    )
}