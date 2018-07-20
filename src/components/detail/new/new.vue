<template>
	<div>
		<h2 class="fast-product-title"><router-link tag="em" class="icon iconfont icon-fanhui back-btn" to="/"></router-link><span class="fast-line"></span>限时限量 底价疯抢</h2>
		<div>
			<img class="img-top" src="https://s11.mogucdn.com/mlcdn/c45406/180628_18b5l5b1li8defac82ejjd13k973h_750x250.jpg_1200x9999.v1c7E.70.webp" alt="">
		</div>
		<div class="kg"></div>
		<div class="new">
				<h2 class="new-title border-bottom">新品推荐</h2>
				<div class="list  border-bottom" v-for="item in list">
					<div class="list-img">
						<span class="list-icon"></span>
						<img class="list-pic" :src="item.url" alt="">
					</div>
					<div class="list-content">
							<p class="list-content-name">{{item.name}}</p>
							<p class="list-content-desc">{{item.desc}}</p>
							
							<p class="list-content-num">已抢购{{item.num}}件</p>
							<div class="list-price">
								<p class="list-prices">￥{{item.price}}</p>
								<div class="buy-now">立即抢购</div>
							</div>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "DetailNew",
		data (){
			return{
				list: [
					{
						url: "https://s3.mogucdn.com/mlcdn/c45406/180612_61cdccd3dcj43df3aggki7f5jkhdg_640x960.jpg_280x420.v1cAC.40.webp",
						name: "显瘦条纹连衣裙",
						desc: "流苏系带蝴蝶结，俏皮灵动，五分",
						num: 75,
						price: 69.9,
						hot: "https://s10.mogucdn.com/mlcdn/c45406/180515_449c61d9d8b7537cl14le6c1kdl88_62x74.png",
						new: "https://s10.mogucdn.com/mlcdn/c45406/180320_34jikhg0cefh7dk1f277ec36021b0_54x30.png"

					},
					{
						url: "https://s3.mogucdn.com/mlcdn/c45406/180612_61cdccd3dcj43df3aggki7f5jkhdg_640x960.jpg_280x420.v1cAC.40.webp",
						name: "显瘦条纹连衣裙",
						desc: "流苏系带蝴蝶结，俏皮灵动，五分",
						num: 75,
						price: 69.9,
						hot: "https://s10.mogucdn.com/mlcdn/c45406/180515_449c61d9d8b7537cl14le6c1kdl88_62x74.png",
						new: "https://s10.mogucdn.com/mlcdn/c45406/180320_34jikhg0cefh7dk1f277ec36021b0_54x30.png"

					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.border-top:before{ border:1px solid #e5e5e5; }
	.border-bottom:before{ border:1px solid #e5e5e5; }
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
	.img-top{
		width: 100%;
	}
	.kg{
		margin-top: 0.5rem;
		padding-top: 0.5rem;
		background: #f9f9f9;
	 }
	 .new-title{
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			font-size: 0.8rem;
	  }

	.list{
		display: flex;
		flex-direction: row;
		padding: 1rem;
		.list-img{
			display: flex;
			
			.list-pic{
				height: 7rem;
				width: auto;
			}
		}
		.list-content{
			padding-left: 1rem;
			display: flex;
			flex: 1;
			flex-direction: column;
			.list-content-name{
				font-size: 1rem;
				color: #333;
			}
			.list-content-desc{
				font-size: 0.6rem;
				color: #999;
				padding: 0.5rem 0;
			}
			.list-content-num{
				font-size: 0.6rem;
				color: #FF5777;
				padding: 0.5rem 0;
			}
			.list-prices{
				font-size: 0.8rem;
				color: #FF5777;
			}
			.buy-now{
				width: 5rem;
				height: 1.5rem;
				border-radius: 3px;
				background: #FF57A9;
				color:#fff;
				text-align: center;
				line-height: 1.5rem;
				margin-top: 0.5rem;
			}
		}
	}

</style>






