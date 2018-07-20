<template>
	<div>
		
		<search-top :searchContent="searchContent"></search-top>
		<history-search @change="searchTitle"></history-search>
		<hot-search></hot-search>
		
	</div>
</template>

<script>
	import SearchTop from "./searchtop/searchtop"	
	import HotSearch from "./hotsearch/hotsearch"
	import HistorySearch from "./historysearch/historysearch"	

	export default{
		name: "HomeSearch",
		components: {
			HotSearch,
			SearchTop,
			HistorySearch
		},
		data(){
			return {
				searchContent:""
			}
		},
		methods: {
			searchTitle(index){
				this.searchContent = index
			}
		}
		
	}
</script>

<style lang="less" scoped>
	
</style>








