import React, { Component } from 'react'
import LabModel from './LabModel';


export class BookCard extends Component {


  render() {
    return (
      <div>

        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {this.props.data.map((data, key) => (

            <LabModel labname={data.labname} price={data.price} testname={data.testname} contact_number={data.contact_number} id={data.diagnoselab_id}/>
          ))}
        </div>


      </div>
    )
  }
}

export default BookCard
