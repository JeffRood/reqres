import { Sequelize } from 'sequelize'

const sequelizeConnection = new Sequelize({
  storage: 'test-db.db',
  dialect: 'sqlite'
  });

export const connection = async function(){
  try {
    await sequelizeConnection.authenticate();
    } catch (error) {
    }
}
export default sequelizeConnection;
