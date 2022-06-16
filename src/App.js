import { Routes, Route } from 'react-router-dom'

import Navbar from "./Components/Navbar"
import Dashboard from "./Pages/Dashboard.js"
import Profile from "./Pages/Profile.js"
import FAQ from "./Pages/FAQ.js"
import UploadPart from "./Pages/UploadPart.js"
import UploadDoc from "./Pages/UploadDoc.js"


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/UploadPart" element={<UploadPart />}/>
        <Route path="/UploadDoc" element={<UploadDoc />}/>
      </Routes>
    </div>
  )
}
export default App