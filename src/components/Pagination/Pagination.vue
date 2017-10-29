<template>
<div v-if="last > 1" class="pagination">
  <a
    class="prev p-btn"
    @click="select('prev')">上一页</a>

  <a
    class="p-btn"
    :class="{'active': current === 1}"
    @click="select(1)">1</a>

  <div v-if="otherPages.length > 0" class="other-pages">
    <a v-if="morePrev" class="more">...</a>
    <a
      class="p-btn"
      :class="{'active': current === page}"
      v-for="page in otherPages"
      @click="select(page)">{{page}}</a>
    <a v-if="moreNext" class="more">...</a>
  </div>

  <a
    class="p-btn"
    :class="{'active': current === last}"
    @click="select(last)">{{last}}</a>

  <a
    class="next p-btn"
    @click="select('next')">下一页</a>
</div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },

  data () {
    return {
      morePrev: false,
      moreNext: false,
      otherPages: [],
      showPageNum: 7
    }
  },

  computed: {
    last () {
      return Math.ceil(this.total / this.pageSize)
    }
  },

  watch: {
    current: {
      handler () {
        this.setPages()
      },
      immediate: true
    },

    last () {
      this.setPages()
    }
  },

  methods: {
    setPages () {
      this.otherPages = []

      if (this.last <= this.showPageNum) {
        for (let i = 2; i < this.last; i++) {
          this.otherPages.push(i)
        }
        return
      }

      const current = this.current
      const halfShow = Math.floor(this.showPageNum / 2) - 1
      let start = current - halfShow
      let end = current + halfShow

      if (start < 2) {
        end += halfShow - start
        start = 2
      }
      if (end >= this.last) {
        start -= end - this.last + 1
        end = this.last - 1
      }

      for (let i = start; i <= end; i++) {
        this.otherPages.push(i)
      }

      let otherPages = this.otherPages
      let lastIndex = otherPages.length - 1
      this.morePrev = otherPages[0] && otherPages[0] > 2
      this.moreNext = otherPages[lastIndex] && otherPages[lastIndex] < this.last - 1
    },

    select (page) {
      if (page === this.current) return

      switch (page) {
        case 'prev':
          if (this.current === 1) return
          this.$emit('change', this.current - 1)
          break

        case 'next':
          if (this.current === this.last) return
          this.$emit('change', this.current + 1)
          break

        default:
          this.$emit('change', page)
          break
      }
    }
  }
}
</script>

<style lang="less">
.pagination {
  font-size: 0;
  user-select: none;

  .other-pages {
    display: inline-block;
  }

  .p-btn {
    display: inline-block;
    margin-right: 6px;
    padding: 6px 10px;
    vertical-align: middle;
    font-size: 12px;
    color: #333;
    background-color: #fff;
    cursor: pointer;

    &:hover,
    &.active {
      color: #3ADBD2;
    }
  }

  .more {
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    font-size: 12px;
  }
}
</style>
