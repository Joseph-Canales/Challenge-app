import axios from 'axios';

const apiUrl = 'http://localhost:5132/api/posts'; // URL API

// Función para obtener todos los posts
export const getPosts = async () => {
  return await axios.get(apiUrl);
};

// Función para crear un nuevo post
export const createPost = async (post) => {
  return await axios.post(apiUrl, post);
};

// Función para eliminar un post con ID
export const deletePost = async (id) => {
  return await axios.delete(`${apiUrl}/${id}`);
};