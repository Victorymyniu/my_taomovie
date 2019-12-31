<template>
  <div style="height: 100%">
    <city-list></city-list>
    <header class="home-header">
      <div class="city" @click="showCityList">
        <span class="class-name">{{ $store.state.city.name }}</span>
        <span class="city-arrow-icon"></span>
      </div>
      <div class="sel-lists" @click="moveTab">
        <div :class="{selnav: selnav}">正在热映</div>
        <div :class="{selnav: !selnav}">即将上映</div>
        <span class="move" :style="{left: moveDistance}"></span>
      </div>
    </header>
    <section>
      <div v-show="selnav"  class="content">
        <swiper :imgs="imgs"></swiper>
        <hot-movie :hotLists="hotLists"></hot-movie>
      </div>
      <div v-show="!selnav"  class="content">
        <coming-movie :comingLists="comingLists"></coming-movie>
        <div class="click-load-more" @click="clickLoadMore">
          <span v-show="clickLoadStatus === 'start'">点击查看更多</span>
          <div v-show="clickLoadStatus === 'loading'" class="loading-icon">
            <span>加载中</span>
            <mt-spinner style="display: inline-block" type="triple-bounce" color="rgb(38, 162, 255)" :size="20"></mt-spinner>
          </div>
          <span v-show="clickLoadStatus === 'complete'">已经全部显示</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import cityList from '@/components/home/cityList.vue'
import swiper from '@/components/home/swiper.vue'
import hotMovie from '@/components/home/hotMovie.vue'
import comingMovie from '@/components/home/comingMovie.vue'
export default {
	data () {
		return {
      selnav: true,
      moveDistance: '5%',
      imgs: [],
      comingLists: [],
      loadingLists: [],
      clickLoadStatus: 'start',
      offset: 0,
      limit: 20,
      total: 0
		}
	},
	components: {
    cityList,
    swiper,
    hotMovie,
    comingMovie
  },
  computed: mapGetters({
    hotLists: 'city/hotLists'
  }),
  created () {
    this.pushComingList({lists: []})
    this.requestData('/movie/swiper', (response) => {
      let data = response.data
      this.imgs = data.data.data.returnValue
    })
    this.requestData(`/movie/coming/?limit=${this.limit}&offset=${this.offset}`, (response) => {
      let data = response.data
      let lists = data.data.data.returnValue
      //模拟索引数据的id号
      lists.forEach((item, index) => {
        item.mID = index
      })
      this.loadingLists = lists
      this.total = data.total
      this.comingLists = this.sortComingData(lists)
      this.offset = this.offset + this.limit
    })
  },
	methods: {
		...mapMutations({
      showCityList: 'city/showCityList',
      pushLoadStack: 'loading/pushLoadStack',
      completeLoad: 'loading/completeLoad',
      pushComingList: 'coming/pushComingList'
    }),
    moveTab() {
      this.selnav = !this.selnav
      this.moveDistance = this.selnav? '5%' : '55%'
      if (this.selnav) {
        this.pushComingList({lists: []})
      } else {
        this.pushComingList({lists: this.loaingLists})
      }
    },
    requestData (url, fn) {
      this.pushLoadStack()
      this.$axios.get(url).then(fn).then(this.completeLoad)
    },
    clickLoadMore() {
      if (this.clickLoadStatus != 'complete') {
        this.clickLoadStatus = 'loading'
        setTimeout(() => {
          this.$axios.get(`/movie/coming/?limit=${this.limit}&offset=${this.offset}`).then((response) => {
            let data = response.data
            let lists = data.data.data.returnValue
            this.loadingLists = this.loadingLists.concat(lists)
            //模拟索引数据的id号
            this.loadingLists.forEach((item, index) => {
              item.mID = index
            })
            this.pushComingList({lists: this.loaingLists})
            this.comingLists = this.sortComingData(this.loadingLists)
            this.offset = this.offset + this.limit
            if (this.offset < this.total) {
              this.clickLoadStatus = 'start'
            } else {
              this.clickLoadStatus = 'complete'
            }
          })
        }, 500)
      }
    },
    sortComingData(lists) {
      let comingLists = []
      lists.forEach((item)=>{
        for (let i = 0; i < comingLists.length; i++) {
          if (item.openTime === comingLists[i].openTime) {
            comingLists[i].movies.push(item)
            return
          }
        }
        let comingItem = {
          openTime: item.openTime,
          day: this.matchWeek(new Date(item.openTime).getDay()),
          movies: []
        }
        comingItem.movies.push(item)
        comingLists.push(comingItem)
      })
      return comingLists
    },
    matchWeek(num) {
      let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      return weeks[num]
    }
	}
}
</script>

<style lang="less" scoped>
.home-header {
  height: 40px;
  background-color: #fff;
  display: flex;
}
.city {
  width: 35%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
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
.sel-lists{
  width:65%;
  // display:flex;
  display: table;
  position: relative;
  div{
    // flex:1;
    display: table-cell;
    line-height: 40px;
    text-align: center;
    font-size:14px;
  }
  span{
    position:absolute;
    left:0;
    bottom:0;
    width: 40%;
    border-bottom: 2px solid #ff4d64;
    transition: left .5s ease-in-out;
  }
}
.selnav {
  color: #ff4d64;
}
.content {
  margin-bottom: 58px;
}
.click-load-more {
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #333;
  font-size: 15px;
  background-color: #fff;
  margin: 5px 0 8px;
}
.loading-icon span {
  vertical-align: middle;
}
</style>
