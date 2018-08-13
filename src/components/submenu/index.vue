<template>
  <li class="submenu-wrap menu-item">
    <div class="submenu__title" @click="onSubMenuTitleHandle"
    :class="{'s-active': isMenuTitleHandle}">
      <slot name="title"></slot>
      <span class="caret"
      :class="{'s-active': isMenuTitleHandle}"></span>
    </div>
    <ul class="submenu-list"
    :class="{'s-active': isMenuTitleHandle}">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'c-submenu',
  data() {
    return {
      isMenuTitleHandle: false
    }
  },
  methods: {
    onSubMenuTitleHandle() {
      this.isMenuTitleHandle = !this.isMenuTitleHandle;
    }
  }
}
</script>

<style>
  ul,
  li {
    list-style: none;
    padding:0;
    margin:0;
  }
</style>


