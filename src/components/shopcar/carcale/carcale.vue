<template>
	
</template>


<script>
	export default{
		name: "CarCale",
		data () {
			return {
				
			}
		},
		methods : {
			
		}
	}
</script>

<style lang="less" scoped>
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








