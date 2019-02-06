namespace HWBTournament.API.ViewModels
{
    public class LoginViewModel
    {
        public int Id { get; set; }
        public int company_detail_id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public bool rememberMe { get; set; }
        public int myrole { get; set; }
        public int b2btype_id { get; set; }
    }
}
