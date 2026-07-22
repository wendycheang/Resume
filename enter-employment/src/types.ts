export interface Role {
  // Mongo-generated id; absent until the role has been persisted
  id?: string
  title: string
  projects: string[]
}

// Mirrors com.resume.resume.model.Employment (backend/resume)
export interface Employment {
  // Mongo-generated id; absent for a new employment entry that hasn't been saved yet
  id?: string
  company: string
  duration: string
  position: string
  roles: Role[]
  // Display order used to sort GET /employment results; defaults to 0 on the backend if omitted
  sort?: number
}

// A blank Employment, suitable for initializing form state
export const EMPTY_EMPLOYMENT: Employment = {
  company: '',
  duration: '',
  position: '',
  roles: [],
  sort: 0,
}

export interface Degree {
  major: string
  minor: string
  graduation: string
}

export interface Education {
  collegeName: string
  degree: Degree
}

export interface Person {
  name: string
  addressOne: string
  addressTwo: string
  phoneNumber: string
  email: string
  role: string
  education: Education
}
