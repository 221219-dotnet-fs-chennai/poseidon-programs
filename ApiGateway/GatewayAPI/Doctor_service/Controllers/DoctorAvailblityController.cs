using Business_Logic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorAvailblityController : ControllerBase
    {
        private readonly ILogic _logic;
        public DoctorAvailblityController(ILogic logic)
        {
            _logic = logic;
        }
        [HttpGet("particular")]
        public ActionResult GetAva(string email)
        {
            var users = _logic.GetDoctrAv(email);
            return Ok(users);
        }
        [HttpPost("Add")]
        public ActionResult Post([FromBody] doctor_availability user)
        {
            var users = _logic.ADD(user);
            return Ok(users);
        }

        [HttpPut("Update")]
        public ActionResult Put([FromQuery] string email, [FromBody] doctor_availability u)
        {
            var users = _logic.UpdateDoctorAv(u, email);
            return Ok(users);
        }
    }
}
