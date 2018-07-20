<template>
	<div class="offers">
		<div class="blank"></div>
		<h2 class="offers-title border-bottom">今日必拼</h2>
		<swiper :options="swiperOption" class="swipe">
		    <swiper-slide v-for="page in pages">
		    	<div class="item"  v-for="item in page">
		    		<div class="item-div">
			    		<img :src="item.url" class="item-img" alt="">
			    		<span class="item-span" ></span>
			    	</div>
			    	<p class="item-name">{{item.name}}</p>
			    	<p class="item-price">￥{{item.price}}<span class="item-oldprice">{{item.oldPrice}}</span></p>
			    	<button class="item-team">去拼团</button>
			    </div>
		    </swiper-slide>
		   
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		name: "HomeOffers",
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
				list: [
					{
						hot: true,
						url:"https://s2.mogucdn.com/mlcdn/1689c6/180615_33d5kfdd9i64hjijh8f1a1bcbcja5_450x450.jpg_300x300.v1cAC.webp",
						fire:true,
						name:"牛仔短裤",
						price:"22.20",
						oldPrice: "55.72"
					},
					{
						hot: true,
						url:"https://s2.mogucdn.com/mlcdn/1689c6/180528_7f8ej47jd9acea9dh50dhaj41ge28_450x450.jpg_300x300.v1cAC.webp",
						fire: true,
						name:"蝴蝶防晒衣",
						price:"32.20",
						oldPrice: "84.72"
					},
					{
						hot: true,
						url:"https://s2.mogucdn.com/mlcdn/1689c6/180619_4dkf8l538jce1ki7k35bjel03j7h4_450x450.jpg_300x300.v1cAC.webp",
						fire:false,
						name:"半身包臀裙",
						price:"22.20",
						oldPrice: "55.72"
					},
					{
						hot: true,
						url:"https://s11.mogucdn.com/mlcdn/1689c6/180607_11i3b48kl44dic5blb9ki6jc9ccij_450x450.jpg_300x300.v1cAC.webp",
						fire:false,
						name:"凉拖鞋",
						price:"39.20",
						oldPrice: "55.72"
					},
					{
						hot: true,
						url:"https://s17.mogucdn.com/mlcdn/1689c6/180618_892i3bd9ehhg5be30ef763jl297c4_450x450.jpg_300x300.v1cAC.webp",
						fire:false,
						name:"单鞋",
						price:"36.20",
						oldPrice: "112.72"
					},
					{
						hot: true,
						url:"https://s18.mogucdn.com/mlcdn/1689c6/180613_34c8b74h2fddcjajga5k60276762b_450x450.jpg_300x300.v1cAC.webp",
						fire:false,
						name:"面膜",
						price:"31.60",
						oldPrice: "70.72"
					}

				]
			}
		},
		computed:{
			pages () {
				const pages = [];
				this.list.forEach((item,index)=>{
					const page = Math.floor(index/3)
					if( !pages[page] ){
						pages[page] = []	
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style lang="less" scoped>

	.border-bottom:before{ border: 1px solid #E5E5E5; }
	.offers{ padding-bottom: 1.5rem; }
	.offers-title{ height: 2rem;
				   line-height: 2rem;
				   font-size: 0.8rem;
				   padding-left: 0.4rem;  }
		
	.swipe { padding-left: 0.5%; }

	.blank { width: 100%;
			 height: 0.5rem;
			 background: #f6f6f6; }
	
	.item { float: left;
		    width: 31%;
		    margin: 0 1%; }
	
	.item-name{ color: #333;
				font-size: 0.6rem;
				padding: 0.2rem 0; }

	.item-img { width: 100%; }
	.item-price{ color:#ff5777;
				 font-weight: bold;
				 font-size: 0.7rem; }
	.item-oldprice{ color:#999999;
				 	font-weight: normal;
				 	font-size: 0.5rem; 
				 	margin-left: 0.3rem;
				    text-decoration: line-through;}
	.item-team{ width: 96%;
				margin: 0 auto;
				height: 1.5rem;
				line-height: 1.5rem;
				background: #ff5777;
				border-radius: 5px;
				color: #fff; 
				font-size: 0.6rem;
				margin-top: 0.2rem;}
	
	.swiper-pagination{ bottom: -1rem !important; }

	.swiper-container { overflow: visible; }
	
</style>




