<template>
  <div class="p-gridmenu">
    <grid-menu
    @itemClick="onMenuClickHandle"></grid-menu>

    <p style="height:10px"></p>
    <grid-menu
    @itemClick="onMenuClickHandle2"
    rowNumber=5
    text-color=green
    icon-color=#E43E38
    :menuList="menuList2"></grid-menu>

    <p style="height:10px"></p>
    <grid-menu
    @itemClick="onMenuClickHandle3"
    rowNumber=4
    background-color=green></grid-menu>
  </div>
</template>

<script>
  import gridMenu from '@/components/gridMenu/index';

  export default {
    name: 'p-gridMenu',
    data() {
      return {
        menuList: [],
        menuList2: [{
            name: "菜单1",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单2",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单3",
            iconName: "iconfont icon-error"
          },
          {
            name: "菜单4",
            iconName: "iconfont icon-account"
          },
          {
            name: "菜单5",
            iconName: "iconfont icon-xiaoxi"
          },
          {
            name: "菜单6",
            iconName: "iconfont icon-user"
          },
          {
            name: "菜单7",
            iconName: "iconfont icon-addition"
          },
          {
            name: "菜单8",
            iconName: "iconfont icon-user"
          },
          {
            name: "菜单7",
            iconName: "iconfont icon-addition"
          },
          {
            name: "菜单8",
            iconName: "iconfont icon-user"
          }]
      }
    },
    methods: {
      onMenuClickHandle(index) {
        console.log('点击', index);
      },
      onMenuClickHandle2(index) {
        console.log('点击2', index);
      },
      onMenuClickHandle3(index) {
        console.log('点击3', index);
      }
    },
    components: {
      gridMenu
    }
  }
</script>
