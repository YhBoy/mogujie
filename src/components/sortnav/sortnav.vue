<template>
	<div>
		<div class="sortnav" ref='wrapper1'>
			<ul class="sortnav-ul" >
				<li class="item" :class="active == index ? 'item-active': ''"  v-for="(item,index) in list" @click="addClick(index)"><span></span>{{item.name}}</li>
			</ul>
		</div>
		<div class="content" ref="content">
			<div>
				<div v-for="(item, index) in product" :class="index == active ?'show':'hide'" >
					<ul class="content-ul">
						<router-link tag="li" class="item-pro" v-for="items in item" :to="'/goods/' + item.id">
							<div>
								<img :src="items.url" alt="">
								<p>{{items.name}}</p>
							</div>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
 	import BScroll from 'better-scroll'
	export default{
		name: "SortNav",
		data(){
			return {
				active: 0,
				list: [
					{
						id: 0,
						name: "正在流行",
						add: true
					},
					{
						id: 1,
						name: "上衣"
					},
					{
						id: 2,
						name: "裤子"
					},
					{
						id: 3,
						name: "裙子"
					},
					{
						id: 4,
						name: "内衣"
					},
					{
						id: 5,
						name: "女鞋"
					},
					{
						id: 6,
						name: "男友"
					},
					{
						id: 7,
						name: "包包"
					},
					{
						id: 8,
						name: "运动"
					},
					{
						id: 9,
						name: "配饰"
					},
					{
						id: 10,
						name: "女装"
					},
					{
						id: 11,
						name: "个护"
					},
					{
						id: 12,
						name: "家具"
					},
					{
						id: 13,
						name: "百货"
					},
					{
						id: 14,
						name: "母婴"
					},
					{
						id: 15,
						name: "食品"
					}
				],
				product:[
					  [
						 

							{
								"url": "https://s11.mogucdn.com/mlcdn/c45406/170623_255kj82437792fbdf8c8dic904llh_130x130.jpg_200x9999.v1c7E.webp",
								"name": "牛仔裤",
								"id": 0
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180601_2a8e1hf4c45jee4ijd06jlj6glaa7_120x120.jpg_300x9999.v1c7E.webp",
								"name": "连衣裙",
								"id": 1
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg_300x9999.v1c7E.webp",
								"name": "T恤",
								"id": 2
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180423_7213g8b3l215jb2a4932b039afe6e_180x180.jpg_300x9999.v1c7E.webp",
								"name": "男牛仔裤",
								"id": 3
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180613_181iajdi2a63ala8253ejgh92cld8_120x120.jpg_300x9999.v1c7E.webp",
								"name": "五分裤",
								"id": 4
							},
							{
								"url": "https://s11.mogucdn.com/mlcdn/c45406/170623_255kj82437792fbdf8c8dic904llh_130x130.jpg_200x9999.v1c7E.webp",
								"name": "牛仔裤",
								"id": 5
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180601_2a8e1hf4c45jee4ijd06jlj6glaa7_120x120.jpg_300x9999.v1c7E.webp",
								"name": "连衣裙",
								"id": 6
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg_300x9999.v1c7E.webp",
								"name": "T恤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180423_7213g8b3l215jb2a4932b039afe6e_180x180.jpg_300x9999.v1c7E.webp",
								"name": "男牛仔裤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180613_181iajdi2a63ala8253ejgh92cld8_120x120.jpg_300x9999.v1c7E.webp",
								"name": "五分裤"
							},
							{
								"url": "https://s11.mogucdn.com/mlcdn/c45406/170623_255kj82437792fbdf8c8dic904llh_130x130.jpg_200x9999.v1c7E.webp",
								"name": "牛仔裤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180601_2a8e1hf4c45jee4ijd06jlj6glaa7_120x120.jpg_300x9999.v1c7E.webp",
								"name": "连衣裙"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg_300x9999.v1c7E.webp",
								"name": "T恤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180423_7213g8b3l215jb2a4932b039afe6e_180x180.jpg_300x9999.v1c7E.webp",
								"name": "男牛仔裤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180613_181iajdi2a63ala8253ejgh92cld8_120x120.jpg_300x9999.v1c7E.webp",
								"name": "五分裤"
							},
							{
								"url": "https://s11.mogucdn.com/mlcdn/c45406/170623_255kj82437792fbdf8c8dic904llh_130x130.jpg_200x9999.v1c7E.webp",
								"name": "牛仔裤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180601_2a8e1hf4c45jee4ijd06jlj6glaa7_120x120.jpg_300x9999.v1c7E.webp",
								"name": "连衣裙"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg_300x9999.v1c7E.webp",
								"name": "T恤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180423_7213g8b3l215jb2a4932b039afe6e_180x180.jpg_300x9999.v1c7E.webp",
								"name": "男牛仔裤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180613_181iajdi2a63ala8253ejgh92cld8_120x120.jpg_300x9999.v1c7E.webp",
								"name": "五分裤"
							}
						
					  ],
					  [

							{
								"url":"https://s11.mogucdn.com/mlcdn/c45406/170623_255kj82437792fbdf8c8dic904llh_130x130.jpg_200x9999.v1c7E.webp"	,
								"name": "牛仔裤"
							},
							{
								"url":"https://s2.mogucdn.com/mlcdn/c45406/180601_2a8e1hf4c45jee4ijd06jlj6glaa7_120x120.jpg_300x9999.v1c7E.webp"	,
								"name": "连衣裙"
							},
							{
								"url":"https://s2.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg_300x9999.v1c7E.webp"	,
								"name": "T恤"
							},
							{
								"url": "https://s2.mogucdn.com/mlcdn/c45406/180419_274d4g40cbk0f3ij6j01je5k22144_180x180.jpg_300x9999.v1c7E.webp",
								"name": "休闲男鞋"
							}					
					
					],
					[

							{
								"url":"https://s11.mogucdn.com/mlcdn/c45406/170623_255kj82437792fbdf8c8dic904llh_130x130.jpg_200x9999.v1c7E.webp"	,
								"name": '牛仔裤'
							},
							{
								"url":"https://s2.mogucdn.com/mlcdn/c45406/180601_2a8e1hf4c45jee4ijd06jlj6glaa7_120x120.jpg_300x9999.v1c7E.webp"	,
								"name": '连衣裙'
							},
							{
								"url":"https://s2.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg_300x9999.v1c7E.webp"	,
								"name": 'T恤'
							}						
					
					]
				]
				
			}
		},
		methods: {
			addClick(index){
				this.active = index 
			}
		},
		mounted (){
			this.scroll = new BScroll(this.$refs.wrapper1,{click: true})
			this.scroll = new BScroll(this.$refs.content,{click: true})
		}
	}
