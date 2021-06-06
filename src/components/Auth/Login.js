import React from 'react'



export default function Login() {

  const [openTab, setOpenTab] = React.useState(1);

  
  return (
    <div>
     <div className="mt-10 sm:mt-0">
        <div className="container">
         
        <p className="font-medium text-blue-800 mt-6 mb-8">
              <span className="px-2 py-4 bg-blue-100 rounded border border-blue-400">
                <button className={"" + (openTab === 1
                  ? "text-white px-4 py-2 rounded bg-blue-700 focus:outline-none border-0"
                  : "text-black focus:outline-none px-4 py-2")
                }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}>Sign In</button>

                <button className={"" + (openTab === 2
                  ? "text-white px-4 py-2 rounded bg-blue-700 focus:outline-none border-0"
                  : "text-black focus:outline-none px-4 py-2")
                }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}>Sign Up</button></span>
            </p>


          <div className={openTab === 1 ? "block" : "hidden"}>
          <section className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div className="relative z-10 text-left">
            <h1 className="mb-2 text-3xl font-semibold tracking-tighter text-blue-700 sm:text-5xl title-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="text-lg lg:block hidden text-green-400 leading-relaxed mt-6"> Praesent mattis egestas nunc non scelerisque. Aliquam erat volutpat. Nulla auctor turpis quis mollis vehicula. Aliquam erat volutpat. Nulla posuere ac justo at iaculis.</p>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2
        flex items-center justify-center">
          <div className="w-full sm:mx-8 bg-white px-8 py-8 rounded shadow-xl">
            <div>
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-6">Log in to your account</h1>
              <form className="mt-6" action="/" method="POST">
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="none" minLength={6} className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                </div>
                <div className="text-right mt-2">
                  <a href="/" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-indigo-400 text-white font-semibold rounded
              px-4 py-3 mt-6">Log In</button>
              </form>
              <hr className="my-6 border-gray-300 w-full" />
              <button type="button" className="w-full block bg-white focus:outline-none hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded px-4 py-3 border border-gray-300">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                  <span className="ml-4">
                    Log in
                    with
                  Google</span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </section>
          </div>

          <div className={openTab === 2 ? "block" : "hidden"}>
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                      <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                      <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                      <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                      <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label> <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                      <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                      <input type="email"
                    id="email address"
                    name="email address"
                    placeholder="Email Address"
                    autoComplete="none" className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit 
                  </button>
                </div>
              </div>
            </form>
          </div>




        </div>
        

      </div>
    </div>
  )
}
