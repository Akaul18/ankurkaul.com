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

export const getSkills = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/skills`)
        const skills = await response.data
        return skills
    } catch (e) {
        throw e
    }
}

export const sendEmail = async (state) => {
    try {
        const response = await axios.post(`${BASE_URL}/contact`, state)
        return response
    } catch (e) {
        return e.message
    }
}

export const sendInquiry = async (position, workType, email, description) => {
    try {
        const response = await axios.post(`${BASE_URL}/hireme`, {
            position, workType, email, description
        })
        return response
    } catch (e) {
        return e.message
    }
}