import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Bars/Navbar';
import Footer from './components/Bars/Footer';
import HomePage from './pages/HomePage';
import HospitalMain from './pages/HospitalMain';
import GroceryPage from './pages/GroceryPage';
import GroceryDetail from './pages/GroceryDetail';
import DoctorPage from './pages/DoctorPage';
import Dashboard from './components/dashboard/dashboard';
import AuthPage from './pages/AuthPage';


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
        <DoctorPage/>
      </Route>

      <Route path="/login">
        <AuthPage/>
      </Route>
      
      <Route path="/dashboard">
        <Dashboard/>
      </Route>

      <Footer/>
      </Router>
    

    </div>
  );
}

export default App;
