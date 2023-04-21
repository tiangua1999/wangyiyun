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
					<view class="bf" :class="{zt:show === index}" @click="toggle(index)"></view>
					
				</li>
			</ol>
		</view>
	</view>
</template>

<script>
	import { gethqgdsygq } from '../../apis/apis.js'
	export default {
		data() {
			return {
				arr1:[],
				show:'',
			}
		},
		onLoad() {
			this.gogedan({
				id:5001
			})
		},
		methods: {
			async gogedan(id){
				let res1 = await gethqgdsygq(id)
				console.log(res1);
				this.arr1 = res1.data.songs
			},
			 toggle(a) {
		 		    if (a === this.show) {
						this.show = ''
					} else {
						this.show = a
					}
		 	
			 }
		}
	}
</script>

<style>
	@import './gedan.scss';
</style>