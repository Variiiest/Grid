import axios from 'axios'
import React, { Component } from 'react'

export class AppoinmentTable extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            user:"",
            address:"",
        }
    }

    componentDidMount() {
        axios.get('/v1/user/').then(
            res => {
                console.log(res.data.payload)
                this.setState({user: res.data.payload})
                this.setState({address: res.data.payload.address})
            })
            .catch(err => {
                if (err.response) {
                    console.log("User Not Found")
                }
            })
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default AppoinmentTable
