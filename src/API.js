import axios from 'axios';
const apiKey = '38122384-f449367556dc0438355b2be02';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key={apiKey}&image_type=photo&orientation=horizontal&per_page=12';
