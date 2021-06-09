import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import GroceryDetail from './pages/GroceryDetail';
import Dashboard from './components/dashboard/dashboard';
import HospitalDetail from './pages/HospitalDetail';
import LoginUser from './components/Auth/LoginUser';
import DashDoctor from './components/dashboard/DashDoctor';
import Governent from './components/government/Governent';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Grocery from './pages/Grocery';
import Doctors from './pages/Doctors';


function App() {
  return (
    <div className="App">
      <Router>
     
      <Route exact path="/">
        <Home/>

      </Route>
      <Route path="/hospitals">
        <Lab/>
      </Route>
          
      <Route path="/groceries">
        <Grocery/>
      </Route>
      <Route path="/groceriesdetail">
        <GroceryDetail/>
      </Route>


      
      <Route path="/hospitaldetail">
        <GroceryDetail/>
      </Route>
      <Route path="/doctors">
        <Doctors/>
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
      </Router>
    

    </div>
  );
}

export default App;


