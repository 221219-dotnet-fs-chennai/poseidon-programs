using EF_Layer;
using Models;
using EF_Layer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussiness_Logic
{
    public class Logic : ILogic
    {
        Mapper map = new Mapper();
        EF_repo repo = new EF_repo();
        PatientInfoDbContext context = new PatientInfoDbContext();
        public List<Patient_M> GetAllPatient()
        {
            List<Patient_M> patients = new List<Patient_M>();

            foreach (var i in repo.GetAllPatient())
            {
                patients.Add(map.MapPatient(i));
            }

            return patients;
        }
        public Patient_M AddPatient(Patient_M patient)
        {
            return map.MapPatient(repo.AddPatient(map.mapPatient(patient)));
        }
        public Patient_M UpdatePatient(Patient_M patient, int id)
        {
            var pat = PatientbyID(id);

            pat.Id = patient.Id;
            pat.Email = patient.Email;
            pat.Title = patient.Title;
            pat.FirstName = patient.FirstName;
            pat.LastName = patient.LastName;
            pat.Dob = patient.Dob;
            pat.ContactNumber = patient.ContactNumber;
            pat.Password = patient.Password;
            pat.Gender = patient.Gender;
            pat.Address = patient.Address;

            return map.MapPatient(pat);
        }
        public Patient_M GetByID(int id)
        {
            return map.MapPatient(repo.GetByID(id));
        }

        public Patient PatientbyID(int id)
        {
            return context.Patients.Where(ID => ID.Id == id).FirstOrDefault();
        }
    }
}
