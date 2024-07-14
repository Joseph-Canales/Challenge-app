import React, { useState, useEffect } from 'react';
import PostForm from './PostForm'; // Componente para crear nuevos posts
import PostList from './PostList'; // Componente que muestra la lista de posts
import PostFilter from './PostFilter'; // Componente para filtrar los posts
import { getPosts } from './postService'; // Función para obtener los posts
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchPosts = async () => { // Función para obtener los posts
      const response = await getPosts();
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([...posts, newPost]); // Agrega el nuevo post al estado
  };

  const handlePostDeleted = (id) => {
    setPosts(posts.filter((post) => post.id !== id)); // Filtra el post a eliminar
  };

  // Filtra los posts según el filtro ingresado, buscando desde el inicio de la palabra
  const filteredPosts = posts.filter((post) =>
    post.nombre.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div className="app-container"> {/* Contenedor principal de la app */}
      <PostFilter filter={filter} onFilterChange={setFilter} /> {/* Componente para filtrar */}
      <PostList posts={filteredPosts} onPostDeleted={handlePostDeleted} /> {/* Componente que muestra la lista filtrada */}
      <PostForm onPostCreated={handlePostCreated} /> {/* Componente para crear un nuevo post */}
    </div>
  );
};

export default App;