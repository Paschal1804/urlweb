import React from "react"
import Home from "./pages/Home"
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
// import Features from "./pages/Features";
import Feature from "./pages/Feature";
import FAQs from "./pages/FAQs";
import Analytics from "./pages/Analytics";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Fetch from "./pages/Fetch";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return(
 <>
<Router>
  <Routes>
 <Route index element={<Home />} />
  <Route path='login' element={<Login />} />
  <Route path='*' element={<Notfound />} />
  <Route path='features' element={<Feature />} />
   <Route path='faqs' element={<FAQs />} />
    <Route path='analytics' element={<Analytics />} />
     <Route path='contacts' element={<Contact />} />
     <Route path='register' element={<Register />} />
      <Route path='fetch' element={<Fetch />} />

  </Routes>
</Router>

 </>
  )
}

export default App
