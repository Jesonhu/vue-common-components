<template>
  <div class="c-header"
  :style="{backgroundColor: backgroundColor, color: textColor}">

    <div class="left-wrap" @click="onLeftHandle">
      <slot name="left"></slot>
    </div>

    <div class="main-wrap" @click="onTitleHandle">
      <slot>{{title}}</slot>
    </div>

    <div class="right-wrap" @click="onRightHandle">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'c-header',
    props: {
      backgroundColor: {
        type: String,
        default: '#333'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    methods: {
      onLeftHandle() {
        this.$emit('clickLeft');
      },
      onTitleHandle() {
        this.$emit('clickTitle');
      },
      onRightHandle() {
        this.$emit('clickRight')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';

  .c-header {
    display:flex;
    align-items: center;
    flex-wrap: nowrap;
    width:100%;
    height: pxToRem(50px);
    background-color: #333;
    font-size:18px;
    color:#fff;

    .left-wrap {
      padding-left:10px;
      min-width: 45px;
      text-align: center;
    }
    
    .main-wrap {
      flex:1;
      text-align: center;
    }

    .right-wrap {
      padding-right:10px;
      min-width: 45px;
      text-align: center;
    }
  }
</style>

