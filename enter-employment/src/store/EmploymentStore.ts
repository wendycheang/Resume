import { configureStore } from '@reduxjs/toolkit'
import employmentReducer from './EmploymentSlice'

const EmploymentStore = configureStore({
  reducer: {
    employment: employmentReducer
  },
})

export type RootState = ReturnType<typeof EmploymentStore.getState>
export type AppDispatch = typeof EmploymentStore.dispatch

export default EmploymentStore
