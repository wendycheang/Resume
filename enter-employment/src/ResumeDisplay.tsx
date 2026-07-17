import { useState, useEffect } from 'react'
import './css/ResumeDisplay.css'
import type { Person } from './types'

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

const ResumeDisplay = () => {

    const [person, setPerson] = useState<Person>({
        name: "",
        addressOne: "",
        addressTwo: "",
        phoneNumber: "",
        email: "",
        role: "",
        education: {
            collegeName: "",
            degree: {
                major: "",
                minor: "",
                graduation: ""
            }
        }
    })

    useEffect(() => {
        const getAPI = async () => {
            const name = "Wendy Cheang"
            const response = await fetch(`${BASE_API_URL}/person/${name}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            });
            const data = await response.json();
            setPerson(data)
        }

        getAPI();
    }, [])

    console.log(person)
    return (
        <></>
    )

}

export default ResumeDisplay;
