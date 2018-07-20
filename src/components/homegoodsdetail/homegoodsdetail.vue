<template>
	<div class="product">
		<header-top></header-top>
		<big-banner></big-banner>
		<shop-info></shop-info>
		<div class="ad">
			<img class="item-img" src="../../assets/1.jpg" alt="">
		</div>
		<check-info @change1="receive1" @change2="receive2" @change3="receive3"></check-info>

		<home-join ></home-join>
	</div>
</template>

<script>
	import HomeJoin from "../join/join"
	import BigBanner from "./bigbanner/bigbanner"
	import CheckInfo from "./checkinfo/checkinfo"
	import ShopInfo from "./shopinfo/shopinfo"
	import HeaderTop from "./headertop/headertop"
	export default{
		name: "HomeGoodsDetail",
		data(){
			return {
				buyNum: 0 ,
				buySize: {},
				buyColor: {}
			}
		},
		components: {
			HomeJoin,
			BigBanner,
			CheckInfo,
			ShopInfo,
			HeaderTop
		},
		methods : {
			receive1 (index){
				this.buyColor = index
				
			},
			receive2 (index){
				this.buySize = index
				
			},
			receive3 (index){
				this.buyNum = index
				
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.product{ padding-bottom: 2.5rem; }
	.ad{ 
		margin-top: 0.5rem; 
		.item-img{ width: 100%; }
	}
	
</style>
















