<template>
<div>
  <section class="section max-h-28 rounded-md" v-bind:style="{ 'background-color': slice.primary.bgColorOne }">
    <div>
    <prismic-rich-text :field="slice.primary.titleOne" class="title text-5xl lg:text-2xl mb-2" />
    <prismic-rich-text :field="slice.primary.descriptionOne" class="mb-4 text-lg lg:text-base" />
    <button :href="slice.primary.saleUrlOne" class="bg-black mb-5 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:black" >{{ $prismic.asText(slice.primary.buttonTextOne) }}</button>
    </div>
    <div>
    <ImageWidget3 class="m-auto pb-5 lazyload" :imgobject="slice.primary.saleImageOne" />
    </div>
  </section>
  <section class="section max-h-28 rounded-md" v-bind:style="{ 'background-color': slice.primary.bgColorTwo }">
    <div>
    <prismic-rich-text :field="slice.primary.titleTwo" class="title text-5xl lg:text-2xl mb-2" />
    <prismic-rich-text :field="slice.primary.descriptionTwo" class="mb-4 text-lg lg:text-base" />
    <button :href="slice.primary.saleUrlTwo" class="bg-black mb-5 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:black" >{{ $prismic.asText(slice.primary.buttonTextTwo) }}</button>
    </div>
    <div>
    <ImageWidget3 class="m-auto pb-5 lazyload" :imgobject="slice.primary.saleImageTwo" />
    </div>
  </section>
  <section class="section max-h-28 rounded-md" v-bind:style="{ 'background-color': slice.primary.bgColorThree }">
    <div>
    <prismic-rich-text :field="slice.primary.titleThree" class="title text-5xl lg:text-2xl mb-2" />
    <prismic-rich-text :field="slice.primary.descriptionThree" class="mb-4 text-lg lg:text-base" />
    <button :href="slice.primary.saleUrlThree" class="bg-black mb-5 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:black" >{{ $prismic.asText(slice.primary.buttonTextThree) }}</button>
    </div>
    <div>
    <ImageWidget3 class="m-auto pb-5 lazyload" :imgobject="slice.primary.saleImageThree" />
    </div>
  </section>
</div>
</template>
<script>

import VueImgix from '~/plugins/vue-imgix.js';
import ImageWidget3 from '~/components/ImageWidget3.vue';

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
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 32%;
  height: 28rem;
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

