<template>
	<div class="nav border-top">
		<ul >
			<router-link tag="li" to="fastbuy" class="active">
				<span class="icon iconfont icon-qianggou icon-active"></span>
				<p class="active-title">限时快抢</p>
			</router-link>
			<router-link tag="li" to="sell">
				<span class="icon iconfont icon-yushou icon-active"></span>
				<p class="active-title">即将售罄</p>
			</router-link>
			<router-link tag="li" to="new">
				<span class="icon iconfont icon-31_xinpin icon-active"></span>
				<p class="active-title">新品快抢</p>
			</router-link>
			<router-link tag="li" to="my">
				<span class="icon iconfont icon-naozhong icon-active"></span>
				<p class="active-title">我的快抢</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name: "DetailBottomNav",
		data(){
			return {
				active: 0
			}
		}
	}
</script>

<style lang="less" scoped>
	.border-top:before{  
		border: 1px solid #e5e5e5;
	}
	.nav{ position: fixed;
		  width: 100%;
		  left:0;
		  bottom:0;
		  height: 2.5rem; 
		  background: #fafafa;}
	

	.nav li{ float: left;
			 width: 25%;
			}
	
	.icon-active{ text-align: center;
				  display: block;
				  font-size: 1.4rem;
				  margin-top: 0.2rem;}
	
	.active-title{ text-align: center;
				   display: block;
				   padding-top: 0.2rem; 
				   color: #999;}

	.router-link-active .icon-active{ color: #ff5777; }
	.router-link-active p{ color: #ff5777; }
</style>





