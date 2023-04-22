<template>
	<view class="box">
		<input v-model='value' @confirm='seach' style='width: 70%; background-color:
		 #f5f5f5; height: 50rpx; padding-left: 10px;
		 border-radius: 50px;font-size: 12rpx;margin-right: 20rpx;' />
		 <text @click='seach'>搜索</text>
	</view>
	
	<view class="s-box">
		<text style='font-size: 15px;font-weight: 600;'>搜索结果：</text>
		<view class="center">
			<view class="song" v-for="(item,index) in list">
				<view class="left">
					<view class='left-cent' style='font-size: 14px;color: cadetblue;'>{{item.name}}</view> 
					<view class='left-cent'  style='font-size: 12px;'>{{item.ar[0].name}}-{{item.al.name}}</view>
				</view>
				<view @click='change(index,item.id)' class="right" :class='{zanting:index1===index}'>
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {getsousuo,getUrl} from '../../apis/apis.js'
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				value:'',
				list:[],
				index1:'',
				arr2: '',
			}
		},
		mounted() {
			
		},
		methods: {
			async seach(){
				console.log(this.value);
				let res = await getsousuo({keywords:this.value})
				console.log(res);
				this.list=res.data.result.songs
			},
		async change(a,id){
				console.log(a);
				let res2 = await getUrl({id:id})
				console.log(res2.data.data[0]);
				this.arr2 = res2.data.data[0].url
				if(a===this.index1){
					this.index1 = ''
					innerAudioContext.autoplay = false;
					innerAudioContext.src = '';
					innerAudioContext.onStop(() => {
					  console.log('停止播放');
					});
					
				}else{
					this.index1 = a
					innerAudioContext.autoplay = true;
					innerAudioContext.src = this.arr2;
					innerAudioContext.onPlay(() => {
					  console.log('开始播放');
					});
				}
			}
		}
	}
</script>

<style>
	@import './index.scss'

</style>
