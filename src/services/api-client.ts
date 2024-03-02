import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c23a833983044579ba5dc064eda307e5",
  },
});
