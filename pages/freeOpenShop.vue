<template>
	<div>
		<free-open-page></free-open-page>
	</div>
</template>

<script>
import freeOpenPage from '~/components/freeOpen/freeOpenShop.vue'
export default {
	components: {freeOpenPage},
	plugins: [
		'http://api.map.baidu.com/api?v=2.0&ak=qzQVer2rGbcbREEU8nlLunNuTDuXSYEt'
	]
}
</script>

<style lang="sass" scoped>

</style>
