import FeaturesCard from './FeaturesCard';
import React, { Component } from 'react'
import axios from 'axios';
import TabCard from './TabCard';

export class SearchCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      search: false,
      value: "",
      page: 1,
      datasymptom: [],
      loaded:false
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ datasymptom:[] })
    this.setState({ loaded:false})
    this.setState({ search: false })
  }



  handleSubmit = e => {
    e.preventDefault();
    axios.get('v1/search/disease', { params: { key: this.state.value, page: this.state.page } }).then(
      res => {
        this.setState({ datasymptom: res.data.payload })
        this.setState({loaded:true})
        console.log(res)
      }
    )
      .catch(err => {
        console.log(err)
      })
    this.setState({ search: true })
    this.setState({ loaded:false});
  }




  render() {
    return (
      <div>
        <>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center max-w-5xl">
              <div className="lg:flex-grow flex flex-col md:items-start md:text-left md:mb-0 items-centerr">
                <div className="flex items-center max-w-md mx-auto overflow-hidden rounded-full bg-white shadow-xl border">
                  <input type="text" name="search" placeholder="Search about symptoms" className="w-full h-12 px-6 py-2 font-medium text-gray-800 focus:outline-none bg-white" value={this.state.value} onChange={this.handleChange} /> <span className="top-0 right-0 block">
                    <button onClick={this.handleSubmit}
                      type="button"
                      className="inline-flex items-center btn-primary m-2"
                    >
                      Search
                    </button>
                  </span>
                </div>
                {!this.state.search &&
                  <FeaturesCard />}
                {this.state.search &&
                  <div>
                    <p className="p-2 text-xl">Search for "{this.state.value}"</p>

                    {(this.state.datasymptom.length === 0 && this.state.loaded ===false) &&
                         <div className="p-6">
                        <p className="text-2xl animate-spin"><img alt="/" src="https://ik.imagekit.io/vpa3fwqdnd/Components/logo135_Wyjf7eIiL.png" className="w-12 h-12"/></p>
                        
                        </div>
                    }
                     {(this.state.datasymptom.length === 0 &&this.state.loaded) &&
                         <div className="p-2">
                        <p className="text-2xl">No Data Found</p>
                        
                        </div>
                    }



                    {this.state.datasymptom.map((data,key)=>(
                <div key={key}>
               <TabCard id={data.disease_id} name={data.diseasename} symptoms={data.symptoms} description={data.description} prescription={data.prescription}/>
               </div>
           ))}




                  </div>
                }

{/* 
                <div className="flex h-12 max-w-lg font-medium rounded-full mt-4 mx-auto">

        <div className="w-full md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full">Prev</div>

        <div className="w-20 ml-2 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-blue-600 text-white " onClick={this.handleSubmit} value={this.state.value}>1</div>

        <div className="w-full ml-2 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">Next</div>

 
      </div> */}

              </div>
            </div>
          </section>

        </>
      </div>
    )
  }
}

export default SearchCard


