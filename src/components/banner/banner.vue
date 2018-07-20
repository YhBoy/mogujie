<template>
	<div class="banner">
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


	export default{
		name: "HomeBanner",
		data(){
			return{
				swiperOption: {
      			  pagination: {
		            el: '.swiper-pagination'
		          },
		         autoplay: {
				      delay: 2500,
				      disableOnInteraction: false
				 }
				},
				list:[
					"https://s11.mogucdn.com/mlcdn/c45406/180402_34178d4id9lakh1bc38f5aja55cj8_750x340.jpg_1300x9999.v1c7E.70.webp",
					"https://s17.mogucdn.com/mlcdn/c45406/180615_55dbijk6fkgghh1e60c3k67je54c2_750x340.jpg_1300x9999.v1c7E.70.webp"
				]
				
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.banner{ width: 100%; }
	.item-img{ width: 100%; }



</style>








