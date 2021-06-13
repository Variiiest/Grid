import React from 'react'
import Footer from '../Bars/Footer';
import Navbar from '../Bars/Navbar';
import LineChart from '../dashboard/LineChart';

export default function Governent() {
    return (
        <>
        <Navbar/>
            <div className="max-w-5xl mx-auto h-full sm:pt-12 pt-20">
  
                         <p class="py-12">

                         </p>
                         <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h1 className="mx-auto mb-12 text-2xl text-gray-700 sm:text-3xl title-font">India Data</h1>
           
          </div>
    



                            <LineChart/>
                         <p class="py-12">

                         </p>

                       
                       
                        </div>
                        <Footer/> 
            
        </>
    );
}
