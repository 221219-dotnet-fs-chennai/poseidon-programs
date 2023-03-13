using EF_Layer.Entities;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness_Logic
{
    public interface ILogic
    {
        List<Patient_M> GetAllPatient();
        Patient_M AddPatient(Patient_M patient);
        Patient_M UpdatePatient(Patient_M patient, int id);
        Patient_M GetByID(int id);
    }
}
