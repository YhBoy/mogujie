<template>
	<div class="product">
		<router-link tag="div" v-for="item in list" class="item" :to="'/goods/'+item.id">
			<img class="item-img" :src="item.url" alt="">
			<p class="item-name">
				<span class="item-name-hot" v-if="item.isHot">热卖</span>{{item.name}}
			</p>

			<p class="item-price">
				<span v-if="item.isteam" class="item-price-team">团购</span>￥{{item.price}}
			</p>

		</router-link>
	</div>

</template>

<script>
	export default{
		name: "IndexProduct",
		data(){
			return {
				list: [
					{
						url: "https://s3.mogucdn.com/mlcdn/c45406/180529_6jh0gk98c179k6898chi5kkhcdkb5_640x960.jpg_640x854.v1cAC.40.webp",
						isHot: false,
						isteam: true,
						name: "T恤女短袖2018夏季新款女上衣宽松韩版五分袖前后字母渐变小清新学生女T恤",
						price: "25.99",
						id: 0
					},
					{
						url: "https://s3.mogucdn.com/mlcdn/c45406/180517_063gc4aad1h7ei2gdc4h09lf69h2l_640x960.jpg_640x854.v1cAC.40.webp",
						isHot: true,
						isteam: true,
						name: "【买一送一】新款韩版原宿bf情侣装印花短袖白色T恤女半袖夏季宽松个性班服百搭上衣体恤大码潮",
						price: "19.99",
						id: 1
					},
					{
						url: "https://s3.mogucdn.com/mlcdn/c45406/180531_40dl3ll7fabdckgbeag84gcfi5fcg_640x960.jpg_640x854.v1cAC.40.webp",
						isHot: true,
						isteam: true,
						name: "港味chic宽松后背字母印花短袖T恤女大码bf风中长款上衣女夏学生",
						price: "9.99"
					},
					{
						url: "https://s3.mogucdn.com/mlcdn/c45406/180521_5c54kgf5c4ejf118558e6eh7gbibk_640x960.jpg_640x854.v1cAC.40.webp",
						isHot: true,
						isteam: false,
						name: "2018夏季新款百搭修身针织小吊带上衣+灯笼袖不规则防晒衬衫+毛边高腰牛仔短裤三件时尚套装",
						price: "0.99"
					}

				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.product{ display: flex;
			  padding: 0 2%;
			  flex-direction: row;
			  flex-wrap: wrap;
			  justify-content: space-between;
			  align-items: flex-start; 
			  
			  }
	
	.item-img{ width: 100%; }

	.item{ width: 48%;
		   margin-bottom: 1rem; }

	.item-name{ font-size: 0.6rem;
				 color: #999;
				 margin-top: 0.5rem; 
				 text-overflow: -o-ellipsis-lastline;  
				 overflow: hidden;  
				 text-overflow: ellipsis;  
				 display: -webkit-box;  
				 -webkit-line-clamp: 2;  
				 -webkit-box-orient: vertical; 
				 line-height: 1.5;}  
	
	.item-name-hot{  background: #f9e4a8;
					 padding: 2px 3px; }

	.item-price{ font-size: 0.7rem;
				  line-height: 1.2;
				  display: flex;
				  padding: 4px 3px;
				  margin-top: 0.4rem;
				  border-radius:3px;
				  overflow:hidden; }

	.item-price-team{ background: #FF5777;
					  font-size: 0.4rem;
					  color: #fff; 
					  padding: 0 3px;
					  margin-right: 0.5rem;}
</style>


