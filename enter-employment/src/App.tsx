import { useState } from 'react'
import RoleSection from './RoleSection'
import './css/index.css'
import ResumeDisplay from './ResumeDisplay'
import { useSelector, useDispatch } from 'react-redux'
import { type Employment } from './types'
import type { RootState } from './store/EmploymentStore'
import { setCompany, setDuration, setPosition } from './store/EmploymentSlice'

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

function App() {

  const employment = useSelector((state: RootState) => state.employment)
  const dispatch = useDispatch()

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>, formData: Employment) => {
    event.preventDefault();

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
              onChange={(e) => dispatch(setDuration(e.target.value))} />

            <label htmlFor="duration">Duration:</label>
            <input type="text"
              id="duration"
              name="duration"
              value={employment.duration}
              onChange={(e) => dispatch(setCompany(e.target.value))} />

            <label htmlFor="position">Position:</label>
            <input type="text"
              id="position"
              name="position"
              value={employment.position}
              onChange={(e) => dispatch(setPosition(e.target.value))} />
          </div>
          <RoleSection />
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
