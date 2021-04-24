import axios from 'axios';
import config from '../../enviroment';

const url = config.API_BASE_URL;

export default class Services {
    constructor(uri) {
        this.baseURL = url;

        this.request = axios.create({
            baseURL: `${url}/${uri}`,
            headers: {
                'Content-Type': "application/json"
            }
        }); 
    }
}