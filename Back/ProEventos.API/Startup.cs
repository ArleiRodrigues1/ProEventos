using System;
using AutoMapper;
using ProEventos.Application;
using ProEventos.Persistence;
using Microsoft.OpenApi.Models;
using System.Collections.Immutable;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using ProEventos.Persistence.Contexto;
using ProEventos.Persistence.Contratos;
using ProEventos.Application.Contratos;
using Microsoft.Extensions.Configuration;

namespace ProEventos.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

         services.AddDbContext<ProEventosContext>(options =>
         options.UseSqlServer(Configuration.GetConnectionString("ProEventosContext"),
           b => b.MigrationsAssembly("ProEventos.API")));

            services.AddControllers()
                .AddNewtonsoftJson(x => x.SerializerSettings.ReferenceLoopHandling = 
                Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddScoped<IEventoService, EventoService>();
            services.AddScoped<IGeralPersist, GeralPersist>();
            services.AddScoped<IEventoPersist, EventoPersist>();
            

            services.AddCors();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProEventos.API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProEventos.API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(x => x.AllowAnyHeader()
                              .AllowAnyMethod()
                              .AllowAnyOrigin());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}