import React, { Component } from 'react'

export class FeaturesCard extends Component {
    render() {
        return (
            <div className="flex flex-wrap mt-6">
        <div className="p-2 md:w-1/3">
          <div className="h-full bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
            <div className="p-2">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The Catalyzer</h1>
          
            </div>

          </div>
        </div>
        <div className="p-2 md:w-1/3">
          <div className="h-full bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
            <div className="p-2">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">The 400 Blows</h1>
          
            </div>
          </div>
        </div>
        <div className="p-2 md:w-1/3">
          <div className="h-full bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
            <div className="p-2">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 ">Shooting Stars</h1>
        
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default FeaturesCard
