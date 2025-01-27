import Counter from "./components/Counter";
import ServerComp from "./components/ServerComp";

function About() {
    return ( 
        <div>
            <h1>about page</h1>

            <Counter>
                <ServerComp />
            </Counter>
        </div>
     );
}

export default About;