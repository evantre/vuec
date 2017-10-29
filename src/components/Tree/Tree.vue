<template>
<ul class="vc-tree">
  <li v-for="(d, i) in data" class="vc-tree-item">
    <div
      class="vc-tree-title"
      @click="onClick($event, i, d.label, d.children && d.children.length)">{{d.label}}</div>
    <tree
      v-if="d.children && d.children.length"
      v-show="expanded[i]"
      :data="d.children"
      @click="onClickTree"></tree>
  </li>
</ul>
</template>

<script>
export default {
  name: 'Tree',

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      expanded: {}
    }
  },

  methods: {
    onClick (e, idx, label, hasChildren) {
      e.stopPropagation()
      if (hasChildren) {
        this.$set(this.expanded, idx, !this.expanded[idx])
      }
      this.emit(label)
    },

    onClickTree (label) {
      this.emit(label)
    },

    emit (label) {
      this.$emit('click', label)
    }
  }
}
</script>

<style lang="less">
.vc-tree {
  font-size: 14px;

  ul {
    margin-left: 20px;
  }

  .vc-tree-title {
    cursor: pointer;
  }

  .vc-tree-item {
    margin: 10px 0;
    border-radius: 2px;
  }
}
</style>
