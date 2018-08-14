<template>
  <div class="p-slidemenu">
    <button @click="onBtnHandle">操作</button>
    <div class="con-wrap" style="width:100%;height:1000px;background-color:green;"></div>
    <div class="con-wrap" style="width:100%;height:1000px;background-color:yellow;"></div>

    <slide-menu
    :isShow="isShowSlideMenu"
    @mask="slideMenuHandle">
      <template slot="header">
        <div class="header-wrap">
          这是头部
        </div>
      </template>

      <!-- <menu-item @select="selectHandle"
      index="1" path="1"><span class="menu-item-icon"></span>处理中心</menu-item>

      <sub-menu-item index="2">
        <template slot="title">我的工作台</template>
        <menu-item index="2-1" path="2-1">选项1</menu-item>
        <menu-item index="2-2" path="2-2">选项2</menu-item>
        <menu-item index="2-3" path="2-3"><a href="">选项3</a></menu-item>
      </sub-menu-item> -->

      <!-- <menu-item @select="selectHandle"
      v-for="(item, index) in sideMenuList"
      :key="index"
      :index="index"
      v-if="item && !item.children"
      path="1">
        <i class="item-icon iconfont icon-homebig"></i>
        <span>{{item.name}}</span>
      </menu-item>

      <sub-menu-item :index="index"
      v-else>
        <template slot="title">
          <i class="item-icon iconfont icon-homebig"></i>{{item.name}}
        </template>
        <menu-item :index="subIndex" path="2-1"
        v-for="(subItem, subIndex) in item.children"
        :key="subIndex"
        v-if="subItem && !subItem.children">
          <i class="item-icon iconfont icon-homebig"></i>{{subItem.name}}
        </menu-item>

        <sub-menu-item
        v-else>
          <template slot="title">{{subItem.name}}</template>
          <menu-item path="2-1"
          :index="subIndex"
          v-for="(thirdItem, thirdIndex) in subItem.children"
          :key="thirdIndex"
          v-if="thirdItem && !thirdItem.children">选项1</menu-item>
        </sub-menu-item>
      </sub-menu-item> -->

      <el-menu @select="handleSelect"
      background-color="#333"
      text-color="#fff"
      active-text-color="red"
      default-active="0"
      :default-openeds='["6-0", "6-0-0", "6-0-0-0", "6-0-0-0-0"]'
      :unique-opened=true
      >
        <el-menu-item
        v-for="(item, index) in sideMenuList"
        :key="index"
        :index="`${index}`"
        v-if="item && !item.children"><i class="item-icon iconfont icon-homebig"></i>{{item.name}}</el-menu-item>

        <el-submenu 
        v-else
        :index="`${index}`"
        >
          <template slot="title">{{item.name}}</template>
          
          <el-menu-item
          v-if="subItem && !subItem.children"
          :index="`${index}-${subIndex}`"
          v-for="(subItem, subIndex) in item.children"
          :key="`${index}-${subIndex}`">{{subItem.name}}</el-menu-item>
          <el-submenu v-else
          :index="`${index}-${subIndex}`">
            <template slot="title">{{subItem.name}}</template>

            <el-menu-item
            v-for="(thirdItem, thirdIndex) in subItem.children"
            :key="`${index}-${subIndex}-${thirdIndex}`"
            :index="`${index}-${subIndex}-${thirdIndex}`"
            v-if="thirdItem && !thirdItem.children">{{thirdItem.name}}</el-menu-item>
            <el-submenu
            v-else
            :index="`${index}-${subIndex}-${thirdIndex}`">
              <template slot="title">{{thirdItem.name}}</template>

              <el-menu-item
              v-for="(fourItem, fourIndex) in thirdItem.children"
              :key="`${index}-${subIndex}-${thirdIndex}-${fourIndex}`"
              :index="`${index}-${subIndex}-${thirdIndex}-${fourIndex}`"
              v-if="fourItem && !fourItem.children">{{fourItem.name}}</el-menu-item>

              <el-submenu
              v-else
              :index="`${index}-${subIndex}-${thirdIndex}-${fourIndex}`">
                <template slot="title">{{fourItem.name}}</template>

                <el-menu-item
                v-for="(fiveItem, fiveIndex) in fourItem.children"
                :key="`${index}-${subIndex}-${thirdIndex}-${fourIndex}-${fiveIndex}`"
                :index="`${index}-${subIndex}-${thirdIndex}-${fourIndex}-${fiveIndex}`"
                v-if="fiveItem && !fiveItem.children">{{fiveItem.name}}</el-menu-item>

              </el-submenu>

            </el-submenu>
          </el-submenu>
        </el-submenu>
        <!-- <el-menu-item index="99"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
      </el-menu>

      <!-- <template slot="footer">这是头部</template> -->

    </slide-menu>

  </div>
</template>

<script type="text/ecmascript-6">
import slideMenu from "@/components/slidemenu/index";
import menuItem from "@/components/menu_item/index";
import subMenuItem from "@/components/submenu/index";
import mockData from "@/utils/mockData.json";

import { mapState } from "vuex";

export default {
  name: "p-slideMenu",
  data() {
    return {
      isShowSlideMenu: true,
      sideMenuList: mockData.sideMenu,
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    slideMenuHandle() {
      this.isShowSlideMenu = false;
    },
    onBtnHandle() {
      this.isShowSlideMenu = !this.isShowSlideMenu;
    },
    selectHandle(key, value) {
      // console.log("using", key, value);
    },
    getElementMenuFilterValue(arr) {
      const length = arr.length;
      let newArr = [];
      for (let i = 0; i < length; i++) {
        newArr.push( arr[i].charAt(arr[i].length - 1) );
      }
      return newArr;
    },
    getMenuPath(arr) {
      let newArr = this.getElementMenuFilterValue(arr);
      const length = newArr.length;
      
      switch (length) {
        case 1:
          return this.sideMenuList[newArr[0]].path;
        case 2:
          return this.sideMenuList[newArr[0]].children[newArr[1]].path;
        case 3:
          return this.sideMenuList[newArr[0]].children[newArr[1]].children[newArr[2]].path;
        case 4:
          return this.sideMenuList[newArr[0]].children[newArr[1]].children[newArr[2]].children[newArr[3]].path;
        default:
          return this.sideMenuList[newArr[0]].children[newArr[1]].children[newArr[2]].children[newArr[3]].children[newArr[4]].path;
      }
    },
    handleSelect(key, keyPath) {
      // this.getElementMenuFilterValue(keyPath);
      console.log( this.getMenuPath(keyPath) );
    }
  },
  computed: {
    // ...mapState({
    //   isLogin: state => state.user.localUserInfo.loginStatus,
    //   userName: state => state.user.localUserInfo.tel
    // })
  },
  mounted() {},
  components: {
    slideMenu,
    menuItem,
    subMenuItem
  }
};
</script>

<style>
.p-slidemenu {
  height: 100%;
}
.header-wrap {
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
</style>

