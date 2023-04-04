import axios, { AxiosRequestConfig } from "axios";
import { githubClient } from "./axios";



interface GithubUser {
    login: string;
    bio: string;
    avatar_url: string
}

interface Issue {
    title: string;
    body: string;
}


export async function getUser(username: string): Promise<GithubUser> {
    const response = await githubClient.get<GithubUser>(`users/${username}`);
    return response.data;
}

export async function getIssues(): Promise<[]> {
    const response = await githubClient.get(
        `repos/ItanuRomero/github-with-axios/issues`
        );
    return response.data;
}

export async function postIssue({title, body}: Issue) {
    const response = githubClient.post(
        'repos/ItanuRomero/github-with-axios/issues',
        {title, body}
    );
    return response;
}