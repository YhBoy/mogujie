<template>
	<div >
		 <ul>
		 	<li class="set border-bottom" v-for="item in list">
		 		<div class="set-img">
		 			<span class="icon iconfont icon-single set-btn"></span>
		 		</div>
		 		<div class="set-div ">
		 			<p class="set-name">{{item.name}}</p>
		 			<span class="icon iconfont icon-youjiantou go-btn"></span>
		 		</div>
		 	</li>
		 </ul>
	</div>
</template>

<script>
	export default{
		name: "MySet",
		data(){
			return {
				list: [
					{
						url: "//s10.mogucdn.com/p1/160727/upload_ie4tgm3ege4wkmrqmezdambqgqyde_56x56.png",
						name: "消息通知"
					},
					{
						url: "//s10.mogucdn.com/p1/160307/idid_ifrtqmdfgztggnzsg4zdambqhayde_84x84.png",
						name: "客服"
					},
					{
						url: "//s10.mogucdn.com/p1/160727/upload_ifrdonbugezgkmrqmezdambqmeyde_56x56.png",
						name: "意见反馈"
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.border-bottom:before{
		border-bottom: 1px solid #ccc;
	}
	.set{
		display: flex;
		flex-direction: row;
		height: 2.5rem;
		line-height: 2.5rem;
		justify-content: space-between;
		.set-img{
			width: 20%;
			text-align: center;
			width: 1.5rem;
			height: 1.5rem;
			background: #ff5777;
			border-radius: 50%;
			margin: 0 auto;
			margin-top: 0.5rem;
			display: flex;
			justify-content: center;
			align-content: center;
			align-items: center;
			.set-btn{
				line-height: 1.5rem;
				color: #fff;
				text-align: center;
			}
		}
		.set-div{
			width: 80%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.set-name{
				font-size: 0.8rem;
			}
			.go-btn{
				margin-right: 1rem;
			}
			
		}
	}
</style>













