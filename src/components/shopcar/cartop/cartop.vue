<template>
	
	<div>
		<div class="top border-bottom" >
			<router-link tag="span" to="/"  class="icon iconfont icon-fanhui back-btn" @click="back"></router-link>
			购物车
		</div>
	</div>

</template>


<script>
	export default{
		name: "CarTop",
		methods : {
			back () {
				this.$emit("change",true)
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.border-bottom:before{
		border-top: 1px solid #ccc;
	}
	.top{
		height: 2.2rem;
		line-height: 2.2rem;
		text-align: center;
		font-size: 0.8rem;
		position: relative;
		.back-btn{
			position: absolute;
			left: 0.5rem;

		}
	}
</style>








