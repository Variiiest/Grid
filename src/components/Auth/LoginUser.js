import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function LoginUser() {
  const [openTab, setOpenTab] = React.useState(1);
    
    return (
        <div>
                      <section>
        <div className="flex flex-wrap">
          <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
            <div className="max-w-md mx-auto">
              <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
                <Link className="text-3xl font-bold leading-none" to="/">
                  <img className="h-12" src="https://ik.imagekit.io/vpa3fwqdnd/Components/logo135_Wyjf7eIiL.png" alt="" width="auto" /></Link>
                 
                  {openTab=== 1 ?
                 
                  <button className="py-2 px-6 text-xs rounded bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold transition duration-200 focus:outline-none" onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}>Sign In</button>:<button className="py-2 px-6 text-xs rounded bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold transition duration-200 focus:outline-none" onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}>Sign Up</button>}
 

                  </div>
              <div>
               

                <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="mb-6 px-3">
                  <span className="text-gray-500">Sign Up</span>
                  <h3 className="text-2xl font-bold">Create an account</h3>
                </div>
                <Register/>
               <div>
               <div className="px-3 text-center">
                   
                    <span className="text-gray-400 text-xs">
                      <span data-config-id="secondary-action-desc">Already have an account?</span>
                      <button className="text-blue-600 hover:underline focus:outline-none" onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}>Sign In</button>
                    </span>
                    <p className="mt-16 text-xs text-gray-400">
                      <a className="underline hover:text-gray-500" href="#_">Policy privacy</a> and
                       <a className="underline hover:text-gray-500" href="#_">Terms of Use</a></p>
                  </div>
                 </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                <div className="mb-6 px-3">
                  <span className="text-gray-500">Sign In</span>
                  <h3 className="text-2xl font-bold">Sign In user</h3>
                </div>
     
              <Login/>


                </div>


              </div>


            </div>
          </div>
          <div className="hidden lg:block relative w-full lg:w-1/2">
            <div className="absolute inset-0 bg-gray-800 z-10 opacity-50" />
            <img className="absolute inset-0 h-full ml-auto object-cover z-0" src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" data-config-id="image" />
            <div className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center" style={{zIndex: 10}}>
              <h2 className="mb-2 text-2xl text-white font-bold font-heading" data-config-id="title">Login As doctor /Lab/ Vendor</h2>
              <div className="max-w-lg mx-auto mb-6">
                <p className="text-gray-300 leading-loose" data-config-id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
              </div>
              <a className="inline-block py-2 px-6 rounded leading-loose bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold transition duration-200" href="#_">Get Started</a>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="relative w-full">
              <img className="relative mb-4 object-cover" src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" data-config-id="image" />
            </div>
            <div className="py-10 px-3 text-center" style={{zIndex: 10}}>
              <h2 className="mb-2 text-2xl font-bold" data-config-id="title">So much more than a business analytics tool</h2>
              <p className="mb-6 text-gray-500 leading-loose" data-config-id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
              <a className="inline-block py-2 px-6 rounded bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold transition duration-200" href="#_">Get Started</a>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

