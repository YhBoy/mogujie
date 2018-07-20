<template>
	<div>
		<swiper :options="swiperOption">
		   
		    <swiper-slide v-for="item in list">
		    	<img class="item-img" :src="item" alt="">
		    </swiper-slide>
		    
		    <!-- Optional controls -->

		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import HomeBanner from "../../banner/banner"
	export default{
		name: "DetailBanner",
		data(){
			return {
				list:[
					"https://s18.mogucdn.com/mlcdn/c45406/180511_7a4c64aghg6gdh412a39j4042ckkb_750x250.jpg_1300x9999.v1c7E.70.webp",
					"https://s2.mogucdn.com/mlcdn/c45406/180614_1515ilfdb368jdlh3e3e1deff41i1_750x250.jpg_1300x9999.v1c7E.70.webp",
					"https://s2.mogucdn.com/mlcdn/c45406/180504_26d4icgdhbfcf48hl3l41f78e4li6_750x250.png_1300x9999.v1c7E.70.webp"
				],
				swiperOption: {
      			  pagination: {
		            el: '.swiper-pagination'
		          },
		         autoplay: {
				      delay: 2500,
				      disableOnInteraction: false
				 }
				},
			}
		}
	}
</script>

<style lang="less" scoped>
	.item-img{ width: 100%;  }

</style>







