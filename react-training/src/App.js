
import React, { useState } from 'react';
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './components/home';
import About from './components/About';
import Contact from './components/contact';
import Header from './components/header';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () =>{
  const [isUserLogin, setIsUserLogin] = useState(false);

  return (
    <div className="App">
      <Header />
     <main>
       <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path="/contact" element={ <Contact/> } />
          <Route path="/login" element={ <Login isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} /> } />
          {/* <Route path="/login"  render={(props) =>  isUserLogin ? 
                    (<Navigate to='/' {...props} />) : 
                    (<Login {...props} />)} /> */}
       </Routes>
     </main>
    </div>
  );
}

export default App;