const isDevelopment = window.location.hostname === 'localhost';

export const BACKEND_URL = isDevelopment 
  ? "http://localhost:3000" 
  : "https://whimpsyai-backend.vercel.app"; // Replace with your actual production backend URL