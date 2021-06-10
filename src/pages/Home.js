import React, { Component } from 'react'
import Footer from '../components/Bars/Footer'
import Navbar from '../components/Bars/Navbar'
import Toppicks from '../components/Cards/Toppicks'
import SearchCard from '../components/Cards/SearchCard'



export class Home extends Component {
    
    render() {
        return (
            <div>

                <Navbar user={this.props.user}/>
                <SearchCard />
              <Toppicks/>
              <Toppicks/>
     
                <Footer />

            </div>
        )
    }
}

export default Home
