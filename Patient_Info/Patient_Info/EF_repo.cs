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


        //Visit Details
        public VisitDetail AddVisitDetails(VisitDetail visitDetail)
        {
            context.VisitDetails.Add(visitDetail);
            context.SaveChanges();

            return visitDetail;
        }

        public VisitDetail GetVisitById(int id)
        {


            var visitDetails = context.VisitDetails;
            var query = from v in visitDetails
                        where v.Id == id
                        select v;
            VisitDetail visitDetail = new VisitDetail();

            foreach (var vi in query)
            {
                visitDetail = new VisitDetail()

                {
                    Id = vi.Id,
                    PatientId = vi.PatientId,
                    Height = vi.Height,
                    Weight = vi.Weight,
                    BloodPressureSystolic = vi.BloodPressureSystolic,
                    BloodPressureDiastolic = vi.BloodPressureDiastolic,
                    BodyTemperature = vi.BodyTemperature,
                    RespirationRate = vi.RespirationRate,
                    BloodGroup = vi.BloodGroup,
                    NurseEmail = vi.NurseEmail,
                    PhysicianEmail = vi.PhysicianEmail,
                    AppointmentId = vi.AppointmentId,
                    KeyNotes = vi.KeyNotes
                };
            }
            return visitDetail;

        }

        //Prescription



        public Prescription AddPrescription(Prescription prescription)
        {
            context.Prescriptions.Add(prescription);
            context.SaveChanges();
            return prescription;
        }


        public Prescription GetPrescriptionById(int id)
        {
            var pres = context.Prescriptions;
            var query = from p in pres
                        where p.Id == id
                        select p;

            Prescription prescription = new Prescription();
            foreach (var pi in query)
            {
                prescription = new Prescription()
                {
                    Id = pi.Id,
                    VisitDetailsId = pi.VisitDetailsId,
                    PrescriptionName = pi.PrescriptionName,
                    Dosage = pi.Dosage,
                    Notes = pi.Notes
                };
            }
            return prescription;
        }

        //test methods
        public Test AddTest(Test test)
        {
          context.Tests.Add(test);
          context.SaveChanges();
          return test;
        }

        public List<Test> GetTestList(int visitId)
        {
            List<Test> TList = new List<Test>();
           foreach(var e in context.Tests.ToList())
            {
                if (e.VisitDetailsId == visitId)
                {
                    TList.Add(e);
                }
            }
           return TList;
        }

        public Test UpdateTest(Test test)
        {
            context.Tests.Update(test);
            context.SaveChanges();
            return test;
        }
    }
}
