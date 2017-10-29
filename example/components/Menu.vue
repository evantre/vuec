<template>
<div>
<h1>Menu</h1>

<div class="demo">
  <vc-menu @change="onChange">
    <vc-menu-item active>美购</vc-menu-item>
    <sub-menu title="订单">
      <vc-menu-item>订单 1</vc-menu-item>
      <vc-menu-item>退款单 1</vc-menu-item>
      <vc-menu-item>订单 2</vc-menu-item>
      <vc-menu-item>退款单 2</vc-menu-item>
    </sub-menu>
    <vc-menu-item :data="'test'">退款单</vc-menu-item>
  </vc-menu>
</div>

<div class="demo">
  <vc-menu
    mode="vertical"
    @change="onChange">
    <vc-menu-item active>美购</vc-menu-item>
    <sub-menu title="订单">
      <vc-menu-item>订单 1</vc-menu-item>
      <vc-menu-item>退款单 1</vc-menu-item>
      <vc-menu-item>订单 2</vc-menu-item>
      <vc-menu-item>退款单 2</vc-menu-item>
    </sub-menu>
    <vc-menu-item :data="'test'">退款单</vc-menu-item>
  </vc-menu>
</div>

<doc-md>
<script type="text/html">
``` html
<vc-menu @change="onChange">
  <vc-menu-item active>美购</vc-menu-item>
  <sub-menu title="订单">
    <vc-menu-item>订单 1</vc-menu-item>
    <vc-menu-item>退款单 1</vc-menu-item>
    <vc-menu-item>订单 2</vc-menu-item>
    <vc-menu-item>退款单 2</vc-menu-item>
  </sub-menu>
  <vc-menu-item>订单</vc-menu-item>
  <vc-menu-item :data="'test'">退款单</vc-menu-item>
</vc-menu>

<vc-menu
  mode="vertical"
  @change="onChange">
  <vc-menu-item active>美购</vc-menu-item>
  <sub-menu title="订单">
    <vc-menu-item>订单 1</vc-menu-item>
    <vc-menu-item>退款单 1</vc-menu-item>
    <vc-menu-item>订单 2</vc-menu-item>
    <vc-menu-item>退款单 2</vc-menu-item>
  </sub-menu>
  <vc-menu-item :data="'test'">退款单</vc-menu-item>
</vc-menu>
```

``` js
import VcMenu from 'components/Menu/Menu'
import VcMenuItem from 'components/Menu/MenuItem'
import SubMenu from 'components/Menu/SubMenu'

export default {
  components: {
    VcMenu,
    SubMenu,
    VcMenuItem
  },

  data () {
    return {}
  },

  methods: {
    onChange (data, idx) {
      console.log(data, idx)
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
import VcMenu from 'components/Menu/Menu'
import VcMenuItem from 'components/Menu/MenuItem'
import SubMenu from 'components/Menu/SubMenu'

export default {
  components: {
    VcMenu,
    SubMenu,
    VcMenuItem,
    DocMd
  },

  data () {
    return {}
  },

  methods: {
    onChange (data, idx) {
      console.log(data, idx)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
