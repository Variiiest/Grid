import React, { Component } from 'react'
import Navbar from '../components/Bars/Navbar'
import BookCard from '../components/Cards/BookCard'
import Search from '../components/Cards/Search'

export class Lab extends Component {
    render() {
        return (
            <div className="bg-gray-50">
<Navbar/>
<div className="bg-green-50">
<div className="container px-5 py-12 mx-auto max-w-5xl bg-green-50">

<div className="p-4">
            <div className="flex sm:pt-0 pt-12">   

            <svg width={96} height={96} viewBox="0 0 48 48" className="bg-green-100 rounded-xl">    <path className="vi-primary" d="M41,11V41H7V11H5V7H43v4H41Z" style={{fill: 'rgb(44, 231, 169)'}} />  <path className="vi-accent" d="M38.5,18c-4.3,0-4.5-5-4.5-5a5,5,0,0,1-10,0,5,5,0,0,1-10,0s-0.2,5-4.5,5A4.5,4.5,0,0,1,5,13.5V11H43v2.5A4.5,4.5,0,0,1,38.5,18ZM22.01,35.01h-9V25.99h9v9.02ZM34.993,41h-8V25.99h8V41Z" style={{fill: 'rgb(36, 19, 138)'}} /></svg>  
           

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
     <BookCard/>



</div>


            </div>
        )
    }
}

export default Lab
