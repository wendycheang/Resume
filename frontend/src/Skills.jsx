
import './css/skills.css'

const Skills = ({ skills }) => {
    
    return (
        <div className="skills_section">
            <h2 className="sidebar__title">Skills</h2>
            <div className="skills">  
            {skills.map(({category, skills, id}) => (
                <div key={id} className='skill_category'>
                    <h4>{category}</h4>
                    {skills.map((skill, i) => (
                        <div>
                            <p key={`skills_${id}_${i}`}>{skill}</p>
                        </div>
                    ))}
                </div>
            )
            )}
            </div>
        </div>
    )
}

export default Skills;