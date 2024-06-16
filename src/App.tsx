import './index.css'
import './App.css'
import PATH from "./constants/path"
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from "./pages/home/Home";
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <BrowserRouter>
      <>  
  
       <Navbar /> 
      
        <Routes>
        <Route path={PATH.home} element={<Home />} />
        </Routes>
        <Footer />
      
   
     
      </>
    </BrowserRouter>
  );
}

export default App