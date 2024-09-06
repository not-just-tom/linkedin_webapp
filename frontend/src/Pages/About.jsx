import "./About.css"

export function About() {
    return(
        <>
            <header>Welcome to my Website:)</header>
            <h2>I am Tom</h2>
            <br/>
            <content>
                <div>
                <h1>Professional Experience</h1>
                <ul>
                    <li>    
                    <job>Website and Computing Officer</job>
                    <p>3 years using JavaScript, html, css</p>
                    </li>
                    <br/>
                    <li>    
                    <job>Backend Software Developer</job>
                    <p>9 month project using MERN stack, Python </p>
                    </li>
                    <br/>
                    <li>    
                    <job>Retirement and Investment Actuarial Intern, Aon</job>
                    <p>3 months using VBA, Python modelling financial markets</p>
                    </li>
                   

                </ul>
                </div>
                <div>
                <h1>Academic Experience</h1>
                <ul>
                    <li>    
                    <job>Mathematics Bsc, University of Oxford</job>
                    <p>Overall grade: 2:2</p>
                    </li>
                    <br/>
                    <li>    
                    <job>Mathematics and Data Science, University of Bath</job>
                    <p>Grade: Predicted 2:2</p>
                    </li>
                    <br/>
                    <li>    
                    <job>4 month Portfolio Optimisation Project</job>
                    <p></p>
                    </li>
                </ul>
                </div>
            </content>
        </>
    )
}