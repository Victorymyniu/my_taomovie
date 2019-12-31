<template>
	<section id="cinema">
		<city-list></city-list>
		<movie-area></movie-area>
		<cinema></cinema>
	</section>
</template>

<script>
// import { mapMutations } from 'vuex'
import movieArea from '@/components/cinema/movieArea.vue'
import cinema from '@/components/cinema/cinema.vue'
import cityList from '@/components/home/cityList.vue'
export default{
	data () {
		return {
		}
	},
	components: {
		movieArea,
		cityList,
		cinema
		// cinemaArea,
		// city
	},
	methods: {
		// ...mapMutations([
		//   'pushLoadStack',
		//   'completeLoad',
		//   'showCityList'
		// ]),
		// requestData (url, fn) {
		//   this.pushLoadStack()
		//   this.$http.get(url).then(fn).then(this.completeLoad)
		// }
	}
}
</script>

<style>
</style>

