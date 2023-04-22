<template>
	<view class="box">
		<view class="top"></view>
		<view class="btn">
			<view class="bfqb" >播放全部(共{{arr1.length}}首)</view>
			<ol>
				<li class="bf_li" v-for="(item,index) in arr1" :key="index" >
					<view ><img class="tou" :src="item.al.picUrl" alt=""></view>
					<view class="mingzi">
						<view class="gequ">{{item.name}}</view>
						<view class="geshou">{{item.ar[0].name}}</view>
					</view>
					<view class="bf" :class="{zt:show === index}" @click="toggle(index ,item.id)">
						
					</view>
					
				</li>
			</ol>
		</view>
	</view>
</template>

<script>
	import { gethqgdsygq,getUrl } from '../../apis/apis.js'
	
	export default {
		data() {
			return {
				arr1:[],
				arr2: '',
				show:''
			}
		},
		onLoad(options) {

			this.gogedan(
				options
			)
		},
		methods: {
			async gogedan(id){
				let res1 = await gethqgdsygq(id)
				console.log(res1);
				this.arr1 = res1.data.songs
				
			},
			
			async toggle(a,id) {
				let res2 = await getUrl({id:id})
				console.log(res2.data.data[0]);
				this.arr2 = res2.data.data[0].url
		 		    if (a === this.show) {
						this.show = ''
						innerAudioContext.autoplay = false;
						innerAudioContext.src = '';
						innerAudioContext.onStop(() => {
						  console.log('停止播放');
						});
						
					} else {
						this.show = a
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
	@import './gedan.scss';
</style>