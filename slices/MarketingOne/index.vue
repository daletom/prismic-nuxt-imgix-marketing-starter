<template>
<div>
  <section class="section max-h-28 rounded-md" v-bind:style="{ 'background-color': slice.primary.bgColor }">
    <ImageWidget1 class="m-5 lazyload float-right" :imgobject="slice.primary.saleImage" />
    <prismic-rich-text :field="slice.primary.title" class="title text-5xl lg:text-2xl mb-2 mt-5" />
    <prismic-rich-text :field="slice.primary.description" class="mb-4 text-lg lg:text-base" />
    <button :href="slice.primary.saleUrl" class="bg-black mb-5 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:black" >{{ $prismic.asText(slice.primary.buttonText) }}</button>
  </section>
</div>
</template>
<script>

import VueImgix from '~/plugins/vue-imgix.js';
import ImageWidget1 from '~/components/ImageWidget1.vue';

export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.section {
  position: relative;
  color: #111;
  text-align: center;
  display: block;
  float: left;
  margin: 10px;
  width: 98%;
  height: auto;
}

@media (max-width: 1024px) {
  .section {
  position: relative;
  color: #111;
  text-align: center;
  display: block;
  float: left;
  margin-left: 20px;
  margin-bottom: 10px;
  width: 95%;
  height: auto;
}
}

a {
  color: #111;
}

</style>

