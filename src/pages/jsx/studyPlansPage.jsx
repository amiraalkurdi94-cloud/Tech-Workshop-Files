import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {studyPlans,careerPaths,summery} from "../../constants/index.js";


gsap.registerPlugin(ScrollTrigger);

const StudyPlans = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
        const elem = sectionRef.current;

        gsap.fromTo(
            elem,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                delay: 0.2,
                duration: 0.7,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    
    return (
        <section id="study-plans" className="section-padding bg-gradient-to-r flex-wrap from-[#0f0c29]  to-[#302b63] text-white">
            <div className="flex justify-between ms:items-center mb-10 overflow-hidden flex-col lg:flex-row sm:flex-row sm:gap-0">
                <h1 id="projectsTitle" className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14 ">
                    Our Studies Plans
                </h1>
            </div>
                
            {/* lg:grid-cols-2  */}
            <div ref={sectionRef} className="grid grid-cols-1  gap-12 my-8">
                {
                studyPlans.length === 0 ? (
                    <div className="col-span-full text-center py-10">
                        <p className="text-lg font-semibold">No study plans available</p>
                    </div>
                ) : (
                    studyPlans.map((plan, index) => (
                        <div
                        key={plan.title.replace(" ", "-")}
                        className="w-full bg-[#302b63]
                        p-5 rounded-2xl shadow-md shadow-[#302b63]
                        hover:shadow-lg hover:shadow-[#373270] transition-all duration-300">
                            <h2 className="text-3xl mb-5 font-bold">
                                {index + 1} - {plan.title || "Untitled Plan"}
                            </h2>
                            {plan.description &&plan.description.replace(" ","")!=="" &&
                            <p className=" text-lg my-3 ">
                                {/* <span className="font-bold mr-[1px]"></span> */}
                                {plan.description}
                            </p>}

                            <p className=" text-lg my-3 ">
                                <span className="font-bold mr-[1px]">Goal: </span>
                                {plan.goal || "No description available"}
                            </p>

                            {plan.courses.length > 0 &&
                            <div className="my-4 ">
                                <h4 className="font-bold text-[20px]">Courses</h4>
                                <div className="text-lg ">
                                    <ul>
                                        {plan.courses.map((course,ind) => (
                                            <li key={ind+course} className=""> - {course}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>}
                            
                            {plan.topics.length > 0 &&
                            <div className="my-4">
                                <h4 className="text-[20px] font-bold">Topics</h4>
                                <div className="text-lg">
                                    <ul>
                                        {plan.topics.map((topic,ind) => (
                                            <li key={ind+topic} className=""> - {topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>}
                        </div>
                    ))
                )}

                {studyPlans.length>0&&
                    <div 
                    className="w-full bg-[#302b63]
                    p-5 rounded-2xl shadow-md shadow-[#302b63]
                    hover:shadow-lg hover:shadow-[#373270] transition-all duration-300"
                    >
                        <h2 className="text-3xl mb-5 font-bold">
                            {studyPlans.length + 1} - {careerPaths.title || "Untitled Plan"}
                        </h2>
                        <p className=" text-lg my-2 ">
                            {/* <span className="font-bold mr-[1px]"></span> */}
                            {careerPaths.desorption}
                        </p>
                        {careerPaths.paths.length > 0 &&
                            <div className="my-4 ">
                                <h4 className="font-bold text-[20px]">Possible Paths</h4>
                                <div className="text-lg ">
                                    <ul>
                                        {careerPaths.paths.map((path,ind) => (
                                            <li key={ind+path} className=""> - {path}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>}
                    </div>
                }
            </div>
            <div className="mt-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14 ">{summery.title}</h1>
                <p className="my-4 text-[22px]">{summery.desorption1}</p>
                <p className="my-4 text-[22px]">{summery.desorption2}</p>
            </div>
        </section>
    );
};

export default StudyPlans ; 