import React, { useState } from 'react';
import './PostFilter.css';

const PostFilter = ({ onFilterChange }) => { // Componente para filtrar posts
  const [filter, setFilter] = useState('');

  const handleSearch = () => {
    onFilterChange(filter); // Llama función de cambio de filtro cuando buscamos
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filtro de nombre"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={handleSearch}> {/* Botón para buscar */}
        Buscar
      </button>
    </div>
  );
};

export default PostFilter;