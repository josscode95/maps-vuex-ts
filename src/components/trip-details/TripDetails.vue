<template>
  <div 
    v-if="distance"
    class="trip-container column"
  >
    <div class="col">Distancia: <strong>{{ distance }} kms</strong></div>
    <div class="col">Duracion: <strong>{{ duration }} minutos</strong></div>
  </div>
</template>

<script lang="ts">
import { useMapStore } from "@/composables";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'TripDetails',
  setup() {

    const { distance, duration } = useMapStore()

    return {
      distance,
      duration
    }
  }
})
</script>

<style scopred>
  .trip-container{
    background-color: white;
    border-radius: 10px;
    bottom: 100px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.2);
    font-size: 25px;
    padding: 10px;
    position: fixed;
    height: 100px;
    width: 280px;
    top: 30px;
    left: 550px;
  }
  strong{
    color: #42b983;
  }
</style>