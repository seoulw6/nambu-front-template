import axios from "axios";

// Axios 기본 설정
const axiosInstance = axios.create({
    baseURL: "http://localhost:3001", // Express 서버 주소
    withCredentials: true, // 인증 정보 포함
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken"); // 또는 context에서 가져오기
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default axiosInstance;