import axios from "axios";
import { config } from '../config/config';
import { User } from "../models/user.model";

const { reqresUrl } = config;

const client = axios.create({
    baseURL: reqresUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getUsersFromReqes = async (): Promise<User[]> => {
    const response = await client.get('/users');
    console.log(response.data)
    return response.data.data;
}

export const getUserFromReqes = async (id: string): Promise<User> => {
    const response = await client.get(`/users/${id}`);
   
    return response.data.data;
}
