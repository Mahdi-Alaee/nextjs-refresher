'use client'

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

// import { clientLog } from "@/utils/clientFuncs";

// import { sensitiveLog } from "@/utils/serverFuncs";

function ContactUs() {
    // console.log(sensitiveLog());
    // clientLog();
    const {data} = useContext(AppContext)!;
    console.log(data);
    
    return ( 
        <div>
            <h1>contact us</h1>
        </div>
     );
}

export default ContactUs;