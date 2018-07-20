<template>
	<div>
		<div class="head border-bottom">
			<span class="icon iconfont icon-comments header-left-icon" style="display: none;"></span>
			<router-link tag="div" class="head-search" to="/search">
				<span class="icon iconfont icon-sousuo head-search-icon"></span>
				<input type="text" class="head-text" placeholder="阔腿裤">
			</router-link>
			<router-link tag="div" to="/car" class="head-city">
				
				<span class="icon iconfont icon-gouwuche head-city-icon"></span>
			</router-link>
		</div>
		
	</div>
</template>

<script>
	import HomeCity from "../homecity/homecity"
	export default {
		name : "HomeHeader",
		components: {
			HomeCity
		}
	}
</script>

<style lang="less" scoped>

.border-bottom::before{
	 border-color: #000;
}

.head{ display: flex;
	   flex-direction: row;
	   height: 2.5rem;
	   line-height: 2.5rem; }
.header-left-icon{  font-size: 1.2rem; 
					padding: 0 0.8rem;
				color: #a0a0a0;}


.head-text{  width: 100%;
			 display: flex;
			 flex: 1;
			 margin-top: 0.5rem;
			 background: #eeeeee;
			 height: 1.5rem;
			 padding-left: 1.3rem;
			 font-size: 0.8rem;}


.head-search{ display: flex;
			  flex: 1;
			  border-radius: 5px;
			  position: relative;
			  color: #9e9e9e;
			  margin-left: 1rem;
			}

.head-search-icon{  position: absolute;
				    left: 0.3rem;}

.head-city{ padding: 0 0.5rem;
			padding-top: 0.1rem;
			font-size: 0.8rem; }

.head-city-icon{ 	font-size: 1rem;
					padding-top: 0.1rem; 
					color: #ff468f;}

</style>


