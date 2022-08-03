import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <>
        <Router>
          <Routes>
            {/* <Route path='/' element={<Navbar/>}/>
            <Route path='/hero' element={<Hero/>}/> */}
            <Route path='/' element={<Home/>}/> 
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
