import { Fragment } from 'react'
import './css/RoleEntry.css'
import type { Role } from './types'

interface RoleEntryProps {
    role: Role
    index: number
}

const RoleEntry = ({ role, index }: RoleEntryProps) => {


    return (<Fragment key={`role-${index}`}>
            <div></div>
            <div className="role-entry">
              {role.title}
              <div className='project-section'>
                {role.projects.map((project, pindex) => {
                  console.log(role)
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
