import './css/education.css'


const Education = ({ college_name, major, minor, graduation}) => {

    return (
        <div className="education">
            <h2 className="sidebar__title">Education</h2>
            <p className="school">{college_name}</p>
            <p>{`Graduation: ${graduation}`}</p>
            <p>{major}</p>
            <p>{`-${minor}`}</p>
        </div>
    )
}

export default Education;

