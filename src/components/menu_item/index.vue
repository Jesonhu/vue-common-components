<template>
  <li class="c-menu-item" @click="onMenuItemHandle">
    <slot></slot>
  </li>
</template>

<script>
import eventHub from '@/utils/vm';

export default {
  name: 'c-menu-item',
  props: {
    index: {
      type: [String, Number],
      required: true
    },
    path: String,
    /** 失效 */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    onMenuItemHandle() {
      if (!this.disabled) {
        console.log('选择了');
        // this.$emit('item-click', this.index, this.path);
        this.$emit('select', this.index, this.path);
        eventHub.$emit('item-click', this.index, this.path);
        // this.$root.$emit('select', this.index, this.path);
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


