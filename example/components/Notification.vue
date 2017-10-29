<template>
<div>
<h1>Notification</h1>

<div class="demo">
  <button @click="onNotify">notify</button>
</div>

<doc-md>
<script type="text/html">
``` html
<button @click="onNotify">test</button>
```
``` js
import notify from 'components/Notification'
import DocMd from './DocMd'

export default {
  components: {
    Notification
  },

  methods: {
    onNotify () {
      notify({
        title: 'Notification Title',
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.'
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
import notify from 'components/Notification'
import DocMd from './DocMd'

export default {
  components: {
    DocMd
  },

  methods: {
    onNotify () {
      notify({
        title: 'Notification Title',
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.'
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
