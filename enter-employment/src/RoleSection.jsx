import RoleEntry from './RoleEntry'
import { useState, Fragment } from 'react'
import './css/RoleSection.css'

const RoleSection = ({ employment, setEmployment }) => {

    const [entry, setEntry] = useState("")
    const [editID, setEditID] = useState(-1)

    const [currentRole, setCurrentRole] = useState({
        title: "",
        projects: [],
    })
    const [currentProject, setCurrentProject] = useState("")

    const updateProjects = (e) => {
        e.preventDefault()

        const newProjects = JSON.parse(JSON.stringify(currentRole.projects))
        newProjects[currentRole.projects.length-1] = currentProject
        setCurrentRole({
            ...currentRole,
            projects: newProjects
        })
        setCurrentProject("")
    }

    const addRole = (e, entry) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setEmployment({
                ...employment,
                roles: [...employment.roles, entry]
            })
            setEntry("")
            setEditID(-1)
        }
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

    const updateRole = (e, index) => setEmployment({
        ...employment,
        roles: employment.roles.map((r, i) => {
            return i === index ? e.target.value : r
        })
    })

    return (
        <>
            <label htmlFor="roles">Roles:</label>
            <div></div>
            <div>
            <div className="role-section">
                <label >Title:</label>
                <input
                    type="text"
                    id="role-title"
                    name="role-title"
                    value={currentRole.title}
                    onChange={(e) => {
                        e.preventDefault()
                        setCurrentRole({
                            ...currentRole,
                            title: e.target.value
                        })
                    }} />

                <label>Projects:</label>
                <input
                    type="text"
                    id="projects"
                    name="projects"
                    value={currentProject}
                    onChange={(e) => {
                        e.preventDefault()
                        setCurrentProject(e.target.value)
                    }} />
            </div>
             <button className="project-submit-button" onClick={updateProjects}>Enter Project</button>
            </div>
            {employment.roles.map((role, index) => {
                return <RoleEntry
                    role={role}
                    index={index}
                    editing={index === editID}
                    updateRole={updateRole}
                    deleteRole={deleteRole}
                    setEdit={setEditID} />
            })}

        </>)

}

export default RoleSection;