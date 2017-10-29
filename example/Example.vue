<template>
<div id="example">
  <header>
    <h1>Vue Components</h1>
    <nav>
      <ul>
        <li><router-link to="/switch">Switch 开关</router-link></li>
        <li><router-link to="/slider">Slider 滑动条</router-link></li>
        <li><router-link to="/progress">Progress 进度条</router-link></li>
        <li><router-link to="/loader">Loader 加载</router-link></li>
        <li><router-link to="/backtop">BackTop 返回顶部</router-link></li>

        <li><router-link to="/popup">Popup 弹出层</router-link></li>
        <li><router-link to="/dropdown">Dropdown 下拉菜单</router-link></li>
        <li><router-link to="/select">Select 选择器</router-link></li>
        <li><router-link to="/modal">Modal 弹框</router-link></li>
        <li><router-link to="/notification">Notification 通知</router-link></li>
        <li><router-link to="/message">Message 消息</router-link></li>

        <li><router-link to="/tabs">Tabs 标签页</router-link></li>
        <li><router-link to="/breadcrumb">Breadcrumb 面包屑</router-link></li>
        <li><router-link to="/collapse">Collapse 折叠面板</router-link></li>
        <li><router-link to="/menu">Menu 导航菜单</router-link></li>
        <li><router-link to="/tree">Tree 树形控件</router-link></li>
        <li><router-link to="/pagination">Pagination 分页</router-link></li>
        <li><router-link to="/datepicker">Datepicker 日期</router-link></li>
        <li><router-link to="/carousel">Carousel 走马灯</router-link></li>

        <!-- <li><router-link to="/scrollbar">Scrollbar 滚动条</router-link></li>
        <li><router-link to="/preview">Preview 图片浏览</router-link></li> -->
      </ul>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</div>
</template>

<script>
export default {
  name: 'Example'
}
</script>

<style lang="less">
body,
main,
nav,
div,
p,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

ul {
  list-style: none;
}

body {
  font-size: 14px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  color: #2c3e50;
}

header {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  overflow: auto;
  border-right: 1px solid #eee;

  h1 {
    font-size: 24px;
    font-weight: 400;
    margin: 16px;
    text-align: center;
    color: #108ee9;
  }

  a {
    display: block;
    padding: 0 16px;
    line-height: 42px;
    border-right: 3px solid transparent;
    font-size: 14px;
    color: #666;
    text-decoration: none;

    &.router-link-active {
      color: #108ee9;
      border-right-color: #108ee9;
      background-color: #ecf6fd;
    }
  }
}

main {
  margin-left: 240px;
  padding: 20px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    color: #666;
  }
}

.demo {
  margin: 20px 0;
}
</style>

<style src="github-markdown-css">
