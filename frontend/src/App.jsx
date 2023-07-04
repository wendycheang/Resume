import { useState } from 'react'
import './css/App.css'
import Contact from './Contact'
import Education from './Education'
import Skills from './Skills'
import EmploymentSection from './EmploymentSection'
import ProjectSection from './ProjectSection'

import { person_api, employment_api, skills_api, project_api } from "./wendy_api"

function App() {
  const { name, address_one, address_two, phone_number, email, education, role } = person_api
  const { college_name, degree } = education
  const { major, minor, graduation } = degree

  return (
    <div className="resume">
      <header>
        <div className='header_container'>
          <h1>{name}</h1>
          <h2>{role}</h2>
        </div>
      </header>
      <main className="body container">
        <aside className='sidebar'>
            <Contact
              name={name}
              address_one={address_one}
              address_two={address_two}
              phone_number={phone_number}
              email={email}
            />

            <Education
              college_name={college_name}
              degree={degree}
              major={major}
              minor={minor}
              graduation={graduation}
            />

            <Skills
              skills={skills_api}
            />
        </aside>

        <div className='main_section'>
        <section className='employment_section'>
          {employment_api.map((
            { company, duration, position, projects, id
            }) => <EmploymentSection
              key={id}
              company={company}
              employmentDate={duration}
              position={position}
              projects={projects}
              id={id}
            />
          )}
        </section>

        <section className='project_section'>
          <h2>Projects</h2>
          <ProjectSection projects={project_api}/>
        </section>

        </div>
      </main>
    </div>
  )
}

export default App
