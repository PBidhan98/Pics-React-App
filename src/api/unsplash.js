import axios from 'axios';

// const searchImages = (term) => {
// }

//creates instance of axios client with default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID 900bf2ecf7afb1ef1054563580032883f22be39b655a1fbe1309b9c95678699e'
  }
});
