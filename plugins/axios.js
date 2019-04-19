import axios from 'axios';
import Vue from 'vue';

var instance = axios.create({
	// baseURL: 'http://admin.ruixiaodian.com/',
	timeout: 5000
})

instance.interceptors.response.use(function (response) {
	let { mate} = response.data;
	if (mate.code === 200) {
		return response.data;
	} else {
		return response.data;
	}
})

Vue.prototype.$ajax = instance;