<template>
  <li class="c-menu-item" @click="onMenuItemHandle">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'c-menu-item',
  props: {
    index: {
      type: String,
      required: true
    },
    path: String,
    disabled: Boolean
  },
  data() {
    return {}
  },
  methods: {
    onMenuItemHandle() {
      console.log(this.$root);
      if (!this.disabled) {
        // this.$emit('item-click', this.index, this.path);
        this.$emit('select', this.index, this.path);
        this.$root.$emit('select', this.index, this.path);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-menu-item {
    height: 60px;
    line-height: 60px;
    display: block;
    text-align: left;
    a {
      text-decoration: none;
    }
  }
  .c-menu-item.s-active {
    background-color:red;
    color:#fff;
  }
</style>


