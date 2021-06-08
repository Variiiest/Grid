import React from 'react'

export default function Model() {
    return (
            <div>
            <div className="py-12 bg-gray-700 bg-opacity-20 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div className="w-full flex items-center text-green-400 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={40} height={40} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={9} />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight ml-2">Payment Processing Successful</h1>
                        </div>
                        <p className="mb-5 text-sm text-gray-600 font-normal">Your Payment was successful. You can now use our services. Check the action below for more details. Thank you</p>
                        <div className="flex items-center w-full">
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-xs sm:text-sm">Manage Plan</button>
                            <button className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-4 sm:px-8 py-2 text-xs sm:text-sm" onclick="modalHandler()">
                                Cancel
                            </button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      

    )
}
