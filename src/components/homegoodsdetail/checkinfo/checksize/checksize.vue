<template>
	<div class="size">
		<p class="size-title">大小</p>
		<ul class="size-list">
			<li class="sizes" :class="index===nowIndex? 'active':''" v-for="(item, index) in sizes" @click="selectSize(index)">{{item.sBig}}</li>
		</ul>
		
	</div>
</template>

<script>
	export default{
		name: "CheckSize",
		props: {
			sizes: {
				type: Array,
				default:[
					{
						id: 0,
						sBig: "42"
					}
				]
			}
		},
		data(){
			return {
				nowIndex: 0
			}
		},
		methods : {
			selectSize (index) {
				this.nowIndex = index ;
				this.$store.dispatch('changeSize', this.sizes[this.nowIndex])
				console.log(this.$store.state.buySize)
				this.$emit('change',this.nowIndex)
			}
		}
	}
</script>

<style lang="less" scoped>
	.size{ padding: 0.5rem 1rem; }
	.size-title{ 
		font-size: 0.8rem;
		color: #000;
	}
	.size-list{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		.sizes{
			border: 1px solid #666;
			font-size: 0.7rem;
			padding: 0.1rem 0.3rem;
			border-radius: 3px;
			margin-top: 0.35rem;
			margin-right: 1rem;
		}
		.active{
			border: 1px solid #ed4566;
			color: #ed4566;
		}

	}
</style>






