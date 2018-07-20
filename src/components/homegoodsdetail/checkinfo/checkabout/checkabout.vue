<template>
	<div class="checkabout">
		<img class="check-img" src="https://s11.mogucdn.com/mlcdn/c45406/180430_253i65606569h85i333l01d9146c8_640x960.jpg_128x999.webp" alt="">
		<div class="right">
			<p class="price">￥<span class="price-m">29.9</span></p>
			<p class="lave">库存6562件</p>
			<p class="select">请选择:颜色尺码</p>
		</div>
		<span class="icon iconfont close-icon icon-guanbi1" @click="closePop"></span>
	</div>
</template>

<script>
	export default{
		name: "CheckAbout",
		data(){
			return{
				popupCheck: false
			}
		},
		methods: {
			closePop(){
				this.$emit("change")
			}
		}
	}
</script>

<style lang="less" scoped>
	.checkabout{
		display: flex;
		padding: 0 1rem;
		position: relative;
		.close-icon{
			position: absolute;
			right:1rem;
			top:1rem;
			font-size: 1.4rem;
			color: #666;
		}
		.check-img{
			
			margin-top: -4rem;
		}
		.right{
			padding-left: 1rem;
			.price{
				color: #000;
				font-size: 0.6rem;
				padding: 1rem 0;
				.price-m{
					font-size: 1.2rem;
				}

			}
			.lave{
				color: #333;
				font-size: 0.7rem;
			}
			.select{
				color: #333;
				font-size: 0.7rem;
				padding-top:0.5rem;
			}
		}
	}
</style>








