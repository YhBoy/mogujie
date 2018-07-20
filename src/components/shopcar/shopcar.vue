<template>
	<div class="car">
		<car-top></car-top>
		<div class="kg"></div>
		<car-list :list="list" @change="clickList"></car-list>
		
	</div>
</template>

<script>
	import CarTop from "./cartop/cartop"
	import CarCale from "./carcale/carcale"
	import CarList from "./carlist/carlist"
	export default{
		name: "ShopCar",
		components: {
			CarTop,
			
			CarList
		},
		data() {
			return {
				list: [
					{	url: "https://s3.mogucdn.com/mlcdn/c45406/170519_5f5chgb880d22kfggef3f3jc36ifh_800x800.jpg_220x330.jpg",
						name: "（月销过万）情侣纯棉夏季潮流T恤男短袖日系卡通印花上衣棉青年纯色水洗圆领男生半袖体恤",
						size: "L",
						color: "黑色",
						price: 19,
						oldPrice: 9.9,
						num: 1,
						id: 0
					},
					{	url: "https://s3.mogucdn.com/mlcdn/c45406/170422_8ej4j2c4ffi2e8ghcai6k2l20ed06_800x800.jpg_220x330.jpg",
						name: "港风2018时尚人物中国风印花短袖T恤韩版宽松圆领打底衫男情侣半袖体恤",
						size: "xl",
						color: "白色",
						price: 29,
						oldPrice: 19,
						num: 1,
						id: 1
					},
					{	url: "https://s3.mogucdn.com/mlcdn/c45406/170422_8ej4j2c4ffi2e8ghcai6k2l20ed06_800x800.jpg_220x330.jpg",
						name: "港风2018时尚人物中国风印花短袖T恤韩版宽松圆领打底衫男情侣半袖体恤",
						size: "xl",
						color: "红色",
						price: 29,
						oldPrice: 19,
						num: 1,
						id: 1
					}
				]
			}
		},
		methods : {
			productList() {

			},
			clickList(item){
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.car{padding-bottom: 2.5rem;}
	.kg{
		background: #f9f9f9;
		padding-bottom: 0.5rem;
	}
</style>






