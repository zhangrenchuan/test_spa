import COMMON from './config/routes/common';
import USER from './config/routes/user';

const routes = COMMON.concat(
	USER,
);

export default routes;
