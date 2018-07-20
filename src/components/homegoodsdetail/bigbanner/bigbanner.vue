<template>
	<div>
		
		<div @click="showBig">
			<img class="item-img" :src="list[0]" alt="">
		</div>
		<div class="ad">
			<img class="item-img" src="../../../assets/2.png" alt="">
		</div>

		<div class="product-info" v-for="item in info">
			<p class="item-title">{{item.name}}</p>
			<p class="item-info">
				￥<em class="item-price">{{item.price}}</em>
				  <span class="item-oldprice">{{item.oldprice}}</span>
			</p>
			<p class="item-free">免邮费</p>
		</div>

		<common-banner @close="closePic" :list="list" v-show="isBigShow"></common-banner>
	</div>
</template>

<script>
	import CommonBanner from "../commonbanner/commonbanner"
	export default{
		name: "BigBanner",
		data(){
			return {
				isBigShow: false,
				info: [
					{
						name:"【买一送一】新款韩版原宿bf情侣装印花短袖白色T恤女半袖夏季宽松个性班服百搭上衣体恤大码潮",
					price: 36.5,
					oldprice: 19.9
					}
				],
				list: [
						"https://s3.mogucdn.com/mlcdn/55cf19/180517_4ic1l75552ghldjhc1iee8069b666_800x800.jpg_640x960.v1cAC.70.webp",
						"https://s3.mogucdn.com/mlcdn/55cf19/180517_5554l1e493eaihk2d0gjk8250a0kj_800x800.jpg_640x960.v1cAC.70.webp",
						"https://s11.mogucdn.com/mlcdn/55cf19/180517_1dj0920ill465e5k687k7behia7ii_800x800.jpg_640x960.v1cAC.70.webp",
						"https://s11.mogucdn.com/mlcdn/55cf19/180517_62djc2ag064hk58k65731b67b1924_800x800.jpg_640x960.v1cAC.70.webp",
						"https://s3.mogucdn.com/mlcdn/55cf19/180517_49k6803a343d24kfb44742kil3f70_800x800.jpg_640x960.v1cAC.70.webp"
				],
				swiperOption: {
		         	autoplay:  false
				}
			}
		},
		components: {
			CommonBanner
		},
		methods : {
			showBig(){
				
				this.isBigShow = true
			},
			closePic(){
				this.isBigShow = false
			}
		}
	}
</script>

<style lang="less" scoped>
	.product-info{ }
	
	 .ad{ margin-top: 1rem; }
	.item-img{ width: 100%; }
	
	.product-info{
		width: 96%;
		margin: 0 auto;
		margin-top: 0.5rem;
		.item-title{
			font-size: 0.8rem;
			line-height: 1.5;
		}
		.item-info{ display: flex;
					flex-direction: row;
					
					align-content: center;
					align-items: center;}

		.item-price{ font-size: 2rem;
					  color: #333; }

		.item-oldprice{ margin-left:0.5rem;
						color: #ff468f;
						font-size: 0.8rem;
						text-decoration: line-through; }
		.item-free{ font-size: #999;
					margin-top: 1rem; }
	}

</style>










