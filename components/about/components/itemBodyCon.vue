<style lang="scss" scoped>
.item-body-container{
	width: 100%;

	display: flex;
	justify-content: center;

	.item-con-box{
		width: 1200px;
	}
}
</style>

<template>
	<div class="item-body-container">
		<div class="item-con-box"
			:class = "contentClass"
			:style = "{'height': height, 'width': width}"
			>
			<slot name="container"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		width: {
			type: String,
			default: '1200px'
		},
		height: {
			type: String,
			default: 'auto'
		},
		contentClass: {
			type: String,
			default: ''
		}
	}
}
</script>
