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
        id: "3",
        company: "ValoHealth",
        duration: "Summer 2020 - Summer 2023",
        position: "Staff Software Engineer",            
        projects: [
            "Set up Team City as a CI too",
            "Built Microservices and APIs using GRPC and Kotlin",
            "Introduced Docker and dockerized tech stack",
            "Researched and Designed AWS tech stack",
            "Collaborated in designing/building a chemist selection tool in React and integration with Dash python library",
            "Helped build a Python data analytics platform pipeline"
        ]
    
    },

    {
        id: "2",
        company: "Zmags Corporation",
        duration: "Spring 2018- Summer 2020",
        position: "Backend/Frontend Software Engineer",
        projects: [
                "Backend Software Engineer",
                "Led Java/Backbone project to speed up dashboard loading",
                "Collaborate on setting up Docker containers and microservices",
                "Frontend Software Developer",
                "Designed and built Mongo queries using the Javascript",
                "Built microsites, Matomo reporting and widgets in Backbone/Javascript",
                "Improve website load speed using Google Analytics, developed features for ADA compliance, helped design component library in React",
            ]
    },

    {
        id: "1",
        company: "TiVo Corporation",
        duration: "Fall 2013-Spring 2018",
        position: "Software Engineer",
        projects: [
                "Created new APIs and features for a data analytics platform",
                "Organized, optimized and built MySQL database data structures and queries",    
                "Led a project to design and create a framework for Excel file generation",
                "Designed, and implemented a framework for asynchronous job processing"
            ]
    },
]

export const skills_api = [
    "Javascript", "Java", "Python", "Typescipt", "Docker", "MySql", "Mongo", "Confluence", "Jira"
]

export const project_api = [
    {   id: 21123,
        name: "Resume",
        link:"https://github.com/wendycheang/Resume"
    }
]
