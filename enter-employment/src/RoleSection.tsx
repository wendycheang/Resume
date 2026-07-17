import RoleEntry from './RoleEntry'
import { useState } from 'react'
import './css/RoleSection.css'
import type { Employment, Role } from './types'

interface RoleSectionProps {
    employment: Employment
    setEmployment: React.Dispatch<React.SetStateAction<Employment>>
}

const RoleSection = ({ employment, setEmployment }: RoleSectionProps) => {

    const [currentRole, setCurrentRole] = useState<Role>({
        title: "",
        projects: [],
    })
    const [currentProject, setCurrentProject] = useState("")

    const updateProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        setCurrentRole({
            ...currentRole,
            projects: [...currentRole.projects, currentProject]
        })
        setCurrentProject("")
    }

    const addRole = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setEmployment({
            ...employment,
            roles: [...employment.roles, currentRole]
        })
    }


    const deleteRole = (index: number) => {
        setEmployment({
            ...employment,
            roles: employment.roles.filter((_, i) => i !== index)
        })
    }

    const editRole = (newValue: Role, currentIndex: number) => {
        setEmployment({
            ...employment,
            roles: employment.roles.map((value, index) => index === currentIndex ? newValue : value)
        })
    }

    const updateRole = (e: React.ChangeEvent<HTMLInputElement>, index: number) => setEmployment({
        ...employment,
        roles: employment.roles.map((r, i) => {
            return i === index ? { ...r, title: e.target.value } : r
        })
    })

    return (
        <>
            <div>Roles:</div>
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
                            setCurrentProject(e.target.value)
                        }} />
                </div>
                <button className="project-submit-button" onClick={updateProjects}>Enter Project</button>
            </div>
            <button className="project-submit-button" onClick={addRole}>Add Role</button>
        </>)

}

export default RoleSection;
