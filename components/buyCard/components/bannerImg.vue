<style lang="scss" scoped>
.banner-img-container{
	width: 100%;
	display: flex;
	justify-content: center;
	overflow: hidden;
}
</style>

<template>
	<div class="banner-img-container" :style="{'background-image': 'linear-gradient('+deg+','+firstClr+','+lastClr+')'}">
		<img :src="img" alt="bannerImg">
	</div>
</template>

<script>
export default {
	props: {
		'img': {
			type: String,
			default: ''
		},
		'deg': {
			type: String,
			default: '180deg'
		},
		'firstClr': {
			type: String,
			default: '#FD794F'
		},
		'lastClr': {
			type: String,
			default: '#E83717'
		}
	}
}
</script>
