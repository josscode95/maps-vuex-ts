import axios from "axios";

const directionsAPI = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving', 
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1Ijoiam9zc2NvZGUyNiIsImEiOiJjbDNmY251YXAwbXVxM2VwNmhuaXllb2Z2In0.aFxua-I4Vu4SIJ-8qsFt2g'
  }
})

export default directionsAPI