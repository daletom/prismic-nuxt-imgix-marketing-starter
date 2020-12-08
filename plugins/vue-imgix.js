import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "images.prismic.io",
    defaultIxParams: {
        auto: 'format,compress'
    },
});