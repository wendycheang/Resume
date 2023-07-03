
import './css/skills.css'

const Skills = ({ skills }) => {
    return (
        <div className="skills_section">
            <h2 className="sidebar__title">Skills</h2>
            <div className="skills">  
            {skills.map((skill, index) => 
              <p key={`skill_${index}`}>{skill}</p>
            )}
            </div>
        </div>
    )
}

export default Skills;