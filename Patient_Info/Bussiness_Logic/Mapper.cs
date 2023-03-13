using Models;
using EF_Layer.Entities;

namespace Bussiness_Logic
{
    public class Mapper
    {
        // model to entity
        public Patient mapPatient(Patient_M patient)
        {
            return new Patient()
            {
                Id = patient.Id,
                Email= patient.Email,
                Title= patient.Title,
                FirstName= patient.FirstName,
                LastName= patient.LastName,
                Dob= patient.Dob,
                ContactNumber= patient.ContactNumber,
                Password= patient.Password,
                Gender= patient.Gender,
                Address= patient.Address
            };
        }

        // entity to model
        public Patient_M MapPatient(Patient patient)
        {
            return new Patient_M()
            {
                Id = patient.Id,
                Email= patient.Email,
                Title= patient.Title,
                FirstName= patient.FirstName,
                LastName= patient.LastName,
                Dob= patient.Dob,
                ContactNumber= patient.ContactNumber,
                Password= patient.Password,
                Gender= patient.Gender,
                Address= patient.Address
            };
        }

    }
}