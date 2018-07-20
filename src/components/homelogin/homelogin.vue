<template>
	<div>
		<div class="top border-bottom">
			<router-link tag="span" to="/" class="icon iconfont icon-fanhui back-btn"> </router-link>
			<h2 class="title">账号登陆</h2>
		</div>
		<div class="login">
			<div class="login-name border-bottom">
				<input type="text" name="username" v-model="loginName" class="login-name-input" placeholder="用户名/邮箱/手机号">
			</div>
			<div class="login-name border-bottom">
				<input type="password" name="password" v-model="loginPwd" class="login-name-input" placeholder="密码">
			</div>
			<div class="login-sub">
				<input type="button" class="login-sub-input" value="去登陆">
			</div>

		</div>
	</div>
</template>

<script>
	export default{
		name: "HomeLogin",
		data(){
			return{
				loginName: "",
				loginPwd: ""
			}
		}
	}
</script>

<style lang="less" scoped>
	.border-bottom{
		border-bottom: 1px solid #ccc;
	}
	.top{
		height: 2.5rem;
		line-height: 2.5rem;
		background: #fafafa;
		position: relative;
		.back-btn{
			font-size: 1rem;
			margin-left: 0.5rem;
			position: absolute;
		}
		.title{
			text-align: center;
			font-size: 0.8rem;
		}	
	}
	.login{
			width: 90%;
			margin: 0 auto;
			margin-top: 2rem;
			.login-name{
				width: 100%;
				height: 2.5rem;
				line-height: 2.5rem;
				.login-name-input{
					width: 100%;
					height: 1.5rem;
					line-height: 1.5rem;
					font-size: 0.8rem;
					padding-left: 0.5rem;
				}
			}


		}
	.login-sub{
				height: 2.5rem;
				line-height: 2.5rem;
				border-radius: 1rem;
				margin-top: 1rem;
				overflow: hidden;
				.login-sub-input{
					display: block;
					width: 100%;
					height: 2.5rem;
					line-height: 2.5rem;
					background:  #FF5777;
					font-size: 1rem;
					color: #fff;

				}
			}
</style>









