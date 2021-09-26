import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api"; //process.env.REACT_APP_API_URL;
axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Internal Server Error");
  }

  return Promise.reject(error);
});

export default {
  post: axios.post,
};
