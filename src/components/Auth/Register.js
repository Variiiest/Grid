import axios from 'axios';
import React, { Component } from 'react'

export class Register extends Component {
  handleSubmit= e =>{
    e.preventDefault();

    const data={
      first_name:this.first_name,
      last_name:this.last_name,
      email: this.email,
      password: this.password,
    }
    axios.post('https://reqres.in/api/register',data).then(
      res=>{
        console.log(res);
      }
    )

  }
    render() {
        return (
            <div>
                  <form onSubmit={this.handleSubmit}>
                  <div className="flex flex-wrap">
                    <div className="mb-3 w-full lg:w-1/2 px-2">

                      <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="First Name" onChange={e=> this.first_name=e.target.value  }/>

                    </div>
                    <div className="mb-3 w-full lg:w-1/2 px-2">

                      <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Last Name" onChange={e => this.last_name= e.target.value}/>

                    </div>
                  </div>
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">

                    <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" onChange={e => this.email= e.target.value}/>

                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">

                    <input className="w-full text-xs bg-gray-50 outline-none" type="password" placeholder="Enter your password" onChange={e => this.password= e.target.value}/>

                    <button>
                      <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-3 text-center">
                    <button className="mb-2 w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm text-gray-50 transition duration-200" data-config-id="primary-action">Sign Up</button>
                  </div>

             
                </form>




            </div>
        )
    }
}

export default Register
