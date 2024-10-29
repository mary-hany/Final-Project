import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import LogIn from './Pages/LogIn'
import Register from './Pages/Register'
export default function App() {
  return (
   
    <div className="col-12 App">
      
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/LogIn" element={<LogIn/>} />
          <Route path="/Register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>

    
  );
}

