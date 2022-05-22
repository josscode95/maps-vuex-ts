import axios from "axios";

const searchAPI = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places', 
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1Ijoiam9zc2NvZGUyNiIsImEiOiJjbDNmY251YXAwbXVxM2VwNmhuaXllb2Z2In0.aFxua-I4Vu4SIJ-8qsFt2g'
  }
})

export default searchAPI