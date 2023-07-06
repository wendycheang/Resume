import './css/skills.css'

const times = (length, fn) => Array.from({ length }, (_, i) => fn(i));

const Skills = ({ skills }) => {
    return (
        <div className="skills_section">
            <h2 className="sidebar__title">Skills</h2>
            <div className="skills">  
            {skills.map(({category, skills, id}) => (
                <div key={id} className='skill_category'>
                    <h4 className="category">{category}</h4>
                    {skills.map(({skill, rating}, i) => (
                        <div className="skill" key={`${skill}`}>
                            <p key={`${skill}_${i}`}>{skill}</p>
                            <div className="ratings">
                                {times(rating, ctr => <div className="rating" key={`${skill}_${i}_${ctr}`}></div>)}
                            </div>
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