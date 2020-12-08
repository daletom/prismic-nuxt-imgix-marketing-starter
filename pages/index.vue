<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
<div>
  <h1 class="text-4xl text-center">Marketing Slide Examples</h1>
  <p class="text-xl text-left m-5">Some examples for creating marketing type slides to put on a home page. The images are uploaded to prismic without any resizing or cropping. Uploading the largest version is a great practice.  The images will automatically be resized and formatted to match the appropriate "sizes", which are dynamic to the width and type of the browser.</p>
  <slice-zone type="page" uid="home" />
</div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  components: {
    SliceZone
  }
};
</script>
<style scoped>
.sale {
  justify-content: space-evenly;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
</style>
