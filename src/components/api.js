import axios from 'axios';

const API_KEY = '38122384-f449367556dc0438355b2be02';

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    throw new Error('Error fetching images:', error);
  }
};
