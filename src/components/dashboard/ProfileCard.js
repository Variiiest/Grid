import axios from 'axios'
import React, { Component } from 'react'

export class ProfileCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user:"",
            address:"",
        }
    }

    componentDidMount() {
        axios.get('/v1/user/').then(
            res => {
                console.log(res.data.payload)
                this.setState({user: res.data.payload})
                this.setState({address: res.data.payload.address})
            })
            .catch(err => {
                if (err.response) {
                    console.log("User Not Found")
                }
            })
    }


    render() {
        return (
            <>
               
                <section className="text-gray-600 body-font pt-6">
        <div className="container bg-white px-5  py-6 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-2/3 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
                <p ><span className="p-2 bg-green-100 rounded-full">Verified</span></p>
              <h1 className="title-font font-medium text-3xl mt-4 mb-2 text-gray-900 uppercase">{this.state.user.name}</h1>
              <div className="leading-relaxed"> <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">{this.state.address.address_line_1}</p>
                                    <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">{this.state.address.city}</p>
                                    <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">{this.state.address.city} {this.state.address.zip_code} {this.state.address.state}</p></div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">27</h2>
              <p className="leading-relaxed">Appintments</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
              <p className="leading-relaxed">Orders</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
              <p className="leading-relaxed">Tests</p>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center w-full h-full" src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt="stats" />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center max-w-full py-8 container">
                    {/* Card code block start */}
                    {/* <div className="bg-white shadow rounded">
                        <div className="relative">
                      
                            <div className="w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                                <img className="w-full h-full overflow-hidden object-cover rounded" src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt="" />
                            </div>
                        </div>
                        <div className="px-5 xl:px-10 pb-10">
                            <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                                <div className="flex items-center">
                                   Verified
                                </div>
                            </div>
                            <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                                <div className="xl:pr-16 w-full xl:w-2/3">
                                    <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                                        <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">{this.state.user.name}</h2>
                                    </div>
                                    <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">{this.state.address.address_line_1}</p>
                                    <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">{this.state.address.city}</p>
                                    <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">{this.state.address.city} {this.state.address.zip_code} {this.state.address.state}</p>
                                </div>
                                <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-2/3">
                                    <div className="mr-6 xl:mr-10">
                                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">12</h2>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Tests</p>
                                    </div>
                                    <div className="mr-6 xl:mr-10">
                                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">24</h2>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Appointments</p>
                                    </div>
                                    <div>
                                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">12</h2>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Orders</p>
                                    </div>
                                </div>
                                <div className="w-full xl:w-1/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                                    <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Card code block end */}
                   
                </div>
            </>
        )
    }
}

export default ProfileCard
