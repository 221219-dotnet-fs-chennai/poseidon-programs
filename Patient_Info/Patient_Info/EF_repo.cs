using EF_Layer.Entities;
using Models;

namespace EF_Layer
{
    public class EF_repo : IRepo
    {
        PatientInfoDbContext context = new PatientInfoDbContext();

        public Patient AddPatient(Patient patient)
        {
            context.Patients.Add(patient);
            context.SaveChanges();

            return patient;
        }

        public List<Patient> GetAllPatient()
        {
            return context.Patients.ToList();
        }

        public Patient GetByID(int id)
        {
            var patients = context.Patients;
            var query = from p in patients
                        where p.Id == id
                        select p;
            Patient patient = new Patient();
            foreach (var pat in query)
            {
                patient = new Patient()
                {
                    Id = pat.Id,
                    Email = pat.Email,
                    Title = pat.Title,
                    FirstName = pat.FirstName,
                    LastName = pat.LastName,
                    Dob = pat.Dob,
                    ContactNumber = pat.ContactNumber,
                    Password = pat.Password,
                    Gender = pat.Gender,
                    Address = pat.Address,
                };
            }
            return patient;
        }

        public Patient UpdatePatient(Patient patient)
        {
            context.Patients.Update(patient);
            context.SaveChanges();

            return patient;
        }
    }
}