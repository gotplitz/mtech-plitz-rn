// Redux Types
import {
	CLOSE_LOGIN,
	CLOSE_MENU,
	OPEN_LOGIN,
	OPEN_MENU,
	UPDATE_NAME,
} from '@myReduxConf/types';

// TS
import { AppDispatch } from '@myReduxConf/store';

export const getUserInfo = () => async (dispatch: AppDispatch) => {
	try {
		const res = await fetch('https://thedavid.plitz7.com/api/users/');
		const data = await res.json();
		const finalData = {
			fullname: data[0].fullname,
			photo: `https://thedavid.plitz7.com/${data[0].photo}`,
		};

		dispatch({
			type: UPDATE_NAME,
			payload: finalData,
		});
	} catch (error) {
		console.log(error);
	}
};

export const openMenu = () => (dispatch: AppDispatch) => {
	try {
		dispatch({
			type: OPEN_MENU,
			payload: 'openMenu',
		});
	} catch (error) {
		console.log(error);
	}
};

export const closeMenu = () => (dispatch: AppDispatch) => {
	try {
		dispatch({
			type: CLOSE_MENU,
			payload: 'closeMenu',
		});
	} catch (error) {
		console.log(error);
	}
};

export const openLogin = () => (dispatch: AppDispatch) => {
	try {
		dispatch({
			type: OPEN_LOGIN,
			payload: true,
		});
	} catch (error) {
		console.log(error);
	}
};

export const closeLogin = () => (dispatch: AppDispatch) => {
	try {
		dispatch({
			type: CLOSE_LOGIN,
			payload: false,
		});
	} catch (error) {
		console.log(error);
	}
};
