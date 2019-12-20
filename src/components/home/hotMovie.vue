<template>
	<div id="hot">
    <ul>
      <li :class="{'border-bottom': hotLists.length-1 != index}" v-for="(item, index) in hotLists" :key="index">
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
              <div class="full-star pr">
                <div class="score-star" :style="{width: `${item.remark * 10}%`}"></div>
                <span class="score pa">{{ item.remark }}</span>
              </div>
              <p>{{ item.highlight }}</p>
              <p>{{ item.leadingRole}}</p>
            </div>
          </router-link>
          <div class="m-buy fr">
            <button class="buy-btn f12" v-if="item.openTime < '2016-12-09'">购买</button>
            <button class="forward-buy-btn f12" v-else>预售</button>
          </div>
        </div>
        <div class="f13 m-act">
          <span class="border-right">1212五折狂欢</span>
          <span class="tddd">1212特惠抢票，名额有限抢完即止</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
	name: 'HotMovie',
  data () {
	  return{
	  }
  },
  props: {
  	'hotLists': {
  		type: Array,
  		default: () => []
  	}
  }
}
</script>

<style lang="less" scoped>
#hot {
  padding-left: 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background: #fff;
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
            max-width:60%;
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
        .full-star {
          margin-top: 7px;
          width: 50px;
          height: 10px;
          background-size: auto 100%;
          background-image: url('../../assets/images/nostart.svg');
          .score-star {
            width: 100%;
            height: 100%;
            background-size: auto 100%;
            background-image: url('../../assets/images/star.svg');
          }
          .score {
            right: -21px;
            top: -1px;
            font-size: 10px;
            color: #9c9c9c;
          }
        }
        p:nth-of-type(1) {
          margin-top: 12px;
        }
        p:nth-of-type(2) {
          margin-top: 6px;
        }
        p {
          font-size: 13px;
          color: #9c9c9c;
          width:100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .m-buy {
        margin-top: 30px;
        .buy-btn,
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
        .buy-btn {
          border: 1px solid #ff4d64;
          color: #ff4d64;
        }
        .forward-buy-btn  {
          border: 1px solid #37b7ff;
          color: #37b7ff;
        }
      }
    }
    .m-act {
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      margin: 8px 15px 0 76px;
      padding-bottom: 8px;
    }
    .m-act span:first-child {
      color: #fea54c;
    }
    .m-act span:last-child {
      color: #9c9c9c;
      text-indent: 8px;
    }
    .m-act span {
      box-sizing: border-box;
      width: 50%;
      display: inline-block;
    }
  }
}
</style>