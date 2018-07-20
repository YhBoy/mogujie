<template>
	<div class="home">
		 <my-info></my-info>
		 <my-ad></my-ad>
		 <my-order></my-order>
		 <div class="kg"></div>
		 <my-set></my-set>
		 <router-link to="/login" tag="div" class="login">登陆</router-link>
	</div>
</template>

<script>
	import MyInfo from "./myinfo/myinfo"
	import MyAd from "./myad/myad"
	import MyOrder from "./myorder/myorder"
	import MyNav from "./mynav/mynav"
	import MySet from "./myset/myset"
	export default{
		name: "HomeMine",
		components: {
			MyInfo,
			MyAd,
			MyOrder,
			MyNav,
			MySet
		}
	}
</script>

<style lang="less" scoped>
	.kg{
		padding-bottom: 0.5rem;
		background: #f6f6f6;
	}
	.login{
		width: 90%;
		margin: 0 auto;
		margin-top: 1rem;
		text-align:center;
		font-size: 0.8rem;
		border-radius: 5px;
		height: 2rem;
		line-height: 2rem;
		background: #FF5777;
		color: #fff;
	}
</style>






