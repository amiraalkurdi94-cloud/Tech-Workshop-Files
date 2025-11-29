
import {desorptionA ,desorptionE} from "../../constants/index.js";
import Skills from "../../components/Skills.jsx";
const AboutUs = () => {
    return (
        <section 
        id="about-us"    className="section-padding bg-gradient-to-r  from-[#0f0c29]  to-[#302b63]
        text-white   flex  justify-center items-center ">
            <div className=" justify-center items-center flex flex-col relative gap-16 w-full">
                <div className="justify-center items-center gap-20 flex flex-col relative  w-full">
                    {desorptionA.replace(" ","")!==""&&
                    <div className=" w-full flex-col ml-auto  flex justify-center  items-end flex-wrap ">
                        <h1 dir="rtl" className="text-center text-4xl font-bold mb-14 border-b-2  border-[#fff] border-solid ">
                            من نحن?
                        </h1>  
                        <div className="lg:w-[45%] w-full ">
                            <p dir="rtl" className="text-xl border-b-2 w-full border-[#fff] border-solid pb-16">
                                {desorptionA}.
                            </p>
                        </div>
                    </div>
                    }
                    <div className="the-line absolute top-0 left-[50%] w-1 h-full  bg-[#fff] lg:block hidden"></div>

                    {desorptionE.replace(" ","")!==""&&
                    <div className=" w-full  mr-auto flex-col  flex justify-center  items-start flex-wrap">
                        <h1 className="text-center w-full text-4xl font-bold mb-10 p-4 border-b-2  border-[#fff] border-solid ">
                            Who We Are ?
                        </h1>
                        <div className="lg:w-[45%] w-full ">
                            <p  className="text-xl border-b-2 w-full  border-[#fff] border-solid pb-16">
                                {desorptionE}.
                            </p>
                        </div>
                    </div>   
                    }
                </div>
                <Skills/>
            </div>
        </section>
    );
}

export default AboutUs;