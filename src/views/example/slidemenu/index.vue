<template>
  <div class="p-slidemenu">
    <button @click="onBtnHandle">操作</button>

    <slide-menu
    :isShow="isShowSlideMenu"
    @mask="slideMenuHandle">

      <menu-item @select="selectHandle"
      index="1" path="1"><span class="menu-item-icon"></span>处理中心</menu-item>

      <sub-menu-item index="2">
        <template slot="title">我的工作台</template>
        <menu-item index="2-1" path="2-1">选项1</menu-item>
        <menu-item index="2-2" path="2-2">选项2</menu-item>
        <menu-item index="2-3" path="2-3"><a href="">选项3</a></menu-item>
      </sub-menu-item>

    </slide-menu>

  </div>
</template>

<script type="text/ecmascript-6">
    import slideMenu from '@/components/slidemenu/index'
    import menuItem from '@/components/menu_item/index'
    import subMenuItem from '@/components/submenu/index'

    import { mapState } from 'vuex'

    export default {
      name: 'p-slideMenu',
      data () {
        return {
          isShowSlideMenu: true
        }
      },
      methods: {
        slideMenuHandle() {
          this.isShowSlideMenu = false;
        },
        onBtnHandle() {
          this.isShowSlideMenu = !this.isShowSlideMenu;
        },
        selectHandle(key, value) {
          console.log(key, value);
        }
      },
      computed: {
        // ...mapState({
        //   isLogin: state => state.user.localUserInfo.loginStatus,
        //   userName: state => state.user.localUserInfo.tel
        // })
      },
      components: {
        slideMenu,
        menuItem,
        subMenuItem
      }
    }
</script>

<style>
.p-slidemenu {
  height: 100%;
}
</style>

