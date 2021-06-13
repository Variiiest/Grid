import React, { Component } from 'react'

export class TableList extends Component {
    render() {
        return (
            <>
               {this.props.data.map((data,key)=>(<tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">{data.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100">
                  <div className="text-sm leading-5 text-blue-900">{data.doctor_name}</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">{data.price}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">{data.start_time}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100 text-blue-900 text-sm leading-5">{data.date_created}</td>
             
              </tr>
              ))}
               
            </>
        )
    }
}

export default TableList
