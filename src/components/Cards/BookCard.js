import React, { Component } from 'react'
import { HospitalData } from '../../dummyjson/Hospital'
import { Link } from "react-router-dom";


export class BookCard extends Component {
  render() {
    return (
      <div>
          
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {HospitalData.map((data,key)=>(
          <div className="flex flex-col p-2">

          <div className="hover:bg-white hover:shadow p-5 rounded">
        <div className="flex"> 
          <img alt="mountain" className="w-36 h-36 rounded" src={data.image} />
          <div id="body" className="flex flex-col ml-5">
          <h2 className="flex-auto lg:text-2xl font-medium text-lg">{data.name}</h2>
          
          <h2 className="flex-auto text-base font-medium py-2">{data.type}</h2>
          <div className="inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                        </path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-base">{data.area},{data.city}</p>
                    </div>
            <div className="flex mt-2">
              <Link to={data.slug} >
            <button className="mb-2 md:mb-0 btn-secondary inline-flex items-center space-x-2 ">
                      
                      <span>Book a slot</span>
                    </button>
                    </Link>
                 
            </div>
          </div>
        </div>
      </div>

      </div>
          ))}
        </div>


      </div>
    )
  }
}

export default BookCard
