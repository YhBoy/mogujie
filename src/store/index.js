import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		buyNum: 1,
		buySize: {
			id: 0,
			size: 42
		},
		buyColor: {
			id: 0,
			color: "红"
		}
	},
	actions : {
		changeColor(ctx,index){
			ctx.commit( 'changeColor',index )
		},
		changeSize(ctx,index){
			ctx.commit( 'changeSize',index )
		},
		changeNum(ctx,index){
			ctx.commit( 'changeNum',index )
		}
	},
	mutations : {
		changeColor( state, index){
			state.buyColor = index
		},
		changeSize( state, index){
			state.buySize = index
		},
		changeNum( state, index){
			state.buyNum = index
		}		
	}
})















