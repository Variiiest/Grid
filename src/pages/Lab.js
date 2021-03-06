import axios from 'axios'

import Footer from '../components/Bars/Footer'
import React, { Component } from 'react'
import Navbar from '../components/Bars/Navbar'
import BookCard from '../components/Cards/BookCard'

export class Lab extends Component {
 
constructor(props) {
        super(props)
      
        this.state = {
           search:false,
           value:"",
           datalab:[],
           loaded:false

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
    
      handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({ datalab:[] })
        this.setState({ loaded:false})
        this.setState({ search: false })
      }
    
  

  handleSubmit= e =>{
    e.preventDefault();
    axios.get('v1/search/diagnoselab',{params:{key:this.state.value}}).then(
      res=>{
        this.setState({datalab:res.data.payload})
        this.setState({loaded:true})
        console.log(res)
      }
    )
    .catch(err =>{
      console.log(err)
    })
    this.setState({search : true})
  }



    render() {
        return (
            <div className="">
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

<div className="lg:flex-grow lg:w-2/3 pl-4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <div className="flex items-center w-full mx-auto overflow-hidden text-center rounded-full shadow-lg bg-white border hover:borer-blue-600">
          <input type="text" name="search" placeholder="Search for test" className="w-full h-12 px-6 py-2 font-medium text-gray-800 focus:outline-none bg-white" value={this.state.value} onChange={this.handleChange} /> <span className="top-0 right-0 block">
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
            <h2 className="text-2xl md:leading-10 mb-1 mt-4">Search results for {this.state.value} 


{(this.state.datalab.length === 0 && this.state.loaded ===false) &&
                          <div className="p-">
                          <p className="text-xl animate-pulse">Loading .....</p>
                          
                          </div>
                    }
                     {(this.state.datalab.length === 0 &&this.state.loaded) &&
                         <div className="p-2">
                        <p className="text-2xl">No Data Found</p>
                        
                        </div>
                    }
            
            
            
            </h2>:null}



          </div>
        </div>

  


     <BookCard data={this.state.datalab} />

</div>
<Footer/>


            </div>
        )
    }
}

export default Lab
