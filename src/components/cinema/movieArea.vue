<template>
	<section id="cinema" :class="{mask: showArea}" @click="cancelArea">
    <header class="area-header">
      <div class="city" @click="showCityList">
        <span>{{ cityName }}</span>
        <span class="city-arrow-icon"></span>
      </div>
      <div class="area" @click="showAreaAction">
				<span>{{ area }}</span>
				<span class="city-arrow-icon"></span>
			</div>
    </header>
    <ul class="area-item"  v-show='showArea' @click="selectArea">
			<li>全部区域（{{allArea.length}}）</li>
			<li v-for="(item,index) in regionOrder" :key="index">
				{{ item }}（{{regionCinemas[item].length}}）
			</li>
		</ul>
	</section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default{
	data () {
		return {
      area: '全部区域',
      showArea: false,
      allArea: [],
			regionOrder: [],
			regionCinemas: {}
		}
	},
	components: {
  },
  computed: mapGetters({
    cityName: 'city/cityName'
  }),
  watch: {
    area() {
      if (this.area === '全部区域') {
        this.updateAreaData({area: this.allArea})
      } else {
        this.updateAreaData({area: this.regionCinemas[this.area]})
      }
    },
    cityName() {
      this.getAreaData(this.cityName)
      this.area = '全部区域'
      this.updateAreaData({area: this.allArea})
    }
  },
  created () {
    this.getAreaData(this.$store.state.city.name)
    this.updateAreaData({area: this.allArea})
  },
	methods: {
    ...mapMutations({
      showCityList: 'city/showCityList',
      pushLoadStack: 'loading/pushLoadStack',
      completeLoad: 'loading/completeLoad',
      updateAreaData: 'cinema/updateAreaData'
    }),
    requestData (url, fn) {
      this.pushLoadStack()
      this.$axios.get(url).then(fn).then(this.completeLoad)
    },
    matchCityStr (str) {
			let randomList = ['bj', 'sh', 'gz']
			let randomCity = randomList[Math.floor(3*Math.random())]
			switch (str) {
				case '北京': return 'bj'
				case '上海': return 'sh'
				case '广州': return 'gz'
				default: return randomCity
			}
    },
    getAreaData (cityName) {
      let cityStr = this.matchCityStr(cityName)
      this.allArea = []
      this.requestData(`/movie/cinema/?city=${cityStr}`, (response) => {
        let data = response.data
        this.regionCinemas = data.data.data.returnValue.regionCinemas
        this.regionOrder = data.data.data.returnValue.regionOrder
        this.regionOrder.forEach((item) => {
          this.regionCinemas[item].forEach((cinema) => {
            this.allArea.push(cinema)
          })
        })
      })
    },
    selectArea(event) {
      let str = event.target.innerHTML.trim()
			let reg = /([\u4e00-\u9fa5]*)\（/
      this.area = reg.exec(str)[1]
			this.showArea = false
			document.documentElement.style.overflow = 'scroll'
    },
		showAreaAction () {
			this.showArea = true
			document.documentElement.style.overflow = 'hidden'
		},
		cancelArea (event) {
			if (event.target.className === 'mask') {
				this.showArea = false
				document.documentElement.style.overflow = 'scroll'
			}
		}
	}
}
</script>

<style lang="less" scoped>
#cinema{
  margin-top:40px;
}
.area-header {
  background: #fafafa;
  color: #333;
  height: 40px;
  line-height: 26px;
  font-size: 14px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 8px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebeb;
  display: flex;
}
.city {
  width: 45%;
  font-size: 14px;
  text-align: center;
  display: inline-block;
}
.area {
  width: 55%;
  font-size: 14px;
  text-align: center;
  display: inline-block;
}
.city-arrow-icon {
  margin-left: 4px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.city-arrow-icon:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  margin-left: 0;
  border: 1px solid #50505a;
  border-top: 0 none;
  border-left: 0 none;
  margin-left: 2px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.area-item{
  background-color: #fff;
  font-size: 14px;
  color: #222;
  box-sizing: border-box;
  max-height: 70%;
  padding-left: 15px;
  overflow-y: scroll;
  li{
    padding: 14px 0;
    border-bottom: 1px solid #ebebeb;
  }
}
</style>

