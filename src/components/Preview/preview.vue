<template lang="html">
  <transition name="viewer">
    <div class="viewer-container" v-if="show">
      <svg width="64" height="64" viewBox="0 0 64 64">
				<path id="arrow-left" d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z"></path>
			</svg>
      <svg width="64" height="64" viewBox="0 0 64 64">
  			<path id="arrow-right" d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z"></path>
  		</svg>
      <div class="viewer-header">
        <div class="viewer-title" v-html="preview.current.title"></div>
        <span class="viewer-button" @click="close">关闭</span>
      </div>
      <img class="viewer-image" :src="originalUrl" alt="" :style="getPosition">
      <div class="viewer-loader" v-show="loading">
        <span style="color: red">加载中。。。</span>
      </div>
      <div class="viewer-navs">
        <a class="prev" @click.stop="prevAction">
          <span class="icon-wrap">
            <svg class="icon" width="32" height="32" viewBox="0 0 64 64"><use xlink:href="#arrow-left"></use></svg>
          </span>
        </a>
        <a class="next" @click.stop="nextAction">
          <span class="icon-wrap">
            <svg class="icon" width="32" height="32" viewBox="0 0 64 64"><use xlink:href="#arrow-right"></use></svg>
          </span>
        </a>
      </div>
      <div class="viewer-footer"></div>

    </div>
  </transition>
</template>
<script>
export default {
  name: 'preview-wrapper',
  data () {
    return {
    }
  },
  computed: {
    preview () {
      return this.$eventBus.GM_PREVIEW
    },
    show () {
      return this.$eventBus.GM_PREVIEW.show
    },
    originalUrl () {
      return this.$eventBus.GM_PREVIEW.current.originalUrl
    },
    loading () {
      return this.$eventBus.GM_PREVIEW.loading
    },
    getPosition () {
      let current = this.$eventBus.GM_PREVIEW.current
      if (current.originalUrl) {
        let aspectRatio = current.naturalWidth / current.naturalHeight
        let viewerWidth = window.innerWidth
        let viewerHeight = window.innerHeight
        let width = window.innerWidth
        let height = window.innerHeight
        if (viewerHeight * aspectRatio > viewerWidth) {
          height = viewerWidth / aspectRatio
        } else {
          width = viewerHeight * aspectRatio
        }
        width = Math.min(width * 0.95, current.naturalWidth)
        height = Math.min(height * 0.95, current.naturalHeight)
        return {
          width: width + 'px',
          height: height + 'px'
        }
      }
      return {}
    }
  },
  mounted () {
    let self = this
    window.addEventListener('click', function () {
      self.close()
    }, false)
  },
  methods: {
    close () {
      this.$eventBus.GM_PREVIEW.show = false
    },
    prevAction () {
      let imagesList = this.$eventBus.GM_PREVIEW.imagesList
      let curIndex = this.$eventBus.GM_PREVIEW.current.index
      let preIndex = curIndex >= 2 ? --curIndex : 1
      this.$eventBus.GM_PREVIEW.current = imagesList[preIndex - 1]
    },
    nextAction () {
      let imagesList = this.$eventBus.GM_PREVIEW.imagesList
      let curIndex = this.$eventBus.GM_PREVIEW.current.index
      let totalIndex = imagesList.length
      let nextIndex = curIndex >= totalIndex ? totalIndex : ++curIndex
      this.$eventBus.GM_PREVIEW.current = imagesList[nextIndex - 1]
    }
  },
  beforeDestroy () {
    let self = this
    window.removeEventListener('click', function () {
      self.close()
    })
  }
}
</script>
<style lang="less" scoped>
svg {
  fill: transparent;
  position: absolute;
  top: 0;
}
.viewer-enter, .viewer-leave-active{
  opacity: 0;
}
.viewer-enter-active, .viewer-leave-active{
  transition: .35s;
}
.viewer-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  z-index: 9999;
}
.prev, .next {
  position: absolute;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  -ms-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  cursor: pointer;
  .icon-wrap {
    position: relative;
    padding: 10px;
    // background-color: #fff;
    display: inline-block;
  }
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
.viewer-header {
  position: relative;
  top:0;
  height: 4rem;
}
.viewer-button {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 4rem;
  padding: 0 2em;
  color: #fff;
  cursor: pointer;
}
.viewer-image {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -ms-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
.viewer-loader {
  display: inline-block;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -ms-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
.icon-wrap .icon {
  fill: #fff;
  position: relative;
}
</style>
