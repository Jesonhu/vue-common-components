<template>
  <div class="p-header">
    <v-header>
      <template slot="left">
        首页
      </template>

      <div>
        中间文字
      </div>

      <template slot="right">
        <i class="iconfont icon-category"></i>
      </template>
    </v-header>
    <p style="height:10px;"></p>
    <v-header>

      <div style="color:red">
        中间文字
      </div>

      <template slot="right">
        <i class="iconfont icon-category"></i>
      </template>
    </v-header>

    <p style="height:10px;"></p>
    <v-header>

      <div>
        中间文字
      </div>
    </v-header>

    <p style="height:10px;"></p>
    <v-header>
      <template slot="left">
        <i class="iconfont icon-category"></i>
      </template>
      <div>
        中间文字
      </div>
    </v-header>

    <p style="height:10px;"></p>
    <v-header
    background-color="#545c64"
    text-color="green"
    title="">

      <template slot="right">
        <i class="iconfont icon-category i1"></i>
      </template>
    </v-header>
  </div>
</template>

<script>
  import header from '@/components/header/index';

  export default {
    name: 'p-header',
    data() {
      return {}
    },
    components: {
      vHeader: header
    }
  }
</script>

<style>
  .iconfont {
    font-size:25px;
  }
  .i1 {
    color:#fff;
  }
</style>

