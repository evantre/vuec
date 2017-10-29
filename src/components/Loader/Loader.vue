<template>
<div class="vc-loader">
  <div class="vc-loader-spin">{{text}}</div>
</div>
</template>

<script>
export default {
  props: {
    text: String,
    default: ''
  }
}
</script>

<style lang="less">
.vc-loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  font-size: 12px;
  color: #20a0ff;
  background-color: rgba(255,255,255,.9);

  .vc-loader-spin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding-top: 40px;

    &:before,
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      width: 32px;
      height: 32px;
      margin: auto;
      border-radius: 16px;
    }
    &:before {
      border: 2px solid rgba(0,0,0,.05);
    }
    &:after {
      animation: vc-loader .6s linear;
      animation-iteration-count: infinite;
      border-color: #20a0ff transparent transparent;
      border-style: solid;
      border-width: 2px;
      box-shadow: 0 0 0 1px transparent;
    }
  }
}

@keyframes vc-loader {
  from {
      transform: rotate(0)
  }
  to {
      transform: rotate(360deg)
  }
}
</style>
