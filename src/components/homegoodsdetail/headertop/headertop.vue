<template>
	<div class="wrap">
		<div class="title" v-show="showAbs">
			<router-link tag="div" class="btn" to="/">
				<span class="icon iconfont icon-fanhui back-btn"></span>
			</router-link>
		</div>

		<div class="title-desc" :style="opacityStyle" v-show="!showAbs">
			<router-link tag="div" class="btn1" to="/">
				<span class="icon iconfont icon-fanhui back-btn1"></span>
			</router-link>
			<p class="desc">产品详情</p>
		</div>
	</div>
</template>

<script>
	export default{
		name: "HeaderTop",
		data(){
			return {
				showAbs: true,
				opacityStyle: {
					opacity: 0
				}
			}
		},
		methods : {
			handleScroll (){
				const top = document.documentElement.scrollTop
				if( top > 60 ){
					let opacity = top / 140
					opacity = opacity > 1 ? 1: opacity
					this.opacityStyle = { opacity }
					this.showAbs = false
				}else{
					this.showAbs = true
				}
			}
		},
		activated(){
			window.addEventListener("scroll",this.handleScroll)
		}
	}
</script>

<style lang="less" scoped>
	.wrap{  position: absolute; 
			height: 2rem;
			line-height: 2rem;
			width: 100%;}
	.title{ position: absolute;
			width: 1.4rem;
			height: 1.4rem;
			text-align: center;
			left: 5px;
			top:50%;
			margin-top: -0.7rem;
			}
	
	.desc{
		width: 100%;
		text-align: center;
		font-size: 0.8rem;
		color: #fff;
		
	}

	.btn{ 
		width: 1.4rem;
		height: 1.4rem;
		background: #ccc;
		border-radius: 50%;
		position: absolute;

		.back-btn{
			text-align: center;
			line-height: 1.4rem;
			display: block;
			color: #ff468f;
			font-size: 1rem;
		}
	 }

	.title-desc{
		width: 100%;
		left: 0;
		height: 2rem;
		line-height: 2rem;
		background:#ff468f;
		position:fixed;

		.btn1{
			width: 1.4rem;
			height: 1.4rem;
			line-height: 1.4rem;
			text-align: center;

			border-radius: 50%;
			position: absolute;
			left: 5px;
			top: 5px;
			z-index: 10;
			.back-btn1{
				color: #fff;
			}
		}
	}

</style>

