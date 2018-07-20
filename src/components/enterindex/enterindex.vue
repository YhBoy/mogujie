<template>
	<div class="index">
		<home-header></home-header>
		<home-banner></home-banner>
		<home-nav></home-nav>
		<home-offers></home-offers>
		<index-product></index-product>
	</div>
</template>

<script>
	import HomeHeader from '../header/header'
	import HomeBanner from '../banner/banner'
	import HomeNav from '../nav/nav'
	import HomeOffers from '../offers/offers'
	import IndexProduct from '../indexproduct/indexproduct'
	export default{
		name: "EnterIndex",
		components : {
			HomeHeader,
			HomeBanner,
			HomeNav,
			HomeOffers,
			IndexProduct
		}
	}
</script>

<style lang="less" scoped>
	
</style>












