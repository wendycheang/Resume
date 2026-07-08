import { Fragment } from 'react'

const RoleEntry = ({ role, index, editing, updateRole, setEdit, deleteRole}) => {

    return (<Fragment key={`role-${index}`}>
            <div></div>
            <div className="role-entry">
              {editing ? <input type="text"
                id="role"
                name="role"
                value={role}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    setEdit(-1)
                  }
                }}
                onChange={(e) => updateRole(e, index)} /> :
                <button className="role-button" onClick={(e) => {
                  e.preventDefault()
                  setEdit(index)
                }}>{role}</button>
              }
              <button className="square-button" onClick={(e) => {
                e.preventDefault()
                deleteRole(index)
                setEdit(-1)
              }}>
                X
              </button>
            </div>
          </Fragment>
          )
        }

export default RoleEntry;