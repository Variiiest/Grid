import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Bars/Footer'
import Navbar from '../components/Bars/Navbar'
import Search from '../components/Cards/Search'
import { GrocerData } from '../dummyjson/GrocerData'



export class Grocery extends Component {
    render() {
        return (
            <div className="bg-gray-50">
            <Navbar/>


            <div className="bg-green-50">
<div className="container px-5 py-12 mx-auto max-w-5xl bg-green-50">

<div className="p-4">
            <div className="flex sm:pt-0 pt-12">   

                  
            <svg width={96} height={96} viewBox="0 0 48 48" className="bg-green-100 rounded-xl">   
             <path className="vi-primary" d="M13.394,15H34.606L38,41H10Z" style={{fill: 'rgb(43, 19, 193)'}} />  <path className="vi-accent" d="M10,41h0l0.522-4H37.478L38,41H10ZM28,14c0-1.516-.737-5-4-5s-4,3.484-4,5v1H17l0.01-2.951C17.01,9.017,20.053,6,24,6s6.99,3.017,6.99,6.049L31,15H28V14Z" style={{fill: 'rgb(0, 236, 177)'}} />  <path className="vi-prop" d="M17,15L17.009,17l3,0V15H17Zm10.989,0v1.989l3,0L31,15H27.991Z" style={{fill: 'rgb(206, 250, 255)'}} /></svg>
  

              <div id="body" className="ml-5 mt-3">
              <h2 className="flex-auto text-3xl font-medium text-green-400">{this.props.name}</h2>


              <h2 className="flex-auto text-2xl py-2 text-gray-600 sm:block hidden">{this.props.detail}</h2>
              </div>
            </div>
          </div>

          </div>  
          </div>
                 
            <div className="container px-5 py-12 mx-auto max-w-5xl">
            
      
                 <Search/>
                   
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {GrocerData.map((data,key)=>(
          <div className="flex flex-col p-2" key={key}>
 <Link to={data.slug} >
          <div className="hover:bg-white hover:shadow-lg  rounded-lg p-5">
        <div className="flex"> 
          <img alt="mountain" className="w-36 h-36 rounded sm:-ml-0 -ml-12" src={data.image} />
          <div id="body" className="flex-col ml-5">
          <h2 className="flex-auto lg:text-2xl font-medium text-lg uppercase">{data.name}</h2>
          
          <h2 className="flex-auto text-base font-medium py-2">{data.price}</h2>
          
          <h2 className="flex-auto text-base font-medium py-2 titlecase">{data.price}</h2>
       
                  
          </div>
        </div>
      </div>
      </Link>

      </div>
          ))}
        </div>

            </div>
            <Footer/>
            
                            
            
            
            
                        </div>
        )
    }
}

export default Grocery
