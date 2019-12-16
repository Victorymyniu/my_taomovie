<template>
  <footer :class="{'go-back': !showNav}">
		<div class="footer" v-show="showNav">
			<div class="nav nav-item" v-for='(item,index) of navMenu' @click="$router.push(item.push)" :key="index">
				<img class="nav-icon" :src="route === item.push ? item.iconSelect : item.icon">
				<p :class="{'cur-page': route === item.push}"  >{{item.name}}</p>
			</div>
    </div>
  	<div v-show="!showNav" @click="goBack" style="width: 100%">
  		<p class="back">返回</p>
  	</div>
  </footer>
</template>
<script>
export default{
	data () {
    return {
      navMenu:[
				{
					name:"电影",
					push:"/",
					icon:require("../assets/images/hno.svg"),
					iconSelect:require("../assets/images/hok.svg")
				},
				{
					name:"影院",
					push:"/cinema",
					icon:require("../assets/images/mno.svg"),
					iconSelect:require("../assets/images/mok.svg")
				},
				{
					name:"我的",
					push:"/me",
					icon:require("../assets/images/eno.svg"),
					iconSelect:require("../assets/images/eok.svg")
				}
			]
    }
  },
  props: {
  	'showNav': {
  		type: Boolean,
  		default: true
  	}
  },
  computed: {
  	route () {
  		return this.$route.path
  	}
  },
  methods: {
  	goBack () {
  		this.$router.back()
  	}
  }
}
</script>

<style lang="less" scoped>
.footer {
	background-color: #fff;
	position: fixed;
	width: 100%;
	bottom: 0px;
	height: 50px;
	display: flex;
	padding-top: 7px;
	box-sizing: border-box;
	z-index: 10000;
	p {
		text-align: center;
		width: 100%;
		font-size: 12px;
	}
	div {
		flex: 1;
		text-align: center;
		color: #8a869e;
	}
	.cur-page{
		color: #ff4d64;
	}
}
.nav-icon {
	width: 22px;
	height: 22px;
	margin: 0 auto;
	img {
		width: 100%;
		height: 100%;
	}
}
/* .nav-movie::after,
.nav-cinama::after,
.nav-me::after {
	padding-top: 2px;
	text-align: center;
	width: 30px;
	display: inline-block;
	font-size: 12px;
}
.nav-movie::after {
	content: "电影";
}
.nav-cinama::after {
	content: "影院";
}
.nav-me::after {
	content: "我的";
} */
.go-back {
	background: #ff2c43;
}
.back {
	font-size: 30px;
	color: #fff;
	padding-left: 35px;
	margin-top: -4px;
	transform: scaleY(1.5);
}
</style>
