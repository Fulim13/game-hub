import axios from "axios";

// const apiUrl = import.meta.env.VITE_API_URL as string;
// console.log(apiUrl);

export default axios.create({
  baseURL: "https://gamehub-backend-swart.vercel.app/api",
  // params: {
  //   key: "<API-Key>",
  // },
});
