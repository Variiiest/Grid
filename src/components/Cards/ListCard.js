import React from 'react'

export default function ListCard(props) {

  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>

      <div className="flex flex-col text-left w-full mt-4 mx-auto">
        <div onClick={() => setShowModal(true)}>
          <div className="w-full bg-white p-4 shadow-xl">
            <h2 className="font-medium title-font tracking-wide text-gray-900 mb-4 text-xl sm:text-left pl-2">{props.name}</h2>

            <p>{props.symptoms}</p>
            {/* <nav className="flex flex-col sm:items-start sm:text-left items-center -mb-1 space-y-2.5">
              <p>
                <span className="bg-blue-300 text-blue-500 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
              <p>
                <span className="bg-blue-300 text-blue-500 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
              <p>
                <span className="bg-blue-300 text-blue-500 w-6 h-6 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>

            </nav> */}

          </div>
        </div>

      </div>
      {showModal ?

        <div>
          <div className="py-12 bg-gray-100 bg-opacity-20 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-2xl  rounded border">
                <div className="w-full mb-6">
                  <h1 className="title-font font-medium text-base mt-4 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                  <div className="leading-relaxed text-sm">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                </div>
                <div className="w-full mb-6">
                  <h1 className="title-font font-medium text-base mt-4 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                  <div className="leading-relaxed text-sm">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                </div>
                <div className="w-full mb-6">
                  <h1 className="title-font font-medium text-base mt-4 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                  <div className="leading-relaxed text-sm">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                </div>



                <div className="flex items-center w-full">
                  <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-700 rounded text-white px-8 py-2 text-xs sm:text-sm" onClick={() => setShowModal(false)} >Consult</button>

                </div>
                <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-100 p-2 bg-blue-600 hover:text-gray-200 transition duration-150 ease-in-out" onClick={() => setShowModal(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>





        : null}

    </div>
  )
}
