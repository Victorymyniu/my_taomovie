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
        热映电影
      </div>
      <div v-show="!selnav"  class="content">
        即将上映
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CityList from '../components/CityList.vue'
export default {
	data () {
		return {
      selnav: true,
      moveDistance: '5%'
		}
	},
	components: {
    CityList
	},
	methods: {
		...mapMutations({
      showCityList: 'city/showCityList'
    }),
    moveTab() {
      this.selnav = !this.selnav
      this.moveDistance = this.selnav? '5%' : '55%'
    }
	},
	created () {
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
</style>
