# prismic-nuxt-imgix-marketing-starter

> A starter demo showing how to use leverage more advanced responsive design and additional imgix parameter with a prismic project. Demo is of some marketing style images using nuxt.

## Install Items

Run the following command to install the prismic client (you might need to add sudo):

``` 
npm install -g prismic-cli
```
Then you can clone this theme and initiate the prismic project:

```
prismic theme --theme-url https://github.com/daletom/prismic-nuxt-imgix-marketing-starter.git --conf sm.json
```
After you `cd` into the new directory, you will need to run
```
npm run storybook
```
While this is running, open another terminal.  you will now need to login to your prismic.
```
prismic login
```
 Then you are going to open the developer slice machine to push the shared slices we are going to use for this project to your newly created prismic project.
 ```
 prismic sm --develop
 ```
 Go ahead and open localhost:9999, click on each of the slices, marketingOne, marketingTwo, & marketingThree, and press the blue `push slice to Prismic` button.
![animation to push slice to prismic](https://tom.imgix.net/pushslicetoprismic.gif)

You can now terminate the storybook and sm --develop processes.  Go ahead and go to your prismic dashboard. The final item we need to do is to go to the Custom Types section in the Prismic Dashboard. Click on the repeatable page type (should be the only one). Move the slice zone switch from off to on. Press the add a slice button, go to shared slices, click on all three slices, and add and save them.
![animation to add a shared slice](https://tom.imgix.net/addsharedslice.gif)

## Add Content
  You can now go to the documents section of your Prismic Dashboard to stard adding content.  Press the green pencil to add a page. Call this first home `home` in the unique id. 

  You can now choose one of the slices, each slice is the full width of the browser, but they have a different amount of content items in them. So if you want just one piece of content (title, text, button, image) going the whole width of the browser, choose MarketingOne. If you want 2 or 3 pieces of content, you can choose MarketingTwo or MarketingThree. You can add all of them multiple times if you like as well.
  ![adding content to prismic](https://tom.imgix.net/addcontent.gif)

## View it in Dev

If you want to see the content you just added, just make sure to save and publish the content in Prismic. Go back to your terminal and enter
```
npm run dev
```
You should then see an example of the site with your content.
![example of content](https://tom.imgix.net/imgixprismicexample.png?auto=format&w=800)

## Advanced items with imgix

Now that you are seeing this in your localhost, let's dig in a little more into what we custom added with imgix and why.  If you're following me step-by-step, you may not realize but you also installed the Vue-imgix SDK when you cloned my prismic theme.  This allows us to easily create responsive images in an img or picture element.  For this example, I created a few components and then replaced the `img` tag with an `ix-img` tag to activate the SDK. If you are looking to add this to your existing Prismic project and are not cloning my theme, here is a simple cheatsheet for adding this to Nuxt:
![Cheatsheet to add Vue SDK](https://imgix.tomdale.website/vueimgixsdksteps2.png?auto=format,compress&w=600)

I want to focus on one of the components I used for the product images, the ImageWidget2.vue component.  This is the `ix-img` tags I used:
```
<ix-img
    :src="imageSrc()"
    :imgixParams="{mask:'corners', auto:'format', usm:10}"
    loading="lazy"
    sizes="(min-width: 1024px) 35vw, 50vw"
  />
  ```
  I am using a v-bind for the src of each image. You will notice I am using a `imageSrc()` function to build out the image urls.  Since the imgix Vue SDK does not support putting full urls in the ix-img tag, I needed to use this function to remove the pathname. I did that using a method like this:
  ```
  methods: {
    imageSrc() {
      return (new URL(this.imgobject.url)).pathname
    }
  }
  ```
  imgix has a large choice of API parameters you can use.  You can see them at [imgix API Docs Page](https://docs.imgix.com/apis/rendering). Any that you would like to use, simply add to the `imgixParams` field. I have chosen to use some automatic formatting, to mask the corners of the image, and to use an unsharpen mask to improve the sharpness of these images. Their are a wide range of items you can use with the imgix APIs!

  I have also added a `sizes` attribute.  The Vue SDK is actually going to automatically generate a list of image widths in the `srcset`, but you need to declare a sizes to ensure it responsively loads the right image.  This image component is setup to display images equal to 35% of the width of the browser while the browser is wider than 1024 pixels, once it becomes smaller than 1024 pixels the images will then be 50% the width of the browser as everything becomes larger in mobile view. This is truly responsive, constantly choosing the right size image and format type depending on each user and is great for performance!

## Recognition & Thanks

I hope this template is helpful for you all. I want to offer a special thanks to Phil Snow and the Prismic team for helping me with all of this.

## License

The MIT License (MIT)

Copyright (c) 2020 Thomas Dale

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
