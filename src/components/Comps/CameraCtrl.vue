<template>

  <!-- <p class="card-text">This X3D model of the coke can has been created in 3ds Max, exported to VRML97 and
    converted, using the instantreality transcoders, to X3D for display online.</p> -->
  <h5 class="card-subtitle">Views</h5>
  <div class="camera-btns">
    <div class="btn-group ">
      <div
        href="#"
        @click='show("-posX")'
        class="btn btn-primary btn-flat camera-font"
      >Front</div>
      <div
        @click='show("posZ")'
        href="#"
        class="btn btn-secondary btn-flat camera-font"
      >Back</div>
      <div
        href="#"
        class="btn btn-success btn-flat camera-font"
        @click='show("posX")'
      >Left</div>
      <div
        href="#"
        class="btn btn-danger btn-flat camera-font"
        @click='show("negX")'
      >Right</div>
      <div
        href="#"
        class="btn btn-warning btn-flat camera-font"
        @click='show("negY")'
      >Top</div>
      <div
        href="#"
        class="btn btn-outline-dark disabled btn-flat camera-font"
        @click='show("-posY")'
      >Reset</div>
    </div>
  </div>

</template>


<script setup>
import { useRoute } from "vue-router";
import { store } from "../../store";
let str = 'assets/images/gallery_images'
const route = useRoute()
let show = (str) => {
  let x3d = document.getElementById(`x3d-${route.query.id}`)
  x3d.runtime.showAll(str)
}
</script>
