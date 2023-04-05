// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import Contact from './Components/Contact';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Project from './Components/Project';
import MapView from './Components/MapView';
import Default from './Components/Default';
import Admin from './Components/Admin';

function App() {
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => { 
      if(user){
        setUserName(user.displayName)
      }
      else {
        setUserName("");
      }
      // console.log(user);
    });
  }, []);

  return (
    <div className="app">
      <Router>
          <Routes>
              <Route path='/' element={<Default/>} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/home' element={<Home name={userName}/>} />
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/project' element={<Project name={userName}/>}/>
              <Route path='/mapview' element={<MapView/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