</script>

<style lang="less" scoped>
	.content{ width: 80%;
			  position:absolute;
			  left: 20%;
			  top: 2.5rem;
			  bottom:0;
			  overflow: hidden; 
			  background: #fff;}
	.sortnav{ 
			  width: 20%;
			  position:absolute;
			  left: 0;
			  top: 2.5rem;
			  bottom:0;
			  overflow: hidden;}
	.sortnav-ul{ width: 100%;
				 background: #f6f6f6;}
	.nav-content{ display: flex;
				  flex: 1; }
	.item{ height: 2.5rem;
		   line-height: 2.5rem;
		   text-align: center;
		   font-size: 0.6rem;}
	.item-active{ color:#ff5577;
				  background: #fff;
				  position: relative; }
	.item-active span{ width:3px;
				       height:1rem;
				       background: #ff5577;
				       position: absolute;
				       left: 0;
				       top: 50%;
				       margin-top: -0.5rem; }
	
	.item-pro{ width: 31%;
			   margin: 0 1%;
			   }
	
	.item-pro img{ display: block;
				   width: 80%;
				   margin: 0 auto;
				   margin-top: 1rem; }
	
	.item-pro p{ text-align: center;
				 font-size: 0.5rem;
				 padding-top: 0.3rem; }
	
	.content-ul{ display: flex;
				 flex-direction: row;
				 flex-wrap: wrap; }

	.show{ display: block; }
	.hide{ display: none; }
</style>









