<template>
	<div class="home">

		<keep-alive>
			<router-view></router-view>
		</keep-alive>

		<bottom-nav @change="listShow" v-show="navShow"></bottom-nav>
	</div>
</template>

<script>

	import BottomNav from "../bottomnav/bottomnav"
	export default {
		name : "HomeIndex",
		data(){
			return {
				navShow: true
			}
		},
		components: {
			BottomNav
		},
		methods : {
			listShow (index) {
				this.navShow = index
			}
		},
		watch:{
		  $route(now,old){     //监控路由变换，控制返回按钮的显示
			     if(now.path=="/car"){
			            this.navShow=false;
			     } else{
			         this.navShow=true;
			     }
			}
		},
		beforeRouteEnter (to, from, next){
			if( to.fullPath === '/car' ){
				next( vm=>{
		
					vm.navShow = false
					
				})
			}else{
				next( vm=>{
					vm.navShow = true
				})
			}


		}

}
</script>


<style lang="less" scoped>
	.home{ padding-bottom: 2.5rem; }
</style>





