import {
	CLOSE_MENU,
	OPEN_MENU,
	UPDATE_NAME,
} from '@myReduxConfiguration/types';

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
}

const initialState: InitialStateTypes = {
	menuToggler: '',
	userInfo: { fullname: '', photo: '' },
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
		default:
			return state;
	}
};

export default globalReducer;
