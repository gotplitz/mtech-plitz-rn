import { CLOSE_CARD, OPEN_CARD } from '@myReduxConf/types';

export interface ActionTypes {
	type: string;
	payload: any;
}

export interface InitialStateTypes {
	toggleCard: boolean;
}

const initialState: InitialStateTypes = {
	toggleCard: false,
};

const projectsReducer = (state = initialState, action: ActionTypes) => {
	const { type, payload } = action;

	switch (type) {
		case OPEN_CARD:
			return { ...state, toggleCard: payload };
		case CLOSE_CARD:
			return { ...state, toggleCard: payload };
		default:
			return state;
	}
};

export default projectsReducer;
