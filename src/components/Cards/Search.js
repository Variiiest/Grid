import React, { Component } from 'react'

export class Search extends Component {
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
            <div className="lg:flex-grow lg:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <div className="flex items-center w-full mx-auto overflow-hidden text-center rounded-full bg-white shadow">
          <input type="text" name="search" placeholder="Search" className="w-full h-12 px-6 py-2 font-medium text-gray-800 focus:outline-none bg-white" value={this.state.value} onChange={this.handleChange} /> <span className="top-0 right-0 block">
            <button onClick={this.handleClick}
              type="button"
              className="inline-flex items-center w-32 h-12 px-8 m-2 text-base leading-6 text-gray-100 transition duration-150 ease-in-out bg-blue-700 border border-transparent hover:bg-blue-600 focus:outline-none rounded-full"
            >
              Search
            </button>
          </span>
        </div>
        </div>
        )
    }
}

export default Search
