import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtecedRoute from './ProtectedRoute';
/* Pages */
import Home from './pages/Home';
import SignUp from './pages/sign/SignUp';
import SignIn from './pages/sign/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route element={<ProtecedRoute />}>
            <Route path='/home' element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
