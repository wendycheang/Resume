import { Fragment } from 'react'
import './css/RoleEntry.css'

const RoleEntry = ({ role, index, editing, updateRole, setEdit, deleteRole}) => {


    return (<Fragment key={`role-${index}`}>
            <div></div>
            <div className="role-entry">
              {role.title}
              <div className='project-section'>
                {role.projects.map((project, pindex) => {
                  console.log(role.projects)
                  return (
                    <div key={`project-${index}-${pindex}`}>
                      {project}
                    </div>
                  )
                })}
                </div>
            </div>
          </Fragment>
          )
        }

export default RoleEntry;