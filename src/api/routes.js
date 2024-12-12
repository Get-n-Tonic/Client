import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getCocktails = async () => {
    try {
        const response = await apiClient.get(`/cocktails`);
        return response.data;
    } catch (error) {
        console.error("Error fetching photos:", error);
        throw error;
    }
};

export const getCocktailById = async (id) => {
    try {
        const response = await apiClient.get(`/cocktails/${id}`);

        return response.data;
    } catch (error) {
        console.error(`Error fetching photo with ID ${id}:`, error);
        throw error;
    }
};