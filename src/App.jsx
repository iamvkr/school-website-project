import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import "./App.css"
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import AdmissionPage from './pages/AdmissionPage'
import FacultyPage from './pages/FacultyPage'
import AcademicsPage from './pages/AcademicsPage'
import StudentPage from './pages/StudentPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
      <div className='bg-[url("/stripbg_s.jpg")] bg-cover bg-no-repeat min-h-screen py-3'> {/* a background to whole screen */}
      <Navbar />
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/academics' element={<AcademicsPage />} />
      <Route path='/academics/:path' element={<AcademicsPage />} />
      <Route path='/admission' element={<AdmissionPage />} />
      <Route path='/faculty' element={<FacultyPage />} />
      <Route path='/students' element={<StudentPage />} />
      <Route path='/students/:path' element={<StudentPage />} />
      <Route path='/gallery' element={<GalleryPage />} />
      <Route path='/gallery/:path' element={<GalleryPage />} />
      <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer/>
      </div>
  )
}

export default App