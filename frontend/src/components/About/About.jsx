import React from "react";
import aboutImg from "../../assets/images/about1.png";
//import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return <section>
        <div className = "container">
        <div className = "flex justify-between gap-[40px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/*======about img======*/}
                <div className = "relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src = {aboutImg} alt = "" className="rounded-2xl" />
                    <div className = "absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    {/*<img src = {aboutCardImg} alt = "" />*/}  
                </div>
            </div>

            {/*=========about content=======*/}
            <div className = "w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className = "heading">Delivering Excellence in Patient Care</h2>
                <p className="text__para text-justify">Healthcare Hub has been recognized for its commitment to quality healthcare. 
                Renowned for its dedication to excellence, Healthcare Hub continuously strives to provide exceptional care to patients.
                </p>
                <p className = "text__para mt-[30px] text-justify">
                    Our best is something we strive for each day, caring for our
                    patients-not looking back at what we accomplished but towards what 
                    we can do tomorrow. Providing the best is our major priority
                </p>
                <Link to = "/learn-more1">
                    <button className = "btn hover:bg-blue-900">Learn More</button>
                </Link>
            </div>
        </div>
        </div>
            
    </section>

};

export default About;