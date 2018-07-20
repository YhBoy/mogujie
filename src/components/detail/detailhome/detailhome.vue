<template>
	<div>
		<div>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>

		<detail-bottom-nav></detail-bottom-nav>
	</div>
</template>
<script>

	import DetailBanner from "../detailbanner/detailbanner"
	import DetailBottomNav from "../detailbottomnav/detailbottomnav"
	import FastBuy from "../fastbuy/fastbuy"
	import DetailSell from "../sell/sell"
	import DetailNew from "../new/new"
	import DetailMy from "../my/my"

	export default{
		name: "DetailHome",
		components: {
			DetailBottomNav,
			DetailBanner,
			FastBuy,
			DetailSell,
			DetailNew,
			DetailMy
		}
	}
</script>
<style>
	
</style>






