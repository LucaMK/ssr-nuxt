<template>
	<div>
		<qi-page></qi-page>
	</div>
</template>

<script>
import qiPage from '~/components/buyCard/qiYiCard.vue'
export default {
	components: {qiPage},
	plugins: [
		'http://api.map.baidu.com/api?v=2.0&ak=qzQVer2rGbcbREEU8nlLunNuTDuXSYEt'
	]
}
</script>

<style lang="sass" scoped>

</style>
