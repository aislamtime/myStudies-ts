import React, { ChangeEvent, useState } from 'react';

type InputPropsType = {
	title: string;
	change: (title: string) => void;
};

export function Input(props: InputPropsType) {
	const onChangeINputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.change(event.currentTarget.value);
	};

	return (
		<input value={props.title} onChange={onChangeINputHandler} type='text' />
	);
}
