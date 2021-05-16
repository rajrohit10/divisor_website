import React from "react";
import "./style.css";

const  Footer=()=>{
    return (
        <div className="bg-primary-light internal-padding-extra  border-bottom">
            <div className="container">
                <div className="margin-medium ">DIVISOR.IN</div>
                <div className="grid-7-col border-bottom">
                    <div >
                     <p className="para-medium margin-bottom">Products</p>
                     <p className="para-text text-left margin-small">Learning Paths</p>
                     <p className="para-text text-left margin-small">Mini Courses</p>
                     <p className="para-text text-left margin-small">Mini Bootcamps</p>
                    </div>
                    <div >
                     <p className="para-medium margin-bottom">Company</p>
                     <p className="para-text text-left margin-small">About Us</p>
                     <p className="para-text text-left margin-small">Blogs</p>
                     <p className="para-text text-left margin-small">Join Us</p>
                    </div>
                    <div >
                     <p className="para-medium margin-bottom">Quick Links</p>
                     <p className="para-text text-left margin-small">Member Login</p>
                     <p className="para-text text-left margin-small">Offers</p>
                     <p className="para-text text-left margin-small">Discount Coupons</p>
                    </div>
                    <div >
                     <p className="para-medium margin-bottom">Help</p>
                     <p className="para-text text-left margin-small">Customer Support</p>
                     <p className="para-text text-left margin-small">Student Community</p>
                     <p className="para-text text-left margin-small">Youtube Channel</p>
                     <p className="para-text text-left margin-small">LinkedIn</p>
                     <p className="para-text text-left margin-small">Instagram</p>
                    </div>
                    

                </div>
                <div className="flex-between margin">
                    <p className="para-text text-left"> Made with <span className="color-crimson">	&#10084;</span> by ASR Innovations. Copyright <span >&#169;</span> 2021 </p>
                    <div className="flex " >
                        <p className="para-text text-left margin-right">Terms & Condition </p>
                        <p className="para-text text-left">Privacy Policy</p>
                    </div>

                </div>

            </div>
            </div>

    )
}
export default Footer