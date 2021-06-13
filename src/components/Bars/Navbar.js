import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
    const [show, setShow] = useState(null);
    const [profile, setProfile] = useState(false);
    const [isLogin, setLogin]=useState(localStorage.getItem('isLogin'))
   
  

    return (
        <>
                {/* Code block starts */}
                <nav className="bg-white shadow-md xl:block hidden">
                    <div className="mx-auto container px-6 py-2 xl:py-0 max-w-5xl">
                        <div className="flex items-center justify-between">
                          
                            <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                            <Link to="/" >
                                <div className="flex items-center">
                                <img alt="/" src="https://ik.imagekit.io/vpa3fwqdnd/Components/logo135_Wyjf7eIiL.png" className="w-12 h-12"/>
                                    <p className="hidden sm:block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-green-300 leading-normal pl-3">THEGRID</p>
                               
                                </div>
                                </Link>
                            </div>

                            <div className="flex">
                                <div className="hidden xl:flex md:mr-6 xl:mr-16">
                                    <Link to="/hospitals" className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid text-blue-700" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                            </svg>
                                        </span>
                                        Labs
                                    </Link>
{/*                                     
                                    <Link to="/groceries" className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                            </svg>
                                        </span>
                                    Grocery
                                    </Link>
                                     */}
                                    <Link to="/doctors" className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                <circle cx={12} cy={12} r={9} />
                                            </svg>
                                        </span>
                                       Doctors
                                    </Link>  


                                </div>
                                <div className="hidden xl:flex items-center">
                                {!isLogin &&
                                    <div className="relative md:mr-6 my-2">
                                        <Link to="/login">
                                        <button className="btn-primary">Login</button></Link>
                                    </div>}
                                    {isLogin &&
                                    <div className="ml-6 relative">
                                        <div className="flex items-center relative" onClick={() => setProfile(!profile)}>
                                            {profile && (
                                                <ul className="p-2 w-40 border-r bg-white absolute rounded-xl right-0 shadow-2xl top-0 mt-16 ">
                                                        <Link to="/appointments">
                                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <circle cx={12} cy={7} r={4} />
                                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                            </svg>
                                                        
                                                            <span className="ml-2">Appointments</span>
                                                        </div>
                                                    </li>
                                                    </Link>
                                                    <Link to="/government">
                                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <circle cx={12} cy={12} r={9} />
                                                            <line x1={12} y1={17} x2={12} y2="17.01" />
                                                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                                        </svg> 
                                                        
                                                        <span className="ml-2">Statistics</span>
                                                    </li>
                                                    </Link>

                                                    <Link to="/profile">
                                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                            <circle cx={12} cy={12} r={3} />
                                                        </svg>
                                                        <span className="ml-2">Profile</span>
                                                    </li>
                                                    </Link>
                                                    <li className="cursor-pointer text-red-600 text-sm font-bold leading-3 tracking-normal py-2  focus:outline-none">
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <circle cx={12} cy={7} r={4} />
                                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                            </svg>
                                                            <button className="ml-2" onClick={() =>{
                                                                localStorage.clear();
                                                                setLogin()
                                                               
                                                                }}>
                                                                
                                                                Logout</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )}
                                            <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                                <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png" alt="logo" />
                                            </div>
                                            <div className="ml-2 text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>}

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav>
                    <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed absolute top-0 z-0">
                        <div className="w-24">
                            <Link to="/">
                        <img alt="/" src="https://ik.imagekit.io/vpa3fwqdnd/Components/logo135_Wyjf7eIiL.png" className="w-12 h-12"/></Link>
                        </div>
                        <div className="flex items-center">
                            <div className="relative mr-6 ">
                            {!isLogin && <Link to="/login">
                                <button className="btn-primary">Login</button>
                                </Link>}
                            </div>
                            <div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
                                {show ? (
                                    ""
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={4} y1={6} x2={20} y2={6} />
                                        <line x1={4} y1={12} x2={20} y2={12} />
                                        <line x1={4} y1={18} x2={20} y2={18} />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full xl:hidden h-full z-40 fixed p-2 transition transform origin-top-right " : " w-full xl:hidden h-full z-40 transform -translate-x-full"}>
                        <div className="absolute inset-x-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="px-6 h-full">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div>
                                        <div className="mt-6 flex w-full items-center justify-between">
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center">
                                                <img alt="/" src="https://ik.imagekit.io/vpa3fwqdnd/Components/logo135_Wyjf7eIiL.png" className="w-12 h-12"/>
                                                </div>
                                                <div id="cross" className="text-gray-800" onClick={() => setShow(!show)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={18} y1={6} x2={6} y2={18} />
                                                        <line x1={6} y1={6} x2={18} y2={18} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="f-m-m">
                                            <Link to="/hospitals" className="cursor-pointer">
                                                <li className="text-gray-800 pt-10">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                                            </svg>
                                                        </div>
                                                        <p className="text-indigo-700 xl:text-base text-base ml-3">Labs</p>
                                                    </div>
                                                </li>
                                            </Link>
                                            {/* <Link to="/groceries" className="cursor-pointer">
                                                <li className="text-gray-800 pt-8">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                                </svg>
                                                            </div>
                                                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">Grocery</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </Link> */}
                                            <Link to="/doctors" className="cursor-pointer">
                                                <li className="text-gray-800 pt-8">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                                <circle cx={12} cy={12} r={9} />
                                                            </svg>
                                                        </div>
                                                        <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">Doctors</p>
                                                    </div>
                                                </li>
                                            </Link>
                                            {isLogin &&  
                                            <Link to="/profile" className="cursor-pointer">
                                                <li className="text-gray-800 pt-8">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                                <circle cx={12} cy={12} r={9} />
                                                            </svg>
                                                        </div>
                                                        <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">Dashbaord</p>
                                                    </div>
                                                </li>
                                            </Link>

                                 }
                                        </ul>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        
        </>
    );
}
