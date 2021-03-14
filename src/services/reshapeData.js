import axios from "axios";
import { PUBLIC_KEY, TIMESTAMP, HASH_KEY } from "../config";

let comicsArr = [];
let eventsArr = [];
let seriesArr = [];
let storiesArr = [];

export const reshapeData = async ({ item }) => {
  item.comics.items.map(async (ii) => {
    const params = {
      apikey: PUBLIC_KEY,
      ts: TIMESTAMP,
      hash: HASH_KEY,
    };
    const res = await axios.get(`${ii.resourceURI}`, {
      params,
    });
    const thumbnail = res.data.data.results[0].thumbnail;
    comicsArr.push({ thumbnail, name: ii.name });
  });

  item.events.items.map(async (ii) => {
    const params = {
      apikey: PUBLIC_KEY,
      ts: TIMESTAMP,
      hash: HASH_KEY,
    };
    const res = await axios.get(`${ii.resourceURI}`, {
      params,
    });
    const thumbnail = res.data.data.results[0].thumbnail;
    eventsArr.push({ thumbnail, name: ii.name });
  });

  item.series.items.map(async (ii) => {
    const params = {
      apikey: PUBLIC_KEY,
      ts: TIMESTAMP,
      hash: HASH_KEY,
    };
    const res = await axios.get(`${ii.resourceURI}`, {
      params,
    });
    const thumbnail = res.data.data.results[0].thumbnail;
    seriesArr.push({ thumbnail, name: ii.name });
  });

  item.stories.items.map(async (ii) => {
    const params = {
      apikey: PUBLIC_KEY,
      ts: TIMESTAMP,
      hash: HASH_KEY,
    };
    const res = await axios.get(`${ii.resourceURI}`, {
      params,
    });
    const thumbnail = res.data.data.results[0].thumbnail;
    storiesArr.push({ thumbnail, name: ii.name });
  });

  const data = [
    {
      id: 1,
      listTitle: "Comics",
      list: comicsArr,
    },
    { id: 2, listTitle: "Events", list: eventsArr },
    { id: 3, listTitle: "Series", list: seriesArr },
    { id: 4, listTitle: "Stories", list: storiesArr },
  ];
  return data;
};
