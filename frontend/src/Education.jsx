
const Education = ({ college_name, major, minor, graduation}) => {

    return (
        <div className="aside_container">
            <h2 className="sidebar__title">Education</h2>
            <p>{`Graduation: ${graduation}`}</p>
            <p>{college_name}</p>
            <p>{major}</p>
            <ul>
                <li>{minor}</li>
            </ul>
        </div>
    )
}

export default Education;

