<template>
  <div :id="$route.query.id">
    <div class="row">
      <div class="col-md-12 myColor">
        <div class="card text-left myColor">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <router-link
                  to="/model?id=coke"
                  class="nav-link active"
                >Coke</router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/model?id=fanta"
                  class="nav-link active"
                >Fanta</router-link>

              </li>
              <li class="nav-item">
                <router-link
                  to="/model?id=sprite"
                  class="nav-link active"
                >Sprite</router-link>
              </li>
            </ul>
            <br>
          </div>

          <div class="card-body">
            <h4 class="card-title">{{descriptive[$route.query.id].title}} </h4>
            <div class="model3D">
              <x3d
                :id='`x3d-${item}`'
                v-for="item in ['coke', 'fanta', 'sprite']"
                :key="item"
                v-show="$route.query.id === item"
              >
                <scene :id='`scene-${item}`'>
                  <viewpoint
                    position="0 0 0"
                    :id='`vp-${item}`'
                  ></viewpoint>
                  <inline
                    :url="`./assets/x3d/${item}.x3d`"
                    :id='item'
                  > </inline>
                </scene>
              </x3d>
            </div>
            <camera-ctrl />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import Card from './Comps/Card.vue'
import Gallery from './Comps/Gallery.vue'
import CameraCtrl from './Comps/CameraCtrl.vue'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const descriptive = {
  coke: {
    title: 'Coca Cola',
    content: `Atlanta Beginnings: It was 1886, and in New York Harbour, workers were constructing
              the Statue of Liberty. Eight hundred miles away, another great American symbol was about to be unveiled.
              Like many people who change history,
              John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity. One afternoon, he stirred up a
              fragrant, caramel-coloured liquid and, when it was done, he carried it a few doors down to Jacobs'
              Pharmacy. Here,
              the mixture was combined with carbonated water and sampled by customers who all agreed - this new drink
              was something special. So Jacobs' Pharmacy put it on sale for five cents (about 3p) a glass.`
  },
  sprite: {
    title: 'Sprite',
    content: `First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world's
              leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite
              Zero, part of our no sugar Zero range,
              offers the delicious lemon lime taste of Sprite without the sugar or calories. `
  },
  fanta: {
    title: 'Fanta Orange',
    content: `First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world's
              leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite
              Zero, part of our no sugar Zero range,
              offers the delicious lemon lime taste of Sprite without the sugar or calories. `
  },
}
const fit = () => {
  nextTick(() => {
    setTimeout(() => {
      let x3d = document.getElementById(`x3d-${route.query.id}`)
      x3d.runtime.fitAll(false)
      console.dir(x3d)
    }, 10);

  })

}
const route = useRoute()
watch(() => route.query.id, () => {
  fit()
})

nextTick(() => {
  // x3dom.reload()
  x3dom.reload()
  console.log('🚀 ~ x3dom', x3dom)

  let vp = document.getElementById(`vp-${route.query.id}`)
  console.log('🚀 ~ vp', vp)
  setTimeout(() => {
    ['coke', 'fanta', 'sprite'].map(i => {
      let x3d = document.getElementById(`x3d-${i}`)
      x3d.runtime.fitAll(false)
    })
  }, 1000);
})

</script>
