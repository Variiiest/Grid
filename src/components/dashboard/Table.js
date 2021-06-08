import React from 'react'

export default function Table() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
                  <div className="py-6 overflow-x-auto lg:py-4">
        <div className="align-middle inline-block w-full py-4 overflow-hidden bg-white shadow rounded px-12 border">
          <div className="flex justify-between">
            <div className="inline-flex border rounded w-7/12 px-2 h-12 bg-white">
              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div className="flex">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                    <svg width={18} height={18} className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
        <div className="align-middle inline-block min-w-full shadow bg-white border overflow-hidden">
          <table className="min-w-full">
            <thead className="py-3">
              <tr>
                <th className="px-6 py-3 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-blue-500">Doctor</th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-blue-500"></th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-blue-500">P</th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-blue-500">Status</th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-blue-500 ">Created At</th>
                <th className="px-6 py-3  border-gray-300" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">damilareanjorin1@gmail.com</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">+2348106420637</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-100 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" onClick={() => setShowModal(true)}>View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">damilareanjorin1@gmail.com</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">+2348106420637</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-100 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">damilareanjorin1@gmail.com</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">+2348106420637</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">not active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-100 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">damilareanjorin1@gmail.com</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">+2348106420637</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-100 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">damilareanjorin1@gmail.com</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">+2348106420637</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">disabled</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-100 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {showModal?
      
      <div>
      <div className="py-12 bg-gray-100 bg-opacity-20 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0" id="modal">
          <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-2xl  rounded border">
              <div className="flex relative pb-4">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
          <div className="flex-grow pl-4">
          <h1 className="text-gray-700 font-lg font-bold tracking-normal leading-tight">Order canceled</h1>
            <p className="leading-relaxed text-sm pt-2">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>
        <div className="flex relative pb-4">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-400 inline-flex items-center justify-center text-white relative z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <div className="flex-grow pl-4">
          <h1 className="text-gray-700 font-lg font-bold tracking-normal leading-tight">Order Dispatched</h1>
            <p className="leading-relaxed text-sm pt-2">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>
        <div className="flex relative pb-4">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={40} height={40} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <path d="M9 12l2 2l4 -4" />
                      </svg>
          </div>
          <div className="flex-grow pl-4">
          <h1 className="text-gray-700 font-lg font-bold tracking-normal leading-tight">Recieved at somewhere</h1>
            <p className="leading-relaxed text-sm pt-2">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>
        <div className="flex relative pb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={40} height={40} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={12} cy={12} r={9} />
                          <path d="M9 12l2 2l4 -4" />
                      </svg>
          </div>
          <div className="flex-grow pl-4">  
          <h1 className="text-gray-700 font-lg font-bold tracking-normal leading-tight">Delivered</h1>
            <p className="leading-relaxed text-sm pt-2">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>




                  <div className="flex items-center w-full">
                      <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-xs sm:text-sm"  onClick={() => setShowModal(false)} >Download Bill</button>
                      <button className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-4 sm:px-8 py-2 text-xs sm:text-sm"  onClick={() => setShowModal(false)}>
                          Cancel
                      </button>
                  </div>
                  <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={() => setShowModal(false)}>
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

      
      
      
      
      :null}

            </div>
   
  )
}
