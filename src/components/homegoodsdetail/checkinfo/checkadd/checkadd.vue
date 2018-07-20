<template>
	<div class="add">
		<div class="join" @click="joinCar">加入购物车</div>
		<div class="buy">立即购买</div>
	</div>
</template>


<script>
	export default{
		name: "CheckAdd",
		data(){
			return {

			}
		},
		methods: {
			joinCar(){
				console.log( this.$store.state.buySize )
			}
		}
	}
</script>

<style lang="less" scoped>
	.add{
		display: flex;
		flex-direction: row;
		height: 2.5rem;
		line-height: 2.5rem;
		.join{
			width: 50%;
			background: #ffe6e8;
			color: #ff5777;
			text-align: center;
			font-size: 0.7rem;
		}
		.buy{
			width: 50%;
			background: #ff5777;
			color: #fff;
			text-align: center;
			font-size: 0.7rem;
		}
	}
</style>







