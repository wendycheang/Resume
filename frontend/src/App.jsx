import { useState } from 'react'
import './css/App.css'
import Contact from './Contact'
import Education from './Education'
import Skills from './Skills'
import EmploymentSection from './EmploymentSection'


import { person_api, employment_api, skills_api } from "./wendy_api"

function App() {
  const { name, address, phone_number, email, education, role } = person_api
  const { college_name, degree } = education
  const { major, minor, graduation } = degree

  return (
    <div>
      <header>
        <div className='header_container'>
          <h1>{name}</h1>
          <h2>{role}</h2>
        </div>
      </header>
      <main className="resume container">
        <aside className='sidebar'>
            <Contact
              name={name}
              address={address}
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

        <section className='employment_section'>
          <h2>Employment Highlights</h2>
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
      </main>
    </div>
  )
}

export default App
