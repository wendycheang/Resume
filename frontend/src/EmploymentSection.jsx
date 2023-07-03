import "./css/employment.css"

const EmploymentSection = ({ company, employmentDate, position, projects, id }) => {

    return (
        <div className="employment">
            <h3>{position}</h3>
            <div className="subtitle">
                <p>{company}</p>
                <p>{employmentDate}</p>
            </div>
            <ul class="employment_info">
                {projects.map(
                    (project, index) =>
                        <li key={`project_${id}_${index}`}>
                            {project}</li>)}
            </ul>
        </div>
    )
}

export default EmploymentSection;