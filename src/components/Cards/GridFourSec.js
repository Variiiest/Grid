import React from 'react'
import Heading from './Heading'


const RandomFour=[
    {
      "id":1,
      "slug":"gocoronago",
      "name":"SimonComeBack",
      "speciality":"Gyconalist",
      "image":"https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif",
    },
    {
        "id":1,
        "slug":"gocoronago",
        "name":"SimonComeBack",
        "speciality":"Dyria",
        "image":"https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif",
      },
      {
        "id":1,
        "slug":"gocoronago",
        "name":"SimonComeBack",
        "speciality":"Laplace",
        "image":"https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif",
      }
    ,
    {
        "id":1,
        "slug":"gocoronago",
        "name":"SimonComeBack",
        "speciality":"Fourier",
        "image":"https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif",
      },
  ]
  


export default function GridFourSec() {
    return (
        <div>
          <div className="container px-5 pb-12 mx-auto">
             <Heading heading="Specialist Doctors"/>
            <div className="flex flex-wrap -m-4">
            {RandomFour.map((data, key)=>(
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <div className="max-w-lg rounded border border-gray-200 bg-white">
                        <div className="flex flex-col items-center py-8">
                            <div className="w-32 h-32 rounded-full">
                                <img src={data.image} alt="" className="rounded-full object-cover h-full w-full" />
                            </div>
                            <p className="text-xl text-gray-800 pt-4 pb-1 font-normal">{data.name}</p>
                            <p className="text-base text-gray-600">{data.speciality}</p>
                        </div>
                        <div className="border-t border-gray-200 w-full py-2 items-center justify-center text-center">
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
                        </div>
                    </div>
                </div>))}
 

             

            </div>
        </div>
        </div>
    )
}
