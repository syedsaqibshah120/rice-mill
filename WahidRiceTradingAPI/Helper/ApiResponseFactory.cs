using WahidRiceTradingAPI.Models;

namespace WahidRiceTradingAPI.Helper
{
    public class ApiResponseFactory
    {
        public static ApiResponse<T> Success<T>(T data)
        {
            return new ApiResponse<T>(data);
        }

        public static ApiResponse<T> NotFound<T>(string errorMessage = "Resource not found")
        {
            return new ApiResponse<T>(default, 404, errorMessage);
        }

        public static ApiResponse<T> Unauthorized<T>(string errorMessage = "Unauthorized")
        {
            return new ApiResponse<T>(default, 401, errorMessage);
        }

        public static ApiResponse<T> RecordNotFound<T>(string errorMessage = "Record not found")
        {
            return new ApiResponse<T>(default, 404, errorMessage);
        }

    }
}
