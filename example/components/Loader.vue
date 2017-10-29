<template>
<div>
<h1>Loader</h1>

<div class="demo">
  <div class="content">
    <loader text="拼命加载中..." v-show="loading"></loader>
    <p>A loader alerts a user to wait for an activity to complete.
      A loader alerts a user to wait for an activity to complete.
      A loader alerts a user to wait for an activity to complete.
      A loader alerts a user to wait for an activity to complete.
      A loader alerts a user to wait for an activity to complete.</p>
  </div>

  <button @click="toggle">toggle loading</button>
</div>

<doc-md>
<script type="text/html">
``` html
<div class="content">
  <loader
    text="拼命加载中..."
    v-show="loading"></loader>

  <p>A loader alerts a user to wait for an activity to complete.
    A loader alerts a user to wait for an activity to complete.
    A loader alerts a user to wait for an activity to complete.
    A loader alerts a user to wait for an activity to complete.
    A loader alerts a user to wait for an activity to complete.</p>

  <button @click="toggle">toggle loading</button>
</div>
```
``` css
.content {
  position: relative;
}
```
``` js
export default {
  components: {
    Loader
  },

  data () {
    return {
      loading: true
    }
  },

  methods: {
    toggle () {
      this.loading = !this.loading
    }
  }
}
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import Loader from 'components/Loader/Loader'

export default {
  components: {
    Loader,
    DocMd
  },

  data () {
    return {
      loading: true
    }
  },

  methods: {
    toggle () {
      this.loading = !this.loading
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  position: relative;
  height: 200px;
  margin-bottom: 10px;
  border: 1px solid #eee;
}
</style>
