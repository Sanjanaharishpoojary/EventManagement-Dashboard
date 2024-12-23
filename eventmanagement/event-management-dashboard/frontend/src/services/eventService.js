
import axios from "axios";

const API_URL = "/api/events";

const getEvents = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export default { getEvents };
