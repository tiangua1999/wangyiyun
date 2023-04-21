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
				<view @click='change(index)' class="right" :class='{zanting:index1===index}'>
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {getsousuo} from '../../apis/apis.js'
	export default {
		data() {
			return {
				value:'',
				list:[],
				index1:''
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
			change(a){
				console.log(a);
				if(a===this.index1){
					this.index1 = ''
				}else{
					this.index1 = a
				}
			}
		}
	}
</script>

<style>
	@import './index.scss'

</style>
