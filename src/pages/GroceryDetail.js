import React, { Component } from 'react'
import Footer from '../components/Bars/Footer'
import Navbar from '../components/Bars/Navbar'
import DetailCard from '../components/Cards/DetailCard'

export class GroceryDetail extends Component {
    render() {
        return (
            <div className="bg-green-50">
                <Navbar />
                <DetailCard />
                <Footer />
            </div>
        )
    }
}

export default GroceryDetail
