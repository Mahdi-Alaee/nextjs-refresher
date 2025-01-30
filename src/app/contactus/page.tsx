'use client'

import { sensitiveLog } from "@/utils/serverFuncs";

function ContactUs() {
    console.log(sensitiveLog());

    return ( 
        <div>
            <h1>contact us</h1>
        </div>
     );
}

export default ContactUs;