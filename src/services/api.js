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

export const sendEmail = async (name, company, email, contactNumber, message) => {
    try {
        const response = await axios.post(`${BASE_URL}/contact`, {
            name, company, email, contactNumber, message
        })
        return response
    } catch (e) {
        return e.message
    }
}