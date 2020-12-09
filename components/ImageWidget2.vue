<template>
  <ix-img
    :src="imageSrc()"
    :imgixParams="{mask:'corners', auto:'format', usm:10}"
    loading="lazy"
    sizes="(min-width: 1024px) 35vw, 50vw"
  />
</template>

<script>
import VueImgix from '~/plugins/vue-imgix.js'

export default {
  props: {
    imgobject: {
      type: Object,
      default: null
    },
    imgixParams: {
      type: String,
      default: null
    }
  },
  name: 'ImageWidget2',
  methods: {
    imageSrc() {
      return (new URL(this.imgobject.url)).pathname
    }
  }
}
</script>
