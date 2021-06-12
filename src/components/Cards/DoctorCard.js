import React, { Component } from 'react'
import DoctorModel from './DoctorModel';

export class DoctorCard extends Component {
  
  
  render() {
    return (
      <div>
          
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {this.props.data.map((data,key)=>(

  <DoctorModel key={key} doctor={data.doctorname} price={data.price} skill={data.skill} doctor_id={data.doctor_id}/>
  ))}

        </div>

        {/* {this.state.showDate?
      
      <div>
      <div className="py-12 bg-gray-100 bg-opacity-20 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0" id="modal">
          <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-2xl  rounded border">
                   
              <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Date</label>
        <input type="date" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={this.state.value} onChange={this.handleChange}/>
      </div>

                  <div className="flex items-center w-full">
                      <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-xs sm:text-sm"   onClick={this.handleClick}>Download Bill</button>
                      <button className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-4 sm:px-8 py-2 text-xs sm:text-sm"  onClick={this.handleClick}>
                          Cancel
                      </button>
                  </div>
                  <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"  onClick={this.handleClick}>
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

      
      
      
      
      :null} */}



      </div>
    )
  }
}

export default DoctorCard
