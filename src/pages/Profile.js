import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Bars/Navbar";
import Sidebar from "../components/Bars/Sidebar";
import ProfileCard from "../components/dashboard/ProfileCard";

export default function Profile() {
    const [show, setShow] = useState(false);

    return (
        <>
        <Navbar/>
            <div className="w-full h-full sm:pt-0 pt-20 bg-gray-200">
                <div className="flex flex-no-wrap">
                  
                    <Sidebar/>
                   
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"}>
                        <div className="bg-gray-800 opacity-50 w-full h-full absolute" onClick={() => setShow(!show)}></div>
                        <div className="w-64 md:w-96 absolute z-40 bg-white shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between px-8">
                                        <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-8">
                                        <ul className="">
                                            <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                                                <div className="flex items-center">
                                                    <Link to="/dashboard">
                                                    <span className="xl:text-base md:text-2xl text-base ml-2">Dashboard</span></Link>
                                                </div>
                                                <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">5</div>
                                            </li>
                                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                                <div className="flex items-center">
                                                    <span className="xl:text-base md:text-2xl text-base ml-2">Products</span>
                                                </div>
                                                <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">8</div>
                                            </li>
                                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                                <div className="flex items-center">
                                                    <span className="xl:text-base md:text-2xl text-base ml-2">Performance</span>
                                                </div>
                                            </li>
                                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                                <div className="flex items-center">
                                                    <span className="xl:text-base md:text-2xl text-base ml-2">Deliverables</span>
                                                </div>
                                            </li>
                                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                                <div className="flex items-center">
                                                    <span className="xl:text-base md:text-2xl text-base ml-2">Invoices</span>
                                                </div>
                                                <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">25</div>
                                            </li>
                                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                                <div className="flex items-center">
                                                    <span className="xl:text-base md:text-2xl text-base ml-2">Inventory</span>
                                                </div>
                                            </li>
                                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                                <div className="flex items-center">
                                                    <span className="xl:text-base md:text-2xl text-base ml-2">Settings</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="border-t border-gray-300">
                                        <div className="w-full flex items-center justify-between px-6 pt-1">
                                            <div className="flex items-center">
                                                <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                                <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                                            </div>
                                            <ul className="flex">
                                                <li className="cursor-pointer text-white pt-5 pb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                    </svg>
                                                </li>
                                                <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav className="flex items-center lg:items-stretch justify-end lg:justify-between relative z-0">
                           
                            <div className="text-gray-600 mr-4 visible lg:hidden" onClick={() => setShow(!show)} id="menu">
                                {show ? (
                                    ""
                                ) : (
                                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </nav>


                        <div className="container mx-auto sm:-pt-24 px-6">
                                <ProfileCard/>
                    
                    
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
