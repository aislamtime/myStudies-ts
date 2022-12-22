import { reduser, TOGGLE } from './reduser';

test('collapsed should be true', () => {
	//data
	const state = {
		collapsed: false,
	};
	//action
	const newState = reduser(state, { type: TOGGLE });
	//expect
	expect(newState.collapsed).toBe(true);
});

test('collapsed should be false', () => {
	//data
	const state = {
		collapsed: true,
	};
	//action
	const newState = reduser(state, { type: TOGGLE });
	//expect
	expect(newState.collapsed).toBe(false);
});

test('reduser shoul be throw error, because action type is uncorrect', () => {
	//data
	const state = {
		collapsed: true,
	};
	//action

	//expect
	expect(() => {
		reduser(state, { type: 'FAKE_TYPE' });
	}).toThrowError();
});
