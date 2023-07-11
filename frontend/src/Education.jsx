import './css/education.css'


const Education = ({ collegeName, major, minor, graduation}) => {

    return (
        <div className="education">
            <h2 className="sidebar__title">Education</h2>
            <h4 className="school">{collegeName}</h4>
            <p>{`Graduation: ${graduation}`}</p>
            <p>{major}</p>
            <p>{`-${minor}`}</p>
        </div>
    )
}

export default Education;

