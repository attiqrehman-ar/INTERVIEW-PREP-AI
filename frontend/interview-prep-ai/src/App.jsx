
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import LandingPage from "./pages/LandinPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={< LandingPage />} />
          <Route path='/Login' element={< Login />} />
          <Route path='/SignUp' element={< Signup />} />
          <Route path='/dashboard' element={< Dashboard />} />
          <Route path='/interview-prep/:sessionId' element={< InterviewPrep />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App