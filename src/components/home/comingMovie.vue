<template>
	<div id="coming">
    <div v-for="(comingItem, index) in comingLists" :key="index">
      <p class="open-date">{{ comingItem.openTime }} {{ comingItem.day }}</p>
      <ul class="coming">
        <li :class="{'border-bottom': comingLists.length-1 != index}" v-for="(item, index) in comingItem.movies" :key="index">
          <div class="movie-img fl">
            <img v-lazyload="`https://gw.alicdn.com/${item.poster}`">
            <div class="play-icon">
              <img src="https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png" alt="">
            </div>
          </div>
          <div class="movie-des border-bottom">
            <router-link to="">
              <div class="m-info">
                <div class="m-name">
                  <h2 class="f16 tddd">{{ item.showName }}</h2>
                  <div class="vm type-3dimax" v-if="item.showMark == 'IMAX3D'"></div>
                  <div class="vm type-imax" v-if="item.showMark == 'IMAX'"></div>
                  <div class="vm type-3d" v-if="item.showMark == '3D'"></div>
                </div>
                <p class="count">{{ item.wantCount }}人想看</p>
                <p>导演：{{ item.director }}</p>
                <p>主演：{{ item.leadingRole }}</p>
              </div>
            </router-link>
            <div class="m-buy fr">
              <button class="forward-buy-btn f12">预售</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div>
      <button @click="returnTop" style="position:absolute;bottom:10px;left:0">返回顶部</button>
    </div> -->
  </div>
</template>

<script>
export default{
	name: 'ComingMovie',
  data () {
	  return{
	  }
  },
  props: {
  	'comingLists': {
  		type: Array,
  		default: () => []
  	}
  },
  methods: {
    // returnTop() {
    //   var element = document.getElementById("coming");
    //   element.scrollIntoView()
    // }
  }
}
</script>

<style lang="less" scoped>
#coming {
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
  .coming {
    padding-left: 15px;
    background-color: #fff;
  }
  .open-date {
    color: #50505a;
    font-size: 13px;
    height: 32px;
    line-height: 32px;
    padding-left: 15px;
    background-color: #f5f5f5;
  }
  li{
    padding-top: 15px;
    .movie-img{
      width: 65px;
      height: 90px;
      position: relative;
      margin-right: 10px;
      .play-icon{
        width: 17px;
        height: 17px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -8.5px;
        margin-top: -8.5px;
        img{
          opacity: .7;
        }
      }
    }
    .movie-des{
      padding: 0 15px 23px 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      flex:1;
      overflow: hidden;
      a{
        flex:1;
        overflow: hidden;
      }
      .m-info{
        .m-name {
          height: 20px;
          color: #333;
          display: flex;
          align-items: flex-end;
          h2 {
            margin-top: 3px;
            display: inline-block;
            max-width:68%;
          }
          .type-3d {
            margin-top: 5px;
            width: 17px;
            height: 17px;
            background-image: url('../../assets/images/3d.svg');
          }
          .type-imax {
            margin-top: 5px;
            width: 27px;
            height: 15px;
            background-image: url('../../assets/images/imax.svg');
          }
          .type-3dimax {
            margin-top: 5px;
            width: 45px;
            height: 17px;
            background-image: url('../../assets/images/3dimax.svg');
          }
          .type-3d,
          .type-imax,
          .type-3dimax {
            margin-left: 5px;
            background-size: 100%;
            background-repeat: no-repeat;
          }
        }
        p.count {
          color: #fea54c;
          margin-top: 8px;
        }
        p:nth-of-type(2) {
          margin-top: 6px;
        }
        p:nth-of-type(3) {
          margin-top: 5px;
        }
        p {
          font-size: 14px;
          color: #8a869e;
          width:100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .m-buy {
        margin-top: 30px;
        .forward-buy-btn {
          height: 24px;
          width: 45px;
          line-height: 20px;
          text-align: center;
          background-color: #fff;
          outline: none;
          border-radius: 3px;
          font-weight: bold;
        }
        .forward-buy-btn  {
          border: 1px solid #37b7ff;
          color: #37b7ff;
        }
      }
    }
  }
}
</style>