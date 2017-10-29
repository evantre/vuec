<template>
<div>
<h1>Collapse</h1>

<h2>base</h2>

<div class="demo">
  <collapse>
    <collapse-pane>
      <collapse-title>This is panel header 1</collapse-title>
      <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
    </collapse-pane>
    <collapse-pane expanded>
      <collapse-title>This is panel header 2</collapse-title>
      <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
    </collapse-pane>
    <collapse-pane>
      <collapse-title>This is panel header 3</collapse-title>
      <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
    </collapse-pane>
  </collapse>
</div>

<doc-md>
<script type="text/html">
``` html
<collapse>
  <collapse-pane>
    <collapse-title>This is panel header 1</collapse-title>
    <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
  </collapse-pane>
  <collapse-pane expanded>
    <collapse-title>This is panel header 2</collapse-title>
    <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
  </collapse-pane>
  <collapse-pane>
    <collapse-title>This is panel header 3</collapse-title>
    <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
  </collapse-pane>
</collapse>
```
</script>
</doc-md>

<h2>accordion</h2>
<div class="demo">
  <collapse accordion>
    <collapse-pane>
      <collapse-title>This is panel header 1</collapse-title>
      <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
    </collapse-pane>
    <collapse-pane>
      <collapse-title>This is panel header 2</collapse-title>
      <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
    </collapse-pane>
    <collapse-pane>
      <collapse-title>This is panel header 3</collapse-title>
      <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
    </collapse-pane>
  </collapse>
</div>

<doc-md>
<script type="text/html">
``` html
<collapse accordion>
  <collapse-pane>
    <collapse-title>This is panel header 1</collapse-title>
    <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
  </collapse-pane>
  <collapse-pane>
    <collapse-title>This is panel header 2</collapse-title>
    <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
  </collapse-pane>
  <collapse-pane>
    <collapse-title>This is panel header 3</collapse-title>
    <collapse-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</collapse-content>
  </collapse-pane>
</collapse>
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import Collapse from 'components/Collapse/Collapse'
import CollapsePane from 'components/Collapse/CollapsePane'
import CollapseTitle from 'components/Collapse/CollapseTitle'
import CollapseContent from 'components/Collapse/CollapseContent'

export default {
  components: {
    DocMd,
    Collapse,
    CollapsePane,
    CollapseTitle,
    CollapseContent
  },

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

<style lang="less" scoped>
.collapse {
  margin-bottom: 20px;
}
</style>
