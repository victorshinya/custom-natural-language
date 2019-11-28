import axios from 'axios';

const Analyze = (text) => {
    return axios.post('/api/analyze', { text: text })
}

export default {
    Analyze
};
