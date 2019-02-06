using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("users", Schema = "hwb")]
    public class user : IEntityBase
    {
        public user()
        {
            userroles = new List<userrole>();
        }
        public int Id { get; set; }
        public string username { get; set; }
        public int usr_code { get; set; }
        public string hashed_password { get; set; }
        public string salt { get; set; }
        public bool isactive { get; set; }
        public DateTime date_created { get; set; }
        public DateTime? date_updated { get; set; }
        public virtual ICollection<userrole> userroles { get; set; }
    }

}
