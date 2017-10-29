<template>
<div>
<h1>Datepicker</h1>

<div class="demo">
  <date-picker
    v-model="value"
    format="YYYY-MM-DD HH:mm:ss"
    time></date-picker>
</div>

<doc-md>
<script type="text/html">
``` html
<date-picker
  v-model="value"
  format="YYYY-MM-DD HH:mm:ss"
  time></date-picker>
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import DatePicker from 'components/DatePicker/DatePicker'

export default {
  components: {
    DatePicker,
    DocMd
  },

  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
</style>
