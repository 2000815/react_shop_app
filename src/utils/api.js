import axios from "axios";

export const GetShops = async () => {
  const getLatitude = localStorage.getItem("latitude");
  const getLongitude = localStorage.getItem("longitude");
  const range = localStorage.getItem("range");

  const initaialURL = `http://[::1]:3000/api/v1/infor?latitude=${getLatitude}&longitude=${getLongitude}&range=${range}`;
  console.log(initaialURL);
  try {
    const response = await axios.get(initaialURL);
    return response.data; // レスポンスデータを返す
  } catch (error) {
    throw error;
  }
};

export const GetShopInfo = async (id) => {
  const url = `http://[::1]:3000/api/v1/infor/${id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetHistory = async () => {
  const url = `http://[::1]:3000/api/v1/histories`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
