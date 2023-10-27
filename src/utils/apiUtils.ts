const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

const handleResponse = async (response: Response) => {
  try {
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const api = {
  get: (endpoint: string) =>
    fetch(BASE_URL + endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(handleResponse),
};
