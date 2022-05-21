import { createStore } from 'vuex'
import mapModule from './map'
import { MapState } from './map/state'

// My custom modules
import placesModule from './places'
import { PlacesState } from './places/state'

export interface StateInterface {
  map: MapState
  places: PlacesState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})