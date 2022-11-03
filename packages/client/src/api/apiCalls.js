import axios from "axios";

export const getOrders = async () => {
  return await axios.get("http://localhost/SERVEURLINES/bon/matin");
};
