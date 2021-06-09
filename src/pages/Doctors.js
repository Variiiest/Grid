import React, { Component } from 'react'
import Footer from '../components/Bars/Footer'
import Navbar from '../components/Bars/Navbar'
import BookCard from '../components/Cards/BookCard'
import Search from '../components/Cards/Search'

export class Doctors extends Component {
    render() {
        return (
            <div>
                   <div className=" bg-green-50">
            <Navbar/>
                 
            <div className="container px-5 py-12 mx-auto">
            
            <div className="p-5">
                        <div className="flex sm:pt-0 pt-12">   
                        <svg  width={96} height={96} viewBox="0 0 48 48">  <path className="vi-primary" d="M8,41l5.818-10.889L18.182,28.3l2.909-5.445h5.818L29.818,28.3l4.364,1.815L40,41H8Z" style={{fill: 'rgb(43, 19, 193)'}} />  <path className="vi-accent" d="M32,17l-1,3H30l-1,3-4,3H23l-4-3-1-3H17l-1-3h2l-1-6,7-4,7,4-1,6h2Z"  style={{fill: 'rgb(0, 236, 177)'}}  /></svg> 
                          <div id="body" className="ml-5 mt-3">
                          <h2 className="flex-auto text-3xl font-medium text-green-400">{this.props.name}</h2>
            
            
                          <h2 className="flex-auto text-2xl py-2 text-gray-600 sm:block hidden">{this.props.detail}</h2>
                          </div>
                        </div>
                      </div>
                 <Search/>
                 <BookCard/>  
            </div>
            <Footer/>
            
                            
            
            
            
                        </div>
            </div>
        )
    }
}

export default Doctors
