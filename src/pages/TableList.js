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
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5"></td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">+2348106420637</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-100 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-100 text-blue-900 text-sm leading-5">September 12</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-100 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                </td>
              </tr>
              ))}
               
            </>
        )
    }
}

export default TableList
