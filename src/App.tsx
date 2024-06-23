import './index.css'
import './App.css'
import PATH from "./constants/path"
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from "./pages/home/Home";
import Footer from './components/footer/Footer'
import Contact from './pages/contactus/ContactUs'
import Details from './pages/tour/tourdetails/Details'
import Booking from './pages/tour/booking/Booking'
import AuthContextProvider from './context/AuthContext'



function App() {
  

  return (
    <AuthContextProvider isLoggedInServer={false}>
    <BrowserRouter>
      <>  
       <Navbar /> 
        <Routes>
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.contactUs} element={<Contact/>}/>
        <Route path ={PATH.details} element={<Details/>}/>
        <Route path ={PATH.booking} element={<Booking/>}/>
        {/* <Route path={'/contactus'} element={<Contact/>}/> */}
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App
