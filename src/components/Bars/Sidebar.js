import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
    render() {
        return (
            <>
                  <div className="w-64 absolute lg:relative h-screen flex-col justify-between hidden lg:flex pb-12">
                        <div className="px-12">
                            <ul className="mt-6">
                                <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <Link to="appointments">
                                        <span className="text-sm">Appointments</span>
                                        </Link>
                                    </div>
                                </li>
                             
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <Link to="profile">
                                        <span className="text-sm">Settings</span></Link>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Terms</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

            </>
        )
    }
}

export default Sidebar
