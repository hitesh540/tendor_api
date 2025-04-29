const axios = require("axios");

// Replace with actual API base URL
const api = axios.create({
  baseURL: "https://tenders.guru/api/es",
  headers: {
    Accept: "application/json",
  },
});

const getTenders = async () => {
  try {
    const response = await api.get("/tenders");
    return response.data.data;
  } catch (error) {
    console.error("Axios error:", error?.message || error);
    throw error;
  }
};

const getTenderById = async (id) => {
  const response = await api.get(`/tenders/${id}`);
  return response.data;
};

module.exports = {
  getTenders,
  getTenderById,
};
