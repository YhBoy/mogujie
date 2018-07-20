<template>
	<div class="border-bottom">
		 <ul>
		 	<li class="order">
		 		<div class="icon-img">
		 			<span class="icon iconfont icon-single order-btn"></span>
		 		</div>
		 		<div class="order-div ">
		 			<p class="order-name">我的订单</p>
		 			<span class="icon iconfont icon-youjiantou go-btn"></span>
		 		</div>
		 	</li>
		 </ul>
	</div>
</template>

<script>
	export default{
		name: "MyOrder",
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.border-bottom:before{
		border-bottom: 1px solid #ccc;
	}
	.order{
		display: flex;
		flex-direction: row;
		height: 2.5rem;
		line-height: 2.5rem;
		justify-content: space-between;
		.icon-img{
			width: 20%;
			text-align: center;
			width: 1.5rem;
			height: 1.5rem;
			background: #ff5777;
			border-radius: 50%;
			margin: 0 auto;
			margin-top: 0.5rem;
			display: flex;
			justify-content: center;
			align-content: center;
			align-items: center;
			.order-btn{
				line-height: 1.5rem;
				color: #fff;
				text-align: center;
			}
		}
		.order-div{
			width: 80%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.order-name{
				font-size: 0.8rem;
			}
			.go-btn{
				margin-right: 1rem;
			}
			
		}
	}
</style>






