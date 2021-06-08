import React, { Component } from 'react'
import { HospitalData } from '../../dummyjson/Hospital'
import Search from './Search'
import { Link } from "react-router-dom";


export class Hospitalcard extends Component {
  render() {
    return (
      <div>
              <div>

<div className="container px-5 py-12 mx-auto">
<div className="p-5">
        <div className="flex sm:pt-0 pt-12">    
        <svg width={96} height={96} viewBox="0 0 48 48">   
         <path className="vi-primary" d="M13.394,15H34.606L38,41H10Z" style={{fill: 'rgb(43, 19, 193)'}} />  <path className="vi-accent" d="M10,41h0l0.522-4H37.478L38,41H10ZM28,14c0-1.516-.737-5-4-5s-4,3.484-4,5v1H17l0.01-2.951C17.01,9.017,20.053,6,24,6s6.99,3.017,6.99,6.049L31,15H28V14Z" style={{fill: 'rgb(0, 236, 177)'}} />  <path className="vi-prop" d="M17,15L17.009,17l3,0V15H17Zm10.989,0v1.989l3,0L31,15H27.991Z" style={{fill: 'rgb(206, 250, 255)'}} /></svg>
          <div id="body" className="ml-5 mt-3">
          <h2 className="flex-auto text-3xl font-medium text-green-400">{this.props.name}</h2>
          <h2 className="flex-auto text-2xl py-2 text-gray-600 sm:block hidden">You can search groceries, order the groceries from nearby stores.</h2>
          </div>
        </div>
      </div>
<Search/>
        <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
        
          <div className="mr-6">
            <h2 className="text-2xl md:leading-10 mb-1 mt-4">Search results for {this.props.name} </h2>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 px-5 py-2 text-sm shadow tracking-wider text-white rounded hover:bg-blue-800">Filter</button>
          </div>
        </div>
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
    </div>
      </div>
    )
  }
}

export default Hospitalcard
