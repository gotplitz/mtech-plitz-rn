// Redux Types
import { CLOSE_CARD, OPEN_CARD } from '@myReduxConf/types';

// TS
import { AppDispatch } from '@myReduxConf/store';

export const cardOpening = () => async (dispatch: AppDispatch) => {
	try {
		dispatch({
			type: OPEN_CARD,
			payload: true,
		});
	} catch (error) {
		console.log(error);
	}
};

export const cardClosing = () => (dispatch: AppDispatch) => {
	try {
		dispatch({
			type: CLOSE_CARD,
			payload: false,
		});
	} catch (error) {
		console.log(error);
	}
};
