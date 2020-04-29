import axios from 'axios'
export const getProjects = async (url) => {
    try {
        const response = await axios.get(`${url}/projects`)
        const projects = await response.data
        return projects
    } catch (e) {
        throw e
    }
}