import React from "react";
function ProfileCard() {
    return (
        <>
            <div className="flex items-center justify-center w-full py-8">
                {/* Card code block start */}
                <div className="bg-white dark:bg-gray-800 shadow rounded">
                    <div className="relative">
                        <img className="h-56 shadow rounded-t w-full object-cover object-center" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png" alt="" />
                        <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                            <img className="w-full h-full overflow-hidden object-cover rounded" src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt="" />
                        </div>
                    </div>
                    <div className="px-5 xl:px-10 pb-10">
                        <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                            <div className="flex items-center">
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                            </div>
                        </div>
                        <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                            <div className="xl:pr-16 w-full xl:w-2/3">
                                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                                    <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">Patient Name</h2>
                                </div>
                                <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                            </div>
                            <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-2/3">
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">12</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Tests</p>
                                </div>
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">24</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Appointments</p>
                                </div>
                                <div>
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">12</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Orders</p>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                                <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card code block end */}
            </div>
        </>
    );
}
export default ProfileCard;
