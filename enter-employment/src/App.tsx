import { useState } from 'react'
import RoleSection from './RoleSection'
import './css/index.css'
import ResumeDisplay from './ResumeDisplay'
import type { Employment } from './types'

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

function App() {

  const [employment, setEmployment] = useState<Employment>({
    company: '',
    duration: '',
    position: '',
    roles: []
  })

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>, formData: Employment) => {
    event.preventDefault(); // Prevents the browser from reloading the page

    try {
      const response = await fetch(`${BASE_API_URL}/employment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className="enter-employment">
        <form>
          <div className='submit-form'>
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
          </div>
          <RoleSection employment={employment} setEmployment={setEmployment} />
          <button type="submit" onClick={(event) =>
            handleSubmit(event, employment)
          }>Submit</button>
        </form>
      </div>
      <div className="display-resume">
          <ResumeDisplay></ResumeDisplay>
      </div>
    </div>
  )
}

export default App
