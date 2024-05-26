import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'; 

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'b9e90fbf42msh92b7fffb09dea1dp158270jsn0d5d0c6c0fa7',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromAPI = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}`, options)
        console.log(response)
    }catch(err){
    console.log(err,"not able to fetch api")
    }
}