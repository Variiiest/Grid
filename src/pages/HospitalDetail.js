import React, { Component } from 'react'
import TestTable from '../components/Auth/TestTable'
import ProfileCard from '../components/dashboard/ProfileCard'

export class HospitalDetail extends Component {
    render() {
        return (
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto">
               <ProfileCard/>
               <TestTable/>
               </div>
            </div>
        )
    }
}

export default HospitalDetail
