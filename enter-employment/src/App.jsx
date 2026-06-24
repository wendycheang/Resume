import { useEffect, useState } from 'react'
import { Fragment } from 'react';
import './index.css'
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

function App() {

  const [employment, setEmployment] = useState({
    company: '',
    duration: '',
    position: '',
    roles: []
  })
  const [entry, setEntry] = useState("")
  const [editID, setEditID] = useState(-1)


  const addRole = (role) => {
    setEmployment({
      ...employment,
      roles: [...employment.roles, role]
    })
  }

  const deleteRole = (index) => {
    setEmployment({
      ...employment,
      roles: employment.roles.filter((_, i) => i !== index)
    })
  }

  const editRole = (newValue, currentIndex) => {
    setEmployment({
      ...employment,
      roles: employment.roles.map((value, index) => index === currentIndex ? newValue : value)
    })
  }

  return (
    <div className="enter-employment">
      <form className="submit-form" /* action="/enter-employment" method="post" */>
        <label htmlFor="company">Company:</label>
        <input type="text"
          id="company"
          name="company"
          value={employment.company}
          onChange={(e) => setEmployment({
            ...employment,
            company: e.target.value
          })} />

        <label htmlFor="duration">Duration:</label>
        <input type="text"
          id="duration"
          name="duration"
          value={employment.duration}
          onChange={(e) => setEmployment({
            ...employment,
            duration: e.target.value
          })} />

        <label htmlFor="position">Position:</label>
        <input type="text"
          id="position"
          name="position"
          value={employment.position}
          onChange={(e) => setEmployment({
            ...employment,
            position: e.target.value
          })} />

        <label htmlFor="roles">Roles:</label>
        <input
          type="text"
          id="roles"
          name="roles"
          value={entry}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              addRole(entry)
              setEntry("")
              setEditID(-1)
            }
          }}
          onChange={(e) => {
            e.preventDefault()
            setEntry(e.target.value)
          }} />

        {employment.roles.map((role, index) => {
          return (<Fragment key={`role-${index}`}>
            <div></div>
            <div className="role-entry">
              {index === editID ? <input type="text"
                id="role"
                name="role"
                value={role}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    setEditID(-1)
                  }
                }}
                onChange={(e) => setEmployment({
                  ...employment,
                  roles: employment.roles.map((r, i) => {
                    return i === index ? e.target.value : r
                  })
                })} /> :
                <button onClick={(e) => {
                  e.preventDefault()
                  setEditID(index)
                }}>{role}</button>
              }
              <button onClick={(e) => {
                e.preventDefault()
                deleteRole(index)
                setEditID(-1)
              }}>
                X
              </button>
            </div>
          </Fragment>
          )
        })}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
