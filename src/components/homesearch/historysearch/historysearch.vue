<template>
	<div class="history">
		<div class="content">
			<span class="icon iconfont icon-sousuo search"></span>
			<p class="search-title" @click="searchList">历史搜索</p>
			<em class="icon iconfont icon-shanchu delete"></em>
		</div>
		<div class="list">
			<div class="list-no" v-show="noData">暂无历史搜索</div>
			<ul class="list-data" v-show="noData">
				<li class="list-li" v-for="(item,index) in list" :key="index" @click="searchItem(item)" >{{item}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name: "HistorySearch",
		data(){
			return {
				list:["帽子",'衬衫',"羽绒服"],
				product:[]
			}
		},
		computed : {
			noData () {
				return {
					
				}
			}
		},
		methods : {
			searchItem(index){
				this.$emit("change",index)
			},
			searchList(){
				
				axios.get("http://api.douban.com/v2/movie/subject/1764796").then(function (response) {
					
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.history{
		padding: 1rem 0;
		.content{
			display:flex;
			flex-direction: row;
			height: 1.5rem;
			line-height: 1.5rem;
			align-items: center;
			align-content: center;
			padding: 0 1rem;
			.search{
				font-size: 1rem;

			}
			.search-title{
				display: flex;
				flex: 1;
				margin: 0 1rem 0 0.5rem;
			}
			.delete{
				font-size: 1rem;
			}
		}
		.list{
			padding: 0.5rem 1rem;
			.list-data{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				.list-li{
					margin-top: 0.5rem;
					float: left;
					margin-right: 0.5rem;
					border: 1px solid #ccc;
					padding: 0.2rem 0.5rem;
				}
			}
			
		}

	}
	
</style>




