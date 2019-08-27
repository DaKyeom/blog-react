import axios from 'axios';

export const writePost = ({ title, body }) => axios.post('/api/posts', { title, body });
export const readPost = (id) => axios.get(`/api/posts/${id}`);
