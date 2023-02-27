// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

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
              <Route path='/' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/home' element={<Home name={userName}/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
