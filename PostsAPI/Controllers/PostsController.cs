using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PostsAPI.Data;
using PostsAPI.Models;

namespace PostsAPI.Controllers
{
    [Route("api/[controller]")] // Ruta base para las peticiones (api/posts)
    [ApiController]
    public class PostsController(PostsContext context) : ControllerBase
    {
        private readonly PostsContext _context = context;

        [HttpGet] // Método para peticiones GET
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts() // Devuelve todos los posts de la base de datos
        {
            return await _context.Posts.ToListAsync();
        }

        [HttpPost] // Método para peticiones POST
        public async Task<ActionResult<Post>> PostPost(Post post) // Crea un nuevo post
        {
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPosts), new { id = post.id }, post); // Retorna el nuevo post creado
        }

        [HttpDelete("{id}")] // Método para peticiones DELETE (api/posts/{id})
        public async Task<ActionResult<Post>> DeletePost(int id) // Borra un post específico con el ID del post
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound(); // Si no encuentra el post retorna 404
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();
            return post; //Si lo encuentra, lo elimina y retorna
        }
    }
}
