import axios from "axios";

export const getOrders = async () => {
  return await axios.get(
    "http://localhost/SERVEURLINES/packages/server/front/livres"
  );
};
