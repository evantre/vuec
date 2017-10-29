<template>
<div>
<h1>Tree</h1>

<div class="demo">
  <tree :data="treeData" @click="onClick"></tree>
</div>

<doc-md>
<script type="text/html">
``` html
<tree :data="treeData"></tree>
```

``` js
let treeData = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
]
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import Tree from 'components/Tree/Tree'

let treeData = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
]

export default {
  components: {
    Tree,
    DocMd
  },

  data () {
    return {
      treeData
    }
  },

  methods: {
    onClick (label) {
      console.log(label)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
