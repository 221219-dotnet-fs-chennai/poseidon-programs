using System;
using Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EntityApi.Entities;
using System.Threading.Tasks;
using da = EntityApi;

namespace Business_Logic
{
    public class Logic:ILogic
    {
        da.IRepo<da.Entities.Allergy> repo;
        public Logic(da.IRepo<da.Entities.Allergy> _repo) 
        {
            repo = _repo;
        }
        public Models.Allergy AddDetails(Models.Allergy allergy)
        {
            return Mapper.Map(repo.Add(Mapper.Map(allergy)));
        }
        public IEnumerable<Models.Allergy> Get(int t) 
        {
            
            return Mapper.Map(repo.Get(t));
        }
        }
    }

