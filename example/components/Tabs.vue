<template>
<div>
<h1>Tabs</h1>

<div class="demo">
  <tabs>
    <tab-pane>
      <tab-title>Tab 1</tab-title>
      <tab-content>Content of Tab Pane 1</tab-content>
    </tab-pane>
    <tab-pane active>
      <tab-title>Tab 2</tab-title>
      <tab-content>Content of Tab Pane 2</tab-content>
    </tab-pane>
    <tab-pane>
      <tab-title>Tab 3</tab-title>
      <tab-content>Content of Tab Pane 3</tab-content>
    </tab-pane>
  </tabs>
</div>

<doc-md>
<script type="text/html">
``` html
<tabs>
  <tab-pane>
    <tab-title>Tab 1</tab-title>
    <tab-content>Content of Tab Pane 1</tab-content>
  </tab-pane>
  <tab-pane active>
    <tab-title>Tab 2</tab-title>
    <tab-content>Content of Tab Pane 2</tab-content>
  </tab-pane>
  <tab-pane>
    <tab-title>Tab 3</tab-title>
    <tab-content>Content of Tab Pane 3</tab-content>
  </tab-pane>
</tabs>
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import Tabs from 'components/Tabs/Tabs'
import TabPane from 'components/Tabs/TabPane'
import TabTitle from 'components/Tabs/TabTitle'
import TabContent from 'components/Tabs/TabContent'

export default {
  components: {
    Tabs,
    TabPane,
    TabTitle,
    TabContent,
    DocMd
  },

  data () {
    return {
    }
  },

  methods: {
    onClick () {
      console.log('tabs click')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
