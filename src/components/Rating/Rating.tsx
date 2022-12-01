import React, { useState } from 'react';
import { Star, ValueType } from './Star/Star';

type RatingPropsType = {
	value: ValueType;
	setValue: (value: ValueType) => void;
};

export const Rating: React.FC<RatingPropsType> = ({ value, setValue }) => {
	return (
		<div>
			<Star selected={value >= 1} setValue={setValue} value={1} />
			<Star selected={value >= 2} setValue={setValue} value={2} />
			<Star selected={value >= 3} setValue={setValue} value={3} />
			<Star selected={value >= 4} setValue={setValue} value={4} />
			<Star selected={value >= 5} setValue={setValue} value={5} />
		</div>
	);
};
