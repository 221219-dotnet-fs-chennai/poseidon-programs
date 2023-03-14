using EF_Layer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_Layer
{
    public interface IRepo
    {
        List<Patient> GetAllPatient();
        Patient AddPatient(Patient patient);
        Patient UpdatePatient(Patient patient);
        Patient GetByID(int id);

        //for visit details

        VisitDetail AddVisitDetails(VisitDetail visitDetail);
        VisitDetail GetVisitById(int id);


        //for prescription
        public Prescription AddPrescription(Prescription prescription);
        public Prescription GetPrescriptionById(int id);


        //for test
        public Test AddTest(Test test);
        public List<Test> GetTestList(int visitId);

     
        public Test UpdateTest(Test test);


    }
}
