import axios from 'axios';
import Qs from 'qs';
import moment from 'moment';
import { access, clearLocalStorage } from '../helpers/utils';
import { message } from 'antd';
import { constant } from '@/helpers/auth';

require('moment/locale/zh-cn.js');
moment.locale('zh-cn');

// 设置post请求参数类型
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
if (access()) {
	axios.defaults.headers['Authorization'] = 'Bearer ' + access();

}
// post请求参数格式化
axios.defaults.transformRequest = [function (data) {
	if (data) {
		if (data instanceof FormData) {
			return data;
		}
		let params = '';
		for (let index in data) {
			if (typeof (data[index]) === 'object') {
				data[index] = JSON.stringify(data[index]);
				data[index] = data[index].replace(/&/g, '%26');
			} else if (typeof (data[index]) === 'string') {
				data[index] = data[index].replace(/&/g, '%26');
			}
			params += index + '=' + data[index] + '&';
		}
		params = params.substring(0, params.length - 1);
		params = params.replace(/\+/g, '%2B');
		return params;
	}
}];
// get请求参数格式化
axios.defaults.paramsSerializer = function (params) {
	if (params) {
		params = Qs.stringify(params, { encode: true });
		params = params.replace(/\+/g, '%2B');
		return params;
	}
};
let errorTimer: NodeJS.Timeout | null = null;
// 让返回数据只返回data
axios.interceptors.response.use(res => {
	if (res) {
		if (res.data && res.data.status_code) {
			if (res.data.status_code === 10001) {
				message.destroy('errorTip')
				message.error({ content: '后台服务维护中，请稍后再试', key: 'errorTip' })
			}
			return res.data;
		} else {
			return res;
		}
	}
}, error => {
	if (error.response && error.response.status === 401) {
		// 清空所有localStorage,有问题需要修改clearLocalStorage方法
		// LocalStorage 的 postAssistantGuidanceShowed不能清除

		clearLocalStorage();
		sessionStorage.clear();
		if (TYPE === constant.PROD) {
			window.location.href = LOGINPATH;
		}

	} else {
		if (!axios.isCancel(error)) {
			message.destroy('errorNet')
			message.error({ content: '网络错误，请重新尝试。', key: 'errorNet' })
		}
	}
	if (!axios.isCancel(error)) {
		if (errorTimer) {
			clearTimeout(errorTimer);
		}
		errorTimer = setTimeout(() => {
			errorTimer = null;
		}, 300);
	}
});