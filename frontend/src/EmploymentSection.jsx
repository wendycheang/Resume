import "./css/employment.css"

const EmploymentSection = ({ company, employmentDate, position, roles, id }) => {

    return (
        <div className="employment">
            <h3>{position}</h3>
            <div className="subtitle">
                <p>{company}</p>
                <p>{employmentDate}</p>
            </div>
            {roles.map(({title, projects, id}) => (
                <ul key={id} className="employment_info" >
                    {title && <h4 className="employment_info__title">{title}</h4>}
                    {projects.map(
                        (project, index) =>
                            <li key={`project_${id}_${index}`}>
                                {project}</li>)}
                </ul>
            ))}
        </div>
    )
}

export default EmploymentSection;