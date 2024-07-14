import React from 'react';
import { deletePost } from './postService'; // Función para eliminar posts
import './PostList.css';

const PostList = ({ posts, onPostDeleted }) => { // Componente que muestra la lista de posts
  const handleDelete = async (id) => {
    await deletePost(id);
    onPostDeleted(id);
  };

  return (
    <table> {/* Tabla para mostrar posts */}
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={post.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}> {/* Alterna clases para el estilo */}
            <td>{post.nombre}</td>
            <td>{post.descripcion}</td>
            <td>
              <span className="text-button" onClick={() => handleDelete(post.id)}>Eliminar</span> {/* Texto que actúa como botón para eliminar el post*/}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostList;