<template>
  <div ref="city" id="select-city" class="fadeInDown" v-if="$store.state.city.show">
    <div class="city-header">
			<span class="title">选择城市</span>
			<span class="close-city" @click="closeCityList">×</span>
    </div>
    <mt-index-list>
      <mt-index-section :index="item.title" v-for="(item, index) in cityArr" :key="index">
        <mt-cell :title="i" v-for="(i,index) in item.lists" :key="index" @click.native="selectedCity(i)"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import cityData from "../assets/city.json"
export default {
  name: 'CityIndexList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created (){
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      // 读取json文件
      this.cityArr = cityData.city
      // this.$axios.get('/movie/city')
      // .then( response => {
      //   console.log(response)
      // })
      // .catch( error => {
      //   console.log(error)
      // })
    },
    selectedCity(name) {
      console.log(name)
      this.$store.commit("city/selectedCity", name)
      this.$store.commit("city/closeCityList")
    },
    closeCityList() {
      this.$store.commit("city/closeCityList")
      this.$refs.city.className = "fadeOutTop"
    }
  }
}
</script>

<style lang="less" scoped>
.city-header {
  height: 46px;
  line-height: 46px;
  text-align: center;
  color: #000;
  font-size: 16px;
  background-color: #fff;
  position: relative;
  .title{
    font-weight: bold;
  }
  .close-city {
    position: absolute;
    right: 0px;
    font-size: 28px;
    color: #666;
    height: 46px;
    width: 50px;
  }
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: .7;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px)
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
}
@keyframes fadeInDown {
  0% {
    opacity: .7;
    -webkit-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    transform: translateY(-50px)
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
  }
}
.fadeInDown {
  -webkit-animation: fadeInDown .3s;
  animation: fadeInDown .3s;
}
@-webkit-keyframes fadeOutTop {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
		opacity: 0;
		-webkit-transform: translateY(-50px);
		transform: translateY(-50px)
  }
}
@keyframes fadeOutTop {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
	  opacity: 0;
	  -webkit-transform: translateY(-50px);
	  -ms-transform: translateY(-50px);
	  transform: translateY(-50px)
  }
}
.fadeOutTop {
  -webkit-animation: fadeOutTop .35s;
  animation: fadeOutTop .35s;
}
</style>
