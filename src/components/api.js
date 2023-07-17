export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '45e189e052mshddfc8e800264449p135f0fjsn79b4f9c599ff',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

try {
  const response = await fetch(GEO_API_URL, geoApiOptions);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
