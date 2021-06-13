import axios from 'axios';
import React, { Component } from 'react'
import LabSlot from './LabSlot'
export class LabModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDate: false,
            value: "",
            slot_data:[],
            checked:false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick() {
        this.setState({ showDate: !this.state.showDate })

    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }


    handleSubmit = e => {
        e.preventDefault();
        const data={
            date: this.state.value,
            test:this.props.testname,
            id:this.props.id
  
          }
        axios.post('v1/appoint/lab_slot', data).then(
            res => {
                this.setState({slot_data:res.data.payload.slot})
                this.setState({checked: true })
                console.log(res)
            }
        )
            .catch(err => {
                if (err.response) {
                    console.log("User not found or Pass doesnt match! Create an Account")
                    alert("User not found or Pass doesnt match! Create an Account")
                }
                console.log(err)
            })
    }






    render() {
        return (
            <>
                <div className="flex flex-col p-2" key={this.props.key}>
                    <span onClick={this.handleClick} >
                        <div className="hover:bg-white hover:shadow-2xl border border-white hover:border-green-100  rounded-xl p-5 cursor-pointer ">
                            <div className="flex">
                                <img alt="mountain" className="w-36 h-36 rounded sm:-ml-0 -ml-12" src="https://image.flaticon.com/icons/png/512/4228/4228742.png" />
                                <div id="body" className="flex-col ml-5">
                                    <h2 className="flex-auto lg:text-2xl font-medium text-lg uppercase">{this.props.labname}</h2>

                                    <h2 className="flex-auto text-base font-medium py-2">Price :{this.props.price}</h2>

                                    <h2 className="flex-auto text-base font-medium py-2 titlecase">{this.props.testname}</h2>
                                    <div className="inline-flex items-center">

                                        <p className="text-base">{this.props.contact_number}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </span>

                </div>


                {this.state.showDate ?

                    <div className="py-12 bg-gray-100 bg-opacity-60 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0" id="modal">
                        <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                            

                      
                            <div className="relative py-8 px-5 md:px-10 bg-white shadow-2xl  rounded border">
                            <div className="bg-white">
                            <div className="flex">
                                <img alt="mountain" className="w-36 h-36 rounded sm:-ml-0 -ml-12" src="https://image.flaticon.com/icons/png/512/4228/4228742.png" />
                                <div id="body" className="flex-col ml-5">
                                    <h2 className="flex-auto lg:text-2xl font-medium text-lg uppercase">{this.props.labname}</h2>

                                    <h2 className="flex-auto text-base font-medium py-2">Price: {this.props.price}</h2>

                                    <h2 className="flex-auto text-base font-medium py-2 titlecase">{this.props.testname}</h2>
                                    <div className="inline-flex items-center">

                                        <p className="text-base">{this.props.contact_number}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                                <div className="relative mb-4">
                                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Date</label>
                                    <input type="date" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={this.state.value} onChange={this.handleChange} />
                                </div>

                                {this.state.checked &&
<LabSlot data={this.state.slot_data} lab_id={this.props.id} test={this.props.testname} date={this.state.value}/>
    }


                           
                  <div className="flex items-center w-full">
                      {this.state.checked=== false &&
                      <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-700 rounded text-white px-8 py-2 text-xs sm:text-sm"  onClick={this.handleSubmit}>Check Slot</button>
                     }
                    
                 

                  </div>
                                <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={this.handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>


                    : null}


            </>
        )
    }
}

export default LabModel
