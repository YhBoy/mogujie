<template>

	<div class="nav border-top">
		<div class="collect">
			<span class="icon iconfont icon-iconfontzhizuobiaozhun23 collect-icon"></span>
			<p class="collect-title">收藏</p>
		</div>
		<div class="collect border-left">
			<span class="icon iconfont icon-dianpu1 collect-icons"></span>
			<p class="collect-title">小店</p>
		</div>
		<div class="car" @click="joinCar">
			加入购物车
		</div>
		<div class="buy">
			立即购买
		</div>
	</div>

</template>


<script>
	export default{
		name: "HomeJoin",
		// props: {
		// 	buyColor: {
		// 		type: Object
		// 	},
		// 	buySize: {
		// 		type: Object
		// 	},
		// 	buyNum: {
		// 		type: Number
		// 	}
		// },
		methods: {
			joinCar(){
				console.log( this.$store.state.buySize )
				console.log( this.$store.state.buyColor )
				console.log( this.$store.state.buyNum )
			}
		}
	}
</script>

<style lang="less" scoped>

	.border-top:before{ border-top:1px solid #ccc; }
	.border-left:before { border-top:1px solid #ccc; }
	.nav{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: row;
		height: 2.5rem;
		background: #fff;
	
		.collect{ 
			width: 15%;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			align-content: center;
			justify-content: center;
			.collect-icon{
				font-size: 1.1rem;
				
				display: block;
			}
			.collect-icons{
				font-size: 1.1rem;
				
				display: block;
			}
			.collect-title { 
				color: #333;
				font-size: 0.5rem;
				padding-top: 0.2rem;
			}
		 }
	
		.car{
			width: 35%;
			text-align: center;
			line-height: 2.5rem;
			color: #ff5777;
			background: #ffe6e8;
			font-size: 0.7rem;
		}
		.buy{
			width: 35%;
			text-align: center;
			line-height: 2.5rem;
			background: #ff468f;
			color: #fff;
			font-size: 0.7rem;
		}

	}


</style>













