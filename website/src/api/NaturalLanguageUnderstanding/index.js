import axios from 'axios';

const API_ROOT = process.env.NODE_ENV === 'prod' ? '' : 'http://localhost:3001';

const Analyze = (text) => {
    return axios.post(API_ROOT + '/api/analyze', { text: text })
}

export default {
    Analyze
};
