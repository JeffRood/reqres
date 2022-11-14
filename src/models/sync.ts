
import user from './user.model';
const isDev = process.env.NODE_ENV === 'development'

const sync = () => {
  user.sync({ alter: isDev })
}
export default sync; 