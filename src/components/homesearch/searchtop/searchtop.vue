<template>
	<div>
		<div class="search border-bottom">
			<router-link tag="span" class="icon iconfont icon-fanhui back-btn" to="/"></router-link>
			<input type="text" v-model="searchContent" class="search-input" @blur="focusState = false" :class="focusState == true ? 'active': '' " @click="selectFoucs">
			<em class="search-btn">搜索</em>
		</div>
	</div>
</template>

<script>
	export default{
		name: "SearchTop",
		props: {
			searchContent: {
				type: String
			}
		},
		data () {
			return {
				focusState: false
			}
		},
		methods: {
			selectFoucs () {
				this.focusState = true 
			}
		}
	}
</script>

<style lang="less" scoped>
	.border-bottom:before{
		border-bottom: 1px solid #ccc;
	}
	.search{
		display: flex;
		flex-direction: row;
		height: 2.5rem;
		line-height: 2.5rem;
		padding-top: 0 0.5rem;
		.back-btn{
			font-size: 1rem;
			margin-left: 0.5rem;
		}
		.search-btn{
			width: 2rem;
			font-size: 0.8rem;
		}
		.search-input{
			display: flex;
			flex: 1;
			margin: 0 0.5rem;
			border: 1px solid #ccc;
			height: 1.5rem;
			line-height: 1.5;
			margin-top: 0.5rem;
			padding-left: 0.5rem;
			border-radius: 3px;
		}
		.active{
			border: 1px solid #ff4466;
		}
	}
</style>












