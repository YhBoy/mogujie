<template>
	<div class="nav">
		<ul>
			<router-link tag="li" class="item" v-for="item in list" :to="item.path">
				<img class="item-img" :src="item.url" alt="">
				<span class="item-name">{{item.name}}</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name: "HomeNav",
		
		data(){
			return{
				list:[
					{
						typeId: 0,
						url: "https://s17.mogucdn.com/mlcdn/c45406/171121_63687ac5h16b1cc4gh0g7b2j6ehc1_150x150.gif ",
						name: "0元夺宝 ",
						path: "/detail"
					},
					{
						typeId: 1,
						url: "https://s3.mogucdn.com/mlcdn/c45406/180416_774khl2c3b6211ckdjeh3kklh3eka_150x150.png_640x640.v1cAC.40.webp ",
						name: "限时快抢 ",
						path: "/"
					},
					{
						typeId: 2,
						url: "https://s10.mogucdn.com/mlcdn/c45406/180529_4f4d06fdb76i2d38fgghgd9i280j3_250x250.jpg_640x640.v1cAC.40.webp ",
						name: "团购立省 ",
						path: "/"
					},
					{
						typeId: 3,
						url: "https://s11.mogucdn.com/mlcdn/c45406/180416_010003d2gb82kk8dhh2225habiagd_250x250.jpg_640x640.v1cAC.40.webp",
						name: "省心套装",
						path: "/"
					},
					{
						typeId: 4,
						url: "https://s3.mogucdn.com/mlcdn/c45406/171128_520075a1kdfcec662f0d1he68k06l_150x150.png_640x640.v1cAC.40.webp",
						name: "签到有礼",
						path: "/"
					},
					{
						typeId: 5,
						url: "https://s10.mogucdn.com/mlcdn/c45406/180606_4e3735lc16fchba87k155b86d9ffi_250x250.jpg_640x640.v1cAC.40.webp",
						name: "当季热卖",
						path: "/"
					},
					{
						typeId: 6,
						url: "https://s17.mogucdn.com/mlcdn/c45406/180412_0ake32331daefi53336kb2bh79kc7_250x250.jpg_640x640.v1cAC.40.webp",
						name: "裙装裤装",
						path: "/"
					},
					{
						typeId: 7,
						url: "https://s10.mogucdn.com/mlcdn/c45406/180510_5fe8g4k70e47ig0aa7kj9cikccf47_250x250.jpg_640x640.v1cAC.40.webp",
						name: "女鞋精选",
						path: "/"
					},
					{
						typeId: 8,
						url: "https://s2.mogucdn.com/mlcdn/c45406/170507_31bf7j75b9ffd6iefj18762ekh81b_250x250.jpg_640x640.v1cAC.40.webp",
						name: "气质男装",
						path: "/"
					},
					{
						typeId: 9,
						url: "https://s10.mogucdn.com/mlcdn/c45406/180607_6ae0716jbgc3ehcb69hjkh0j3lda6_150x150.png_640x640.v1cAC.40.webp",
						name: "数码家居",
						path: "/"
					}

				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav{ display: flex;
		  flex-direction: row;
		  justify-content: space-around;}
	.nav ul{ display: flex;
		  flex-direction: row;
		  justify-content: space-around; 
		   flex-wrap:  wrap }

	.item{ display: flex;
		   flex-direction: column;
		   justify-content: space-around;
		   width: 20%; 
		   padding: 0.5rem 0;}

	.item-img{ display: block;	
			   width: 2.5rem;
			   height: 2.5rem;
			   margin: 0 auto;}
		   
	.item-name{ color: #333;
				font-size: 0.6rem;
				display: block;
				text-align: center;
				padding-top:5px; }
</style>









