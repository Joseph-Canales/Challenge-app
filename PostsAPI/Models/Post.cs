namespace PostsAPI.Models
{
    public class Post
    {
        public int id { get; set; } // ID del post
        public required string nombre { get; set; } // Nombre del post, es obligatorio
        public required string descripcion { get; set; } // Descripción del post, también obligatorio
    }
}
