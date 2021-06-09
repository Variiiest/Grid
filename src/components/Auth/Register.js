import axios from 'axios';
import React, { Component } from 'react'



const base_url="https://the-grid2.herokuapp.com"
export class Register extends Component {


  handleSubmit= e =>{
    e.preventDefault();

    const data={
      email:this.email,
       name:this.name,
       password:this.password,
       contact_number:this.contact_number,
       uidai:this.uidai,
       age:this.age,
       gender:this.gender,
    }
    axios.post(base_url+'/v1/user/register',data).then(
      res=>{
        console.log(res);
      }
    )

  }






  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      email:"",
  //      name:"",
  //      password:"",
  //      contact_number:"",
  //      uidai:"",
  //      age:"",
  //      gender:"",
  //      display_email:"",
  //      display_name:"",
  //      display_password:"",
  //      display_contact_number:"",
  //      display_uidai:"",
  //      display_age:"",
  //      display_gender:"",
  //   }
  // }


  // getErrors= (name, value)=>{
  //   let errors =[];
  //   if(!required(value)){
  //     errors.push('This value is required.');
  //   }
  //   if(minLength(12,value)){
  //     errors.push('Minimum 12 digit requires');
  //   }

  //   if (maxLength(12, value)){
  //     errors.push('Enter your correct Adhar');
  //   }

  //   const property= '_display'+name
  //   if(errors.length===0){
  //     this.state[property]= false

  //   }

  //   if (this.state[property]){
  //     return (<>{errors.map((error, index)=> <p key={index} className="text-red-400 text-sm">{error}</p>)}</>)
  //   }


  // }


  // isValid= ()=>{
  //   let valid= true;
  //   Object.values(this.state).forEach((val)=>{
  //     if(val===true){
  //       valid= false
  //       return valid
  //     }
  //   })
  //   return valid
  // }

  // clearForm =() =>{
  //   this.setState({
  //     email:"",
  //      name:"",
  //      password:"",
  //      contact_number:"",
  //      uidai:"",
  //      age:"",
  //      gender:"",
  //      display_email:"",
  //      display_name:"",
  //      display_password:"",
  //      display_contact_number:"",
  //      display_uidai:"",
  //      display_age:"",
  //      display_gender:"",
  //   })
  // }


  // sendRegistration = e=>{
  //   e.preventDefault()
  //   const {email, name, password, contact_number, uidai, age, gender}= this.state

  //   if (this.isValid()){
  //     axios.post(base_url+'/v1/user/register',{
  //       'user':{
  //         email:email,
  //      name:name,
  //      password:password,
  //      contact_number:contact_number,
  //      uidai:uidai,
  //      age:age,
  //      gender:gender,
  //       }})

  //       .then(response=>{
  //         console.log(response)
  //         console.log(response.status+" "+response.statusText)
  //       })

  //       .catch(error=>{
  //         console.log(error)
  //       })
  //       this.clearForm()
  //   }

  // }


  // changeHandler= (event) => {
  //   event.preventDefault()
  //   var stateObject= function(){
  //     var returnObj= {};
  //     returnObj['display_'+event.target.name]= true;
  //     return returnObj;
  //   }();
  //   this.setState(stateObject);
  //   this.setState({
  //     [event.target.name]:event.target.value,
  //   })
  // }



  
    // {
    //   "email": "harry263148@gmail.com",
    //   "name": "harry",
    //   "password": "abcd",
    //   "contact_number": "9876554301",
    //   "uidai": "5452781254569264",
    //   "age": 21,
    //   "gender": "male"
    // }



    render() {
        return (
            <div>
                  <form onSubmit={this.handleSubmit}>
                  <div className="flex flex-wrap">
                    <div className="mb-3 w-full lg:w-1/2 px-2">

                      <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Name"  onChange={e=> this.name=e.target.value  } />

                    </div>
                    <div className="mb-3 w-full lg:w-1/2 px-2">

                      <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="number" placeholder="Phone no"  onChange={e=> this.contact_number=e.target.value  } />

                    </div>
                  </div>
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">

                    <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com" onChange={e=> this.email=e.target.value  } />

                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                    <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">

                    <input className="w-full text-xs bg-gray-50 outline-none" type="number" placeholder="123456789123" onChange={e=> this.uidai=e.target.value  } />

                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">

                    <input className="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="Male" onChange={e=> this.gender=e.target.value  } />

                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">

<input className="w-full text-xs bg-gray-50 outline-none" type="text" placeholder="Enter your Age" onChange={e=> this.age=e.target.value  } />

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
