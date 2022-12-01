import React from 'react';

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

type StarPropsType = {
	selected: boolean;
	value: ValueType;
	setValue: (value: ValueType) => void;
};

export const Star: React.FC<StarPropsType> = ({
	selected,
	value,
	setValue,
}) => {
	const onChangeValueHandler = () => setValue(value);

	return (
		<span onClick={onChangeValueHandler}>
			{selected ? <b> Star </b> : ' Star '}
		</span>
	);
};
