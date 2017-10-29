<template lang="html">
  <div>
    <h1>滚动条</h1>
    简单点说话的方式简单点，先看下面的例子：

    <gm-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
    <ul>
    <li>演员</li>
  <li>作词：薛之谦</li>
  <li>作曲：薛之谦</li>
  <li>演唱：薛之谦</li>
  <li>简单点说话的方式简单点</li>
  <li>递进的情绪请省略</li>
  <li>你又不是个演员</li>
  <li>别设计那些情节</li>
  <li>没意见我只想看看你怎么圆</li>
  <li>你难过的太表面 像没天赋的演员</li>
  <li>观众一眼能看见</li>
  <li>该配合你演出的我演视而不见</li>
  <li>在逼一个最爱你的人即兴表演</li>
  <li>什么时候我们开始收起了底线</li>
  <li>顺应时代的改变看那些拙劣的表演</li>
  <li>可你曾经那么爱我干嘛演出细节</li>
  <li>我该变成什么样子才能延缓厌倦</li>
  <li>原来当爱放下防备后的这些那些</li>
  <li>才是考验</li>
  <li>没意见你想怎样我都随便</li>
  <li>你演技也有限</li>
  <li>又不用说感言</li>
  <li>分开就平淡些</li>
  <li>该配合你演出的我演视而不见</li>
  <li>别逼一个最爱你的人即兴表演</li>
  <li>什么时候我们开始没有了底线</li>
  <li>顺着别人的谎言被动就不显得可怜</li>
  <li>可你曾经那么爱我干嘛演出细节</li>
  <li>我该变成什么样子才能配合出演</li>
  <li>原来当爱放下防备后的这些那些</li>
  <li>都有个期限</li>
  <li>其实台下的观众就我一个</li>
  <li>其实我也看出你有点不舍</li>
  <li>场景也习惯我们来回拉扯</li>
  <li>还计较着什么</li>
  <li>其实说分不开的也不见得</li>
  <li>其实感情最怕的就是拖着</li>
  <li>越演到重场戏越哭不出了</li>
  <li>是否还值得</li>
  <li>该配合你演出的我尽力在表演</li>
  <li>像情感节目里的嘉宾任人挑选</li>
  <li>如果还能看出我有爱你的那面</li>
  <li>请剪掉那些情节让我看上去体面</li>
  <li>可你曾经那么爱我干嘛演出细节</li>
  <li>不在意的样子是我最后的表演</li>
  <li>是因为爱你我才选择表演 这种成全</li>
  </ul>
    </gm-scrollbar>
<doc-md>
<script type="text/html">

组件 template如下：
``` html
<gm-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
  ......
</gm-scrollbar>
```
这个组件借鉴了vue-prefect-scrollbar，稍微做了下修改

github地址如下：
https://github.com/Degfy/vue-perfect-scrollbar

我们需要安装[perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar)依赖，引入相应的css样式文件
```javascript
$ npm install perfect-scrollbar -D
```
定义我们模拟的滚动条区域的样式：
```css
// 例如
.scroll-area {
  position: relative; // 模拟滚动条的是以改元素绝对定位的，否则，滚动条的位置会发生变化
  height: 400px; // 设置超出高度值
}
```
监听滚动条的事件, 具体可查看[API](https://github.com/noraesae/perfect-scrollbar)
```javascript
methods: {
  scrollHanle (evt) {
    console.log(evt)
  }
}
```
setting配置如下, 具体可查看[API](https://github.com/noraesae/perfect-scrollbar)
```javascript
data () {
  return {
    settings: {
      maxScrollbarLength: 40,
      suppressScrollX: true,
      wheelSpeed: 2,
      wheelPropagation: true
    }
  }
}
```

</script>
</doc-md>



  <div style="height:200px;"> </div>
</div>
</template>

<script>
import DocMd from './DocMd'
import GmScrollbar from 'components/Scrollbar/scrollbar'
export default {
  components: {
    GmScrollbar,
    DocMd
  },
  data () {
    return {
      settings: {
        maxScrollbarLength: 40,
        suppressScrollX: true,
        wheelPropagation: true
      }
    }
  },
  methods: {
    scrollHanle (evt) {
      console.log(evt)
    }
  }
}
</script>

<style lang="less">
.scroll-area {
  position: relative;
  height: 400px;
  background-color: #f8f8f8;
  ul {
    li {
      text-align: center;
      padding: 5px;
      list-style: none;
    }
  }
}
</style>
