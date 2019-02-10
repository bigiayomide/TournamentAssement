using HWBTournament.API.ViewModels;
using HWBTournament.Data.Contracts;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace HWBTournament.API.Core
{
    public static class ExceptionMiddlewareExtensions
    {
        public static void ConfigureExceptionHandler(this IApplicationBuilder app, ILoggerFactory logger)
        {
            app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.ContentType = "application/json";

                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (contextFeature != null)
                    {
                        logger.CreateLogger("ExceptionLogger").LogError($"Something went wrong: {contextFeature.Error}");

                        await context.Response.WriteAsync(new ResultVM()
                        {
                            Data = "Internal Server Error.",
                            Status = Status.Error,
                            Message = "Internal Server Error."
                        }.ToString());
                    }
                });
            });
        }
    }
}
