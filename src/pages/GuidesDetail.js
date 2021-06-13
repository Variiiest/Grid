import Footer from '../components/Bars/Footer'
import React, { Component } from 'react'
import Navbar from '../components/Bars/Navbar'
export class GuidesDetail extends Component {
    render() {
        return (
            <div>
            <Navbar/>    
      <section className="py-24 sm:py-12">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: '24em'}}>
          <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{backgroundImage: 'linear-gradient( 180deg, transparent,rgba(0, 0, 0, 0.7))'}} />
          <img alt="" src="https://images.unsplash.com/photo-1584573062942-d46bb3aee3fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" className="absolute left-0 top-0 w-full h-full z-0 object-cover hover:scale-110 transform transition duration-700 ease-in-out" />
          <div className="p-4 absolute bottom-0 left-0 z-20"> <a href="#_" className="px-4 py-1 bg-blue-800 text-gray-200 inline-flex items-center justify-center mb-2 rounded-2xl">
              Category
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </h2>
            <div className="flex mt-3">
              <img alt="" src="https://randomuser.me/api/portraits/men/7.jpg" className="h-10 w-10 rounded-full mr-2 object-cover border border-green-700" />
              <div>
                <p className="font-semibold text-gray-200 text-sm">Aditya</p>
                <p className="font-semibold text-gray-300 text-xs">14 Aug</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h2>
          <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className="border-l-4 border-green-800 pl-4 mb-6 italic rounded">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      <Footer/>
            </div>
        )
    }
}

export default GuidesDetail
