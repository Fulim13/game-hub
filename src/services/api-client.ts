import axios from "axios";

// const apiUrl = import.meta.env.VITE_API_URL as string;
// console.log(apiUrl);

export default axios.create({
  // check dev server or production server, based on that change url
  baseURL: import.meta.env.DEV
    ? "http://localhost:3001/api"
    : "https://gamehub-backend-swart.vercel.app/api",
  // params: {
  //   key: "<API-Key>",
  // },
});
