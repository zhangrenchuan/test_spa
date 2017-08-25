import { ajaxGet, ajaxPost } from './../../assets/js/tools';

/**
 * @api {get} /user/list 用户列表
 * @apiName 用户列表初始化
 * @apiDescription 页面 : /user/list
 */

export function initUserlist() {
	return ajaxGet('');
}

export function addUser() {
	return ajaxPost('');
}
