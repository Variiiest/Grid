
import TabsRender from '../Auth/Tab';
import FeaturesCard from './FeaturesCard';
import React, { Component } from 'react'

export class SearchCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       search:false,
       value:"",
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
    
  
  render() {
    return (
      <div>
            <>
                 <section className="text-gray-600 body-font bg-green-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <div className="flex items-center w-full mx-auto overflow-hidden text-center rounded-full bg-white shadow">
          <input type="text" name="search" placeholder="Search about symptoms" className="w-full h-12 px-6 py-2 font-medium text-gray-800 focus:outline-none bg-white" value={this.state.value} onChange={this.handleChange} /> <span className="top-0 right-0 block">
            <button onClick={this.handleClick}
              type="button"
              className="inline-flex items-center btn-primary m-2"
            >
              Search
            </button>
          </span>
        </div>
        {!this.state.search &&
        <FeaturesCard/>}
        {this.state.search && 
          <div>
          <p className="p-2">Search for "{this.state.value}"</p> 
          <TabsRender/>
          </div>
        }
       

          </div>



          <div className="lg:w-1/4 w-5/6">
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_zsHw3Ah70.svg" /> */}
          </div>
        </div>
      </section>


   
            </>
      </div>
    )
  }
}

export default SearchCard


