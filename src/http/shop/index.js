import axios from './axios'
import config from './config'
import contactHttp from '../../utils/contactHttp'
export default contactHttp(axios,config)