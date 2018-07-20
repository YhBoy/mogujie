<template>
	<div >
		<div v-for="item in list" class="info border-bottom" >
			<div>
				<img class="item-img" :src="item.url" alt="">
			</div>
			<div >
				<p class="item-name">{{item.name}}</p>
				<div class="item-address"> 
					我的收货地址<span class="icon iconfont icon-youjiantou"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: "MyInfo",
		data () {
			return {
				list:[
					{
						url:"https://s10.mogucdn.com/p1/151227/1_ifqtemzwgnqwcntcguzdambqgyyde_100x100.png_170x170.jpg",
						name: "HH小娃娃"
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.border-bottom:before{
		border-bottom: 1px solid #ccc;
	}
	.info{
		display: flex;
		flex-direction: row;
		background: #fff;
		padding: 1rem;
		.item-img{
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
		}
		.item-name{ 
			margin-left: 1rem;
			font-size: 1rem;
		}
		.item-address{
			font-size: 0.8rem;
			margin-left: 1rem;
			margin-top: 0.5rem;
		}
	}
</style>






