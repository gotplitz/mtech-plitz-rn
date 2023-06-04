// Redux Types
import {
	CLOSE_MENU,
	OPEN_MENU,
	UPDATE_NAME,
} from '@myReduxConfiguration/types';

// TS
import { AppDispatch } from '@myReduxConfiguration/store';

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
