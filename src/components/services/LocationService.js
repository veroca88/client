import axios from "axios";

// const baseURL = process.env.SERVER_POINT;
const baseURL = 'http://localhost:8000'

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const LOCATION_SERVICE = {
    message(userInput) {
        console.log('LOCATION_SERVICE', userInput)
    return service.post("/", userInput)
  },
};

export default LOCATION_SERVICE;
