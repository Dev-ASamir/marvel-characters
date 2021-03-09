import {useEffect, useState} from 'react';
import axios from 'axios';
export const useFetch = ({url, params = {lang: 'en'}}) => {
  const [state, setstate] = useState({loading: true, error: false, data: null});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {params});
        if (response.data) {
          setstate({
            ...state,
            data: response.data,
            loading: false,
            error: false,
          });
        } else {
          setstate({...state, error: true, data: null, loading: false});
        }
      } catch (error) {
        console.log(error);
        setstate({...state, error: true, loading: false});
      }
    };
    fetchData();
  }, []);
  return state;
};
