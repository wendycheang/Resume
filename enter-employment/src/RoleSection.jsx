import RoleEntry from './RoleEntry'
import { useState, Fragment } from 'react'
import './css/RoleSection.css'

const RoleSection = ({ employment, setEmployment }) => {

    const [editID, setEditID] = useState(-1)

    const [currentRole, setCurrentRole] = useState({
        title: "",
        projects: [],
    })
    const [currentProject, setCurrentProject] = useState("")

    const updateProjects = (e) => {
        e.preventDefault()

        setCurrentRole({
            ...currentRole,
            projects: [...currentRole.projects, currentProject]
        })
        setCurrentProject("")
    }

    const addRole = (e, entry) => {
        e.preventDefault()
        setEmployment({
            ...employment,
            roles: [...employment.roles, currentRole]
        })
    //    setEntry("")
   //     setEdit(-1)
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
            <div htmlFor="roles">Roles:</div>
            <div></div>
            <div>
                <div className="role-section">
                    <div>Title:</div>
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

                    <div>Projects:</div>
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
            <button className="project-submit-button" onClick={addRole}>Add Role</button>
            {employment.roles.map((role, index) =>
                <RoleEntry
                    role={role}
                    index={index}
                    editing={index === editID}
                    updateRole={updateRole}
                    deleteRole={deleteRole}
                    setEdit={setEditID} />
            )}

        </>)

}

export default RoleSection;