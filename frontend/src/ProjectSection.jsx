import "./css/project.css"

const ProjectSection = ({ projects }) => {

    console.log(projects)

    return (
        <div className="project">
            {projects.map(({id, name, link}) => (
                <div key={`project_${id}`}>
                    <span className='project_name'>{`${name}: `}</span>
                    <a href={link}>{link}</a>
                </div>
            ))
        }
        </div>
    )
}

export default ProjectSection;