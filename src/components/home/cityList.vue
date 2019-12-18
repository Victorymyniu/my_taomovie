<template>
  <div ref="city" id="select-city" class="fadeInDown" v-if="$store.state.city.show">
    <div class="city-header">
			<span class="title">选择城市</span>
			<span class="close-city" @click="closeCityList">×</span>
    </div>
    <mt-index-list>
      <mt-index-section :index="item.title" v-for="(item, index) in cityList" :key="index">
        <mt-cell :title="name.regionName" v-for="(name,index) in item.list" :key="index" @click.native="selectedCity(name.regionName)"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'CityIndexList',
  data () {
    return {
      cityList: []
    }
  },
  created (){
    this.updateCityAsync({city: {}})
    this.getCityInfo()
  },
  methods: {
    ...mapActions({
      updateCityAsync: 'city/updateCityAsync'
    }),
    ...mapMutations({
      pushLoadStack: 'loading/pushLoadStack',
      completeLoad: 'loading/completeLoad'
    }),
    getCityInfo() {
      this.$axios.get('/movie/city')
      .then( response => {
        const data = response.data
        const cityObj = data.data.data.returnValue
        const cityTitle = Object.keys(cityObj)
        this.cityList.push({
          title: '热门',
          list: [{
            regionName: '北京',
            id: 1,
            rN: 'bj'
          }, {
            regionName: '上海',
            id: 2,
            rN: 'sh'
          }, {
            regionName: '广州',
            id: 3,
            rN: 'gz'
          }]
        })
        cityTitle.forEach((item) => {
          this.cityList.push({
            title: item,
            list: cityObj[item]
          })
        })
      })
      .catch( error => {
        console.log(error)
      })
    },
    selectedCity(name) {
      if (name) {
        this.changeCityData({
          city: {
            name: name,
            rN: this.matchCityRn(name)
          }}
        )
      } else {
        return false
      }
    },
    closeCityList() {
      this.changeCityData({city: {}})
    },
    changeCityData(data) {
      this.pushLoadStack()
      this.$refs.city.className = "fadeOutTop"
      this.updateCityAsync(data).then(this.completeLoad)
    },
    matchCityRn(name) {
      const randomList = ['bj','sh','gz']
      // 随机生成数组中的一个元素
      const randomCity = randomList[Math.floor(3*Math.random())]
      switch(name) {
         case '北京': return 'bj'
         case '上海': return 'sh'
         case '广州': return 'gz'
         default: return randomCity
      }
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
