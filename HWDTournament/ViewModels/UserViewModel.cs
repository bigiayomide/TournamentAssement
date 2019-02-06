using System;

namespace HWBTournament.API.ViewModels
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public int company_detail_id { get; set; }
        public int b2btype_id { get; set; }
        public int usr_code { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string confirmpassword { get; set; }
        public string salt { get; set; }
        public bool isactive { get; set; }
        public DateTime date_created { get; set; }
        public DateTime? date_updated { get; set; }
    }
}
