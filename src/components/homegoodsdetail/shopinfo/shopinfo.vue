<template>
	<div>
		<div class="shop-info border-topbottom" @click="shopinfo">
			<ul class="shop-ul">
				<li>
					<em class="icon iconfont icon-duihaocheckmark17 check"></em>
					<span>72小时发货</span>
				</li>
				<li>
					<em class="icon iconfont icon-duihaocheckmark17 check"></em>
					<span>7天无理由退货</span>
				</li>
				<li>
					<em class="icon iconfont icon-duihaocheckmark17 check"></em>
					<span>退补货运费</span>
				</li>
				<li>
					<em class="icon iconfont icon-youjiantou right-btn"></em>
				</li>
			</ul>
		</div>
		
		<mt-popup v-model="popupVisible" position="bottom">
		  	<div>
		  		<h2 class="service-sub">服务说明</h2>
		  		<ul>
		  			<li class="service-info">
		  				<em class="icon iconfont icon-duihaocheckmark17 check"></em>
		  				<div>
		  					<p class="service-title">72小时发货</p>
		  				</div>
		  			</li>
		  			<li class="service-info">
		  				<em class="icon iconfont icon-duihaocheckmark17 check"></em>
		  				<div>
		  					<p class="service-title">7天无理由退货</p>
		  					<span class="service-desc">物流签收后7天内买家可无理由退货，需满足退货条件</span>
		  				</div>
		  			</li>
		  			<li class="service-info">
		  				<em class="icon iconfont icon-duihaocheckmark17 check"></em>
		  				<div>
		  					<p class="service-title">退货补运费</p>
		  					<span class="service-desc">新品认证商品是蘑菇街根据当下时尚流行元素挑选出来的热点新品。关注新品，轻松掌控潮流趋势。</span>
		  				</div>
		  			</li>
		  			<li class="service-info">
		  				<em class="icon iconfont icon-duihaocheckmark17 check"></em>
		  				<div>
		  					<p class="service-title">全国包邮</p>
		  				</div>
		  			</li>
		  		</ul>
		  	</div>
		</mt-popup>

	</div>
</template>
<script>

	export default{
		name: "ShopInfo",
		data(){
			return{
				popupVisible: false
			}
		},
		methods: {
			shopinfo(){
				this.popupVisible = true ;
			}
		}
	}
</script>

<style lang="less" scoped>
	.mint-popup-bottom{ width: 100%; }
	.border-topbottom::before{
		border-top: 1px solid #ccc;
		
	}
	.border-topbottom::after{
		border-bottom: 1px solid #ccc;
	}
	.product{ padding-bottom: 3rem; }
	.shop-info{ margin-top: 0.6rem; }
	.shop-ul{
		display: flex;
		flex-direction: row;
		justify-content:space-around;
		padding: 0.6rem 0;
		.check{
			 color: #f25;
			 margin-right: 0.2rem;
		}
	}
	.service-sub{ font-size: 1rem;
					height: 2rem;
					line-height: 2rem;
					text-align: center;
					color: #999;
					position: relative;
					.btn-close{
						color: #000;
						display: block;
					}
	 }
	 .service-info{
	 	margin: 0.4rem 0;
	 	display: flex;
	 	flex-direction: row;
	 	padding: 0 0.5rem;
	 	align-items: center;
	 	align-content: center;
	 	.check{ color: #f25;
	 			font-size: 1rem;
	 			margin-right: 0.2rem;}

		.service-title{ font-size: 0.8rem;
						color: #333; }
		.service-desc{ font-size: 0.5rem;
					   color: #999;
					   line-height: 1.2;
					   padding-top: 0.2rem; }
	 }
	 
</style>


