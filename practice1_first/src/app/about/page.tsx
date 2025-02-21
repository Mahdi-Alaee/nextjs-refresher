// import { sensitiveLog } from "@/utils/serverFuncs";
// import { clientLog } from "@/utils/clientFuncs";
import Counter from "./components/Counter";
import ServerComp from "./components/ServerComp";

function About() {
  // console.log(sensitiveLog());
  // clientLog();  

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
