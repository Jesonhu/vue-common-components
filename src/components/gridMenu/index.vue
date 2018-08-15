<template>
  <div class="p-gridMenu">
    <ul class="list clearfix"
    :class="[`list-${rowNumber}`]"
    :style="{backgroundColor: backgroundColor, textColor: textColor}">
      <li class="item"
      v-for="(item, index) in menuList"
      :key="index"
      @click="onItemClickHandle(index)">
        <div class="main-wrap">
          <span class="icon-wrap" v-if="item && item.iconName">
            <i :class="[item.iconName]" class=""
            :style="{color:iconColor}"></i>
          </span>
          <span class="name-wrap" 
          v-if="item && item.name"
          :style="{color:textColor}">
            {{item.name}}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "c-gridMenu",
  props: {
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    textColor: {
      type: String,
      default: '#333'
    },
    iconColor: {
      type: String,
      default: '#333'
    },
    rowNumber: {
      type: [String, Number],
      default: 4
    },
    menuList: {
      default() {
        return [
          {
            name: "菜单1",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单2",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单3",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单4",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单5",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单6",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单7",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单8",
            iconName: "iconfont icon-account"
          }
        ];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    onItemClickHandle(index) {
      // console.log('组件点击', index);
      this.$emit('itemClick', index);
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/mixin.scss';

.p-gridMenu {
  .list {
    .item {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      height: pxToRem(70px);
      text-align: center;
      font-size: 18px;
      > * {
      }
      .main-wrap {
        > * {
          display:block;
        }
        .icon-wrap {
          margin-bottom:pxToRem(8px);
          > * {
            font-size:25px;
          }
        }
      }
    }
  }
  .list-5 .item {
      box-sizing: border-box;
      width: 20%;
      float: left;
  }
  .list-4 .item {
      box-sizing: border-box;
      width: 25%;
      float: left;
  }
  .list-3 .item {
      box-sizing: border-box;
      width: 33.333%;
      float: left;
  }
  .list-3 .item {
      box-sizing: border-box;
      width: 50%;
      float: left;
  }
}
</style>

