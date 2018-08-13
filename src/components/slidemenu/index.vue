<template>
  <div class="c-sidemenu" :class="{active:isOpen}">
    <div class="bg-wrap" @click="onMaskHandle"></div>
    <div class="con-wrap">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <ul class="c-menu-list">
          <slot></slot>
        </ul>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import slideMenu from '@/components/slideMenu/slideMenu'
import { mapState } from "vuex";

export default {
  name: "c-sidemenu",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: true
    };
  },
  computed: {
    // ...mapState({
    //   isLogin: state => state.user.localUserInfo.loginStatus,
    //   userName: state => state.user.localUserInfo.tel
    // })
  },
  watch: {
    isShow() {
      this.isOpen = this.isShow;
    }
  },
  mounted() {
    // this.$on('item-click', this.onItemClick);
    this.$root.$on('item-click', this.onItemClick);
    this.$on('submenu-click', this.onSubMenuClick);
  },
  methods: {
    onMaskHandle() {
      this.$emit("mask"); // 向header.vue发送请求
    },
    onItemClick(item) {
      const { index, path } = item;
      this.activeIndex = index;

      console.log('点击', item);
      this.$emit('select', index, path, item);
    },
    initOpenedMenu() {
      const index = this.activeIndex;
      const activeItem = this.items[index];
      if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

      let indexPath = activeItem.indexPath;

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach(index => {
        let submenu = this.submenus[index];
        submenu && this.openMenu(index, submenu.indexPath);
      });
    },
  },
  components: {
    // slideMenu
  }
};
</script>

<style lang="scss">
.c-sidemenu {
  z-index: 999;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s all linear;
  &.active {
    opacity: 1;
    visibility:inherit;
    .con-wrap {
      transform: translateX(0);
    }
  }

  .bg-wrap {
    z-index: 1;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  /* 内容容器 */
  .con-wrap {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 60%;
    max-width: 300px;
    background-color: #333;
    transform: translateX(-100%);
    transition: 0.3s transform linear;
    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }

    .c-menu-item {
      a {
        text-decoration: none;
      }
    }
    .c-menu-item.s-active {
      background-color:red;
      color:#fff;
    }

    .c-menu-item,
    .submenu-wrap .submenu__title {
      height: 40px;
      line-height: 40px;
      display: block;
      text-align: left;
      padding-left:20%;
    }

    .c-menu-item,
    .c-menu-item a,
    .submenu-wrap .submenu__title {
      color:#888;
    }

    .submenu-wrap .submenu__title.s-active {
      background-color:red;
      color:#fff;
    }

    .submenu-wrap .submenu__title .title {
      display:inline-block;
      float:left;
    }
    .submenu-wrap .submenu__title .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 10px;
      vertical-align: middle;
      border-top: 4px dashed;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
      transition: .3s transform linear;
    }
    .submenu-wrap .submenu__title .caret.s-active {
      transform:rotate(-90deg);
    }
    .submenu-wrap .c-menu-item {
      padding-left:30%;
    }

    .submenu-wrap > .submenu-list {
      height: 0;
      overflow: hidden;
      transition: .3s height linear;
    }
    .submenu-wrap > .submenu-list.s-active {
      height: auto;
    }
  }
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.login,
.no-login {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  width: 90%;
  height: 1.45rem;
  line-height: 1.45rem;
  border-radius: 3px;
  text-align: center;
  border: none;
  color: #fff;
  font-size: 14px;
  background-color: #c53c43;
  .link {
    display: block;
    color: #fff;
  }
}
</style>
