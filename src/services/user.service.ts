import user, { UserInput} from '../models/user.model'
import Response from '../models/response.model'

export const create = async (payload: UserInput): Promise<any> => {
    const userObject = {id: payload.id, email: payload.email, first_name: payload.first_name, last_name: payload.last_name, avatar: payload.avatar}
    const exist = await getById(payload.id)
    if(exist) return new Response('User is ready',422).response()
    const data = await user.create(userObject,{validate:true});
    data.save()
    return new Response(payload,200).response();
    
}

export const bulkCreate = async (payload: UserInput[]): Promise<any> => {
    const users = await getAll()
    const newUsers = payload.filter((user) => !users.includes(user))
    if (newUsers.length <= 0) return new Response("Don't have new users", 422)
    await user.bulkCreate(newUsers, { validate: true });
    return new Response(payload,200);
}
export const getAll = async ():Promise<any> => {
    const result = await user.findAll()
    return result
}

export const getById = async (id: number | undefined):Promise<Boolean> => {

    const result = await user.findByPk(id)
    if (result?.dataValues <=0) return false
    return true
}

