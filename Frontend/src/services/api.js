const API_URL = import.meta.env.PROD 
  ? "https://market-trend-forecaster-main.onrender.com" 
  : "http://localhost:8000";

export default API_URL;
