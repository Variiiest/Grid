import React ,{ useState}from 'react'
import Navbar from '../Bars/Navbar';
import LineChart from '../dashboard/LineChart';

export default function Governent() {
    const [show, setShow] = useState(false);

    return (
        <>
        <Navbar/>
            <div className="w-full h-full sm:pt-0 pt-20 bg-gray-50">
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts*/}
                    <div className="w-64 absolute lg:relative h-screen flex-col justify-between hidden lg:flex pb-12">
                        <div className="px-12">
                            <ul className="mt-6">
                                <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Active Disease HeatMap</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Disease Graph</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Area Wise</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*Mobile responsive sidebar*/}
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
                                                    <span className="xl:text-base md:text-2xl text-base ml-2">Dashboard</span>
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
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
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
                        <div className="container mx-auto px-6">
                        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap items-center">
        <form action="#" method="POST">
          <div className="shadow max-w-7xl overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
               
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                  <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                  <input type="text" name="state" id="state" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                  <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
        </div>
      </section>



                            <LineChart/>
                            <div className="pt-12">

                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
