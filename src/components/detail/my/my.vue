<template>
	<div>

		<h2 class="fast-product-title"><router-link tag="em" class="icon iconfont icon-fanhui back-btn" to="/"></router-link><span class="fast-line"></span>限时限量 底价疯抢</h2>
		<p class="sell">我的快抢 ...</p>
		<div class="product border-top" v-for="item in list">
			<div class="product-img">
				<img class="pro-img" :src="item.url" alt="">
			</div>

			<div class="product-content">
				<h2 class="product-title">{{item.name}}</h2>
				<p class="product-per">
					<span class="product-per-num" ></span>
				</p>
				<p class="product-num">
					<span class="product-num-rush">已抢购{{item.rush}}件</span>
					<em class="product-num-lave">仅剩{{item.lave}}件</em>
				</p>
				<div class="product-info">
					<div class="product-info-price">
						<span class="product-info-price-now">¥{{item.price}}</span>
						<span class="product-info-price-old">¥{{item.oldprice}}</span>
					</div>
					<button class="buy-btn">立即抢购</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "DetailMy",
		data(){
			return {
				list: [
					{
						url:"https://s2.mogucdn.com/mlcdn/1689c6/180615_603lhlfk9i8lckh18dd6kk8kad645_640x640.jpg_400x400.v1cAC.70.webp",
						name: "套装甜美网纱裙T恤两件套",
						allnum: 100,
						pernum: 10,
						rush: 10,
						lave: 90,
						price: 48.30,
						oldprice: 128
					},
					{
						url:"https://s2.mogucdn.com/mlcdn/1689c6/180610_39i8dg4ea1i460g0i590je408ia59_640x640.jpg_400x400.v1cAC.70.webp",
						name: "学生中长款防晒衣薄外套",
						allnum: 200,
						pernum: 20,
						rush: 10,
						lave: 180,
						price: 69,
						oldprice: 158
					}

				]
			}
		}
	}
</script>

<style lang="less" scoped>
.border-top:before{ border:1px solid #e5e5e5; }
	.fast-product-title{ height: 0.8rem;
						 line-height: 0.8rem;
						 color: #333;
						 display: flex;
						 flex-direction: row;
						 padding: 1rem 0;
						 font-size: 0.7rem;}
	.fast-line{ margin-left: 1rem;
				width: 3px;
				height:0.8rem;
				background: #333;
				display:block;
				margin-right: 0.5rem; }
	.sell{
		padding: 1rem;
		font-size: 1rem;
	}
	.product{ padding: 1rem 0.5rem;
			  display: flex;
			  flex-direction:row; }
	
	.product-img{ width: 30%;
				  margin-right: 0.5rem; }
	.pro-img{ width: 100%; }

	.product-content{ display: flex;
					  flex: 1; 
					  flex-direction: column;}
	
	.product-title{ font-size: 0.8rem;
				    color:#333;
				    padding-top: 0.2rem; }
	
	.product-per{ width: 80%;
				  background: #ccc;
				  height: 0.8rem; 
				  border-radius: 1rem;
				  margin-top: 0.4rem;
				  overflow: hidden;}
	
	.product-num{ display: flex;
			   flex-direction:row;
			   justify-content: space-between;
			   margin-top: 0.6rem; }
	
	.product-num-rush{ color: #999;
					   font-size: 0.7rem;
					  }
	
	.product-num-lave{ color: #ff5777;
					   font-size: 0.7rem; }

	.product-info{ display: flex;
			   		flex-direction:row;
			   		justify-content: space-between;
			   		margin-top: 0.6rem; }

	.product-info-price{ display: flex;
			   				flex-direction:column; }

	.product-info-price-now{ color: #ff5777;
							 font-size: 0.8rem; }

	.product-info-price-old{ color: #999999;
							 font-size: 0.5rem;
							 text-decoration: line-through; }
	.buy-btn{ display: block;
			  height: 1.6rem;
			  line-height: 1.6rem; 
			  background:#ff5777;
			  border-radius: 5px;
			  width: 40%;
			  color: #fff;}
	
	.product-per-num{ background: #ff5777;
					  height: 0.8rem;
					  width: 10%;
					  display: block;
					  border-radius: 1rem; }
	
	.back-btn{ font-size: 1rem;
			   margin-left:5px; }
</style>

















