import { configureStore } from '@reduxjs/toolkit'

const ResumeStore = configureStore({
  reducer: {
    
  },
})

export type RootState = ReturnType<typeof ResumeStore.getState>
export type AppDispatch = typeof ResumeStore.dispatch

export default ResumeStore
