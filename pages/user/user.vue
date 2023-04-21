<template>
	<view class="box">
		
	</view>
</template>

<script>
	import { gethqgdsygq } from '../../apis/apis.js'
	export default {
		data() {
			return {
				arr1:[],
			}
		},
		onLoad() {
			this.gogedan({
				id:5001
			})
		},
		methods: {
			async gogedan(id){
				console.log(id);
			}
		}
	}
</script>

<style>
	@import './user.scss';
</style>