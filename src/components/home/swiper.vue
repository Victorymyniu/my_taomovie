<template>
	<div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
    	<div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
				<img class="img" :src="'https://gw.alicdn.com/tfs/' + item.smallPicUrl" />
		  </div>
    </div>
	<div class="swiper-pagination" slot="pagination"></div>
</div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.min.css'
export default{
	name: 'swiper',
  data () {
	  return{
	  }
  },
  props: {
  	imgs: {
  		type: Array,
  		default: () => []
  	}
  },
  watch: {
  	imgs() {
  		this.$nextTick(() => {
		  	new Swiper ('.swiper-container', {
			    loop: true,
			    pagination: {
						el: '.swiper-pagination',//开启分页器
						clickable: true
					},
					autoplay: true,
					autoplay: {
						delay: 2000,//1秒切换一次
						disableOnInteraction: false, //用户操作后是否继续切换，默认true:停止
						reverseDirection:false,//开启反向切换，默认false
					}
			}) 
  		})
  	}
  }
}
</script>

<style>
	img {
		width: 100%;
		height: auto;
	}
	#swiper .swiper-pagination-bullet {
		background: #e5e8e8;
		opacity: 1; 
	}
	#swiper .swiper-pagination-bullet-active {
		background: #ff5733;
	}
</style>