import "./css/project.css"
import ResumeQR from "./assets/resume_qr.png"

const Project = ({ projects }) => {

    return (
        <div className='project'>
            <h2 className="sidebar__title">Projects</h2>
            <div className="projects">
                {projects.map(({ id, name, link }) => (
                    <div key={`project_${id}`}>
                        <h4>{name}</h4>
                        <a href={link}>{link}</a>
                        <img className="qr_code" src={ResumeQR} alt="link"></img>
                    </div>
                ))
                }

            </div>
        </div>
    )
}

export default Project;