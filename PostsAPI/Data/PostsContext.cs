using Microsoft.EntityFrameworkCore;
using PostsAPI.Models;

namespace PostsAPI.Data
{
    public class PostsContext(DbContextOptions<PostsContext> options) : DbContext(options)
    {
        public DbSet<Post> Posts { get; set; }
    }
}
