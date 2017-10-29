<template lang="html">
<div>
  <h1>图片预览</h1>
  先看下面的例子：
  <div class="demo-pre">
    <div v-preview="images">
      <img v-for="item in images" class="preview-image" :src="item.thumbUrl" :data-originalUrl="item.originalUrl"/>
    </div>
  </div>
  <preview-wrapper></preview-wrapper>
<doc-md>
  <script type="text/html">
  这里定义了** v-preview **指令，需要浏览的图片需要添加** .preview-image ** 的样式class，
  ```javascript
  <div v-preview="images">
    <img v-for="item in images" class="preview-image" :src="item.thumbUrl" :data-originalUrl="item.originalUrl"/>
  </div>
  ```
  当组价加载时，会遍历里面的带有样式类** .preview-image ** 的dom元素，获取相关信息
  ```javascript
  src  //对应图片的缩略图地址
  data-originalUrl  //对应图片的大图地址
  title   // 图片的标题
  ```
  例如我们请求回来的数据是这样的，
  ```javascript
  data () {
    return {
      images: [{
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview1.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview1.jpg'
      },
      ......
      {
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview10.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview10.jpg'
      }]
    }
  },
  ```
  ### 如何使用呢
  #### 1 在入口文件main.js中引入我们定义好的指令
  ```javascript
  import previewDirective from '../src/directive/preview'
  const EVENT_BUS = new Vue({
    data () {
      return {
        GM_PREVIEW: {
          show: false,
          current: {},
          imagesList: [],
          loading: false
        }
      }
    }
  })
  Vue.prototype.$eventBus = Vue.prototype.$eventBus || EVENT_BUS
  previewDirective(Vue, Vue.prototype.$eventBus)
  ```
  #### 2 在组件中引入preview组件
  js 部分
  ```javascript
  import PreviewWrapper from 'components/Preview/preview'
  ```
  html 部分, 在需要的dom元素上添加指令
  ```html
  // 例如
  <div v-preview="images">
    <img v-for="item in images" class="preview-image" :src="item.thumbUrl" :data-originalUrl="item.originalUrl"/>
  </div>
  ```
  </script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import PreviewWrapper from 'components/Preview/preview'
export default {
  name: 'demo-preview',
  data () {
    return {
      images: [{
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview1.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview1.jpg'
      }, {
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview2.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview2.jpg'
      }, {
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview3.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview3.jpg'
      }, {
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview6.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview6.jpg'
      }, {
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview7.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview7.jpg'
      }, {
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview8.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview8.jpg'
      }, {
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview9.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview9.jpg'
      }, {
        title: '',
        thumbUrl: 'http://oayhezji6.bkt.clouddn.com/preview10.jpg',
        originalUrl: 'http://oayhezji6.bkt.clouddn.com/preview10.jpg'
      }]
    }
  },
  components: {
    PreviewWrapper,
    DocMd
  }
}
</script>

<style lang="less">
.preview-image {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 5px;
  cursor: pointer;
}
</style>
