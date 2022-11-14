import { Request, Response } from "express";
import { getUsersFromReqes, getUserFromReqes } from '../helpers/axios.helper';
// import { UserInput } from "../models/user.model";
import { create,bulkCreate } from '../services/user.service';
export const getUsersAndBulk = async (req: Request, res: Response) => {

    const users = await getUsersFromReqes();
    try {
        const response = await bulkCreate(users);
        res.json(response.data).status(response.status);
    } catch (error) {
        res.json(error).status(500);
    }
}


export const getUserAndCreate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const request = await getUserFromReqes(id);

    try {
        const response = await create(request);
        res.json(response.data).status(response.status);
    } catch (error) {
        res.json(error).status(500);
    }
}
