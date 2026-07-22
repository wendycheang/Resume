import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { EMPTY_EMPLOYMENT, Role } from '../types'

export const EmploymentSlice = createSlice({
  name: 'employment',
  initialState: EMPTY_EMPLOYMENT,
  reducers: {
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload
    },
    setDuration: (state, action: PayloadAction<string>) => {
      state.duration = action.payload
    },
    setPosition: (state, action: PayloadAction<string>) => {
      state.position = action.payload
    },
    addRole: (state, action: PayloadAction<Role>) => {
      state.roles.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCompany, setDuration, setPosition, addRole } = EmploymentSlice.actions

export default EmploymentSlice.reducer
