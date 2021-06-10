import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class FeaturesCard extends Component {
    render() {
        return (
            <div className="flex flex-wrap mt-6">
              
        <div className="p-4 md:w-1/3">
          <Link to="/groceries">
          <div className="h-full bg-gradient-to-b from-indigo-400 to-indigo-600 shadow-md hover:shadow-lg rounded overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center p-2" src="https://ik.imagekit.io/vpa3fwqdnd/Components/undraw_medicine_b1ol_sECinHHbv.svg" alt="blog" />
            <div className="p-2">
              <h1 className="title-font text-xl font-medium text-gray-100 ">Search Grocery</h1>
            </div>

          </div>
          </Link>
        </div>
        <div className="p-4 md:w-1/3">
        <Link to="/hospitals">
          <div className="h-full bg-gradient-to-b from-blue-400 to-blue-600 shadow-md hover:shadow-lg rounded overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center p-2" src="https://ik.imagekit.io/vpa3fwqdnd/Components/undraw_best_place_r685_apf5-81gg.svg" alt="blog" />
            <div className="p-2">
              <h1 className="title-font text-xl font-medium text-gray-100 ">Search Hospitals</h1>
            </div>
          </div></Link>
        </div>
        <div className="p-4 md:w-1/3">
        <Link to="/doctors">
          <div className="h-full  bg-gradient-to-b from-green-400 to-green-600 shadow-md hover:shadow-lg rounded overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center p-2" src="https://ik.imagekit.io/vpa3fwqdnd/Components/undraw_medical_care_movn_LIKCGrzB4.svg" alt="blog" />
            <div className="p-2">
              <h1 className="title-font text-xl font-medium text-gray-100 ">Search Doctors</h1>
        
            </div>
          </div>
          </Link>
        </div>
      </div>
        )
    }
}

export default FeaturesCard
