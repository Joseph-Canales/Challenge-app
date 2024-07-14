import React, { useState } from 'react';
import { createPost } from './postService'; // Función para crear un nuevo post
import './PostForm.css';

const PostForm = ({ onPostCreated }) => { // Componente para el formulario de crear posts
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errors, setErrors] = useState({ nombre: '', descripcion: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    let hasError = false;
    const newErrors = { nombre: '', descripcion: '' };

    // Validación para verificar si los campos están vacíos
    if (!nombre) {
      newErrors.nombre = 'Por favor ingresa un nombre.'; // Mensaje de error para el nombre
      hasError = true;
    }
    if (!descripcion) {
      newErrors.descripcion = 'Por favor ingresa una descripción.'; // Mensaje de error para la descripción
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return; // Salir de la función si hay errores
    }

    const newPost = { nombre, descripcion }; // Crea el objeto nuevo del post
    const response = await createPost(newPost); // Llama a la función para crear el post
    onPostCreated(response.data);
    setNombre('');
    setDescripcion('');
    setErrors({ nombre: '', descripcion: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="post-form"> {/* Formulario para crear un post */}
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errors.nombre && <p className="error-message">{errors.nombre}</p>} {/* Muestra mensaje de error si existe */}
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        {errors.descripcion && <p className="error-message">{errors.descripcion}</p>} {/* Muestra mensaje de error si existe */}
      </div>
      <button type="submit">Crear</button> {/* Botón para enviar el formulario */}
    </form>
  );
};

export default PostForm;