import React, { Component } from 'react'

export class ListCard extends Component {
    render() {
        return (
            <div className="flex flex-col text-left w-full mt-4">
 
            <div className="p-4 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm sm:text-left pl-2">Disease name</h2>
              <nav className="flex flex-col sm:items-start sm:text-left items-center -mb-1 space-y-2.5">
                <p>
                  <span className="bg-blue-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
                <p>
                  <span className="bg-blue-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
                <p>
                  <span className="bg-blue-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
      
              </nav>
              <button className="mt-4 text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Consult</button>
            </div>
       
              </div>
        )
    }
}

export default ListCard
