<template>
	<view class="box">
		<button @click='goseach' style='width: 80%; background-color: #f5f5f5; height: 50rpx; padding-left: 10px;border-radius: 50px;font-size: 12rpx;' >
			点击搜索
		</button>
	</view>
	<view class="list-box">
		
		<view class='item' v-for='i in hotList'>
			<view >
				<img class='item-img' :src="i.coverImgUrl" alt="">
			</view>
			<view >
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import  { getallbangdan } from '../../apis/apis.js'
	
	export default {
		data() {
			return {
				hotList:[]
			}
		},
		onLoad() {
			this.Agetgedan()
         
		},
		methods: {
		async Agetgedan(){
			let res = await getallbangdan()
			console.log(res.data.list);
			this.hotList = res.data.list.slice(0,3)
			console.log(this.hotList);
		},
		goseach(){
			uni.navigateTo({
				url:'/pages/seach/seach'
			})
		}
		}
	}
</script>

<style>
	@import './index.scss'
	
</style>
