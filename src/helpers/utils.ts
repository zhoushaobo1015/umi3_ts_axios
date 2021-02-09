import { api } from './auth';
import axios from 'axios';
import md5 from 'md5';
import { message } from 'antd';
import defaultIcon from '../assets/default_icon.png';

/**
 * 获取缓存中的access;
 */
export function access() {
	return localStorage.getItem('access');
}
/**
 * 清除 退出需要删除的缓存
 */
export function clearLocalStorage() {
	localStorage.removeItem('code');
	localStorage.removeItem('token');
	localStorage.removeItem('activeAccount');
	// localStorage.removeItem('access');
}

/**
 * 退出登陆
 */
export function logoutFn() {
	axios.get(api.logout).then((res) => {
	}).catch((err) => {
		console.log(err, 'lgout');
	});
	clearLocalStorage();
	sessionStorage.clear();
	window.location.href = LOGINPATH;
}

/**
 * 获取主页icon
 */
export function getPageIcon(src: string): string {
	return src || defaultIcon;
}

/**
 * 数字加千位符
 * @param num
 * @param decimal
 */
export function changeDataTypeEn(num: number, decimal: number = 0): string {
	if (num === null || num === undefined || isNaN(num)) {
		return '-';
	}
	let str: string;
	if (decimal > 0 && decimalPlaces(num) !== 0) {
		let multiple = Math.pow(10, decimal);
		str = Math.round(num * multiple) / multiple + '';
	} else {
		str = num.toFixed();
	}
	if (str.includes('.')) {
		str = str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
	} else {
		str = str.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
	}

	return str;
}


/**
 * 路由拼接参数
 * @param url
 * @param data
 */
export function JSON2Params(url: string, data: { [key: string]: string }) {

	let result = ''
	for (const iterator in data) {
		result = `${result}&${iterator}=${data[iterator]}`
	}
	result = `${url}?${result.substr(1)}`
	return result
}
