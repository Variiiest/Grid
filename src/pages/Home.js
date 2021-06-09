import React, { Component } from 'react'
import Footer from '../components/Bars/Footer'
import Navbar from '../components/Bars/Navbar'
import Gridfour from '../components/Cards/Gridfour'
import GridFourSec from '../components/Cards/GridFourSec'
import SearchCard from '../components/Cards/SearchCard'



export class Home extends Component {
    render() {
        return (
            <div>
                
                <Navbar />
                <SearchCard />
                <Gridfour />
                <GridFourSec />
                <Footer />

            </div>
        )
    }
}

export default Home
