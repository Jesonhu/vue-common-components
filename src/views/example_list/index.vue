<template>
  <div class="p-example-list">
    <div class="p-example">
    <h5>组件列表</h5>
    <div class="wrap">
      <ul class="list">
        <li class="item">
          <router-link to="/example/slidemenu">侧边菜单</router-link>
        </li>
        <li class="item">
          <router-link to="/example/header">顶部菜单</router-link>
        </li>
        <li class="item">
          <router-link to="/example/gridmenu">九宫格菜单</router-link>
        </li>
        <li class="item">
          <router-link to="/example/swiper">swiper轮播</router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'p-example-list',
    data() { return {} }
  }
</script>
