import React from 'react';
import { Link } from 'react-router-dom';
import Heading from './Heading';

const CommunityGuides=[
  {
    "id":1,
    "slug":"gocoronago",
    "cardheading":"Symptoms of corona",
    "cardimage":"https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_zsHw3Ah70.svg",
  },
  {
    "id":2,
    "slug":"gocoronago",
    "cardheading":"Corona Related Post",
    "cardimage":"https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_JwS8tMD5N.svg",
  },
  {
    "id":3,
    "slug":"gocoronago",
    "cardheading":"Why Collapse?",
    "cardimage":"https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_jirxji2h9.svg",
  }
  , {
    "id":4,
    "slug":"gocoronago",
    "cardheading":"Lockdown 2.0",
    "cardimage":"https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_zsHw3Ah70.svg",
  },
  {
    "id":5,
    "slug":"gocoronago",
    "cardheading":"Prescription for corona",
    "cardimage":"https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_JwS8tMD5N.svg",
  },
  {
    "id":6,
    "slug":"gocoronago",
    "cardheading":"Lack of Vaccines",
    "cardimage":"https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_jirxji2h9.svg",
  }
  ,

]

export default function Toppicks() {

    return (
        <div>
            
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-12 mx-auto max-w-5xl">
          <Heading heading="Community Guides"/>
          <div className="flex flex-wrap -m-4">
            {CommunityGuides.map((data, key)=>(
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white hover:shadow-xl shadow-2xl rounded-xl overflow-hidden">
                <img className="h-36 w-full object-cover object-center bg-green-300 hover:scale-110 transform transition duration-700 ease-in-out" src={data.cardimage} alt="blog" />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data.cardheading}</h1>
      
                  <div className="flex items-center flex-wrap ">
                    <Link to="/blogdet" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>))
}
     
          </div>

        </div>
      </section>
        </div>
    )
}


