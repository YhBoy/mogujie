<template>
	<div class="container" @click="handleClose">
		<div class="wrapper">
			<swiper :options="swiperOption">  
			    <swiper-slide v-for="item in list" class="item">
			    	<img class="item-img" :src="item" alt="">
			    </swiper-slide>
			    
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default{
		name: "CommonBanner",
		props: {
			type: Array
		},
		data(){
			return {
				list: [
						"https://s3.mogucdn.com/mlcdn/55cf19/180517_4ic1l75552ghldjhc1iee8069b666_800x800.jpg_640x960.v1cAC.70.webp",
						"https://s3.mogucdn.com/mlcdn/55cf19/180517_5554l1e493eaihk2d0gjk8250a0kj_800x800.jpg_640x960.v1cAC.70.webp",
						"https://s11.mogucdn.com/mlcdn/55cf19/180517_1dj0920ill465e5k687k7behia7ii_800x800.jpg_640x960.v1cAC.70.webp",
						"https://s11.mogucdn.com/mlcdn/55cf19/180517_62djc2ag064hk58k65731b67b1924_800x800.jpg_640x960.v1cAC.70.webp",
						"https://s3.mogucdn.com/mlcdn/55cf19/180517_49k6803a343d24kfb44742kil3f70_800x800.jpg_640x960.v1cAC.70.webp"
				],
				swiperOption: {
      			  pagination: {
		            el: '.swiper-pagination',
		            type: "fraction"
		          },
		         autoplay: {
				      delay: 2500,
				      disableOnInteraction: false
				 },
				 observer:true,
    			 observeParents:true
				}
			}
		},
		methods : {
			handleClose(){
				this.$emit("close")
			}
		}
	}	
</script>

<style lang="less" scoped>
	.swiper-container{
		overflow: inherit ;
	}
	.swiper-pagination{
		color: #fff;
		bottom: -2rem;
	}
	.container{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,1);
		z-index: 10;
		display: flex;
		flex-direction: column ;
		justify-content: center;
		
		.wrapper{
			background: #fff;
			.item-img{
				width: 100%;
			}
		}	
	
	
	}
</style>






