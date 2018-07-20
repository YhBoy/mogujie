<template>
	<div class="bottom-nav" >
		<ul class="bottom-nav-ul border-top ">
			<router-link tag="li" to="/index">
				<span class="icon iconfont icon-shouye bottom-nav-icon "></span>
				<p class="bottom-nav-title">首页</p>
			</router-link>
			<router-link tag="li" to="/sort" >
				<span class="icon iconfont icon-leimupinleifenleileibie bottom-nav-icon"></span>
				<p class="bottom-nav-title">分类</p>
			</router-link>
			<router-link tag="li" to="/car"  @click.native="juige">
				<span class="icon iconfont icon-gouwuche bottom-nav-icon"></span>
				<p class="bottom-nav-title">购物车</p>
			</router-link>
			<router-link tag="li" to="/mine" >
				<span class="icon iconfont icon-wode bottom-nav-icon"></span>
				<p class="bottom-nav-title">我的</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name: "BottomNav",
		
		data(){
			return{
				index : 0,
				listShow : true
			}
		},
		methods : {
			juige () {
				this.$emit("change",false)
			}
		}
	}
</script>


<style lang="less" scoped>
	
	.bottom-nav{ width: 100%;
				 position: fixed;
				 bottom: 0;
				 left: 0;
				 background: #fff;
				 z-index:3;
				 height: 2.5rem;}
	.border-top::before{  border: 1px solid #aaa;  }

	.bottom-nav-ul{ display: flex;
					flex-direction: row;
					justify-content: space-around;
					padding-top: 0.3rem;  }

	.bottom-nav-icon{ font-size: 1.2rem;
					  text-align: center; 
					  display: block; }

	.bottom-nav-title{ color: #333;
					   text-align: center;
					   font-size: 0.6rem;
					   padding-top: 0.2rem;  }
	.router-link-active .bottom-nav-icon{ color:#FF5777;  }
	.router-link-active .bottom-nav-title{ color:#FF5777;  }



</style>






















