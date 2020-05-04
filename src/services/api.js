import axios from 'axios'
import { BASE_URL } from '../config/apiConfig';
export const getProjects = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/projects`)
        const projects = await response.data
        return projects
    } catch (e) {
        throw e
    }
}

// export const sendEmail = async (name, company, email, contactNumber, message) => {
export const sendEmail = async (state) => {
    try {
        // const response = await axios.post(`${BASE_URL}/contact`, {
        //     name, company, email, contactNumber, message
        // })
        const response = await axios.post(`${BASE_URL}/contact`, state)
        return response
    } catch (e) {
        return e.message
    }
}