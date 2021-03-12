import axios from "axios";
import { PUBLIC_KEY, TIMESTAMP, HASH_KEY, baseUrl } from "../config";

export const getCharacterLits = async ({ offset }) => {
  let requestData = {
    characters: [],
    error: false,
  };
  const params = {
    apikey: PUBLIC_KEY,
    ts: TIMESTAMP,
    hash: HASH_KEY,
    offset,
    limit: 10,
  };
  try {
    const { data } = await axios.get(`${baseUrl}/v1/public/characters`, {
      params,
    });
    if (data.status === "Ok") {
      requestData = {
        characters: data.data.results,
        error: false,
      };
      return requestData;
    }
    return { ...requestData, error: true };
  } catch (error) {
    return { error: error.response.data.message };
  }
};
