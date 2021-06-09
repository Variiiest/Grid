import axios from 'axios'
import React, { Component } from 'react'
import Footer from '../components/Bars/Footer'
import Navbar from '../components/Bars/Navbar'
import Gridfour from '../components/Cards/Gridfour'
import GridFourSec from '../components/Cards/GridFourSec'
import SearchCard from '../components/Cards/SearchCard'



export class Home extends Component {
      
    componentDidMount(){
        const config= {
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token')
            }

        };
    
      axios.get('/v1/user', config).then(
        res=> {
          console.log(res);
        },
        err =>{
          console.log(err)
        }
      )
    }

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
