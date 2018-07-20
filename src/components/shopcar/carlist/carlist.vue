<template>
	<div>
		<div>
			<div class="border-top list-content" v-for="(item,index) in list">
				<span  class="icon iconfont check"
					 @click="selectProduct(item)" :class="{'checked': item.checked}">
				</span>
				<img class="item-img" :src="item.url" alt="">
				<div class="item-content">
					<p class="item-name">{{item.name}}</p>
					<p class="item-size">颜色 ： {{item.size}}  尺码 ： {{item.color}}</p>
					<p class="item-price">{{item.price*item.num}}</p>
					<p class="item-num">
						<em class="item-num-inc icon iconfont icon-minus-bold" @click="changeMoney(item, -1)"></em>
						<input type="text" disabled="disabled" v-model="item.num" class="item-num-val">
						<em class="item-num-add icon iconfont icon-jiahao" @click="changeMoney(item, 1)"></em>
						<strong class="item-delete icon iconfont icon-shanchu" @click="showModel(index)"></strong>
					</p>
				</div>
			</div>
		</div>
		
		<div class="check border-top">
		<div class="check-info">
			<p class="check-info-p">
				<span  class=" check-no " :class="{'checkall': checkAllFlag}" @click="checkall()"></span>
				<em class="check-info-em"></em>
				<i class="check-info-i">￥{{totalMoney}}</i>

			</p>
		</div>
		<div class="cale">去结算</div>
	</div>
	<mt-popup v-model="popupVisible">
	  		<h2 class="title">确认删除？</h2>
			<p class="delete-content">
				<em class="cancle" @click="deleteClick(-1)">取消</em>
				<em class="cancle"  @click="deleteClick(1)">确认</em>
			</p>

	</mt-popup>

	</div>
</template>


<script>
	export default{
		name: "CarList",
		props: {
			list: {
				type: Array
			}
		},
		data () {
			return {
				checkAllFlag: false,
				check: false ,
				totalMoney: 0,
				popupVisible: false,
				deleteItem: ''
				
			}
		},
		methods : {
			deleteClick(item){
				if( item < 0 ){
					this.popupVisible = false
				}else{
					this.list.splice(this.deleteItem,1)
					this.popupVisible = false
					
				}
			},
			showModel(item){
				this.popupVisible = true
				this.deleteItem = item
				
			},
			selectProduct(){
				this.check = !this.check
			},
			changeMoney (product, way) {
					if( way > 0 ){
						product.num++
					}else{
						product.num--
						if( product.num <= 1 ){
							product.num = 1
						}
					}
					this.caleTotalPrice()
			},
			selectProduct (item) {
					if (typeof item.checked == 'undefined') {	
							this.$set(item,"checked",true)
					}else{
							item.checked = !item.checked
					}

					const arr = []
					const len = this.list.length

					this.list.forEach( (item ,index)=>{
						if( item.checked ){
							arr.push(item.checked) 
							if( arr.length >= 3 ){
								this.checkAllFlag = true
							}else{
								this.checkAllFlag = false
							}
						}else{
							 this.checkAllFlag = false
						}
					})
					this.caleTotalPrice()

			},
			checkall (){
				this.checkAllFlag = !this.checkAllFlag;
				this.list.forEach( (item ,index)=>{
					if (typeof item.checked == 'undefined') {	
							this.$set(item,"checked", this.checkAllFlag)
					}else{
							item.checked = this.checkAllFlag
					}
				})
				this.caleTotalPrice()
			},
			caleTotalPrice(){
				this.totalMoney = 0
				this.list.forEach( (item ,index)=>{
					if( item.checked ){
						this.totalMoney += item.num * item.price
					}
				})
			}

		}
	}
</script>

<style lang="less" scoped>
	.mint-popup{ width: 60%;
				 padding: 0.5rem 0; }
	.title{ text-align: center;
			font-size: 0.8rem; }
	.delete-content{ display: flex;
			flex-direction: row;
			justify-content: space-around; }
	.cancle{ margin-top: 1rem; font-size: 0.8rem;}
	.item-delete{
		font-size: 1.2rem;
		margin-left: 1rem; 
	}
 	.border-top{
 		border-top: 1px solid #e5e5e5;
 	}
	.list-content{
		padding: 1rem ;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: center;
		align-items: center;
		position: relative;
		.check{
			width: 1.5rem;
			height: 1.5rem;
			background-size: 100% 100%;
			background: url('../../../assets/check.png') no-repeat;
			position: absolute;
			left: 1rem;
			top: 50%;
			margin-top: -1rem;
		}
		.checked{
			width: 1.5rem;
			height: 1.5rem;
			background-size: 100% 100%;
			background: url('../../../assets/checked.png') no-repeat;
			position: absolute;
			left: 1rem;
			top: 50%;
			margin-top: -1rem;
		}
		.check-info-i2{
			font-size: 1.2rem;
			color: #ff5777;
		}
		.item-img{
			height: 6rem;
			width: auto;
			margin-right: 1.5rem;
			padding-left: 2rem;
		}
		.item-name{
			color: #333;
			font-size: 0.6rem;
			line-height: 1.5;
			font-weight: bold;
			padding-top: 0.2rem;
		}
		.item-size{
			padding-top: 0.2rem;
			font-size: 0.5rem;
		}
		.item-price{
			padding-top: 0.2rem;
			font-size: 0.7rem;
			color: #ff5777;
		}
	}
	.item-num{
		display: flex;
		flex-direction: row;
		padding-top: 0.5rem;
	}
	.item-num-inc{ border: 1px solid #ccc; 
				   width: 1.2rem;
				   height: 1.2rem;
				   text-align: center;
				   line-height: 1.2rem;}
	.item-num-val{ width: 3rem;
					border-top: 1px solid #ccc;
				   border-bottom: 1px solid #ccc;
				   text-align: center;
				   background: #fff;
				}
	.item-num-add{ border:1px solid #ccc; 
				   width:1.2rem;
				   height:1.2rem;
				   text-align : center;
				   line-height:1.2rem;}
	
	 .border-top:before{
    	border-top: 1px solid #e5e5e5;
    }
	.check{
		height: 2.5rem;
		line-height: 2.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: fixed;
		left: 0;
		width: 100%;
		bottom: 0;

		background: #fff;
		margin-top: 1rem;
		.check-info-p{
			height: 2.5rem;
			line-height: 2.5rem;
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			margin-left: 1rem;
			.check-info-i1{
				font-size: 1.2rem;
			}
			.check-info-i2{
				font-size: 1.2rem;
				color: #ff5777;

			}
			.check-info-em{
				font-size: 0.8rem;
				margin: 0 0.5rem;
			}
			.check-info-i{
				font-size: 0.8rem;
				color: #ff5777;
			}
		}
		.cale{
			height: 1.5rem;
			line-height: 1.5rem;
			width: 20%;
			background: #ff5777;
			border-radius: 3px;
			color: #fff;
			font-size: 0.6rem;
			text-align: center;
			margin-top: 0.5rem;
			margin-right: 1rem;
		}
	}
	.check-no {
			width: 1.5rem;
			height: 1.5rem;
			background-size: 100% 100%;
			background: url('../../../assets/check.png') no-repeat;
			
	}
	.checkall{
		width: 1.5rem;
		height: 1.5rem;
		background-size: 100% 100%;
		background: url('../../../assets/checked.png') no-repeat;
	}

</style>








