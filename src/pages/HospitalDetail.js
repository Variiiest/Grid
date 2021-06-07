import React, { Component } from 'react'
import TabsHospitals from '../components/Auth/TabHospitals'
import ProfileCard from '../components/dashboard/ProfileCard'

export class HospitalDetail extends Component {
    render() {
        return (
            <div className="max-w-7xl mx-auto">
               <ProfileCard/>
               <TabsHospitals/>
            </div>
        )
    }
}

export default HospitalDetail
