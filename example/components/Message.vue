<template>
<div>
<h1>Message</h1>

<div class="demo">
  <button @click="onClick">show message</button>
</div>

<doc-md>
<script type="text/html">
``` html
<button @click="onClick">show message</button>
```
``` js
import message from 'components/Message'

export default {
  methods: {
    onClick () {
      message({
        content: 'This is a prompt message for success, and it will disappear in 10 seconds'
      })
    }
  }
}
```
</script>
</doc-md>

</div>
</template>

<script>
import message from 'components/Message'
import DocMd from './DocMd'

export default {
  components: {
    DocMd
  },

  methods: {
    onClick () {
      message({
        content: 'This is a prompt message for success, and it will disappear in 10 seconds'
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
