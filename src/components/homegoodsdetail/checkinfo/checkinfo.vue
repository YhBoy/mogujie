<template>
	<div>
		<div class="info border-topbottom" @click="checkreg">
			<em class="info-color">请选择 颜色 尺码</em>
			<span class="icon iconfont icon-youjiantou btn"></span>
		</div>	

		<mt-popup v-model="popupCheck" position="bottom" class="goods-info" >
		  		<check-about @change="changePop"></check-about>
		  		<check-color :colors="color" @change="accrptColor"></check-color>
		  		<check-size :sizes="size" @change="accrptSize"></check-size>
		  		<check-num :nums="num" @change="accrptNum"></check-num>
		  		<check-add ></check-add>
		</mt-popup>

	</div>
</template>

<script>
	import CheckAbout from "./checkabout/checkabout"
	import CheckColor from "./checkcolor/checkcolor"
	import CheckSize from "./checksize/checksize"
	import CheckNum from "./checknum/checknum"
	import CheckAdd from "./checkadd/checkadd"

	export default{
		name: "CheckInfo",
		components: {
			CheckAbout,
			CheckColor,
			CheckSize,
			CheckNum,
			CheckAdd
		},
		data(){
			return {
				popupCheck: false,
				buyNum: 0 ,
				buySize: {},
				buyColor: {},
				color:[
					{
						id: 0,
						sColor: "红"
					},
					{
						id: 1,
						sColor: "蓝"
					},
					{
						id: 2,
						sColor: "白色"
					}
				],
				size: [
					{
						id: 0,
						sBig: 42
					},
					{
						id: 1,
						sBig: 43
					},
					{
						id: 2,
						sBig: 44
					}
				],
				num: 0
			}
		},
		methods: {
			checkreg(){
				this.popupCheck = true 
			},
			changePop(){
				this.popupCheck = false 
			},
			accrptColor (index) {
				this.buyColor = this.color[index]
				this.$emit("change1", this.buyColor)
			},
			accrptSize (index) {
				this.buySize = this.size[index]
				this.$emit("change2" , this.buySize)
			},
			accrptNum (num) {
				this.buyNum = num 
				this.$emit("change3" , this.buyNum)
				
			}

		}
	}
</script>

<style lang="less" scoped>
	.border-topbottom::before{
		border-top: 1px solid #ccc;
		
	}
	.border-topbottom::after{
		border-bottom: 1px solid #ccc;
	}
	.info{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 1rem;
		height: 2rem;
		line-height: 2rem;
		margin: 0.5rem 0;
		.info-color{
			color: #000;
			font-size: 0.7rem;
		}
		.btn{
			color: #000;
			font-size: 1rem;
		}
	}
	
	.goods-info{ width: 100%; }




</style>











