import axios from 'axios';

const VAM_BASE_URL = 'https://api.vam.ac.uk/v2';

export const fetchArtworks = async (query: string): Promise<any> => {
  try {
    const response = await axios.get(`${VAM_BASE_URL}/museumobject/O828146`, {
      params: { q: query },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    throw error;
  }
};