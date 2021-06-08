import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Bars/Navbar';
import Footer from './components/Bars/Footer';
import HomePage from './pages/HomePage';
import HospitalMain from './pages/HospitalMain';
import GroceryPage from './pages/GroceryPage';
import GroceryDetail from './pages/GroceryDetail';
import Dashboard from './components/dashboard/dashboard';
import HospitalDetail from './pages/HospitalDetail';
import LoginUser from './components/Auth/LoginUser';
import DashDoctor from './components/dashboard/DashDoctor';
import Governent from './components/government/Governent';
import DoctorMain from './pages/DoctorMain';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
    
      <Route exact path="/">
        <HomePage/>

      </Route>
      <Route path="/hospitals">
        <HospitalMain/>
      </Route>
          
      <Route path="/groceries">
        <GroceryPage/>
      </Route>
      <Route path="/groceriesdetail">
        <GroceryDetail/>
      </Route>
      <Route path="/hospitaldetail">
        <GroceryDetail/>
      </Route>
      <Route path="/doctors">
        <DoctorMain/>
      </Route>


      <Route path="/login">
        <LoginUser/>
      </Route>
      
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/dashboarddoctor">
        <DashDoctor/>
      </Route>
      <Route path="/government">
        <Governent/>
      </Route>

      <Route path="/hosptialname">
        <HospitalDetail/>
      </Route>

      <Footer/>
      </Router>
    

    </div>
  );
}

export default App;
