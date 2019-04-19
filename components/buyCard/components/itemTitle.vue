<style scoped lang="scss">
.qiyi-detail-title{
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h4{
	font-size: 40px;
	font-weight: 500;
	text-align: center;
	color: #333333;
	}

	p{
	margin-top: 16px;
	font-size: 30px;
	font-weight: 500;
	text-align: center;
	color: #66c5c3;
	}
}
</style>

<template>
<div class="qiyi-detail-title">
	<h4 :style="{'color': titleCHColor}">{{titleCH}}</h4>
	<p>{{titleEN}}</p>
</div>
</template>

<script>
export default {
	props:{
		'titleCH': {
			type: String,
			default: ''
		},
		titleCHColor: {
			type: String,
			default: '#333333'
		},
		'titleEN': {
			type: String,
			default: ''
		}
	}
}
</script>
