<template>
  <div class="p-vue-awesome-swiper">
    <swiper :options="topSwiperOption" ref="topSwiper" v-if="topSwiperData.list.length > 0">
      <swiper-slide
      v-for="(item, index) in topSwiperData.list"
      :key="index"
      :style="{backgroundImage: `url(${item.picurl})`}">
      <a :href="item.link" class="link"></a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- End -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "p-vue-awesome-swiper",
  data() {
    return {
      topSwiperOption: {
        // 要使用这里必须写, 不写不会生效[v0.0.1-0042]
        pagination: {
          el: ".swiper-pagination"
        }
      },
      topSwiperData: {
        list: [
          {
            picurl: "https://weixin.shinycg.com/sites/mall/uploads/images/20180316/5aab5af975d3e.jpg"
          },
          {
            picurl: "https://weixin.shinycg.com/sites/mall/uploads/images/20180316/5aaba61743ac3.png"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  .p-vue-awesome-swiper {
    height: 300px;

    .swiper-slide {
      height: 150px;
    }
  }
</style>

