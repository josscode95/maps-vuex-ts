import { useMapStore, usePlacesStore } from "@/composables"
import mapboxgl from "mapbox-gl"
import { defineComponent, onMounted, ref, watch } from "vue"

export default defineComponent({
  name: 'MapView',
  setup(){

    const mapElement = ref<HTMLDivElement>()
    const { isUserLocationReady, userLocation } = usePlacesStore()
    const { setMap } = useMapStore()

    const initMap = async() => {
      
      await Promise.resolve()
      
      const map = new mapboxgl.Map({
        container: mapElement.value!, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15 // starting zoom
      });

      const myLocationPopUp = new mapboxgl.Popup({offset: [0, -35]})
        .setLngLat( userLocation.value! )
        .setHTML(`
          <h4>Aquí estoy</h4>
          <p>Actualmente en Huaral</p>
        `)

      const myLocationMarker = new mapboxgl.Marker()
        .setLngLat( userLocation.value! )
        .setPopup( myLocationPopUp )
        .addTo( map )         

      //establecer mapa en vuex
      setMap( map )

    }

    onMounted(() => {
      if( isUserLocationReady.value ) return initMap()
    })

    watch( isUserLocationReady, ( newVal ) => {
      if( isUserLocationReady.value ) initMap()
    })

    return {
      isUserLocationReady,
      mapElement
    }
  }
})

