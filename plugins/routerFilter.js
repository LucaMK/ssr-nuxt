/* eslint-disable */
if (process.client) {
	var NProgress = require('nprogress')
}

export default ( {app, store}) => {
	app.router.beforeEach((to, from, next) => {
		if (process.client) {
			NProgress.start();
		}
		to.name !== 'index' ? store.commit("setNavColorV", true) : store.commit("setNavColorV", false);
		to.name !== 'index' ? store.commit("setBackgroundWV", true) : store.commit("setBackgroundWV", false);

		next()
	})

	app.router.afterEach( (to, from, next) => {
		if (process.client) {
			NProgress.done()
		}
	})
}