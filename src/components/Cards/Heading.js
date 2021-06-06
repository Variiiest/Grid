

import React, { Component } from 'react'

export class Heading extends Component {
    render() {
        return (
            <div>
                
<div className="flex flex-wrap w-full py-4 px-1">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{this.props.heading}</h1>
         
        </div>

      </div>

            </div>
        )
    }
}

export default Heading
