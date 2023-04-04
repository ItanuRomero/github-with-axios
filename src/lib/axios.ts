import axios from "axios";

const GITHUB_API_BASE_URL = 'https://api.github.com'
const GITHUB_API_KEY = process.env.GITHUB_API_KEY

export const githubClient = axios.create({
    baseURL: GITHUB_API_BASE_URL,
    timeout: 1000,
    headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Bearer ${GITHUB_API_KEY}`
    }
})