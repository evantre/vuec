<template>
<div>
<h1>Breadcrumb</h1>

<h2>base</h2>
<div class="demo">
  <breadcrumb>
    <breadcrumb-item>
      <a href="#">link</a>
    </breadcrumb-item>
    <breadcrumb-item>item 1</breadcrumb-item>
    <breadcrumb-item>item 2</breadcrumb-item>
    <breadcrumb-item>item 3</breadcrumb-item>
  </breadcrumb>
</div>

<doc-md>
<script type="text/html">
``` html
<breadcrumb>
  <breadcrumb-item>
    <a href="#">link</a>
  </breadcrumb-item>
  <breadcrumb-item>item 1</breadcrumb-item>
  <breadcrumb-item>item 2</breadcrumb-item>
  <breadcrumb-item>item 3</breadcrumb-item>
</breadcrumb>
```
</script>
</doc-md>

<h2>divider</h2>
<div class="demo">
  <breadcrumb divider=">">
    <breadcrumb-item>
      <a href="#">link</a>
    </breadcrumb-item>
    <breadcrumb-item>item 1</breadcrumb-item>
    <breadcrumb-item>item 2</breadcrumb-item>
    <breadcrumb-item>item 3</breadcrumb-item>
  </breadcrumb>
</div>

<doc-md>
<script type="text/html">
``` html
<breadcrumb divider=">">
  <breadcrumb-item>
    <a href="#">link</a>
  </breadcrumb-item>
  <breadcrumb-item>item 1</breadcrumb-item>
  <breadcrumb-item>item 2</breadcrumb-item>
  <breadcrumb-item>item 3</breadcrumb-item>
</breadcrumb>
```
</script>
</doc-md>

</div>
</template>

<script>
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from 'components/Breadcrumb/BreadcrumbItem'
import DocMd from './DocMd'

export default {
  components: {
    Breadcrumb,
    BreadcrumbItem,
    DocMd
  }
}
</script>

<style lang="less" scoped>
</style>
