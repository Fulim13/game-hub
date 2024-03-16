import axios, { AxiosRequestConfig } from "axios";

// const apiUrl = import.meta.env.VITE_API_URL as string;
// console.log(apiUrl);

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  // check dev server or production server, based on that change url
  baseURL: import.meta.env.DEV
    ? "http://localhost:3001/api"
    : "https://gamehub-backend-swart.vercel.app/api",
  // params: {
  //   key: "<API-Key>",
  // },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
