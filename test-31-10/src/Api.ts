import axios from "axios";
import { Mission } from "./types/index";

const API_KEY: number = 8897106;

export const getMissions = async (): Promise<Mission[]> => {
  try {
    const response = await axios.get(`https://reactexambackend.onrender.com/missions/${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error("fetch failed");
  }
};

export const postMission = async (mission: Mission): Promise<Mission> => {
  try {
    const response = await axios.post(`https://reactexambackend.onrender.com/missions/${API_KEY}`, mission);
    return response.data;
  } catch (error) {
    throw new Error("fetch failed");
  }
};

export const deleteMission = async (id: string): Promise<void> => {
  try {
    await axios.delete(`https://reactexambackend.onrender.com/missions/${API_KEY}/${id}`);
  } catch (error) {
    throw new Error("fetch failed");
  }
};

export const updateStatus = async (id: string): Promise<void> => {
  try {
    await axios.post(`https://reactexambackend.onrender.com/missions/${API_KEY}/progress/${id}`);
  } catch (error) {
    throw new Error("fetch failed");
  }
};
