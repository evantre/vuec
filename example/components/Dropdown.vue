<template>
<div>
<h1>Dropdown</h1>

<div class="demo">
  <dropdown>
    <dropdown-header>items</dropdown-header>
    <dropdown-menu>
      <dropdown-item>
        <div @click="onClick">item 1</div>
      </dropdown-item>
      <dropdown-item>item 2</dropdown-item>
      <dropdown-item>item 3</dropdown-item>
      <dropdown-item>item 4</dropdown-item>
      <dropdown-item>item 5</dropdown-item>
    </dropdown-menu>
  </dropdown>

  <dropdown trigger="hover">
    <dropdown-header>items hover</dropdown-header>
    <dropdown-menu>
      <dropdown-item>
        <div @click="onClick">hover item 1</div>
      </dropdown-item>
      <dropdown-item>hover item 2</dropdown-item>
      <dropdown-item>hover item 3</dropdown-item>
      <dropdown-item>hover item 4</dropdown-item>
      <dropdown-item>hover item 5</dropdown-item>
    </dropdown-menu>
  </dropdown>
</div>

<doc-md>
<script type="text/html">
``` html
<dropdown>
  <dropdown-header>items</dropdown-header>
  <dropdown-menu>
    <dropdown-item>
      <div @click="onClick">item 1</div>
    </dropdown-item>
    <dropdown-item>item 2</dropdown-item>
    <dropdown-item>item 3</dropdown-item>
    <dropdown-item>item 4</dropdown-item>
    <dropdown-item>item 5</dropdown-item>
  </dropdown-menu>
</dropdown>

<dropdown trigger="hover">
  <dropdown-header>items hover</dropdown-header>
  <dropdown-menu>
    <dropdown-item>
      <div @click="onClick">hover item 1</div>
    </dropdown-item>
    <dropdown-item>hover item 2</dropdown-item>
    <dropdown-item>hover item 3</dropdown-item>
    <dropdown-item>hover item 4</dropdown-item>
    <dropdown-item>hover item 5</dropdown-item>
  </dropdown-menu>
</dropdown>
```

``` js
export default {
  methods: {
    onClick () {
      console.log('click')
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
import Dropdown from 'components/Dropdown/Dropdown'
import DropdownHeader from 'components/Dropdown/DropdownHeader'
import DropdownMenu from 'components/Dropdown/DropdownMenu'
import DropdownItem from 'components/Dropdown/DropdownItem'

export default {
  components: {
    Dropdown,
    DropdownHeader,
    DropdownMenu,
    DropdownItem,
    DocMd
  },

  data () {
    return {}
  },

  methods: {
    onClick () {
      window.alert('click')
    }
  }
}
</script>

<style lang="less">
.vc-dropdown {
  margin-right: 20px;
  .vc-dropdown-menu {
    margin-top: 8px;
  }
}
</style>
