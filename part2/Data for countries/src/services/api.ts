import axios from 'axios';
const api_key = process.env.REACT_APP_API_KEY;
const cancelTokenSource = axios.CancelToken.source();

export const getAllCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  console.log(response.data);
  return response.data;
};

export const getCityWeather = async (city: string) => {
  const weather = await axios.get(
    `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`,
    {
      cancelToken: cancelTokenSource.token,
    }
  );
  return { data: weather.data, cancel: cancelTokenSource };
};
