using BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace AppointmentsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        ILogic logic;
        public AppointmentController(ILogic logic)
        {
            this.logic = logic;
        }
        [HttpGet("Get_all_appointment")]
        public IActionResult Get()
        {
            try
            {
                var ap = logic.GetAppointment();
                return Ok(ap);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPost("Add_appointment")]
        public IActionResult Add([FromBody] Models.Appointment ap)
        {
            try
            {
                var newAp = logic.AddAppointment(ap);
                return Created("Add", newAp);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("GetbyAcceptance/{Acceptance}")]
        public IActionResult Get([FromRoute] int Acceptance)
        {
            try
            {
                var ap = logic.GetAppointmentByAcceptance(Acceptance);
                return Ok(ap);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("GetbyPatientID/{patientid}")]
        public IActionResult  GetMedical([FromRoute] int patientid)
        {
            try
            {
                var ap=logic.GetMedicalHistory(patientid);
                return Ok(ap);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("updateby_patID/{PatientId}")]
        public IActionResult Update([FromRoute] int PatientId, [FromBody] Models.Appointment ap)
        {
            try
            {
                if (PatientId >= 0)
                {
                    logic.UpdateAppointment(PatientId, ap);
                    return Ok(ap);
                }
                else
                    return NotFound();
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("AcceptanceAndEmail/{AcceptanceNo}/{Email}")]
        public IActionResult GetByemailAccept([FromRoute] int AcceptanceNo,[FromRoute] string Email)
        {
            try
            {
                var value = logic.GetAppointmentsbyEmailandAcceptance(AcceptanceNo, Email);
                return Ok(value);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
