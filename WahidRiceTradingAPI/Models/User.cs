namespace WahidRiceTradingAPI.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? BirthDate { get; set; }
        public string? Address { get; set; }
        public string City { get; set; }
        public string? State { get; set; }
        public string? ZipCode { get; set; }
        public string Country { get; set; }
        public bool IsActive { get; set; }
        public DateTime RegistrationDate { get; set; }
    }
}