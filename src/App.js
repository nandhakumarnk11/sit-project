import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Reg from './Reg';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div >
         <BrowserRouter>
         <Routes>
         
         <Route exact path="/login" Component={Login}></Route>
         <Route exact path="/" Component={Dashboard}></Route>
         <Route exact path="/reg" Component={Reg}></Route>
         </Routes>
       
         </BrowserRouter>
    </div>
  );
}

export default App;
