import api from "../../../config/apiConfig";

export const getOrders = () => api.get("/api/orders");
