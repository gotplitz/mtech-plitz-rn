import {
	CLEAR_DATA,
	CLOSE_LOGIN,
	CLOSE_MENU,
	OPEN_LOGIN,
	OPEN_MENU,
	UPDATE_NAME,
} from '@myReduxConf/types';

export interface ActionTypes {
	type: string;
	payload: any;
}

export interface InitialStateTypes {
	menuToggler: string;
	userInfo: {
		fullname: string;
		photo: string;
	};
	openLogin: boolean;
}

const initialState: InitialStateTypes = {
	menuToggler: '',
	userInfo: { fullname: '', photo: '' },
	openLogin: false,
};

const globalReducer = (state = initialState, action: ActionTypes) => {
	const { type, payload } = action;

	switch (type) {
		case CLOSE_MENU:
			return { ...state, menuToggler: 'closeMenu' };
		case OPEN_MENU:
			return { ...state, menuToggler: payload };
		case UPDATE_NAME:
			return { ...state, userInfo: payload };
		case CLEAR_DATA:
			return { ...state, userInfo: payload };
		case OPEN_LOGIN:
			return { ...state, openLogin: payload };
		case CLOSE_LOGIN:
			return { ...state, openLogin: payload };
		default:
			return state;
	}
};

export default globalReducer;
