<template>
	<div>
		 <ul class="ad">
		 	<li v-for="item in list">
		 		<img class="item-img" :src="item.url" alt="">
		 		<p class="item-name">{{item.name}}</p>
		 	</li>
		 </ul>
	</div>
</template>

<script>
	export default{
		name: "MyAd",
		data(){
			return {
				list: [
					{
						url: "//s10.mogucdn.com/mlcdn/c45406/180607_5gkich83a661f7l34d2ajf977559f_150x150.gif",
						name: "主会场"
					},
					{
						url: "//s10.mogucdn.com/mlcdn/c45406/180626_7i5kdjk567g99k6e4bbgee70f262b_150x150.png",
						name: "深海寻宝"
					},
					{
						url: "//s10.mogucdn.com/mlcdn/c45406/180607_4ki3920gc8e0b621debaa7ae8gg38_150x150.png",
						name: "团购会场"
					},
					{
						url: "//s10.mogucdn.com/mlcdn/c45406/180607_30ei80ec48j89ld8h9h58ib7bh48k_150x150.png",
						name: "我的623"
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.ad{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 1rem 0;
		background: #efefef;
		.item-img{
			display: block;
			margin: 0 auto;
			width: 4rem;
			height: 4rem;
		}
		.item-name{
			text-align: center;
			font-size: 0.6rem;
			padding-top: 0.2rem;
		}
	}
</style>






