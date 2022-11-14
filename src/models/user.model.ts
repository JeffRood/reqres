import { DataTypes, Optional } from 'sequelize'
import sequelizeConnection  from '../config/sequielizeConfig'

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date; 
}

export interface UserInput extends Optional<User, 'id' | 'email'> { }
export interface UserOutput extends Required<User> { }

// export  class UserModel extends Model<User, UserInput> implements User {
//     public id!: number;
//     public email!: string;
//     public first_name!: string;
//     public last_name!: string;
//     public avatar!: string;
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
//     public readonly deletedAt!: Date;
// }

const user = sequelizeConnection.define('users',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: true,
    },
    first_name: {
        type: new DataTypes.STRING(128),
        allowNull: true,
    },
    last_name: {
        type: new DataTypes.STRING(128),
        allowNull: true,
    },
    avatar: {
        type: new DataTypes.STRING(128),
        allowNull: true,
    },
    createdAt:{
        type: new DataTypes.DATE
    },
    updatedAt:{
        type: new DataTypes.DATE
    }
})
user.sync()
export default user
