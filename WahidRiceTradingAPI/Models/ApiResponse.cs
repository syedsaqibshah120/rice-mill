namespace WahidRiceTradingAPI.Models
{
    public class ApiResponse<T>
    {
        public bool Success { get; set; }
        public T Data { get; set; }
        public string ErrorMessage { get; set; }
        public int StatusCode { get; set; }

        public ApiResponse(T data, int statusCode = 200, string errorMessage = null)
        {
            Success = statusCode >= 200 && statusCode < 300;
            Data = data;
            StatusCode = statusCode;
            ErrorMessage = errorMessage;
        }
    }
}
