import axios from "axios";
import { PUBLIC_KEY, TIMESTAMP, HASH_KEY, baseUrl } from "../config";

export const getCharacterLits = async ({ offset }) => {
  let requestData = {
    characters: [],
    error: false,
  };
  let maxLimit = offset * 5;
  const params = {
    apikey: PUBLIC_KEY,
    ts: TIMESTAMP,
    hash: HASH_KEY,
    limit: maxLimit < 30 ? maxLimit : 20,
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

export const onSearchCharacter = async ({ query }) => {
  let requestData = {
    characters: [],
    error: false,
  };
  const params = {
    apikey: PUBLIC_KEY,
    ts: TIMESTAMP,
    hash: HASH_KEY,
    name: query,
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
      // console.log("====================================");
      // console.log("requestDataquery", requestData);
      // console.log("====================================");
      // const { characters } = requestData;
      // for (var i = 0; i < characters.length; i++) {
      //   console.log("requestData", characters[i].name);
      //   if (characters[i].name.includes(query)) {
      //     console.log("====================================");
      //     console.log("requestDataBBBB", characters[i]);
      //     console.log("====================================");
      //     return characters[i];
      //   }
      // }
      return requestData;
    }

    return { ...requestData, error: true };
  } catch (error) {
    return { error: error.response.data.message };
  }
};
