using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApiStarter.Controllers
{
    [EnableCors("http://localhost:3500", "*", "*")]
    public class DefaultController : ApiController
    {
        // GET: api/Default
        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK, "Hello World!");
        }

        // GET: api/Default/5
        public HttpResponseMessage Get(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, new { value = id });
        }
    }
}
