export interface Role {
  title: string
  projects: string[]
}

export interface Employment {
  company: string
  duration: string
  position: string
  roles: Role[]
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
