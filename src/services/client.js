import axios from "axios";
import { PUBLIC_KEY, TIMESTAMP, HASH_KEY, baseUrl } from "../config";

export default async () => {
  const instance = axios.create();
  instance.defaults.baseURL = baseUrl;
  instance.defaults.headers.post["Accept"] = "application/json";
  instance.defaults.timeout = 30000;

  instance.interceptors.request.use((config) => {
    console.log("====================================");
    console.log("configconfigconfig", config);
    console.log("====================================");
    return {
      ...config,
      params: {
        ...config.params,
        apikey: PUBLIC_KEY,
        ts: TIMESTAMP,
        hash: HASH_KEY,
      },
    };
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );
  return instance;
};
