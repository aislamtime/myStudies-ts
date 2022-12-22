export type ActionType = {
	type: string;
};

type StateType = {
	collapsed: boolean;
};

export const TOGGLE = 'TOGGLE-COLLAPSE';
export const TO_COLLAPSE = 'COLLAPSED';

export const reduser = (state: StateType, action: ActionType): StateType => {
	switch (action.type) {
		case TOGGLE:
			return {
				...state,
				collapsed: !state.collapsed,
			};
		case TO_COLLAPSE:
			return {
				...state,
				collapsed: true,
			};
		default:
			throw new Error('Bad action type');
	}
};
