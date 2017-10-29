<template>
<div>
<h1>Carousel</h1>

<div class="demo">
  <carousel>
    <carousel-pane>
      <div class="content">1</div>
    </carousel-pane>
    <carousel-pane>
      <div class="content">2</div>
    </carousel-pane>
    <carousel-pane>
      <div class="content">3</div>
    </carousel-pane>
    <carousel-pane>
      <div class="content">4</div>
    </carousel-pane>
    <carousel-pane>
      <div class="content">5</div>
    </carousel-pane>
  </carousel>
</div>

<doc-md>
<script type="text/html">
``` html
<carousel>
  <carousel-pane>
    <div class="content">1</div>
  </carousel-pane>
  <carousel-pane>
    <div class="content">2</div>
  </carousel-pane>
  <carousel-pane>
    <div class="content">3</div>
  </carousel-pane>
  <carousel-pane>
    <div class="content">4</div>
  </carousel-pane>
  <carousel-pane>
    <div class="content">5</div>
  </carousel-pane>
</carousel>
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import Carousel from 'components/Carousel/Carousel'
import CarouselPane from 'components/Carousel/CarouselPane'

export default {
  components: {
    Carousel,
    CarouselPane,
    DocMd
  },

  data () {
    return {}
  },

  methods: {
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 120px;
  text-align: center;
  // background-color: #ff00ff;
}
</style>
