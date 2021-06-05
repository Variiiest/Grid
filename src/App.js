import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Bars/Navbar';
import SearchCard from './components/Cards/SearchCard';
import Gridfour from './components/Cards/Gridfour';
import GridFourSec from './components/Cards/GridFourSec';
import Footer from './components/Bars/Footer';
import Hospitalcard from './components/Cards/Hospitalcard';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <SearchCard/>
        <Gridfour />
        <GridFourSec/>
        <Footer/>
      <Route exact path="/hospitals">
        <Hospitalcard/>

      </Route>
     
      </Router>
    

    </div>
  );
}

export default App;
