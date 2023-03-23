using Doctor.Entities;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doctor
{
    public interface IDoctor<T> 
    {
        T AddDoctor(T doctor);
        public Doctor.Entities.Doctor GetDoctor(string email);

        IEnumerable<T> GetALLDOCT();

    }
}
