import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class DoctorCard extends Component {
  
  
  render() {
    return (
      <div>
          
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {this.props.data.map((data,key)=>(
          <div className="flex flex-col p-2" key={key}>
 <Link to={data.slug} >
          <div className="hover:bg-white hover:shadow-lg  rounded-lg p-5">
        <div className="flex"> 
          <img alt="mountain" className="w-36 h-36 rounded sm:-ml-0 -ml-12" src="https://i.pinimg.com/736x/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg" />
          <div id="body" className="flex-col ml-5">
          <h2 className="flex-auto lg:text-2xl font-medium text-lg uppercase">{data.doctorname}</h2>
          
          <h2 className="flex-auto text-base font-medium py-2">{data.price}</h2>
          
          <h2 className="flex-auto text-base font-medium py-2 titlecase">{data.skill}</h2>
          <div className="inline-flex items-center">
                    
                      <p className="text-base">{data.doctoremail}</p>
                    </div>
                  
          </div>
        </div>
      </div>
      </Link>

      </div>
          ))}
        </div>


      </div>
    )
  }
}

export default DoctorCard
