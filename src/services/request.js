import axios from 'axios';

export const request = async (url, body) => {
  try {
    const response = await axios(url, body);
    console.log('response Success', response);
    return response;
  } catch (err) {
    console.log('response Error', err);
    return err.response.data[0];
  }
};
