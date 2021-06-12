import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React, { Component } from 'react'
import Lab from './pages/Lab';
import Grocery from './pages/Grocery';
import Doctors from './pages/Doctors';
import SuspenseTheme from './themes/SuspenseTheme';
import axios from 'axios';
import Profile from './pages/Profile';
import Orders from './pages/OrderPage';
import Governent from './components/government/Governent';
import AppoinmentTable from './pages/AppoinmentTable';


const GroceryDetail = lazy(() => import('./pages/GroceryDetail'))
const Home = lazy(() => import('./pages/Home'))
const HospitalDetail = lazy(() => import('./pages/HospitalDetail'))
const LoginUser = lazy(() => import('./components/Auth/LoginUser'))

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "",
      login: false
    }
  }

  componentDidMount() {
    axios.get('/v1/user/').then(
      res => {
        console.log(res.data.payload)
        console.log("success from frontend")
      })
      .catch(err => {
        if (err.response) {
          console.log("This is backend error")
        }
      })
  }


  render() {
    return (
      <div className="App">
        <Suspense fallback={<SuspenseTheme />}>
          <Router>

            <Route exact path="/">
              <Home user={this.state.user} />

            </Route>
            <Route path="/hospitals">
              <Lab name="Labs" detail="You can search here about the labs available for tests" />
            </Route>

            <Route path="/groceries">
              <Grocery name="Groceries" detail="You can search about groceries here medicines or other essentials." />
            </Route>
            <Route path="/groceriesdetail">
              <GroceryDetail />
            </Route>



            <Route path="/hospitaldetail">
              <GroceryDetail />
            </Route>
            <Route path="/doctors">
              <Doctors name="Doctors" detail="Here you can search about the doctors for a particular disease" />
            </Route>


            <Route path="/login">
              <LoginUser />
            </Route>

            <Route path="/government">
              <Governent />
            </Route>










            {/* User Dashboard */}

        
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/appointments">
              < AppoinmentTable/>
            </Route>
            <Route path="/groceryorders">
              <Orders table_name="Grocery Orders" />
            </Route>
            <Route path="/tests">
              <Orders table_name="Lab Tests" />
            </Route>


            <Route path="/hosptialname">
              <HospitalDetail />
            </Route>



          </Router>
        </Suspense>


      </div>
    )
  }
}

export default App


