import { nanoid } from "nanoid"

export const person_api = {
    name: "Wendy Cheang",
    address_one: "58 Sullivan St.,",
    address_two: "Charlestown, MA 02129",
    phone_number: "857-242-8535",
    email: "wendy.cheang.trinity@gmail.com",
    role: "Software Developer",
    education: {
        college_name: "Massachusetts Institute of Technology",
        degree: {
            major: "Bachelor in Computer Science",
            minor: "Minor in History",
            graduation: "September 2013"
        }
    }
}


export const employment_api = [
    {
        id: nanoid(),
        company: "ValoHealth",
        duration: "June 2020 - June 2023",
        position: "Staff Software Engineer",
        roles: [{
            id: nanoid(),
            projects: ["Led a Project to set up Team City as a Continous Integration tool to implement more efficent coding practices",
            "Primary Developer for Microservices and APIs using GRPC and Kotlin. Developed backend features for molecule selection and display",
            "Developed Javascript Vue Frontend PoC for Molecule Selection Tool.",
            "Introduced Docker and Standarized Docker tech stack to improve code efficiency for the team.",
            "Researched and Designed AWS tech stack. Led research and design in Elasticsearch, AWS EKS, Pulumi along with Dev Ops team.",
            "Designed/built a chemist selection tool in React. Integrated the tool with Dash python library and Java API Backend.",
            "Converted Jupyter Notebooks into a Python data analytics platform pipeline. Developed the platform in concert with data analytics team.",
            "Mentored junior developers in Python, Java and career development"
            ]
        }]

    },

    {
        id: nanoid(),
        company: "Zmags Corporation",
        duration: "May 2018 - June 2020",
        position: "Backend/Frontend Software Engineer",
        roles:  [{
            id: nanoid(),
            title: "Backend Software Engineer",
            projects: [
            "Led Java/Backbone project to speed up dashboard loading",
            "Set up Docker containers and microservices", ]},
            {
            id: nanoid(),
            title: "Frontend Software Engineer",
            projects: [
            "Designed and built Mongo queries using Javascript for database crawling",
            "Built microsites, Matomo reporting and widgets in Backbone/Javascript",
            "Improve website load speed using Google Analytics",
            "Developed features for ADA compliance and experience sharing in React",
            "Implemented a React Storybook environment"]
            }
        ]
    },

    {
        id: nanoid(),
        company: "TiVo Corporation",
        duration: "November 2013 - May 2018",
        position: "Software Engineer",
        roles: [{
            id: nanoid(),
            projects: ["Created new APIs and features for a data analytics platform",
            "Optimize MySQL database queries to reduce heap memory usage and speed up runtime",
            "Organized and designed MySQL and Redshift database data structures for generation of custome data APIS",
            "Led a project to design and create a framework for Excel file generation with the Java POI library as a customer feature request.",
            "Designed, and implemented a framework for asynchronous job processing"
        ]}]
    },
]

export const skills_api = [{
    id: nanoid(),
    category: "Programming Languages",
    skills: [
        {skill: "Java", rating: 4},
        {skill: "Javascript", rating: 3},
        {skill: "Typescript", rating: 3},
        {skill: "React", rating: 2},
        {skill: "Python", rating: 2},
        {skill: "Vue", rating: 1},
        {skill: "Kotlin", rating: 1},
    ]
},
{
    id: nanoid(),
    category: "Agile and Workflow",
    skills: [
        {skill: "Confluence", rating: 3},
        {skill: "Jira", rating: 3}
    ]
}, 
{
    id: nanoid(),
    category: "Other",
    skills: [
        {skill: "Mongo", rating: 3},
        {skill: "MySql", rating: 3},
        {skill: "Docker", rating: 4},
        {skill: "AWS", rating: 2}
    ]
}
]

export const project_api = [
    {
        id: nanoid(),
        name: "Resume",
        link: "https://github.com/wendycheang/Resume"
    }
]
