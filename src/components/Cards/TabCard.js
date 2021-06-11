import React, { useState } from "react";
import { Redirect } from 'react-router';

export default function TabCard(props) {
    const [question, setquestion] = useState(1);
    
    const [redirect, setRedirect]= useState(false);
     

    if (redirect) {
        return <Redirect to="/doctors"/>;
      }

    return (
        <div className="pt-2">
            <div className="container mx-auto bg-white">
                <div className="w-10/12 mx-auto">
                    <ul>
                        <li className="py-6 border-gray-200 border-solid border-b">
                        <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl">{props.name}</h3>
                               
                        <div className="py-4"> 
                                <p className="">{props.symptoms}</p>
                                </div>
                            <div className="flex justify-between items-center">
                            <h3 className="text-gray-800 text-xl"> More Details</h3>
                                <div className="cursor-pointer" onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}>
                                    {question === 0 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                            <line x1={12} y1={9} x2={12} y2={15} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {question === 0 && 
                            <div>
                                <h2 className="text-xl text-gray-700 ">Description</h2>
                            <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base xl:text-lg rounded-b-lg">
                            
                                {props.description} </p>
                                <h2 className="text-xl text-gray-700">Prescription</h2>
                            <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">{props.prescription} 


                            
                            </p>
                            <div className="flex items-center w-full">
                  <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-700 rounded text-white px-8 py-2 text-xs sm:text-sm" onClick={()=>{setRedirect(true)}}>Consult</button>

                </div>
                            </div>
                            
                            }
                        </li>
                     
                  
                    </ul>
                </div>
            </div>
        </div>
    );
}
