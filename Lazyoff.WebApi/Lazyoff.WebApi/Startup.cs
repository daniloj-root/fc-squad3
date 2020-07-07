using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace Lazyoff.WebApi
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
            services.AddControllers();
            services
              // Define a forma de autentica��o
              .AddAuthentication(options =>
              {
                  options.DefaultAuthenticateScheme = "JwtBearer";
                  options.DefaultChallengeScheme = "JwtBearer";
              })

              // Define os par�metros de valida��o do token
              .AddJwtBearer("JwtBearer", options =>
              {
                  options.TokenValidationParameters = new TokenValidationParameters
                  {
                      // Quem est� solicitando
                      ValidateIssuer = true,

                      // Quem est� validando
                      ValidateAudience = true,

                      // Definindo o tempo de expira��o
                      ValidateLifetime = true,

                      // Forma de criptografia
                      IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("gufi-chave-autenticacao")),

                      // Tempo de expira��o do token
                      ClockSkew = TimeSpan.FromMinutes(30),

                      // Nome da issuer, de onde est� vindo
                      ValidIssuer = "Lazyoff.WebApi",

                      // Nome da audience, de onde est� vindo
                      ValidAudience = "Lazyoff.WebApi"
                  };
              });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}