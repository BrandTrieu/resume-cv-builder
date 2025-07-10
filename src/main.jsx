import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeaderForm, DisplayResume, EditorAndDisplay } from './components/header.jsx'
import ExperienceForm from './components/experience.jsx'
import EducationForm from './components/education.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className="heading">Resume Builder</h1>
    <EditorAndDisplay />
    
  </StrictMode>,
)
