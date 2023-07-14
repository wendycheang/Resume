import { useState, useEffect } from 'react'
import './css/App.css'
import Contact from './Contact'
import Education from './Education'
import Skills from './Skills'
import EmploymentSection from './EmploymentSection'
import Project from './Project'

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

function App() {

  const [person, setPerson] = useState({
    name: "",
    addressOne: "",
    addressTwo: "",
    phoneNumber: "",
    email: "",
    role: "",
    education: {
      collegeName: "",
      degree: {
        major: "",
        minor: "",
        graduation: ""
      }
    }
  })


  const [skills, setSkills] = useState([])
  const [employment, setEmployment] = useState([])
  const [projects, setProjects] = useState([])


  useEffect(() => {
    const getAPI = async () => {
      const name = "Wendy Cheang"
      const response = await fetch(`${BASE_API_URL}/person/${name}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      });
      const data = await response.json();
      setPerson(data)
    }

    getAPI();
  }, [])

  
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch(`${BASE_API_URL}/skills`);
      const data = await response.json();
      setSkills(data)
    }

    getAPI();
  }, [])

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch(`${BASE_API_URL}/employment`);
      const data = await response.json();
      setEmployment(data)
    }

    getAPI();
  }, [])

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch(`${BASE_API_URL}/projects`);
      const data = await response.json();
      setProjects(data)
    }

    getAPI();
  }, [])


  const { name, addressOne, addressTwo, phoneNumber, email, role } = person
  const { collegeName, degree } = person.education
  const { major, minor, graduation } = degree

  return (
    <div className="resume">
      <header>
        <div className='header_container'>
          <div className='name'>
            <h1>{name}</h1>
            <h2>{role}</h2>
          </div>
          <Contact
            name={name}
            addressOne={addressOne}
            addressTwo={addressTwo}
            phoneNumber={phoneNumber}
            email={email}
          />
        </div>
      </header>
      <main className="body container">
        <aside className='sidebar'>
          <Education
            collegeName={collegeName}
            degree={degree}
            major={major}
            minor={minor}
            graduation={graduation}
          />

          <Project projects={projects} />

          <Skills
            skills={skills}
          />
        </aside>

        <div className='main_section'>
          <section>
            {employment.map((
              { company, duration, position, roles, id
              }) => <EmploymentSection
                key={id}
                company={company}
                employmentDate={duration}
                position={position}
                roles={roles}
                id={id}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
