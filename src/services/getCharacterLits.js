import axios from "axios";
import { PUBLIC_KEY, TIMESTAMP, HASH_KEY, baseUrl } from "../config";
import { Trans } from "../utils";

export const getCharacterLits = async ({ limit }) => {
  let requestData = {
    characters: [],
    error: false,
  };
  let maxLimit = limit * 4;
  const params = {
    apikey: PUBLIC_KEY,
    ts: TIMESTAMP,
    hash: HASH_KEY,
    limit: maxLimit,
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
      const { characters } = requestData;

      const filterCharacters = characters.filter((i) => i.name.includes(query));
      requestData = {
        characters: filterCharacters,
        error: filterCharacters.length === 0 ? Trans("noResult") : false,
      };
      return requestData;
    }

    return { ...requestData, error: true };
  } catch (error) {
    return { error: error.response.data.message };
  }
};
