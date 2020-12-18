import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const LOCATION_SERVICE = {
    search(userInput) {
        console.log('LOCATION_SERVICE', userInput)
    return service.post("/", userInput)
  },
};

export default LOCATION_SERVICE;
