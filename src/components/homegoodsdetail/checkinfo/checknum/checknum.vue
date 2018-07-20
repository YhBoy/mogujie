<template>
	<div class="num">
		<p class="num-title">数量</p>
		<div class="num-info">
			<em class="icon iconfont icon-minus-bold icon-btn" @click="lower"></em>
			<input type="number" disabled="disabled"  v-model="nums" class="btn-input">
			<em class="icon iconfont icon-jiahao icon-btn" @click="add"></em>
		</div>
	</div>
</template>

<script >
	export default{
		name: "CheckNum",
		data () {
			return {
				nums: 1
			}
		},
		methods: {
			lower () {
				this.nums--
				if ( this.nums <= 1 ) {
					this.nums = 1
				}
				this.$store.dispatch("changeNum", this.nums)
				this.$emit("change",this.nums)
			},
			add ( ) {
				this.nums++
				if ( this.nums >= 10 ) {
					this.nums = 10
				}
				this.$store.dispatch("changeNum", this.nums)
				this.$emit("change",this.nums)
			}
		}
	}
</script>
<style lang="less" scoped>
	.num{ padding: 0.5rem 1rem; }
	.num-title{ 
		font-size: 0.8rem;
		color: #000;
	}
	.num-info{
		display: flex;
		flex-direction: row;
		margin-top: 0.5rem;
		.icon-btn{
			width: 1rem;
			height: 1rem;
			border: 1px solid #ccc;
			font-size: 0.6rem;
			color: #666;
			line-height: 1rem;
			text-align: center;
		}
		.btn-input{
			width: 2rem;
			background: #fff;
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			text-align: center;
			color: #000;
			font-size: 0.6rem;
		}
	}
</style>







