using Microsoft.EntityFrameworkCore;
using PostsAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Configurar el contexto de la base de datos con PostgreSQL
builder.Services.AddDbContext<PostsContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configurar CORS para permitir el acceso desde el frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
    {
        builder.WithOrigins("http://localhost:5173") // Origen de frontend
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors("AllowOrigin"); // Activar la política CORS configurada

app.UseAuthorization();

app.MapControllers();

app.Run();