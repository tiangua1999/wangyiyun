<template>
	<view class="box">
		<button @click='goseach' style='width: 80%; background-color: #f5f5f5; height: 50rpx; padding-left: 10px;border-radius: 50px;font-size: 12rpx;' >
			点击搜索
		</button>
	</view>
	<view class="list-box">
		<text style='margin-bottom: 10px;display: inline-block;'>榜单：</text>
		
		<view class='item' v-for='i in hotList'>
			<view >
				<img class='item-img' :src="i.coverImgUrl" alt="">
			</view>
			<view style='font-size: 12rpx'>
				{{i.description}}
			</view>
			
		</view>
	</view>
	<view class="list-box2">
		<text style='margin-bottom: 10px;display: inline-block;'>热门歌单：</text>
		<view class="item2-box">
			<view class='item2' v-for='i in hotList2'>
					{{i.name}}
			</view>
		</view>
		
	</view>
</template>

<script>
	import  { getallbangdan,getrmgd } from '../../apis/apis.js'
	
	export default {
		data() {
			return {
				hotList:[],
				hotList2:[],
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
			let res2 = await getrmgd()
			console.log(res2.data.tags);
			this.hotList2 = res2.data.tags
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
