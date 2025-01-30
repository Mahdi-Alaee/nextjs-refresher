'use client'

import { clientLog } from "@/utils/clientFuncs";

// import { sensitiveLog } from "@/utils/serverFuncs";

function ContactUs() {
    // console.log(sensitiveLog());
    clientLog()

    return ( 
        <div>
            <h1>contact us</h1>
        </div>
     );
}

export default ContactUs;