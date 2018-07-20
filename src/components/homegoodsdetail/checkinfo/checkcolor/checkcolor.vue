<template>
<div class="color">
	<p class="color-title">颜色</p>
	<ul class="color-list">
		<li class="colors " :class="index===nowIndex?'active':''" v-for="(item,index) in colors" @click="selectColor(index)">{{item.sColor}}</li>
	</ul>
</div>

</template>

<script>
	export default{
		name: "CheckColor",
		props: {
			colors: {
				type: Array,
				default:[
					{
						id: 0,
						color: "红"
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
			selectColor (index) {
				this.nowIndex = index 
				this.$store.dispatch("changeColor", this.colors[this.nowIndex])
				console.log(this.$store.state.buyColor)
				this.$emit('change',this.nowIndex)
			}
		}
	}
</script>

<style lang="less" scoped>
	.color{ padding: 0.5rem 1rem; }
	.color-title{ 
		font-size: 0.8rem;
		color: #000;
	}
	.color-list{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		.colors{
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



