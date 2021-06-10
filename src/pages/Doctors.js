import axios from 'axios'
import React, { Component } from 'react'
import Footer from '../components/Bars/Footer'
import Navbar from '../components/Bars/Navbar'
import DoctorCard from '../components/Cards/DoctorCard'

export class Doctors extends Component {
  
constructor(props) {
  super(props)

  this.state = {
     search:false,
     value:"",
     datadoctor:[],
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
}


handleChange(event) {
  this.setState({value: event.target.value});
}


handleClick(){
  
  this.setState({search : true})
}


handleSubmit= e =>{
e.preventDefault();
axios.get('v1/search/doctor',{params:{key:this.state.value}}).then(
res=>{
  this.setState({datadoctor:res.data.payload})
}
)
.catch(err =>{
console.log(err)
})
}

    render() {
        return (
          <div className="bg-gray-50">
          <Navbar/>


          <div className="bg-green-50">
<div className="container px-5 py-12 mx-auto max-w-5xl bg-green-50">

<div className="p-4">
          <div className="flex sm:pt-0 pt-12">   

          <svg  width={96} height={96} viewBox="0 0 48 48" className="bg-green-100 rounded-xl">  <path className="vi-primary" d="M8,41l5.818-10.889L18.182,28.3l2.909-5.445h5.818L29.818,28.3l4.364,1.815L40,41H8Z" style={{fill: 'rgb(43, 19, 193)'}} />  <path className="vi-accent" d="M32,17l-1,3H30l-1,3-4,3H23l-4-3-1-3H17l-1-3h2l-1-6,7-4,7,4-1,6h2Z"  style={{fill: 'rgb(0, 236, 177)'}}  /></svg> 
                       
         
            <div id="body" className="ml-5 mt-3">
            <h2 className="flex-auto text-3xl font-medium text-green-400">{this.props.name}</h2>


            <h2 className="flex-auto text-2xl py-2 text-gray-600 sm:block hidden">{this.props.detail}</h2>
            </div>
          </div>
        </div>

        </div>  
        </div>
               
          <div className="container px-5 py-12 mx-auto max-w-5xl">
          
          <div className="lg:flex-grow lg:w-2/3 pl-4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <div className="flex items-center w-full mx-auto overflow-hidden text-center rounded-full shadow-lg bg-white border hover:borer-blue-600">
          <input type="text" name="search" placeholder="Search" className="w-full h-12 px-6 py-2 font-medium text-gray-800 focus:outline-none bg-white" value={this.state.value} onChange={this.handleChange} /> <span className="top-0 right-0 block">
            <button onClick={this.handleSubmit}
              type="button"
              className="inline-flex items-center btn-primary m-2"
            >
              Search
            </button>
          </span>
        </div>
        <div className="mr-6">
            {this.state.search?
            <h2 className="text-2xl md:leading-10 mb-1 mt-4">Search results for {this.state.value} </h2>:null}

          </div>
        </div>




               <DoctorCard data={this.state.datadoctor}/>  
          </div>
          <Footer/>
          
                          
          
          
          
                      </div>
        )
    }
}

export default Doctors
